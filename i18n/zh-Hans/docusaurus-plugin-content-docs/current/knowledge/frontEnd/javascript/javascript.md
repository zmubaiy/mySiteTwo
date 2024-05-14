---
id: javascript
title: JavaScript
date: 2020-12-30
tags: [JavaScript]
keywords: [JavaScript]
---

## 一、什么是JavaScript?
### 1、DOM
文档对象模型（DOM,Document Object Model）是一个应用编程接口（API），用于在HTML中使用扩展的HTML。DOM将整个页面抽象为一组分层节点。

DOM通过创建表示文档的树，让开发者可以随心所欲的控制网页的内容和结构。使用DOM API可以轻松地删除、添加、替换、修改节点。

对浏览器而言，DOM就是使用ECMAScript实现的，如今已经成为JavaScript语言的一大组成部分。

言而言之，DOM提供与网页内容交互的方法和接口。

### 2、BOM
IE3和Netscape Navigator3提供了浏览器对象模型（BOM）API，用于支持访问和操作浏览器的窗口。使用BOM，开发者可以操控浏览器显示页面之外的部分。
BOM的能力展示：
- 弹出新浏览器窗口的能力；
- 移动、缩放和关闭浏览器窗口的能力；
- navigator对象，提供关于浏览器的详尽信息；
- location对象，提供浏览器加载页面的详尽信息；
- screen对象，提供关于用户屏幕分辨率的详尽信息；
- performance对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
- 对cookie的支持；
- 其它自定义对象，如XMLHttpRequest和IE的ActiveXObject。
- 简而言之，BOM提供与浏览器交互的方法和接口。

## 二、HTML中的JavaScript
### 1、script标签
`<script>`标签有8大属性，可以包含来自外部域的JavaScript文件，`<script>`的src属性可以是一个完整的URL，并且这个URL指向的资源可以跟包含它的HTML页面不在同一个域中，浏览器解析这个资源时，会想src属性指定的路径发送一个GET请求，以取得相应资源，这个初始的请求不受浏览器同源策略限制，但返回并被执行的JavaScript则受限制。当然，这个请求仍然受父页面HTTP/HTTPS协议的限制。

### 2、标签位置
过去，所有的`<script>`标签都放在head标签中，这就意味着所有JavaScript代码都要下载、解析和解释完成后，才能开始渲染页面（页面在浏览器解析到`<body>`标签的起始标签时开始渲染）。对于需要很多JavaScript的页面，会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白。
为了解决这个问题，现代Web应用程序通常将所有JavaScript引用放在`<body>`元素中的页面内容后面。

### 3、延迟执行脚本
正常情况下，JavaScript的代码是书序执行的。
`defer`脚本会延迟到整个页面都解析完毕后再运行，只适用于外部脚步。
`async`脚本与`defer`脚本类似，都是只适用于外部脚本，但`async`脚本并不能保证按照它们出现的次序执行。

### 4、动态加载脚本
JavaScript可以通过向DOM中动态添加script元素同样可以加载指定的脚本，只要创建一个script元素并将其添加到DOM即可。
```bash
let script = document.createElement('script');
script.src = 'nezha.js';
document.head.appendChild(script);
```
默认情况下，以这种方式创建的`<script>`标签都以异步方式加载，相当于加了`async`标签。

### 5、将JavaScript代码独立于HTML的好处
1. 可维护性
2. 缓存。浏览器会根据特定的设置缓存所有外部链接的JavaScript文件，这意味着如果两个页面都用到同一个JavaScript文件，则该文件只需加载一次，这最终意味着页面加载更快。

## 三、语言基础
### 1、严格区分大小写
### 2、ECMAScript中的语句推荐以分号结尾

## 四、对比var与let、const

## 五、对象池管理
