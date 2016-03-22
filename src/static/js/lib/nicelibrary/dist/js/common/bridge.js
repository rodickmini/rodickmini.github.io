/**
 * oneniceapp - nice-fe-library
 * @version v0.0.1
 * @author nice-fe
 */
 (function(root, factory) {
  if (typeof exports === 'object') {
    return module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    return define(factory);
  } else {
    return root.hybridBridge = factory();
  }
})(this, function() {
  var bridge, ua, utils, webviewBridgeInit;
  ua = navigator.userAgent;
  webviewBridgeInit = null;
  utils = {
    extend: function(src, newObj) {
      var pro, val;
      for (pro in newObj) {
        val = newObj[pro];
        src[pro] = val;
      }
      return src;
    },
    param: function(json) {
      var arr, pro, val;
      arr = [];
      for (pro in json) {
        val = json[pro];
        arr.push((encodeURIComponent(pro)) + "=" + (encodeURIComponent(val)));
      }
      return arr.join('&');
    },
    connectBridge: function(callback) {
      var call;
      if (!webviewBridgeInit && this.platform.ios) {
        call = (function(_this) {
          return function() {
            window.niceBridge = window.WebViewJavascriptBridge;
            if (!webviewBridgeInit) {
              niceBridge.init();
              webviewBridgeInit = true;
            }
            if (callback) {
              callback();
            }
          };
        })(this);
        if (window.WebViewJavascriptBridge) {
          call();
        } else {
          document.addEventListener("WebViewJavascriptBridgeReady", function() {
            return call();
          }, false);
        }
      } else {
        if (callback) {
          callback();
        }
      }
    },
    scheme: {
      android: 'http://127.0.0.1:4545/',
      ios: 'nice://',
      iosOpenWeb: 'nice://openweb',
      androidOpenWeb: 'http://127.0.0.1:4545/openweb'
    },
    platform: {
      android: ua.match(/(Android);?[\s\/]+([\d.]+)?/),
      ios: ua.match(/(iPhone\sOS)\s([\d_]+)/) || ua.match(/(iPad).*OS\s([\d_]+)/),
      isWeixin: /MicroMessenger/g.test(ua),
      isQQ: /QQ\//.test(ua),
      isWeibo: /Weibo/.test(ua),
      isNewsApp: /NewsApp/.test(ua),
      isNiceBrowser: /NiceBrowser/g.test(ua),
      isSafari: /Safari/gi.test(navigator.appVersion),
      isQQBrowser: /MQQBrowser|CriOS/.test(ua),
      isBaidu: /baidubrowser/.test(ua),
      isUC: /UCBrowser/.test(ua)
    }
  };
  bridge = {
    invokeApp: function(options) {
      var t;
      t = +new Date();
      return utils.connectBridge((function(_this) {
        return function() {
          var defaults, opts;
          defaults = {
            action: "",
            params: {},
            callback: "invokeCallback" + t,
            success: function(data) {}
          };
          opts = utils.extend(defaults, options);
          window[opts.callback] = function(str) {
            opts.success(JSON.parse(str));
            return delete window[opts.callback];
          };
          if (utils.platform.android) {
            window.nice.invoke(JSON.stringify(opts));
          } else {
            niceBridge.registerHandler(opts.callback, opts.success);
            niceBridge.callHandler('invoke', opts);
          }
        };
      })(this));
    },
    invokeWeb: function(options) {
      var defaults;
      return defaults = {
        action: '',
        params: {}
      };
    },
    system: {
      share: function(options) {
        return utils.connectBridge((function(_this) {
          return function() {
            var defaults, opts;
            defaults = {
              name: "timeline, friend, qq, qzone, weibo",
              title: "nice分享标题",
              description: "nice分享描述",
              url: "http://m.oneniceapp.com",
              icon: 'http://img01.oneniceapp.com/images/icon_logo_180x180.png',
              share_id: 0,
              callback: 'shareCallback',
              success: function() {}
            };
            opts = utils.extend(defaults, options);
            window[opts.callback] = function(str) {
              opts.success(JSON.parse(str));
              return delete window[opts.callback];
            };
            if (utils.platform.android) {
              window.nice.shareTo(JSON.stringify(opts));
            } else {
              niceBridge.registerHandler('shareCallback', opts.success);
              niceBridge.callHandler("shareCallback", opts, function() {});
            }
          };
        })(this));
      },
      saveImage: function(url, callback) {
        console.log(url);
        if (callback) {
          return callback();
        }
      },
      getGPSInfo: function() {},
      getnetworkInfo: function() {},
      networkTypeChanged: function() {},
      getClipboard: function() {},
      setClipboard: function() {},
      clearCache: function() {},
      scanQRcode: function() {},
      upload: function() {},
      pay: function(options) {
        var defaults, opts;
        defaults = {
          platform: 'wechat',
          request: {},
          extra: "extra",
          callbackId: "paycallback",
          success: function() {}
        };
        opts = utils.extend(defaults, options);
        opts.request = JSON.stringify(opts.request);
        window[opts.callbackId] = function(platform, request, result, extra) {
          opts.success(platform, request, result, extra);
          return delete window[opts.callbackId];
        };
        return utils.connectBridge((function(_this) {
          return function() {
            if (utils.platform.android) {
              return window.nice.pay(opts.platform, options.request, opts.extra, opts.callbackId);
            } else {
              return niceBridge.callHandler("pay", opts);
            }
          };
        })(this));
      },
      version: ua.match(/NiceBrowser\/(\d.+)/) ? ua.match(/NiceBrowser\/(\d.+)/)[1] : '',
      shake: function() {},
      shakeStop: function() {},
      blow: function() {},
      blowStop: function() {},
      openImage: function() {},
      pickContact: function() {}
    },
    window: {
      push: function() {},
      pop: function() {},
      openUrl: function(options) {
        var defaults;
        return defaults = {
          url: '',
          title: ''
        };
      }
    },
    headerBar: {
      setTitle: function(str) {
        return utils.connectBridge((function(_this) {
          return function() {
            if (utils.platform.android) {
              return window.nice.setTitle(str);
            } else {
              return niceBridge.callHandler("setTitle", str);
            }
          };
        })(this));
      },
      show: function() {},
      hide: function() {},
      setLeftBtn: function(str, callback) {},
      setRightBtn: function(str, callback) {},
      hideRightBtn: function() {
        return utils.connectBridge((function(_this) {
          return function() {
            if (utils.platform.android) {
              return window.nice.hideShareButton();
            } else {
              return niceBridge.callHandler('hideShareButton');
            }
          };
        })(this));
      },
      showRightBtn: function() {
        return utils.connectBridge((function(_this) {
          return function() {
            if (utils.platform.android) {
              return window.nice.showShareButton();
            } else {
              return niceBridge.callHandler('showShareButton');
            }
          };
        })(this));
      }
    },
    notification: {
      set: function(str) {},
      show: function() {},
      hide: function() {}
    },
    openAppPage: function(path, params) {
      var iframe;
      if (utils.platform.ios) {
        return window.location.href = "" + utils.scheme.ios + path + "?" + (utils.param(params));
      } else {
        if (utils.platform.isNiceBrowser) {
          return window.nice.openUrl("http://www.oneniceapp.com/" + path + "?" + (utils.param(params)));
        } else {
          iframe = document.createElement('iframe');
          iframe.onload = function() {
            return iframe.remove();
          };
          iframe.src = utils.scheme.androidOpenWeb + "?url=" + (encodeURIComponent('http://www.oneniceapp.com/' + path + '?' + $.param(params)));
          return document.body.appendChild(iframe);
        }
      }
    }
  };
  return bridge;
});
