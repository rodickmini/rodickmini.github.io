---
title: 左右定宽中间自适应3栏布局
date: 2016-11-18 14:00
tags: tech
---

> 总结了4种“左右固定中间自适应的3栏布局”，强烈参考了张鑫旭的[博客](http://www.zhangxinxu.com/wordpress/2009/11/%E6%88%91%E7%86%9F%E7%9F%A5%E7%9A%84%E4%B8%89%E7%A7%8D%E4%B8%89%E6%A0%8F%E7%BD%91%E9%A1%B5%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80%E6%96%B9%E6%B3%95/)

## 1.左侧左浮动，右侧右浮动

> 左侧左浮动，右侧右浮动，中间div设置左右margin、宽度自适应，中间一栏必须放在最后

```html
<style>
  html, body {margin: 0; padding: 0; height: 100%;}
  .col {width: 200px; height: 100%;}
  .left.col {float: left; background-color: #03A9F4;}
  .right.col {float: right; background-color: #F44336;}
  .mid {margin: 0 210px; height: 100%; background-color: #eee;}
</style>

<body>
  <div class="right col"></div>
  <div class="left col"></div>
  <div class="mid"></div>
</body>
```

## 2.左右绝对定位

> 左右绝对定位，中间栏设置左右margin，左中右三栏顺序随意排列都可以

```html
<style>
  html, body {margin: 0; height: 100%;}
  .col {height: 100%;}
  .left,.right {width: 200px; position: absolute;top: 0;}
  .left {left: 0; background-color: #03A9F4;}
  .right {right: 0; background-color: #F44336;}
  .mid {margin: 0 210px; background-color: #ccc;}
</style>

<body>
  <div class="left col"></div>
  <div class="mid col"></div>
  <div class="right col"></div>
</body>
```

## 3.全部左浮动

>中间部分100%宽度，左浮动；左边部分也左浮动，并且margin-left: -100%；右边部分也是左浮动，margin-left: -200px；中间部分内部包含一个“真正的中间div”，margin: 0 210px"

```html
<style>
  html,body {margin: 0; height: 100%;}
  .col {height: 100%;}
  .left, .right {float: left; width: 200px;}
  .left {background-color: #03A9F4; margin-left: -100%;}
  .right {background-color: #F44336; margin-left: -200px;}
  .mid-container {width: 100%; float: left;}
  .mid {background-color: #eee; margin: 0 210px;}
</style>
<body>
  <div class="mid-container col">
    <div class="mid col"></div>
  </div>
  <div class="left col"></div>
  <div class="right col"></div>
</body>
```

## 4.左侧左浮动，右侧绝对定位

> 方案1和2的结合，能保证DOM结构的顺序是左中右的，并且尽可能少用绝对定位

```html
<style>
  html, body {margin: 0; padding: 0; height: 100%;}
  .col {height: 100%;}
  .left {width: 200px; float: left; background-color: #03A9F4;}
  .mid {margin: 0 210px; background-color: #eee;}
  .right {width: 200px; position: absolute; top: 0; right: 0; background-color: #F44336;}
</style>
<body>
  <div class="left col"></div>
  <div class="mid col"></div>
  <div class="right col"></div>
</body>
```

## 5.左侧左浮动，右侧右浮动，中间元素触发[BFC](/frontend/2016/11/21/bfc.html)

> 中间元素设置 `overflow: hidden` 触发[BFC](/frontend/2016/11/21/bfc.html)，但是溢出元素将不可见

```html
<style>
  html, body {margin: 0; padding: 0; height: 100%;}
  .col {width: 200px; height: 100%;}
  .left.col {float: left; background-color: #03A9F4; margin-right: 10px;}
  .right.col {float: right; background-color: #F44336; margin-left: 10px;}
  .mid {height: 100%; background-color: #eee; overflow: hidden;}
</style>
<body>
  <div class="right col"></div>
  <div class="left col"></div>
  <div class="mid"></div>
</body>
```

**END**