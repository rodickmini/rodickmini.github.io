---
title: Javascript Array-like objects
date: 2016-11-22 14:00
tags: tech
---

JS中有一些对象看起来像数组，但其实不是数组，它们被称为“类似数组的对象”（array-like objects）。这篇文章将介绍什么样的对象是array-like object（为了简单，下文简称ALO）的；平时开发中，遇到ALO应该怎么处理。

## 定义（特征）

ALO的定义或者说“特征”是什么呢？

- 能够通过下标的方式访问对象中的元素
- 具备非负 Number 类型的`length`属性，标识对象中有几个元素
- 不具备“标准数组对象”的内置方法，例如`push`、`forEach`、`indexOf`等

常见的ALO主要有：函数中的`arguments`、`String`对象、`document.getElementsByClassName`函数的返回值等等~

## 数组中的通用方法（generic methods）

数组中内置了很多方法，例如`push`、`forEach`等等，这些方法内部的`this`对象可以不是一个数组，只需要是一个ALO，数组中的这类方法叫做“通用方法”。

### 例1：forEach

```javascript
function printArgs() {
  Array.prototype.forEach.call(arguments, function(item, index) {
    console.log(index + ". " + item);
  })
}

printArgs("哈哈", "嘿嘿", "呵呵")
```

上面的代码对函数的`arguments`对象直接使用了`Array.prototype.forEach`通用方法，打印出了arguments的下标和值。

### 例2：push

对普通对象使用`Array.prototype.push`会发生什么呢？

```javascript
var books = {};

Array.prototype.push.call(books, "javascript权威指南", "CSS权威指南");

console.log(books);
```
输出：

```javascript
Object {0: "javascript权威指南", 1: "CSS权威指南", length: 2}
```

这个时候，`books`就变成了一个ALO

## 将ALO转化成数组

在很多时候，需要将ALO转化成真正的数组，这样就可以对它使用数组内置的方法。转化方法也很简单（拿arguments举例）：

```javascript
Array.prototype.slice.call(arguments);
//or
[].slice.call(arguments);
```
但是由于 IE 下 Array.prototype.slice.call(nodes) 会抛出错误（because a DOM NodeList is not a JavaScript object），所以兼容写法如下：

```javascript
function ALO2Arr(ALO) {
  try{
  return [].slice.call(ALO);
  }catch(e) {
  var len = ALO.length, arr = [];
  for(var i = 0; i < len; i++) {
    arr.push(ALO[i]);
  }
  }
}
```

**注意：如果要把函数的arguments对象转化成数组，最好不要直接在函数中使用arguments对象，因为这将[导致Chrome和Node中使用的V8引擎跳过对其的优化](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)**

## 参考

- [https://github.com/hanzichi/underscore-analysis/issues/14](https://github.com/hanzichi/underscore-analysis/issues/14)
- [https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)
- [http://www.2ality.com/2013/05/quirk-array-like-objects.html](http://www.2ality.com/2013/05/quirk-array-like-objects.html)

**--END--**