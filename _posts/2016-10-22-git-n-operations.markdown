---
layout: post
title: Git最常用的n个操作
categories: frontend
tag: 工程
---
![git_draft](http://blog.rodickcai.com/assets/images/posts/git/git_draft.png)

上面这张图是我最开始学Git，按照自己的理解画出来的，可能会有问题，但总体问题不大。

其实Git是个非常复杂的系统，很多细节的特性，平时用到的不多，我也不太清楚，这篇文章只说我日常开发中最常用的操作。

## git clone

### 作用

> 将远程仓库中的项目下载到本地仓库

### 用法

在浏览器中打开github或公司的gitlab，进入项目，复制项目的git地址（如果公司的gitlab不支持SSH，因此请注意选择HTTPS的地址）

![](http://blog.rodickcai.com/assets/images/posts/git/clone.png)

进入到工作目录（通常我们会把各个项目放在同一个文件夹，例如workingDir啥的，当然，你可以在任意目录做git操作），敲下命令

`git clone https://github.com/rodickmini/taptempo.git`

这个操作会把taptempo项目下载到workingDir下的taptempo目录，如果你不想使用taptempo这个目录名，可以指定一个目录名，比如taptempo2

`git clone https://github.com/rodickmini/taptempo.git taptempo2`

## git checkout
### 作用

> 切换分支或将修改的文件恢复

### 用法

`clone`下代码后，代码默认会在`master`分支，我们需要把代码切换到一个自己的分支，这样的话，我们随便怎样修改，怎样提交，都不会影响到`master`或其它分支。

`git checkout -b feature-test`

这个时候，`feature-test`分支和`master`分支的代码是完全一样的，但是此后，你做的所有修改都不会影响`master`分支，只会在`feature-test`分支上往下进行。

## git status

### 作用

> 显示当前工作目录的文件状态

### 用法

`git status`

![git_status](http://blog.rodickcai.com/assets/images/posts/git/git_status.png)

- Changes to be committed列出了已经add了还没有commit的文件
- Changes not staged for commit列出了修改了，但还没有add的文件
- Untracked files列出了新加入的，还没有被git管理起来的文件

**经常敲一敲这个命令，可以让你对当前git的状态了如指掌！**

## git add

### 作用

> 将一个普通文件交给git管理或者将修改过的文件添加到git的索引库中。当我们使用`git commit`时，git将依据索引库中的内容来进行文件的提交。

### 用法

`git add index.html`

如果我们一次修改比较多的文件，需要把所有修改的文件都添加到索引库，可以使用：

`git add --all`

如果我们误把一个文件添加进了索引库，可以使用以下命令将其“拉回”暂存区：

`git reset HEAD index.html`

如果我们想把一个文件恢复成修改前的状态，可以使用以下命令，就撤销了我们所有的修改：

`git checkout index.html`

**但是，执行这个命令要慎重哦！一旦执行，你的所有修改都找不回来啦！**

所以，最好在执行之前，先看一下这次修改了那些东西，那么就需要使用git diff命令：

`git diff index.html`

![git_diff](http://blog.rodickcai.com/assets/images/posts/git/git_diff.png)

`git diff` 命令会调出一个类似于vi的文本编辑器（只读），里面红色的部分说明你删除了`<h1>catch the beat</h1>`这一行，绿色的部分说明你添加了`display: block;`这一行。看完了，按`q`键就可以退出啦~

经过上面这几步“折腾”，你就可以信心十足地决定把哪些文件add进索引库，哪些只是手贱现在要放弃修改的！

## git commit

### 作用

> 将所有添加到索引库的文件提交到本地仓库

终于要commit了！为什么commit这么重要？

因为一旦commit了之后，就会在git中形成一个历史版本，以后不管走到天涯海角，你都可以像乘坐时光机一样找到当年在村口好槐树下埋下的那颗玻璃球，哦不，是找到当年在git里提交的那次变动。

commit操作也是考验一个开发者职业素养的试金石，老司机搂一眼commit message就知道他有没有搞清楚js的闭包和原型链。。。

### 用法

最简单的commit操作如下：

`git commit -m "upd"`

当然，这样commit肯定永远成不了老司机哒！

你看到了，`commit`操作要写一个`commit message`，可以在行内用`-m`参数直接写，一些简单的修改可以这么做，但千万别像我一样，光溜溜写个没营养的upd，稍微好一点的写法呢是想这样的：

> `git commit -m "upd 修改了首页的表格样式，避免字数多了在一行内显示不下"`

> 或者

> `git commit -m "add package.json 引入node包管理，方便安装node依赖"`

> 或者

> `git commit -m "del npm-debug.log日志文件，避免污染git仓库"`

所以`commit message`主要要说3件事：

1. 是upd（更新）、add（添加）还是del（删除）操作
2. 操作了什么文件（或者什么内容）
3. 为什么要做这个操作（或者能够解决什么bug，解决什么问题）

另外如果做了比较重大的提交，一句两句说不完，那么就不能再一行之内解决了，这时候需要用到更高级、更规范的`commit message`写法：

`git commit`

此时git又会调出我们的老朋友`vi`编辑器：

将输入法调到英文状态，按下`Shift+G`再按`o`键，`vi`将在文件最后一行待命，此时就可以输入详细的commit message啦~

![git_diff](http://blog.rodickcai.com/assets/images/posts/git/git_commit.png)

注意，commit message要注意及时换行，不要超过开头注释部分的宽度。

commit message在某些系统里面可以被转化成email，所以格式类似于email，第一行是主题，空一行，后面的是正文。

写完之后，按10次`ESC`键，输入`:wq`即可退出`vi`编辑器，commit操作完成！深藏功与名！

**当然，以上所说关于commit的注意事项都是我瞎说的。。。操作过程中出现任何问题，本人概不负责！**

## git push

### 作用

> 将本地仓库的修改推送到远程仓库

### 用法

`git push origin feature-test`

如果远程仓库当前没有`feature-test`这个分支，将会新建分支

## git fetch
### 作用
### 用法
## git merge
### 作用
### 用法
## git pull
### 作用
### 用法
## git log
### 作用
### 用法

