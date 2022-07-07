import{_ as o,r as d,o as l,c,a as e,b as t,e as s,d as n}from"./app.3f80649c.js";const i={},r=s(`<h1 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h1><h2 id="\u7F16\u5199-hello-wolrd" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199-hello-wolrd" aria-hidden="true">#</a> \u7F16\u5199 <code>Hello Wolrd</code></h2><ul><li>\u521B\u5EFA\u76EE\u5F55</li></ul><p>\u9996\u5148\u5462\uFF0C\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u4E2A <code>hello</code> \u76EE\u5F55\u3002\u8FD9\u91CC\u6211\u662F\u521B\u5EFA\u5728\u8FD9\u91CC\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> hello
<span class="token builtin class-name">cd</span> hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>go.mod</code></li></ul><p>Go \u5728 1.11 \u7248\u672C\u5F15\u5165 mod\uFF0C\u8FD9\u91CC\u6211\u4EEC\u9996\u5148\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u521D\u59CB\u5316\u7BA1\u7406\u4F9D\u8D56\u7684\u6587\u4EF6 <code>go.mod</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go mod init mowangjuanzi/hello
go: creating new go.mod: module mowangjuanzi/hello
go: to <span class="token function">add</span> module requirements and sums:
	go mod tidy
$ <span class="token function">ls</span>
go.mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u5C31\u521B\u5EFA\u597D\u4E86\uFF0C\u5305\u4F9D\u8D56\u7BA1\u7406\u6587\u4EF6\u3002\u5177\u4F53\u7684 <code>mowangjuanzi/hello</code> \u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5B9A\u4E49\u3002\u4F1A\u5728\u53E6\u5916\u4E00\u7BC7\u6587\u7AE0\u4E2D\u8FDB\u884C\u4ECB\u7ECD\u3002</p><ul><li><code>main.go</code></li></ul><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u521B\u5EFA <code>main.go</code> \u76EE\u5F55\u3002</p><p>\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello go!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8FD9\u51E0\u884C\u4EE3\u7801\uFF0C\u6211\u4EEC\u6765\u7BA1\u4E2D\u7AA5\u8C79\u4E00\u4E0B Go\u3002</p>`,14),p=e("li",null,[e("p",null,[e("code",null,"package"),n(" \u8FD9\u4E2A\u662F\u5B9A\u4E49\u5305\u540D\u7684\u610F\u601D\uFF0C\u4F5C\u7528\u662F\u5BF9\u51FD\u6570\uFF08"),e("code",null,"func"),n("\uFF09\u8FDB\u884C\u5206\u7EC4\u3002\u800C "),e("code",null,"main"),n(" \u610F\u601D\u4EE3\u8868\u8BE5\u6587\u4EF6\u662F\u5165\u53E3\u6587\u4EF6\u3002\u4E00\u5207\u4ECE\u8FD9\u91CC\u5F00\u59CB\u6267\u884C\u3002")])],-1),u=e("code",null,"import",-1),g=n(" \u5C31\u662F\u5BFC\u5165\u3002\u8FD9\u91CC\u6211\u4EEC\u901A\u8FC7\u5BFC\u5165 "),k={href:"https://pkg.go.dev/fmt",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"fmt",-1),m=n(" \u6765\u5B9E\u73B0\u6253\u5370\u547D\u4EE4\u3002\u6309\u7167\u7EA6\u5B9A\uFF0C\u5BFC\u5165\u8DEF\u5F84\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5C31\u662F\u5305\u540D\u3002"),h=s("<li><p><code>func</code> \u5C31\u662F\u5B9A\u4E49\u51FD\u6570\u3002<code>main</code> \u4EE3\u8868\u8FD9\u4E2A\u662F\u8BE5\u51FD\u6570\u662F\u5165\u53E3\u51FD\u6570\u3002\u6267\u884C\u51FD\u6570\u4ECE\u8BE5\u51FD\u6570\u5F00\u59CB\u6267\u884C\u3002</p></li><li><p><code>fmt.Println</code> \u8FD9\u662F\u8981\u8C03\u7528\u7684\u6253\u5370\u65B9\u6CD5\u3002\u8FD9\u91CC\u6CE8\u610F\u4E24\u4E2A\u5730\u65B9\uFF0C\u5982\u679C\u662F\u4E4B\u524D\u5B66\u7684\u662F PHP\uFF0C\u90A3\u4E48\u8C03\u7528\u65B9\u6CD5\u4E3B\u8981\u662F <code>-&gt;</code> \u6216\u8005 <code>::</code>\uFF0C\u800C\u8FD9\u91CC\u4E3B\u8981\u662F\u9760 <code>.</code>\u3002\u5E76\u4E14\u8FD8\u6709\u4E00\u4E2A\u95EE\u9898\u662F\u8C03\u7528\u7684\u51FD\u6570\u9996\u5B57\u6BCD\u662F\u5927\u5199\u7684\uFF0C\u5728 Go \u4E2D\u5E76\u6CA1\u6709\u9762\u5411\u5BF9\u8C61\u7684 <code>Public</code> \u6216\u8005 <code>Private</code> \u7684\u6982\u5FF5\uFF0C\u6240\u4EE5\u901A\u8FC7\u9996\u5B57\u6BCD\u5927\u5199\u7684\u65B9\u5F0F\u8868\u793A\u8BE5\u51FD\u6570\u53EF\u4EE5\u88AB\u5916\u90E8\u8C03\u7528\u3002</p></li><li><p>\u8FD0\u884C</p></li>",3),b=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go run main.go
hello go<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u8FD0\u884C Go \u8DDF\u8FD0\u884C C \u662F\u4E00\u6837\u7684\u3002\u90FD\u662F\u5148\u7F16\u8BD1\uFF0C\u540E\u8FD0\u884C\u3002\u4F46\u662F Go \u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\uFF0C\u6240\u4EE5\u5C31\u5B9E\u73B0\u4E86 <code>run</code> \u547D\u4EE4\u3002\u5B83\u5BF9\u547D\u4EE4\u7684\u89E3\u91CA\u5C31\u662F <code>compile and run Go program</code>\u3002</p><p>\u5982\u679C\u662F\u6211\u4EEC\u5206\u5F00\u6267\u884C\uFF0C\u6309\u7167 C \u90A3\u79CD\u6A21\u5F0F\uFF0C\u90A3\u5C31\u662F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go build main.go
$ ./main
hello go<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57" aria-hidden="true">#</a> \u5173\u952E\u5B57</h2><p>\u5173\u952E\u5B57\u4E0D\u80FD\u7528\u4F5C\u53D8\u91CF\uFF0C\u5E38\u91CF\uFF0C\u51FD\u6570\u7B49\u7B49\u7684\u540D\u5B57\u3002\u5B83\u4EEC\u90FD\u6709\u7279\u6B8A\u7684\u7528\u9014\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">break</span>        <span class="token keyword">default</span>      <span class="token keyword">func</span>         <span class="token keyword">interface</span>    <span class="token keyword">select</span>
<span class="token keyword">case</span>         <span class="token keyword">defer</span>        <span class="token keyword">go</span>           <span class="token keyword">map</span>          <span class="token keyword">struct</span>
<span class="token keyword">chan</span>         <span class="token keyword">else</span>         <span class="token keyword">goto</span>         <span class="token keyword">package</span>      <span class="token keyword">switch</span>
<span class="token keyword">const</span>        <span class="token keyword">fallthrough</span>  <span class="token keyword">if</span>           <span class="token keyword">range</span>        <span class="token keyword">type</span>
<span class="token keyword">continue</span>     <span class="token keyword">for</span>          <span class="token keyword">import</span>       <span class="token keyword">return</span>       <span class="token keyword">var</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="#%E5%8F%98%E9%87%8F%E5%92%8C%E5%A3%B0%E6%98%8E"><code>var</code></a> \u4E3B\u8981\u662F\u7528\u4E8E\u53D8\u91CF\u58F0\u660E\u3002</li></ul><p>\u8FD9\u4E9B\u540E\u7EED\u90FD\u4F1A\u8FDB\u884C\u89E3\u91CA\u3002</p><h2 id="\u53D8\u91CF\u548C\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u548C\u58F0\u660E" aria-hidden="true">#</a> \u53D8\u91CF\u548C\u58F0\u660E</h2><p>Go \u7684\u53D8\u91CF\u58F0\u660E\u8DDF\u5176\u5B83\u8BED\u8A00\u6709\u70B9\u4E0D\u4E00\u6837\u3002\u4E3B\u8981\u662F\u4F7F\u7528 <code>var</code> \u8FDB\u884C\u53D8\u91CF\uFF0C\u4F46\u662F\u662F\u53D8\u91CF\u540D\u5728\u524D\uFF0C\u7C7B\u578B\u540D\u5728\u540E\uFF0C\u53EF\u4EE5\u540C\u65F6\u5BF9\u591A\u4E2A\u53D8\u91CF\u8BBE\u7F6E\u7C7B\u578B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> i <span class="token builtin">int</span>
<span class="token keyword">var</span> U<span class="token punctuation">,</span> V<span class="token punctuation">,</span> W <span class="token builtin">float64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u5BF9\u5728\u58F0\u660E\u7C7B\u578B\u7684\u65F6\u5019\u8FDB\u884C\u8D4B\u503C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> k <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">var</span> x<span class="token punctuation">,</span> y <span class="token builtin">float32</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u591A\u884C\u8FDB\u884C\u53D8\u91CF\u58F0\u660E\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
	i       <span class="token builtin">int</span>
	u<span class="token punctuation">,</span> v<span class="token punctuation">,</span> s <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u4E5F\u53EF\u4EE5\u5BF9\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u58F0\u660E\u53D8\u91CF\uFF0C\u8FD9\u91CC\u662F\u4E0D\u9700\u8981\u6307\u5B9A\u7C7B\u578B\u7684\uFF0C\u56E0\u4E3A\u51FD\u6570\u5728\u8FD4\u56DE\u7684\u65F6\u5019\u5C31\u6307\u5B9A\u4E86\u8FD4\u56DE\u7C7B\u578B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> re<span class="token punctuation">,</span> im <span class="token operator">=</span> <span class="token function">complexSqrt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u4E3A Go \u4E0D\u5141\u8BB8\u5B58\u5728\u672A\u4F7F\u7528\u7684\u53D8\u91CF\uFF0C\u540C\u65F6\u51FD\u6570\u8FD4\u56DE\u7684\u503C\u662F\u4E24\u4E2A\uFF0C\u4F46\u662F\u4E0D\u9700\u8981\u53E6\u5916\u4E00\u4E2A\u7684\u65F6\u5019\uFF0C\u600E\u4E48\u529E\u5462\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u8BF7 <code>_</code> \u51FA\u573A\u4E86\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token boolean">_</span><span class="token punctuation">,</span> im <span class="token operator">=</span> <span class="token function">complexSqrt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h2><p>Go \u5B58\u5728\u7684\u6570\u636E\u7C7B\u578B\u5F88\u591A\u3002</p><h3 id="\u6574\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6574\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u6574\u6570\u7C7B\u578B</h3><p>\u5E38\u89C4\u7684\u6574\u6570\u7C7B\u578B\u3002\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u4E0B\u9762\u7684\u8868\u683C\u8FDB\u884C\u4E86\u89E3\u3002</p><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u6709\u65E0\u7B26\u53F7</th><th style="text-align:center;">\u5360\u7528\u7A7A\u95F4</th><th style="text-align:center;">\u8303\u56F4</th></tr></thead><tbody><tr><td style="text-align:center;"><code>int8</code></td><td style="text-align:center;">\u6709</td><td style="text-align:center;">1 \u5B57\u8282</td><td style="text-align:center;"><code>-128</code> ~ <code>127</code></td></tr><tr><td style="text-align:center;"><code>uint8</code></td><td style="text-align:center;">\u65E0</td><td style="text-align:center;">1 \u5B57\u8282</td><td style="text-align:center;"><code>0</code> ~ <code>255</code></td></tr><tr><td style="text-align:center;"><code>int16</code></td><td style="text-align:center;">\u6709</td><td style="text-align:center;">2 \u5B57\u8282</td><td style="text-align:center;"><code>-32768</code> ~ <code>32767</code></td></tr><tr><td style="text-align:center;"><code>uint16</code></td><td style="text-align:center;">\u65E0</td><td style="text-align:center;">2 \u5B57\u8282</td><td style="text-align:center;"><code>0</code> ~ <code>65535</code></td></tr><tr><td style="text-align:center;"><code>int32</code></td><td style="text-align:center;">\u6709</td><td style="text-align:center;">3 \u5B57\u8282</td><td style="text-align:center;"><code>-2147483648</code> ~ <code>2147483647</code></td></tr><tr><td style="text-align:center;"><code>uint32</code></td><td style="text-align:center;">\u65E0</td><td style="text-align:center;">3 \u5B57\u8282</td><td style="text-align:center;"><code>0</code> ~ <code>4294967295</code></td></tr><tr><td style="text-align:center;"><code>int64</code></td><td style="text-align:center;">\u6709</td><td style="text-align:center;">4 \u5B57\u8282</td><td style="text-align:center;"><code>-9223372036854775808</code> ~ <code>9223372036854775807</code></td></tr><tr><td style="text-align:center;"><code>uint64</code></td><td style="text-align:center;">\u65E0</td><td style="text-align:center;">4 \u5B57\u8282</td><td style="text-align:center;"><code>0</code> ~ <code>18446744073709551615</code></td></tr></tbody></table><p><code>int</code>, <code>uint</code> \u8FD9\u4E24\u4E2A\u9700\u8981\u5355\u72EC\u62FF\u51FA\u6765\u8BF4\u3002\u5B83\u4EEC\u5728\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u5177\u6709\u4E0D\u540C\u7684\u542B\u4E49\u3002\u5728 32 \u4F4D\u7CFB\u7EDF\u4E2D\uFF0C\u5B83\u4EEC\u7B49\u540C\u4E8E <code>int32</code>, <code>uint32</code>\uFF0C\u800C\u5728 64 \u4F4D\u7CFB\u7EDF\u4E2D\uFF0C\u7B49\u540C\u4E8E <code>int64</code>, <code>uint64</code>\u3002\u800C\u4E0A\u9762\u7684\u7C7B\u578B\uFF0C\u5219\u4E0D\u7BA1\u662F\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u90FD\u662F\u8FD9\u4E2A\u957F\u5EA6\u3002</p><h3 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h3><p>\u5B57\u7B26\u4E32\u7684\u6570\u636E\u7C7B\u578B\u662F <code>string</code>\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B57\u7B26\u4E32\u53D8\u91CF\u8D4B\u503C\u540E\u4E0D\u80FD\u6539\u53D8\u7684\u3002\u6240\u4EE5\u4E0B\u9762\u7684\u64CD\u4F5C\u662F\u65E0\u6548\u7684\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>str<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6D6E\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#\u6D6E\u70B9\u6570" aria-hidden="true">#</a> \u6D6E\u70B9\u6570</h3><p>\u6709\u4E24\u79CD\u7C7B\u578B <code>float32</code> \u548C <code>float64</code> \u4E24\u79CD\u7C7B\u578B\u3002</p>`,33),y=n("\u5177\u4F53\u5185\u5BB9\u53C2\u8003\uFF1A"),x={href:"https://www.cnblogs.com/HappyTeemo/p/15405577.html",target:"_blank",rel:"noopener noreferrer"},f=n("float32 \u548C float64"),w=n("\u3002"),_=s("<p><code>string</code> \u662F\u4E00\u4E2A\u7C7B\u578B\u3002\u4F46\u662F\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u5176\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002</p><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u8BB2\u89E3\u4E24\u4E2A\u3002\u4E00\u4E2A\u662F <code>rune</code>\uFF0C\u4E00\u4E2A\u662F <code>byte</code>\u3002\u5B83\u4EEC\u5206\u522B\u662F <code>int8</code> \u548C <code>int32</code> \u7684\u522B\u540D\u3002\u65E2\u7136\u662F\u8FD9\u6837\uFF0C\u5B9A\u4E49\u8FD9\u4E24\u4E2A\u53C8\u6709\u4EC0\u4E48\u4F5C\u7528\u5462\u3002</p><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u7528\u6765\u4F5C\u4E3A\u5B57\u7B26\u4E32\u7684\u8F85\u52A9\u6765\u4F7F\u7528\u7684\u3002</p><p>\u5B83\u4EEC\u7684\u533A\u522B\u662F <code>byte</code> \u662F\u4EE5\u4E00\u4E2A\u5B57\u8282\u4E3A\u57FA\u51C6\u8FDB\u884C\u5206\u5272\u5B57\u7B26\u4E32\uFF0C\u800C <code>rune</code> \u662F\u4EE5\u4E00\u4E2A\u5B57\u7B26\u4E3A\u57FA\u51C6\u5206\u5272\u5B57\u7B26\u4E32\u3002</p><ul><li>\u6574\u6570\uFF1A <code>rune</code>, <code>byte</code>, <code>uintptr</code></li><li>\u6D6E\u70B9\u6570\uFF1A<code>float32</code>, <code>float64</code></li><li>\u590D\u6570\uFF1Acomplex64, complex128</li><li>bool</li><li>string</li></ul><blockquote><p>https://go.dev/ref/spec</p></blockquote>",6);function q(E,G){const a=d("ExternalLinkIcon");return l(),c("div",null,[r,e("ul",null,[p,e("li",null,[e("p",null,[u,g,e("a",k,[v,t(a)]),m])]),h]),b,e("blockquote",null,[e("p",null,[y,e("a",x,[f,t(a)]),w])]),_])}var V=o(i,[["render",q],["__file","basic.html.vue"]]);export{V as default};
