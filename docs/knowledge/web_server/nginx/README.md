# nginx

## 简介 

nginx 是 HTTP 和反向代理服务器，邮件代理服务器和通用 TCP/UDP 代理服务器。

## 安装

执行如下命令即可：

```bash
sudo apt install nginx
```

查看版本：

```bash
$ nginx -v
nginx version: nginx/1.18.0 (Ubuntu)
```

查看运行状态：

```bash
$ sudo systemctl status nginx 
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2022-05-01 21:51:06 CST; 22s ago
       Docs: man:nginx(8)
    Process: 19955 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
    Process: 19956 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
   Main PID: 20058 (nginx)
      Tasks: 5 (limit: 19075)
     Memory: 5.3M
        CPU: 50ms
     CGroup: /system.slice/nginx.service
             ├─20058 "nginx: master process /usr/sbin/nginx -g daemon on; master_process on;"
             ├─20064 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""
             ├─20065 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""
             ├─20066 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""
             └─20067 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""

5月 01 21:51:06 mowangjuanzi systemd[1]: Starting A high performance web server and a reverse proxy server...
5月 01 21:51:06 mowangjuanzi systemd[1]: Started A high performance web server and a reverse proxy server.
```

## 管理命令

启动：

```bash
sudo systemctl start nginx
```

停止:

```bash
sudo systemctl stop nginx
```

重启：

```bash
sudo systemctl restart nginx
```

状态：

```bash
sudo systemctl status nginx
```

默认开机启动，可以使用如下命令取消开机启动

```bash
sudo systemctl disable nginx
```

## 更多

- [Centos yum 安装 nginx](https://www.baoguoxiao.com/2017/11/17/yum-install-nginx/)