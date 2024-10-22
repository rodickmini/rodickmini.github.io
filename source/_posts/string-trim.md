---
title: JS去除字符串前后的空格
date: 2016-11-16 14:00
tags: tech
---

在很多场景中，会遇到“把一个字符串前后的空格去掉”的需求，例如提交表单时。

主流浏览器都有`String.prototype.trim`方法，IE 9 及以上也有。如果要手工实现一个，可以使用正则表达式。

## 去除两端空格

```javascript
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}
```

## 去除左侧空格

```javascript
function trimLeft(str) {
  return str.replace(/^\s*/g, '');
}
```

## 去除右侧空格

```javascript
function trimRight(str) {
  return str.replace(/\s*$/g, '');
}
```