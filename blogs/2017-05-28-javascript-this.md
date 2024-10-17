# javascript this 详解

Date: 2017-05-28

*全局作用域中的this永远为global对象，在浏览器环境下即为window对象。*

函数中的this根据函数的不同调用方式分下列4中情况：

## 1、直接调用（Function Invocation Pattern）

例如：

```javascript
function foo () {
  console.log(this)
}
foo() // 输出：window

```

注意，此时的 `foo` 是作为单独的变量出现的，而不是对象的属性。

在这种模式下，函数中的this永远是global对象，在浏览器环境下即window对象。

## 2、作为方法调用（Method Invocation Pattern）

示例：

```javascript
var obj = {
  name: 'papi',
  say: function () {
    console.log(this)
  }
}

obj.say() // 输出：obj
```

这种情况下函数作为对象的属性被调用，就必然会运用到 `.` 操作符或者 `[]`操作符，这种情况下，函数中的 `this` 等于 `.` 或 `[` 前面的那个对象，上面的例子中即为obj。 `obj['say']()` 这种调用方式输出的 `this` 也是 obj。

看下面一个例子：

```javascript
var length = 100
    
function func () {
  console.log(this.length)
}

var o = {
  length: 10,
  add: function (func) {
    func()
    arguments[0]()
  }
}
o.add(func)
```

执行 `o.add` 方法并把全局变量 `func` 作为参数传入。

在 `add` 方法内部执行传进来的 `func` 函数，这种调用属于函数直接调用，是上述第1种情况，因此函数中的 `this` 指向 `window`，`window.length`即全局变量 `length`，值为100。

`arguments[0]()` 这一条语句是取到了函数的第一个参数（显然是 `func` 函数）并执行，这种调用方式等效于 `func()` 这种调用方式？答案是否定的！众所周知，函数中的 `arguments` 是一个类数组对象，它具有 `length` 属性，其值为参数的个数，上例中只传入了一个参数，因此 `arguments.length === 1`，深入 `arguments` 对象，展开大体是以下结构：

```javascript
{
  0: function func () {},
  'length': 1
}
```

因此，`arguments[0]()` 这种调用方式其实是调用了arguments对象的 `0` 方法！而这个所谓的 `0` 方法从何而来呢？就是通过将 `func` 函数复制给它得来的。因此，方法中的 `this` 应该指向 `arguments` 对象，因此输出 1。

如果执行 `o.add(func, 'hahaha')` 呢？没错，输出2，因为此时 `arguments.length === 2`。

## 3、作为构造函数调用（Constructor Pattern）

在 `new Foo()` 这种调用方式下，`Foo` 内部的 `this` 永远指向 `new` 操作符返回的对象

```javascript
function Book (name) {
  this.name = name
  
  console.log(this)
}

var book = new Book('百年孤独') // 输出 {name: '百年孤独'}
```

## 4、apply调用（Apply Pattern）

```javascript
function speak() {
  console.log(this)
}

var mao = {
  name: 'mao'
}

speak.call(mao)       // 输出 {name: 'mao'}
speak.apply(mao)      // 输出 {name: 'mao'}
speak.bind(mao)()     // 输出 {name: 'mao'}
speak.call()          // 输出 window
speak.call(null)      // 输出 window
speak.call(undefined) // 输出 window
```

函数的 `call`、 `apply` 、 `bind` 方法的第一个参数就是指定函数中 `this` 值的，如果不传参或传入 `null` 或 `undefined` 则将函数中的 `this` 指向global，在浏览器环境下即为 window对象。

## 5、ES6箭头函数中的this

ES6的箭头函数中的 `this` 与ES5中的 `this` 行为不一样，箭头函数中的 `this` 值是在函数定义时就决定的，它不会随着运行时的上下文不同发生改变。

例如：

```javascript
function printThis() {
  let print = function () {
    console.log(this)
  }
  print()
}

printThis.call([1])
printThis.call([2])

```
根据第一种情形，上述代码两次调用均输出 `window`，如果把 `print` 函数定义为箭头函数，则 `print` 函数内部的 `this` 值会在定义 `print` 函数时决定，示例如下：

```javascript
function printThis() {
  let print = () => {
    console.log(this)
  }
  print()
}

printThis.call([1]) // [1]

```

上例中， `printThis.call([1])` 调用 `printThis` 函数时将其内部的 `this` 值设为 `[1]`。

在 `printThis` 函数内部定义了一个箭头函数 `print`，箭头函数中的 `this`，就是其外层函数 `printThis` 的 `this`，也就是 `[1]`。

随后， `print()` 语句执行刚刚定义的函数，因此输出 `[1]`。

## 总结

弄清楚以上5种JS函数的调用方式，函数中 `this` 的指向就很清楚了。

**--END--**