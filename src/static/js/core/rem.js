(function(win) {
  var doc, timer, updrem;
  doc = document.documentElement;
  timer = null;
  updrem = function() {
    win.rem = doc.getBoundingClientRect().width / 26.666666666666668;
    if (doc.getBoundingClientRect().width >= 320) {
      return doc.style.fontSize = win.rem + 'px';
    }
  };
  win.addEventListener('resize', function() {
    clearTimeout(timer);
    return timer = setTimeout(updrem, 100);
  });
  return updrem();
})(window);
