---
id: linux-note
title: Linux笔记
date: 2020-12-30
tags: [Linux, operation]
keywords: [Linux, operation]
---

## 1、linux介绍
Linux，一般指GNU/Linux（单独的Linux内核并不可直接使用，一般搭配GNU套件，故得此称呼），是一种免费使用和自由传播的类UNIX操作系统，其内核由
[林纳斯·本纳第克特·托瓦兹](https://baike.baidu.com/item/林纳斯·本纳第克特·托瓦兹/1034429?fromModule=lemma_inlink)（Linus Benedict Torvalds）于1991年10月5日首次发布，
它主要受到[Minix](https://baike.baidu.com/item/Minix/7106045?fromModule=lemma_inlink)和[Unix](https://baike.baidu.com/item/Unix/219943?fromModule=lemma_inlink)思想的启发，是一个基于POSIX的多用户、多任务、支持多线程和多CPU的操作系统。它支持32位和64位硬件，能运行主要的Unix工具软件、应用程序和网络协议。

Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux有上百种不同的发行版，如基于社区开发的debian、archlinux，和基于商业开发的Red Hat Enterprise Linux、SUSE、Oracle Linux等。

2022年11月20日，Linux 提交了最后一批 drm-intel-next 功能补丁，Linux 6.2将迎来对英特尔锐炫独显的正式支持。
<!-- ![](../../../../static/img/knowledge/linux1.webp) -->
<!-- <img src="../../../../static/img/knowledge/linux1.webp" alt="图片描述" width="300" height="200"/> -->

## 2、目录结构
Linux系统中一切皆文件
```bash
├── root  
│    ├── Desktop  
│    ├── Maildir  
│    └── .....  
├── bin  
├── boot  
├── dev  
├── etc  
├── home  
├── var  
├── lib  
├── usr  
│    ├── bin  
│    └── lib  
│    └── .....  
├── media  
└── .....  
```

- `/bin`  
是binary的缩写，这个目录存放着最经常使用的命令，通过上方桌面可以看到bin文件夹有个箭头，是链接到 /usr/bin下，相当于快捷方式，进入/bin和/usr/bin下是一模一样的

- `/sbin`  
s就是super User的意思，这里存放的是系统管理员使用的系统管理程序。

- `/home`  
存放普通用户的主目录，在Linux中每个用户都有一个自己的目录，一版该目录名是以用户的账号命名的。

- `/root`  
该目录为系统管理员，也称为超级权限者的用户主目录。

- `/lib`  
系统开机所需要最基本的动态连接共享库，其作用类似于windows里的DLL文件。几乎所有的应用程序都需要用到这些共享库。

- `/etc`  
所有的系统管理所需要的配置文件和子目录。

- `/usr`  
这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于windows下的program fies目录。

- `/boot`  
这里存放的是启动linux时使用的一些核心文件，包括一些连接文件以及镜像文件，自己的安装别放这里。

- `/proc`  
这个目录是一个虚拟目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。

- `/srv`  
service缩写，该目录存放一些服务启动之后需要提取的数据。

- `/sys`  
这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统sysfs。

- `/tmp`  
这个目录是用来存放一些临时文件的。

- `/dev`  
类似于windows的设备管理器，把所有的硬件用文件的形式存储。管理着所有设备，例如CPU、硬盘等等

- `/media`  
linux系统会自动识别一些设备，例如U盘、光驱等等，当识别后，linux会把识别的设备挂载到这个目录下。
centos7迁移到/run/media

- `/mnt`  
系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将外部的存储挂载在- `/mnt上，然后进入该目录就可以查看里面的内容了。和media差不多

- `/opt`  
这是给主机额外安装软件所摆放的目录。比如你安装一个mysql数据库则就可以放在这个目录下。默认是空的。

- `/var`  
这个目录中存放着在不断扩充的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

- `/lost+found`  
这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。

- `/www`  
/www目录可以用于存储Web应用程序或网站文件，/www目录没有特别的用途，它只是一个常规目录，可以根据需要进行使用和管理。

