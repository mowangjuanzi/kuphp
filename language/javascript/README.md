# JavaScript

虽然名字说的是 JavaScript。但是实际上这里所所的是 NodeJS 运行时。

Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境。

## 安装 NodeJS

> 官方暂时还没有可用更新。需要发布一个新版本才可以。具体看[这里](https://github.com/nodesource/distributions/issues/1359#issuecomment-1105742853)

因为 ubuntu 自带的 NodeJS 版本实在是太低了，因为使用的最低版本至少要追上 LTS。所以使用官方推荐的源进行安装。

首先添加源：

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

安装 NodeJS：

```bash
sudo apt install -y nodejs
```

安装 NPM：

```bash
sudo apt install -y npm
```