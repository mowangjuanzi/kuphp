# 语法

## 单引号，双引号，反引号

单引号主要是用于 `byte` 或者 `rune`。

双引号和反引号用于 `string`。

## 变量和声明

Go 在声明变量时跟其它语言一样都是用 `var` 进行变量声明。但是不同的是，顺序是相关的，其它语言是变量类型在前，变量名在后，而 Go 则相反。
具体可以看下面的示例（暂时不要关心 `int`, `float32` 代表什么，下一章节会进行讲解）：

```go
var i int
var U, V, W float32
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
