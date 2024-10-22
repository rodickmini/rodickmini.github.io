---
title: 浏览器cookie, localstorage, sessionstorage区别
date: 2017-05-26 15:00
tags:
- tech
---

## 相同点

都存储在浏览器端，都是同源（domain）的。

## 不同点

1. cookie会自动被HTTP请求头携带，可以被服务器端设置；localStorage和sessionStorage不会被HTTP请求头自动携带，服务器端无法设置localStorage和sessionStorage。
2. cookie容量只有4K，由于浏览器每次请求会自动携带cookie，因此cookie中存放的数据不宜过大；localStorage和sessionStorage的容量通常可达5M（不同浏览器具体实现有差异）。
3. JS原生对cookie操作的支持不够，操作起来比较麻烦；HTML 5对localStorage和sessionStorage的原生支持比较完善，操作起来比较方便。直接使用window.localStorage.xxx = xxx 或 window.localStorage.setItem('xxx', xxx)即可赋值，使用window.localStorage.xxx 或 window.localStorage.getItem('xxx')即可取值。
4. 数据有效期不同：cookie在过期时间之前都有效，到了过期时间即被销毁；localStorage会一直有效，除非人工手动清除数据；sessionStorage只在当前会话有效，用户关闭标签页或窗口后即清除。
5. 作用域不同：cookie和localStorage在同源窗口中共享，sessionStorage只对当前会话页生效，不同标签页或窗口之间无法共享。