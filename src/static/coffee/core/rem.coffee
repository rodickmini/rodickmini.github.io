((win) ->
    doc = document.documentElement
    timer = null

    updrem = ->
        win.rem = doc.getBoundingClientRect().width / 26.666666666666668

        if doc.getBoundingClientRect().width >= 320
            doc.style.fontSize = win.rem + 'px'

    win.addEventListener 'resize', ->
        clearTimeout timer
        timer = setTimeout updrem, 100

    updrem()
) window