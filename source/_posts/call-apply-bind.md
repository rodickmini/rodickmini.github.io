---
title: call apply bind简析
date: 2016-11-17 14:00
tags:
- tech
---

## Function.prototype.call()

> `call()`方法可以**指定this值**，传入若干参数，调用该函数（方法）

### 语法

> fun.call(thisArg[, arg1[, arg2[, ...]]])

### 作用

#### 使用call方法调用函数并指定`this`

```javascript
function speak(when, msg) {
  console.log(this.title + " " + this.name + " 在 " + when + " 说了： " + msg)
}
var mao = {
  title: "主席",
  name: "毛泽东"
}
speak.call(mao, "1949年10月1日", "中华人民共和国中央人民政府今天成立啦！")
//主席 毛泽东 在 1949年10月1日 说了： 中华人民共和国中央人民政府今天成立啦！

var kiang = {
  title: "校长",
  name: "蒋老师"
}
speak.call(kiang, "1948年底", "娘希匹！")
//校长 蒋老师 在 1948年底 说了： 娘希匹！
```

#### 使用call方法实现继承

```javascript
function Product(name, price) {
  this.name = name
  this.price = price
  if(price < 0) {
    throw RangeError('Cannot create product ' + name + ' with a negative price')
  }
}
function Clothes(name, price) {
  Product.call(this, name, price)
  this.category = 'clothes'
}
function Computer(name, price) {
  Product.call(this, name, price)
  this.category = 'computer'
}

var clothes = new Clothes('机车皮衣', 5888)
var computer = new Computer('Macbook', 9998)
```

## Function.prototype.apply()

> `apply()`和`call()`方法作用相同，只是参数传递方式不同

### 语法

> fun.apply(thisArg[, argsArray])

### 用法

还是以上述`speak()`函数举例，如果使用`apply()`方法，调用方式应该是：

```javascript
speak.apply(mao, ["1949年10月1日", "中华人民共和国中央人民政府今天成立啦！"])
```

## Function.prototype.bind()

> `bind()`函数执行后会**返回一个函数**，`bind()`函数接受的参数列表和`call()`函数相同，第一个参数的作用也是传递this值，剩下的参数则会传递给原函数

### 语法

> fun.bind(thisArg[, arg1[, arg2[, ...]]])

### 返回值

返回由指定的this值和初始化参数改造的**原函数拷贝**

### 描述

bind() 函数会创建一个新函数（称为**绑定函数**），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的call属性）。当目标函数被调用时 this 值绑定到 bind() 的第一个参数，该参数不能被重写。绑定函数被调用时，bind() 也接受预设的参数提供给原函数。一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数（即**绑定函数**）。

### 用法

上面的`speak()`函数，如果用`bind`调用，写法如下：

```javascript
speak.bind(mao)("1949年10月1日", "中华人民共和国中央人民政府今天成立啦！")

//or

speak.bind(mao, "1949年10月1日", "中华人民共和国中央人民政府今天成立啦！")()
```
*注意！上面的第二种写法最后的`()`不能忽略哦~因为调用`Function.prototype.bind`只是返回了一个函数（其实就是个闭包），必须接上`()`操作符才能**执行**这个函数！*


#### 偏函数（Partial Function）

注意到，如果`bind()`函数只接受一个参数，那么他的作用其实正如`bind`这个词的意思：**绑定**，也就是说将这个函数“绑定”到这个参数对象本身，并返回一个新的函数。那么从此以后，这个新的函数体内的`this`就永远指向了传入的这个参数对象了。

而`bind()`函数接受其它参数的作用是：可以预设函数的某些参数。比如，如果有现在有个打log的函数，像下面这样：

```javascript
function logger() {
  console.log(Array.prototype.slice.call(arguments).join(" "))
}
```

显然，这个函数的作用是接受多个参数，并且把参数用空格连接起来（仿佛没啥鸟用(⊙o⊙)…）

调用这个函数的方法如下：

```javascript
logger("ERROR:", "错啦！", "检查一下第5行，你输入了一个非法字符！")
//ERROR: 错啦！ 检查一下第5行，你输入了一个非法字符！
logger("WARN:", "注意变量提升的风险哦~")
//WARN: 注意变量提升的风险哦~
logger("SUCCESS")
//SUCCESS
```

现在如果需要封装一个errorLog方法，默认以`ERROR:`开头，后面跟上错误信息和错误跟踪；要封装一个warnLog方法，以`WARN:`开头，后面跟上告警提示；要封装一个successLog，输出`SUCCESS`就好~怎么做呢？这里就可以使用logger函数的bind方法，并且传入一个固定参数，限定log的类别：

```javascript
var errorLog = logger.bind(undefined, "ERROR:")
errorLog("错啦！", "检查一下第5行，你输入了一个非法字符！")
var warnLog = logger.bind(undefined, "WARN:")
warnLog("注意变量提升的风险哦~")
var successLog = logger.bind(undefined, "SUCESS")
successLog()
```

#### 使用apply实现一个类似于bind的`xxx`函数

```javascript
Function.prototype.xxx = function(obj) {
  var thisFunc = this
  return function() {
    return thisFunc.apply(obj, arguments)
  }
}
speak.xxx(mao)("1949年10月1日", "中华人民共和国中央人民政府今天成立啦！")
```

上面的代码只能通过`speak.xxx(mao)("1949年10月1日", "中华人民共和国中央人民政府今天成立啦！")`这种方式调用，如果通过`speak.xxx(mao, "1949年10月1日", "中华人民共和国中央人民政府今天成立啦！")()`这种方式调用则会出错，怎么改进呢？

```javascript
Function.prototype.xxx = function (oThis) {
  var aArgs = Array.prototype.slice.call(arguments, 1)//aArgs即去除了对象的参数数组
  var fToBind = this
  var fBound = function () {
    return fToBind.apply(oThis, aArgs.concat(Array.prototype.slice.call(arguments)))
  }
  return fBound
}
speak.xxx(mao)("1949年10月1日", "中华人民共和国中央人民政府今天成立啦！")
speak.xxx(mao, "1949年10月1日", "中华人民共和国中央人民政府今天成立啦！")()
```

严谨的`bind()`函数实现，还加入了其它的检验，水平有限没能搞透，日后再更~

END