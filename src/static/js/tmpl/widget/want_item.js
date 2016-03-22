define(function() {
var _ = {};
var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;'
};
var escapeRegexp = new RegExp('[' + Object.keys(escapeMap).join('') + ']', 'g');
_.escape = function(string) {
    if (!string) return '';
    return String(string).replace(escapeRegexp, function(match) {
        return escapeMap[match];
    });
};
return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<section class="product-list want-wrapper">\n    <div class="header clearfix">\n        <a class="user">\n            <img class="lazyload" src="/static/images/holder.png" data-src="' +
((__t = ( data.avatar )) == null ? '' : __t) +
'"/>\n            ';
if (data.verified_reason) {;
__p += '\n                <s class="verified ilbk"></s>\n            ';
};
__p += '\n            <span class="ilbk line-clamp">' +
((__t = ( data.uname)) == null ? '' : __t) +
'</span>\n        </a>\n    </div>\n    <a class="item" href="/product/detail?pid=' +
((__t = ( data.pid)) == null ? '' : __t) +
'&hiddennavbar=yes">\n        <img class="lazyload" src="/static/images/holder.png" data-src="' +
((__t = ( data.pic_cover)) == null ? '' : __t) +
'-sectrade.r320"/>\n    </a>\n    ';
if (data.today_update) {;
__p += '\n        <div class="today"></div>\n    ';
};
__p += '\n    <h1 class="name">\n        <div class="title line-clamp">' +
((__t = ( data.title)) == null ? '' : __t) +
'</div>\n        ';
if (data.status == 3) {;
__p += '\n            <span class="money soldout">已售出</span>\n        ';
} else {;
__p += '\n            <div>\n                <span class="money">￥' +
((__t = ( data.price)) == null ? '' : __t) +
'</span>\n                <span class="reference_price ilbk">参考价￥' +
((__t = ( data.reference_price)) == null ? '' : __t) +
'</span>\n            </div>\n        ';
};
__p += '\n    </h1>\n    \n</section>';

}
return __p
}});