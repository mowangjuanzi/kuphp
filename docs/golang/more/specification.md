# Go 语言规范

## 2022 年 3 月 10 日版本

## 引言

这是 Go 语言的参考手册。 Go1.18 之前，没有泛型的版本，可以在[这里](https://go.dev/doc/go1.17_spec.html)找到。请查看
[golang.org](https://go.dev/) 获取其它文档和更多信息。

Go 是一种在设计时就考虑到系统变成的通用语言。强类型、垃圾回收、明确支持并发编程。程序由 package 构成。其属性能够有效管理依赖关系。

语法紧凑且易于解析，允许通过 IDE 等自动化工具轻松分析。

## 标记

语法使用扩展巴科斯范式（EBNF）指定：

```grammar
Production  = production_name "=" [ Expression ] "." .
Expression  = Alternative { "|" Alternative } .
Alternative = Term { Term } .
Term        = production_name | token [ "…" token ] | Group | Option | Repetition .
Group       = "(" Expression ")" .
Option      = "[" Expression "]" .
Repetition  = "{" Expression "}" .
```

Productions are expressions constructed from terms and the following operators, in increasing precedence:

```grammar
|   alternation
()  grouping
[]  option (0 or 1 times)
{}  repetition (0 to n times)
```

Lower-case production names are used to identify lexical tokens. Non-terminals are in CamelCase.
Lexical tokens are enclosed in double quotes `""` or back quotes ``` `` ``` .

The form `a … b` represents the set of characters from `a` through `b` as alternatives.
The horizontal ellipsis `…` is also used elsewhere in the spec to informally denote various enumerations or code snippets that are not further specified.
The character `…` (as opposed to the three characters `...`) is not a token of the Go language.

## 源代码表示

// TODO

## 词法元素

// TODO

## 常量

常量有 `bool 常量`、`rune 常量`、`int 常量`、`float-point 常量`、`complex 常量` 和 `string 常量`。rune、int、float-point 和 complex 常量通称为数值常量。
