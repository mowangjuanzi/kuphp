# Golang

大规模编译快速、可靠、高效的软件。

- Go 是谷歌支持的开源编程语言
- 易于学习和入门
- 内置并发和强大的标准库
- 不断发展的生态系统（合作伙伴、社区和工具）

## 安装

直接执行如下命令即可：

```bash
sudo apt install golang
```

查看版本：

```bash
$ go version
go version go1.18.1 linux/amd64
```

## 镜像

Go 的官方包和社区包因为一些原因无法访问。所以需要通过代理的方式来请求。下面就是设置的办法：

```bash
# 设置你的 bash 环境变量
echo "export GOPROXY=https://proxy.golang.com.cn,direct" >> ~/.profile && source ~/.profile

# 如果你的终端是 zsh，使用以下命令
echo "export GOPROXY=https://proxy.golang.com.cn,direct" >> ~/.zshrc && source ~/.zshrc
```

> 参考：[GOPROXY.IO 快速上手](https://goproxy.io/zh/docs/getting-started.html)
>
> GoLand 参考：[GoLand 中配置 goproxy](https://goproxy.io/zh/docs/GoLand-configuration-goproxy.html)

## 编辑器

免费的建议使用 [VS Code](https://code.visualstudio.com/)（配合 [Go 扩展](https://marketplace.visualstudio.com/items?itemName=golang.Go)使用更香），不差钱的可以上 [GoLand](https://www.jetbrains.com.cn/go/)。

## 相关网址

- 官网：https://go.dev/
- 大陆官方镜像：https://golang.google.cn/