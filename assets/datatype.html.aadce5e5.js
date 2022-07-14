import{_ as c,r as o,o as a,c as l,a as e,b as s,e as d,d as t}from"./app.effe2eb5.js";const r={},i=d(`<h1 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h1><p>Go \u662F\u5F3A\u7C7B\u578B\u8BED\u8A00\uFF0C\u6240\u4EE5\u4F1A\u5B58\u5728\u5F88\u591A\u7684\u6570\u636E\u7C7B\u578B\u3002\u6570\u636E\u7C7B\u578B\u5206\u4E3A\u57FA\u7840\u7C7B\u578B\u548C\u590D\u5408\u7C7B\u578B\u4E24\u79CD\u3002\u90A3\u4E48\u4E3B\u8981\u662F\u4ECB\u7ECD\u57FA\u7840\u7C7B\u578B\u3002</p><h2 id="\u6574\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6574\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u6574\u6570\u7C7B\u578B</h2><p>\u5E38\u89C4\u7684\u6574\u6570\u7C7B\u578B\u3002\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u4E0B\u9762\u7684\u8868\u683C\u8FDB\u884C\u4E86\u89E3\u3002</p><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u6709\u65E0\u7B26\u53F7</th><th style="text-align:center;">\u5360\u7528\u7A7A\u95F4</th><th style="text-align:center;">\u8303\u56F4</th></tr></thead><tbody><tr><td style="text-align:center;"><code>int8</code></td><td style="text-align:center;">\u6709</td><td style="text-align:center;">1 \u5B57\u8282</td><td style="text-align:center;"><code>-128</code> ~ <code>127</code></td></tr><tr><td style="text-align:center;"><code>uint8</code></td><td style="text-align:center;">\u65E0</td><td style="text-align:center;">1 \u5B57\u8282</td><td style="text-align:center;"><code>0</code> ~ <code>255</code></td></tr><tr><td style="text-align:center;"><code>int16</code></td><td style="text-align:center;">\u6709</td><td style="text-align:center;">2 \u5B57\u8282</td><td style="text-align:center;"><code>-32768</code> ~ <code>32767</code></td></tr><tr><td style="text-align:center;"><code>uint16</code></td><td style="text-align:center;">\u65E0</td><td style="text-align:center;">2 \u5B57\u8282</td><td style="text-align:center;"><code>0</code> ~ <code>65535</code></td></tr><tr><td style="text-align:center;"><code>int32</code></td><td style="text-align:center;">\u6709</td><td style="text-align:center;">3 \u5B57\u8282</td><td style="text-align:center;"><code>-2147483648</code> ~ <code>2147483647</code></td></tr><tr><td style="text-align:center;"><code>uint32</code></td><td style="text-align:center;">\u65E0</td><td style="text-align:center;">3 \u5B57\u8282</td><td style="text-align:center;"><code>0</code> ~ <code>4294967295</code></td></tr><tr><td style="text-align:center;"><code>int64</code></td><td style="text-align:center;">\u6709</td><td style="text-align:center;">4 \u5B57\u8282</td><td style="text-align:center;"><code>-9223372036854775808</code> ~ <code>9223372036854775807</code></td></tr><tr><td style="text-align:center;"><code>uint64</code></td><td style="text-align:center;">\u65E0</td><td style="text-align:center;">4 \u5B57\u8282</td><td style="text-align:center;"><code>0</code> ~ <code>18446744073709551615</code></td></tr></tbody></table><p><code>int</code>, <code>uint</code> \u8FD9\u4E24\u4E2A\u9700\u8981\u5355\u72EC\u62FF\u51FA\u6765\u8BF4\u3002\u5B83\u4EEC\u5728\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u5177\u6709\u4E0D\u540C\u7684\u542B\u4E49\u3002\u5728 32 \u4F4D\u7CFB\u7EDF\u4E2D\uFF0C\u5B83\u4EEC\u7B49\u540C\u4E8E <code>int32</code>, <code>uint32</code>\uFF0C\u800C\u5728 64 \u4F4D\u7CFB\u7EDF\u4E2D\uFF0C\u7B49\u540C\u4E8E <code>int64</code>, <code>uint64</code>\u3002\u800C\u4E0A\u9762\u7684\u7C7B\u578B\uFF0C\u5219\u4E0D\u7BA1\u662F\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u90FD\u662F\u8FD9\u4E2A\u957F\u5EA6\u3002</p><h2 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h2><p>\u5B57\u7B26\u4E32\u7684\u6570\u636E\u7C7B\u578B\u662F <code>string</code>\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B57\u7B26\u4E32\u53D8\u91CF\u8D4B\u503C\u540E\u4E0D\u80FD\u6539\u53D8\u7684\u3002\u6240\u4EE5\u4E0B\u9762\u5BF9\u5B57\u7B26\u4E32\u7684\u67D0\u4E2A\u503C\u8FDB\u884C\u4FEE\u6539\u662F\u65E0\u6548\u7684\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>str<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u80FD\u6574\u4F53\u8FDB\u884C\u66F4\u65B0\u3002\u6BD4\u5982\u8BF4\u8FD9\u6837\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>str <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6D6E\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#\u6D6E\u70B9\u6570" aria-hidden="true">#</a> \u6D6E\u70B9\u6570</h2><p>\u6709\u4E24\u79CD\u7C7B\u578B <code>float32</code> \u548C <code>float64</code> \u4E24\u79CD\u7C7B\u578B\u3002</p>`,15),p=t("\u5177\u4F53\u5185\u5BB9\u53C2\u8003\uFF1A"),g={href:"https://www.cnblogs.com/HappyTeemo/p/15405577.html",target:"_blank",rel:"noopener noreferrer"},u=t("float32 \u548C float64"),h=t("\u3002"),x=d("<p><code>string</code> \u662F\u4E00\u4E2A\u7C7B\u578B\u3002\u4F46\u662F\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u5176\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002</p><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u8BB2\u89E3\u4E24\u4E2A\u3002\u4E00\u4E2A\u662F <code>rune</code>\uFF0C\u4E00\u4E2A\u662F <code>byte</code>\u3002\u5B83\u4EEC\u5206\u522B\u662F <code>int8</code> \u548C <code>int32</code> \u7684\u522B\u540D\u3002\u65E2\u7136\u662F\u8FD9\u6837\uFF0C\u5B9A\u4E49\u8FD9\u4E24\u4E2A\u53C8\u6709\u4EC0\u4E48\u4F5C\u7528\u5462\u3002</p><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u7528\u6765\u4F5C\u4E3A\u5B57\u7B26\u4E32\u7684\u8F85\u52A9\u6765\u4F7F\u7528\u7684\u3002</p><p>\u5B83\u4EEC\u7684\u533A\u522B\u662F <code>byte</code> \u662F\u4EE5\u4E00\u4E2A\u5B57\u8282\u4E3A\u57FA\u51C6\u8FDB\u884C\u5206\u5272\u5B57\u7B26\u4E32\uFF0C\u800C <code>rune</code> \u662F\u4EE5\u4E00\u4E2A\u5B57\u7B26\u4E3A\u57FA\u51C6\u5206\u5272\u5B57\u7B26\u4E32\u3002</p><ul><li>\u6574\u6570\uFF1A <code>rune</code>, <code>byte</code>, <code>uintptr</code></li><li>\u6D6E\u70B9\u6570\uFF1A<code>float32</code>, <code>float64</code></li><li>\u590D\u6570\uFF1Acomplex64, complex128</li><li>bool</li><li>string</li></ul><blockquote><p>https://go.dev/ref/spec</p></blockquote>",6);function y(b,_){const n=o("ExternalLinkIcon");return a(),l("div",null,[i,e("blockquote",null,[e("p",null,[p,e("a",g,[u,s(n)]),h])]),x])}var v=c(r,[["render",y],["__file","datatype.html.vue"]]);export{v as default};