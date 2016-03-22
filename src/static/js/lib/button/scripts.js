$(function(){

	$('.btn-single').button({
    onActivate: function () {
      console.log('on activate callback');
    },
    onDeactivate: function () {
      console.log('on deactivate callback');
    }
  });

  $('#deactivate-btn-single').on('click', function(){
    $('.btn-single').button('deactivate');
    return false;
  });

  $('#activate-btn-single').on('click', function(){
    $('.btn-single').button('activate');
    return false;
  });

  $('#toggle-btn-single').on('click', function(){
    $('.btn-single').button('toggle');
    return false;
  });

  $('#disable-btn-single').on('click', function(){
    $('.btn-single').button('disable');
    return false;
  });

  $('#enable-btn-single').on('click', function(){
    $('.btn-single').button('enable');
    return false;
  });

  $('.btn-unique').button({
    onActivate: function () {
      console.log('on activate callback');
    },
    onDeactivate: function () {
      console.log('on deactivate callback');
    }
  });

  $('.btn-multiple').button({
    onActivate: function () {
      console.log('on activate callback');
    },
    onDeactivate: function () {
      console.log('on deactive callback');
    }
  });
  
});
