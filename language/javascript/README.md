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

安装 NodeJS 和 Npm：

```bash
sudo apt install -y nodejs
```

查看版本：

```bash
$ node -v
v16.15.0
$ npm -v
8.5.5
```

可能你安装的时候 npm 不是最新版本，可以使用如下命令更新到最新版本：

```bash
sudo npm install -g npm
```

## 安装 yarn 及其其他的包管理

> corepack 是包管理器的管理器。具体看[废宅阿斗 NPM 即将被 Node.js 官方抛弃 → Corepack](https://zhuanlan.zhihu.com/p/408122100)

直接执行如下命令即可：

```bash
sudo corepack enable
```

查看版本（这里需要等一下，因为需要下载包）：

```bash
$ yarn -v
1.22.15
```

其实开启后不仅仅支持 yarn。下面这些也都支持：

```bash
$ ls /usr/lib/node_modules/corepack/dist/
corepack.js  npm.js  npx.js  pnpm.js  pnpx.js yarn.js  yarnpkg.js
```

## 设置镜像

这里需要注意的是，[淘宝镜像即将停止解析](https://zhuanlan.zhihu.com/p/465424728) ，需要使用 npmmirror 进行替换。

```bash
sudo npm config set registry https://registry.npmmirror.com
```