define(function(require) {
  var itemTmpl;
  require("lib/jquery/dist/jquery");
  require("lib/underscore/underscore");
  itemTmpl = require("tmpl/widget/want_item");
  return function() {
    var Page, page;
    Page = (function() {
      function Page() {
        $.ajax({
          url: "/product/lists"
        }).done(function(r) {
          var data, photosHtml, unveil;
          data = r.tplData.data;
          photosHtml = '';
          _.each(data, function(item) {
            return photosHtml += itemTmpl({
              data: item
            });
          });
          $("#nice-container").append(photosHtml);
          return unveil = require("lib/jquery-unveil/jquery.unveil");
        });
      }

      return Page;

    })();
    return page = new Page();
  };
});
