# Docker

## 简介 

// TODO

## 安装

执行如下命令即可：

```bash
sudo apt show docker.io
```

查看版本：

```bash
$ sudo docker version
Client:
 Version:           20.10.12
 API version:       1.41
 Go version:        go1.17.3
 Git commit:        20.10.12-0ubuntu4
 Built:             Mon Mar  7 17:10:06 2022
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server:
 Engine:
  Version:          20.10.12
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.3
  Git commit:       20.10.12-0ubuntu4
  Built:            Mon Mar  7 15:57:50 2022
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.5.9-0ubuntu3
  GitCommit:        
 runc:
  Version:          1.1.0-0ubuntu1
  GitCommit:        
 docker-init:
  Version:          0.19.0
  GitCommit:
```

查看运行状态：

```bash
$ sudo systemctl status docker
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2022-04-23 18:54:26 CST; 2min 25s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 10058 (dockerd)
      Tasks: 9
     Memory: 30.1M
        CPU: 361ms
     CGroup: /system.slice/docker.service
             └─10058 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

## docker.io vs. docker-ce

可以参考 [The docker.io Debian package is back to life](https://www.collabora.com/news-and-blog/blog/2018/07/04/docker-io-debian-package-back-to-life/)。

简单说下就是打包方式不同。

## docker-compose

执行如下命令进行安装：

```bash
sudo apt install docker-compose
```

> 官方已经有 Golang 重写的 v2 版本。v1 版本是使用 Python 编写的。但是 Ubuntu 22.04 默认还是 v1。
>
> 我去查看了一下[官方文档](https://docs.docker.com/compose/cli-command/#transitioning-to-ga-for-compose-v2)。官方描述如下：
>
> We would like to make the Compose V2 transition to be as smooth as possible for all users. We currently don’t have a concrete timeline to deprecate Compose V1. We will review the feedback from the community on the GA and the adoption on Linux, and come up with a plan to deprecate Compose V1. We are not planning to remove the aliasing of to . We would like to make it easier for users to switch to V2 without breaking any existing scripts. We will follow up with a blog post with more information on the exact timeline on V1 deprecation and the end of support policies for security issues.
>
> 该段内容表示并没有明确的弃用计划。