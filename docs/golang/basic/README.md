# 基础

## 编写 `Hello Wolrd`

- 创建目录

首先呢，我们先创建一个 `hello` 目录。这里我是创建在这里：

```bash
mkdir hello
cd hello
```

- `go.mod`

Go 在 1.11 版本引入 mod，这里我们首先通过如下方式初始化管理依赖的文件 `go.mod`

```bash
$ go mod init mowangjuanzi/hello
go: creating new go.mod: module mowangjuanzi/hello
go: to add module requirements and sums:
	go mod tidy
$ ls
go.mod
```

这里我们就创建好了，包依赖管理文件。具体的 `mowangjuanzi/hello` 为什么这么定义。会在另外一篇文章中进行介绍。

- `main.go`

接下来我们创建 `main.go` 目录。

内容如下：

```go
package main

import "fmt"

func main() {
	fmt.Println("hello go!")
}
```

通过这几行代码，我们来管中窥豹一下 Go。

- `package` 这个是定义包名的意思，作用是对函数（`func`）进行分组。而 `main` 意思代表该文件是入口文件。一切从这里开始执行。
- `import` 就是导入。这里我们通过导入 [`fmt`](https://pkg.go.dev/fmt) 来实现打印命令。按照约定，导入路径的最后一个元素就是包名。
- `func` 就是定义函数。`main` 代表这个是该函数是入口函数。执行函数从该函数开始执行。
- `fmt.Println` 这是要调用的打印方法。这里注意两个地方，如果是之前学的是 PHP，那么调用方法主要是 `->` 或者 `::`，而这里主要是靠 `.`。并且还有一个问题是调用的函数首字母是大写的，在 Go 中并没有面向对象的 `Public` 或者 `Private` 的概念，所以通过首字母大写的方式表示该函数可以被外部调用。

- 运行

```bash
$ go run main.go
hello go!
```

其实运行 Go 跟运行 C 是一样的。都是先编译，后运行。但是 Go 为了方便开发，所以就实现了 `run` 命令。它对命令的解释就是 `compile and run Go program`。

如果是我们分开执行，按照 C 那种模式，那就是如下：

```bash
$ go build main.go
$ ./main
hello go!
```

## 关键字

关键字不能用作变量，常量，函数等等的名字。它们都有特殊的用途。

```go
break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type
continue     for          import       return       var
```

- [`var`](/golang/basic/syntax.md#变量和声明) 主要是用于变量声明。

这些后续都会进行解释。
