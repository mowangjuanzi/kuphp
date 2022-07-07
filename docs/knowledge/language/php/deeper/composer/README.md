# Composer

## 安装

> 目前虽然包管理有 `composer` 包，但是因为之前的安装使用了第三方源，所以因为依赖的原因，并不建议使用内置源进行安装。

下面介绍一下官方的安装方法：

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
php -r "unlink('composer-setup.php');"
```