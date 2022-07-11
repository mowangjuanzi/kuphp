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

- [`var`](#变量和声明) 主要是用于变量声明。

这些后续都会进行解释。

## 变量和声明

Go 的变量声明跟其它语言有点不一样。主要是使用 `var` 进行变量，但是是变量名在前，类型名在后，可以同时对多个变量设置类型：

```go
var i int
var U, V, W float64
```

也可以对在声明类型的时候进行赋值：

```go
var k = 0
var x, y float32 = -1, -2
```

也可以多行进行变量声明：

```go
var (
	i       int
	u, v, s = 2.0, 3.0, "bar"
)
```

最后也可以对函数的返回值进行声明变量，这里是不需要指定类型的，因为函数在返回的时候就指定了返回类型：

```go
var re, im = complexSqrt(-1)
```

因为 Go 不允许存在未使用的变量，同时函数返回的值是两个，但是不需要另外一个的时候，怎么办呢，这个时候就可以请 `_` 出场了：

```go
var _, im = complexSqrt(-1)
```

## 数据类型

Go 存在的数据类型很多。

### 整数类型

常规的整数类型。可以直接通过下面的表格进行了解。

|   类型   | 有无符号 | 占用空间 |                      范围                      |
| :------: | :------: | :------: | :--------------------------------------------: |
|  `int8`  |    有    |  1 字节  |                 `-128` ~ `127`                 |
| `uint8`  |    无    |  1 字节  |                  `0` ~ `255`                   |
| `int16`  |    有    |  2 字节  |               `-32768` ~ `32767`               |
| `uint16` |    无    |  2 字节  |                 `0` ~ `65535`                  |
| `int32`  |    有    |  3 字节  |          `-2147483648` ~ `2147483647`          |
| `uint32` |    无    |  3 字节  |               `0` ~ `4294967295`               |
| `int64`  |    有    |  4 字节  | `-9223372036854775808` ~ `9223372036854775807` |
| `uint64` |    无    |  4 字节  |          `0` ~ `18446744073709551615`          |

`int`, `uint` 这两个需要单独拿出来说。它们在不同的操作系统中具有不同的含义。在 32 位系统中，它们等同于 `int32`, `uint32`，而在 64 位系统中，等同于 `int64`, `uint64`。而上面的类型，则不管是什么系统，都是这个长度。

### 字符串

字符串的数据类型是 `string`。

```go
var str string = "hello"
```

字符串变量赋值后不能改变的。所以下面的操作是无效的。

```go
str[1] = 'a'
```

### 浮点数

有两种类型 `float32` 和 `float64` 两种类型。

> 具体内容参考：[float32 和 float64](https://www.cnblogs.com/HappyTeemo/p/15405577.html)。

`string` 是一个类型。但是我们也可以将其转换为数组。

这里主要是讲解两个。一个是 `rune`，一个是 `byte`。它们分别是 `int8` 和 `int32` 的别名。既然是这样，定义这两个又有什么作用呢。

这里主要是用来作为字符串的辅助来使用的。

它们的区别是 `byte` 是以一个字节为基准进行分割字符串，而 `rune` 是以一个字符为基准分割字符串。

- 整数： `rune`, `byte`, `uintptr`
- 浮点数：`float32`, `float64`
- 复数：complex64, complex128
- bool
- string

> https://go.dev/ref/spec
