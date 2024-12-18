---
title: typeof操作符
date: 2016-11-22 14:00
tags: tech
---

> JS中，typeof操作符返回一个字符串，表明typeof 后面操作数的类型

```javascript
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写
typeof Number(1) === 'number'; // 但不要使用这种形式!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof总是返回一个字符串
typeof String("abc") === 'string'; // 但不要使用这种形式!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 但不要使用这种形式!

// Functions
typeof eval === 'function';
typeof Math.floor === 'function';

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 

// Objects
typeof {a:1} === 'object';

// 区分数组,普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
```

用typeof Array 返回的类型是`object`，那么怎样区分数组和对象呢？

## 区分数组和对象

可以使用`Object.prototype.toString`方法。ECMA-262标准中，该方法的执行逻辑是：

1. Get the [[Class]] property of this object.
2. Compute a string value by concatenating the three strings “[object “, Result (1), and “]”. 
3. Return Result (2)

而ECMA-262标准中对Array的描述如下：

1. new Array([ item0[, item1 [,…]]]) 
2. The [[Class]] property of the newly constructed object is set to “Array”. 

所以，当我们在一个数组上使用call调用`Object.prototype.toString`方法时，可以取到该数组的内部属性Class为“Array”。所以，判断一个JS对象是否为数组的逻辑如下：

```javascript
function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]';
}
```
测试如下：

```javascript
// 下面的函数调用都返回 true
isArray([]);
isArray([1]);
isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
isArray(Array.prototype); 

// 下面的函数调用都返回 false
isArray();
isArray({});
isArray(null);
isArray(undefined);
isArray(17);
isArray('Array');
isArray(true);
isArray(false);
```

## Reference

1. [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)
2. [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
3. [http://www.cnblogs.com/YaoAzhen/archive/2010/01/27/1657696.html](http://www.cnblogs.com/YaoAzhen/archive/2010/01/27/1657696.html)

**--END--**