# CSS 中的外边距折叠（margin collapse）

Date: 2016-11-19

> 普通流中的两个或多个毗邻的块级元素垂直方向上的margin会折叠，实际外边距为两者margin中的较大值

**注意：**这个现象并不是一个**问题**或者一个**bug**，只不过这种现象和很多人想当然的结果不一样而已。

所谓“毗邻”有以下3种情况：

## 1、相邻两个块级元素

```html
<style>
  .section-a {height: 30px; background-color: black; margin-bottom: 30px;}
  .section-b {height: 30px; background-color: grey; margin-top: 40px;}
</style>
<body>
  <div class="section-a"></div>
  <div class="section-b"></div>
</body>
```

我们期待`section-a`和`section-b`直接间隔70px，但发现只隔了40px，上面元素的`margin-bottom`和下面元素的`margin-top`重叠在了一起。。。

## 2、父元素的margin-top和其普通流中的第一个子元素的margin-top

```html
<style>
  .section {margin-top: 20px; background-color: black;}
  .sub-section {margin-top: 30px; height: 20px; background-color: grey;}
</style>
<body>
  <div class="section">
    <div class="sub-section"></div>
  </div>
</body>
```
我们期待父元素和上方的块级元素间隔20px，子元素和父元素的上边间隔30px。但发现，父元素和上方的块级元素间隔30px，子元素的上边缘和父元素的上边缘重合。如果`.sub-section`的`margin-top`改为10px，则父元素和上方块级元素的间隔为20px。

结论：父元素和上方块级元素的间隔为`.section`和`.sub-section`的margin-top中较大的那个值，父子元素的上边缘重叠。

## 3、height为auto的父元素的margin-bottom和其普通流中的最后一个子元素的margin-bottom

```html
<style>
  .section {margin-bottom: 20px; height: auto; background-color: black;}
  .sub-section {margin-bottom: 30px; height: 20px; background-color: grey;}
</style>
<body>
  <div class="section">
    <div class="sub-section"></div>
  </div>
  <div>after</div>
</body>
```

我们期待父元素和下方的`<div>after</div>`间隔20px，子元素和父元素的下边间隔30px。但发现，父元素和下方的块级元素间隔30px，子元素的下边缘和父元素的下边缘重合。如果`.sub-section`的`margin-bottom`改为10px，则父元素和下方块级元素的间隔为20px。

结论：父元素和下方块级元素的间隔为`.section`和`.sub-section`的margin-bottom中较大的那个值，父子元素的下边缘重叠。

## 解决方案

### 情况1

创建一个BFC将`.section-a`或`.section-b`包起来，或者把它俩分别用一个BFC进行隔离？

这是一种方案，确实能解决问题。但是这种方案岂不是杀鸡用牛刀？面试的时候倒是可以炫一炫技。。。

我个人认为这种“bug”最简单也是最优的做法就是将`.section-a`的`margin-bottom`设置为`70px`，`.section-b`的`margin-top`不做设置。因为这道题需要达到的效果就是“第一块和第二块之间相隔70px”而已，何必凭空添加一个包裹元素？

**注意：** 如果BFC使用不当，依然不会解决问题。比如：把`.section-a`和`.section-b`这两个元素 **本身** 变成BFC，问题就解决了吗？不会！margin依然是重叠的。错误示例如下：

```html
<style>
  /*加了overflow:hidden之后，.section-a 和 .section-b 都成了BFC*/
  .section-a {height: 30px; background-color: black; margin-bottom: 30px; overflow: hidden;}
  .section-b {height: 30px; background-color: grey; margin-top: 40px; overflow:hidden;}
</style>
<body>
  <div class="section-a"></div>
  <div class="section-b"></div>
</body>
```

为什么呢？因为：

> 属于同一个BFC的两个相邻Box，垂直方向上的margin会发生重叠

做了上面设置的`.section-a`和`.section-b`分别都成了BFC，但它们本身都属于同一个BFC，这个BFC的名字叫`html`！

而如果把`.section-a`外面用一个BFC包裹（假设是`<div class="wrapper"></div>`），那么`.section-a`这个Box属于`.wrapper`这个BFC，而`.section-b`这个Box属于`html`这个BFC，他们的外边距当然就不会重叠了！而这个做法正是情况2和情况3的解决方案~只不过这个做法是情况2和3中“父元素margin为0”的特殊情况。

### 情况2&情况3

解决方案上面已经说了，也就是说：

> 创建了BFC的元素，不会和它的子元素发生margin重叠

给父元素添加`overflow: hidden`即可以将父元素变成BFC。其第一个子元素如果设置了`margin-top: 30px`，那么它就会如我们所想“距离父元素上边缘30px”：

```html
<style>
.section-a {
  height: 30px;
  background-color: black;
  margin-bottom: 30px;
}
.wrapper {
  overflow: hidden;/*.wrapper是一个BFC*/
}
.section-b {
  height: 30px;/*.section-b距离.wrapper上边缘30px，距离.section-a下边缘60px*/
  background-color: blue;
  margin-top: 30px;
}
</style>
<body>
  <div class="section-a"></div>
  <div class="wrapper">
    <div class="section-b"></div>
  </div>
</body>
```


在父元素`height: auto`的前提下，其最后一个子元素如果设置了`margin-bottom: 20px`，那么它也会如我们所想“距离父元素下边缘20px”：

```html
<style>
.wrapper {
  overflow: hidden;
}
.section-a {
  height: 30px;
  background-color: black;
  margin-bottom: 20px;
}
</style>
<body>
  <div class="wrapper">
    <div class="section-a"></div>
  </div>
</body>
```

**注意：给元素添加`overflow:hidden`只是将一个元素变为BFC的多种方式中的一种，本文不详细讨论BFC**

**END**