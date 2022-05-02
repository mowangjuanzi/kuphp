# PHP

PHP 是流行的通用脚本语言，特别适合 Web 开发。

快速，灵活和实用，PHP 支持所有从博客到世界上最流行的网站。

## 安装

> 其实该版本的 Ubuntu 内置了 PHP 8.1。但是因为我是 PHPer，所以还是安装一个提供第三方包的 PHP 比较好，方便安装各个版本的 PHP。

下面是安装 PHP 8.1 的教程。

首先执行如下命令添加 apt 资源：

```bash
sudo add-apt-repository ppa:ondrej/php
```

执行安装命令：

```bash
sudo apt install php8.1-fpm
```

安装完成后查看下版本：

```bash
$ php -v
PHP 8.1.5 (cli) (built: Apr 21 2022 10:32:13) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.5, Copyright (c) Zend Technologies
    with Zend OPcache v8.1.5, Copyright (c), by Zend Technologies
``` 