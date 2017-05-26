---
layout: post
title: 标准模式（standards mode）和怪异模式(quirks mode)
categories: frontend
---

# 什么是浏览器的标准模式（standards mode）和怪异模式(quirks mode)

> 在web发展的早期，W3C标准尚未出台，不同浏览器对html的解析标准不一致，网页开发者为了能让自己的网页在这些上古浏览器上得到正常的渲染，都遵循它们私有的标准进行不同的开发。
> 
> W3C标准出台后，浏览器厂商对最新标准进行支持的同时，为了让那些遵循上古标准开发的网站依然能够正常渲染，会启用所谓的“怪异模式”对它们进行解析。

# 浏览器如何决定使用哪种模式解析？

浏览器解析HTML时，如果该HTML以 `<!DOCTYPE html>` 开头，则对该html使用标准模式解析，其它类型的更复杂的DOCTYPE有可能会触发浏览器使用怪异模式对其进行解析。

而且，要确保 `<!DOCTYPE html>` 在文档最前面，之前没有注释或XML声明。

在 HTML5中，DOCTYPE 唯一的作用是启用标准模式。