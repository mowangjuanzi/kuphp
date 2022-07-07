# Kibana

## 安装

如果你已经参考过之前的文章，已经安装了 [ElasticSearch](./README.md)。那么可以略过配置源的部分。

### 配置 Elastic PGP 公钥和源

请参考 [Elasticsearch](./README.md) 的 `Elasticsearch PGP 公钥和源` 章节。

### 安装 Kibana

直接进行安装命令：

```bash
sudo apt update && sudo apt install kibana
```

这样就安装好了。

## Kibana 命令管理

我们可以使用 `systemd` 方式进行 Kibana 进行管理

### `systemd`

设置开机启动：

```bash
sudo systemctl daemon-reload
sudo systemctl enable kibana
```

启动：

```bash
sudo systemctl start kibana
```

关闭：

```bash
sudo systemctl stop kibana
```

查看状态：

```bash
sudo systemctl status kibana
```

然后在浏览器中使用 http://localhost:5601 访问。

## 访问配置

访问后提示需要提供 `Enrollment token`，可以执行如下命令获取 `token`

```bash
sudo /usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana
```

> 在获取 token 时可能会出现如下错误：
> ```bash
> $ sudo /usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana
> ERROR: [xpack.security.enrollment.enabled] must be set to `true` to create an enrollment token
> ```
>
> 解决方案为：在 `/etc/elasticsearch/elasticsearch.yml`

将获取到的 token 粘贴到刚刚在浏览器中打开的网页的 input 输入框中。

点击 `Configure Elastic` 按钮，接着出现一个弹出框，要求输入 `Verification required` 的 `code`。

接着执行如下命令获取 `code`：

```bash
$ sudo /usr/share/kibana/bin/kibana-verification-code 
Your verification code is:  756 267
```

点击 `verify` 验证输入的六位数验证码是否正确。接着跳转到一个登录页面，输入 Es 的用户名和密码。还记得安装 ElasticSearch 中出现的密码吗？

## Kibana 配置文件

Kibana 默认加载的配置文件位置为 `/etc/kibana/kibana.yml`，关于配置文件的具体解释可以参考[配置 Kibana](https://www.elastic.co/guide/en/kibana/8.1/settings.html)

这里只介绍一个，就是 `i18n.locale`。它的位置在最后一行。

我们修改配置值如下：

```yml
i18n.locale: "zh-CN"
```

然后重启 kibana。然后就可以看到是中文界面了。这样看着总比英文舒服。

## 目录布局

| 类型 | 描述 | 默认路径 | 设置 |
| --- | --- | --- | --- |
| **home** | Kibana home 目录或者 `$KIBANA_HOME` | `/usr/share/kibana` |  |
| **bin** | 二进制脚本，包括 `kibana` 去启动节点和 `kibana-plugin` 安装插件 | `/usr/share/kibana/bin` |  |
| **config** | 配置文件，包含 `kibana.yml` | `/etc/kibana` | `[KBN_PATH_CONF](https://www.elastic.co/guide/en/kibana/7.14/settings.html)` |
| **data** | Kibana和它的插件写入到磁盘的数据文件位置 | `/var/lib/kibana` | `path.data` |
| **logs** | 日志文件位置。 | `/var/log/kibana` | `path.logs` |
| **plugins** | 插件文件位置. 每个插件将包含在一个子目录中. | `/usr/share/kibana/plugins` |  |


这样，Kibana 的安装就算是介绍完成了。

## 更多

如果查看 Kibana log 发现如下错误：

```json
{
    "ecs":{
        "version":"8.0.0"
    },
    "@timestamp":"2022-05-23T16:32:09.369+08:00",
    "message":"connect ECONNREFUSED 192.168.1.12:9200",
    "error":{
        "message":"connect ECONNREFUSED 192.168.1.12:9200",
        "type":"ConnectionError",
        "stack_trace":"ConnectionError: connect ECONNREFUSED 192.168.1.12:9200
    at KibanaTransport.request (/usr/share/kibana/node_modules/@elastic/transport/lib/Transport.js:525:31)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at KibanaTransport.request (/usr/share/kibana/src/core/server/elasticsearch/client/create_transport.js:58:16)
    at ClientTraced.GetApi [as get] (/usr/share/kibana/node_modules/@elastic/elasticsearch/lib/api/api/get.js:36:12)
    at SessionIndex.get (/usr/share/kibana/x-pack/plugins/security/server/session_management/session_index.js:129:11)
    at Session.get (/usr/share/kibana/x-pack/plugins/security/server/session_management/session.js:89:31)
    at Authenticator.getSessionValue (/usr/share/kibana/x-pack/plugins/security/server/authentication/authenticator.js:461:34)
    at Authenticator.authenticate (/usr/share/kibana/x-pack/plugins/security/server/authentication/authenticator.js:259:34)
    at /usr/share/kibana/x-pack/plugins/security/server/authentication/authentication_service.js:87:36
    at Object.interceptAuth [as authenticate] (/usr/share/kibana/src/core/server/http/lifecycle/auth.js:90:22)
    at exports.Manager.execute (/usr/share/kibana/node_modules/@hapi/hapi/lib/toolkit.js:60:28)
    at module.exports.internals.Auth._authenticate (/usr/share/kibana/node_modules/@hapi/hapi/lib/auth.js:273:30)
    at Request._lifecycle (/usr/share/kibana/node_modules/@hapi/hapi/lib/request.js:371:32)
    at Request._execute (/usr/share/kibana/node_modules/@hapi/hapi/lib/request.js:281:9)"
    },
    "log":{
        "level":"ERROR",
        "logger":"http.server.Kibana"
    },
    "process":{
        "pid":24470
    },
    "trace":{
        "id":"64c5cfd488e556f3da7cf87ce3cd2359"
    },
    "transaction":{
        "id":"41f4118215932d84"
    }
}
```

可以使用 [Elasticsearch](./README.md) 中的 `修复监听 IP 配置` 章节的内容修复。