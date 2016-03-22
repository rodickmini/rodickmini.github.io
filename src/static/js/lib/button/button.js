// TODO: 
// * Hacer que los radiobutton tambien escuchen eventos y puedan
// * y puedan actualizar el estado del botón si es que son "checados" dinámicamente

;(function ($, undefined) {

  var pluginName = 'button';
  var storageName = 'plugin_' + pluginName;
  var defaults = {
    activeClass: 'active',
    disableClass: 'disabled',
    behaviour: 'single',
    beforeActivate: function () {},
    onActivate: function () {},
    onDeactivate: function () {}
  };

  // Constructor
  var Button = function (element, options) {
    
    var self = this;

    self.$element = $(element);
    self.$elementData = self.$element.data('button');
    self.$group = self.$elementData ? $(self.$elementData.group) : [];
    self.$options = $.extend({}, defaults, options);
    self.init();

    // function option (key, val){
    //   if (val) {
    //     self.$options[key] = val;
    //   } else if(self.$options[key]) {
    //     return self.$options[key];
    //   }else if(self[key]){
    //     // Solo lectura
    //     return self[key];
    //   }
    // }
  };

  Button.prototype = {
    init: function () {
      this.setBindings();
    },
    setBindings: function () {

      var self = this;

      this.$element.on('click.' + pluginName, function (e) {
        e.preventDefault();
        self.click();
      });

      this.$element.on('activate.' + pluginName, function (e) {
        e.preventDefault();
        self.activate();
      });

      this.$element.on('deactivate.' + pluginName, function (e) {
        e.preventDefault();
        self.deactivate();
      });

    },
    click: function () {

      var pluginInstance = (this instanceof Button) ? this : $(this).data(storageName);
      var thisInstance = (this instanceof HTMLElement) ? $(this) : this.$element;

      if(thisInstance.data('status') === 'disabled') return;

      var $elementData = pluginInstance.$element.data('button');
      var behaviour = ($elementData && $elementData.behaviour) ? $elementData.behaviour : 'single';


      switch(behaviour) {
        case 'radiobutton':
          console.log('radiobutton case');

          // Deseleccionamos todos los demás radiobutton del grupo
          $($elementData.group).not(this.$element).trigger('deactivate.'+pluginName);

          // Activamos al que se le hizo click
          pluginInstance.$element.trigger('activate');
          break;
        case 'checkbox':
        case 'single':
          console.log('checkbox case');
          if(pluginInstance.isActive()){
            console.log('trigger: Deactivate');
            pluginInstance.$element.trigger('deactivate.'+pluginName);
          }else{
            console.log('trigger: Activate');
            pluginInstance.$element.trigger('activate');
          }
          break;
      }
    },
    isActive: function () {
      return this.$element.hasClass(this.$options.activeClass);
    },
    activate: function () {

      var pluginInstance = (this instanceof Button) ? this : $(this).data(storageName);
      var thisInstance = (this instanceof HTMLElement) ? $(this) : this.$element;

      if(thisInstance.data('status') === 'disabled') return;

      console.log('Activate method');

      // Ejecutamos before activate
      pluginInstance.$options.beforeActivate.call(this);

      var $elementData = pluginInstance.$element.data('button');
      var behaviour = ($elementData && $elementData.behaviour) ? $elementData.behaviour : 'single';

      // Manejamos los input relacionados
      if( behaviour == 'radiobutton' ){

        // Seleccionamos el radio button correspondiente
        $($elementData.input).removeAttr('checked');
        $($elementData.input + '[value="' + $elementData.value + '"]').prop({
          'checked': true
        });

        // Quitamos clase de estado para los demás elementos del grupo
        // Note: Quizá debería ser más específico el selector aquí y no
        // quitar la clase para el elemento actual
        // OJO: No tocamos los elementos deshabilitados
        pluginInstance.$group.not('.disabled').removeClass(pluginInstance.$options.activeClass);
        
        // Lo mismo para el grupo, quitamos la data de activo
        pluginInstance.$group.not('.disabled').removeData('status');

      }else if( behaviour == 'checkbox'  ){

        // Checkbox
        $($elementData.input + '[value="' + $elementData.value + '"]').prop({
          'checked': true
        });
      }


      // Añadimos clase para estado
      pluginInstance.$element.addClass(pluginInstance.$options.activeClass);

      // Añadimos estado al elemento
      thisInstance.data('status', 'active');

      // Ejecutamos callback
      pluginInstance.$options.onActivate.call(pluginInstance);
    },
    deactivate: function () {

      var pluginInstance = (this instanceof Button) ? this : $(this).data(storageName);
      var thisInstance = (this instanceof HTMLElement) ? $(this) : this.$element;

      if(thisInstance.data('status') === 'disabled') return;

      console.log('Deactivate method');

      var $elementData = pluginInstance.$element.data('button');
      var behaviour = ($elementData && $elementData.behaviour) ? $elementData.behaviour : 'single';

      if( behaviour == 'radiobutton' ){
        $($elementData.input + '[value="' + $elementData.value + '"]').removeAttr('checked');
      }else if(  behaviour == 'checkbox' ){
        // Quitamos check
        $($elementData.input + '[value="' + $elementData.value + '"]').prop({
          checked: false
        });
      }

      // Quitamos clase de estado
      pluginInstance.$element.removeClass(pluginInstance.$options.activeClass);

      // Añadimos estado al elemento
      thisInstance.data('status', 'default');

      // Ejecutamos callback
      pluginInstance.$options.onDeactivate.call(pluginInstance);
    },
    toggle: function(){

      var pluginInstance = (this instanceof Button) ? this : $(this).data(storageName);
      var thisInstance = (this instanceof HTMLElement) ? $(this) : this.$element;

      if(thisInstance.data('status') === 'disabled') return;

      if(pluginInstance.isActive()){
        pluginInstance.deactivate();
      }else{
        pluginInstance.activate();
      }

    },
    disable: function(){
      console.log('Disable method');

      var pluginInstance = (this instanceof Button) ? this : $(this).data(storageName);
      var thisInstance = (this instanceof HTMLElement) ? $(this) : this.$element;

      // Añadimos clase de estado
      pluginInstance.$element.addClass(pluginInstance.$options.disableClass);

      thisInstance.data('status', 'disabled');

    },
    enable: function(){
      console.log('Enable method');

      var pluginInstance = (this instanceof Button) ? this : $(this).data(storageName);
      var thisInstance = (this instanceof HTMLElement) ? $(this) : this.$element;

      // Añadimos clase de estado
      pluginInstance.$element.removeClass(pluginInstance.$options.disableClass);

      thisInstance.removeData('status');
    }

  }

  $.fn[pluginName] = function (options) {

    // Plugin definition based on
    // http://f6design.com/journal/2012/05/06/a-jquery-plugin-boilerplate/
    // If the first parameter is a string, treat this as a call to
    // a public method.
    if (typeof arguments[0] === 'string') {
      var methodName = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1);
      var returnVal;
      this.each(function () {
        // Check that the element has a plugin instance, and that
        // the requested public method exists.
        if ($.data(this, storageName) && typeof $.data(this, storageName)[methodName] === 'function') {
          // Call the method of the Plugin instance, and Pass it
          // the supplied arguments.
          returnVal = $.data(this, storageName)[methodName].apply(this, args);
        } else {
          throw new Error('Method ' + methodName + ' does not exist on jQuery.' + pluginName);
        }
      });
      if (returnVal !== undefined) {
        // If the method returned a value, return the value.
        return returnVal;
      } else {
        // Otherwise, returning 'this' preserves chainability.
        return this;
      }
      // If the first parameter is an object (options), or was omitted,
      // instantiate a new instance of the plugin.
    } else if (typeof options === "object" || !options) {
      return this.each(function () {
        // Only allow the plugin to be instantiated once.
        if (!$.data(this, storageName)) {
          // Pass options to Plugin constructor, and store Plugin
          // instance in the elements jQuery data object.
          $.data(this, storageName, new Button(this, options));
        }
      });
    }
  };
  
})(jQuery);
