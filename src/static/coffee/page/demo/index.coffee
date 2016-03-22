define (require) ->

    require "lib/jquery/dist/jquery"
    require "lib/underscore/underscore"
    itemTmpl = require "tmpl/widget/want_item"
    return ->

        class Page
            constructor: ->
                $.ajax({
                    url: "/product/lists"
                }).done (r)->
                    data = r.tplData.data
                    photosHtml = ''
                    _.each data, (item) ->
                        photosHtml += itemTmpl(
                            data: item
                        )
                    $("#nice-container").append photosHtml
                    unveil = require "lib/jquery-unveil/jquery.unveil"
                    # $('.lazyload').unveil(0)

        page = new Page()