# Redis

## 简介 

数百万开发人员用作数据库，缓存，流引擎和消息代理的开源内存数据存储。

## 安装

执行如下命令即可：

```bash
sudo apt install redis
```

查看版本：

```bash
$ redis-server -v
Redis server v=6.0.16 sha=00000000:0 malloc=jemalloc-5.2.1 bits=64 build=a3fdef44459b3ad6
```

查看运行状态：

```bash
$ sudo systemctl status redis
● redis-server.service - Advanced key-value store
     Loaded: loaded (/lib/systemd/system/redis-server.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2022-05-02 17:47:44 CST; 45s ago
       Docs: http://redis.io/documentation,
             man:redis-server(1)
   Main PID: 6865 (redis-server)
     Status: "Ready to accept connections"
      Tasks: 5 (limit: 19075)
     Memory: 2.6M
        CPU: 140ms
     CGroup: /system.slice/redis-server.service
             └─6865 "/usr/bin/redis-server 127.0.0.1:6379" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""

5月 02 17:47:44 mowangjuanzi systemd[1]: Starting Advanced key-value store...
5月 02 17:47:44 mowangjuanzi systemd[1]: Started Advanced key-value store.
```

## 管理命令

启动：

```bash
sudo systemctl start redis
```

停止:

```bash
sudo systemctl stop redis
```

重启：

```bash
sudo systemctl restart redis
```

状态：

```bash
sudo systemctl status redis
```

默认开机启动，可以使用如下命令取消开机启动

```bash
sudo systemctl disable redis
```

## 目录

配置文件目录：`/etc/redis/redis.conf`

日志目录：`/var/log/redis/redis-server.log`

PID 位置：`/run/redis/redis-server.pid`

DB 目录：`/var/lib/redis`

## GUI 推荐

在 Linux 上推荐 [RESP.app](https://snapcraft.io/redis-desktop-manager)，该工具在 Linux 上免费，在其他平台上则是需要付费的。

## 更多

- [Ubuntu apt 安装 redis](https://www.baoguoxiao.com/2022/04/12/redis-start/)