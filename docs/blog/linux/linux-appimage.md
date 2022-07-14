# ubuntu 不能启动 AppImage

在终端执行 `AppImage` 文件时提示如下错误：

```bash
$ ./Trojan-Qt5-Linux.AppImage 
dlopen(): error loading libfuse.so.2

AppImages require FUSE to run. 
You might still be able to extract the contents of this AppImage 
if you run it with the --appimage-extract option. 
See https://github.com/AppImage/AppImageKit/wiki/FUSE 
for more information
```

就去访问了一下指定链接。现在记录下解决方案：

```bash
sudo apt install fuse libfuse2
sudo modprobe fuse
sudo groupadd fuse
user="$(whoami)"
sudo usermod -a -G fuse $user
```

参考：

> [https://github.com/AppImage/AppImageKit/wiki/FUSE](https://github.com/AppImage/AppImageKit/wiki/FUSE)
