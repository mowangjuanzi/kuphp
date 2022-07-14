import{_ as s,r as a,o as i,c as t,a as n,b as o,e as p,d as l}from"./app.effe2eb5.js";const c={},r=p(`<h1 id="ubuntu-\u4E0D\u80FD\u542F\u52A8-appimage" tabindex="-1"><a class="header-anchor" href="#ubuntu-\u4E0D\u80FD\u542F\u52A8-appimage" aria-hidden="true">#</a> ubuntu \u4E0D\u80FD\u542F\u52A8 AppImage</h1><p>\u5728\u7EC8\u7AEF\u6267\u884C <code>AppImage</code> \u6587\u4EF6\u65F6\u63D0\u793A\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./Trojan-Qt5-Linux.AppImage 
dlopen<span class="token punctuation">(</span><span class="token punctuation">)</span>: error loading libfuse.so.2

AppImages require FUSE to run. 
You might still be able to extract the contents of this AppImage 
<span class="token keyword">if</span> you run it with the --appimage-extract option. 
See https://github.com/AppImage/AppImageKit/wiki/FUSE 
<span class="token keyword">for</span> <span class="token function">more</span> information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C31\u53BB\u8BBF\u95EE\u4E86\u4E00\u4E0B\u6307\u5B9A\u94FE\u63A5\u3002\u73B0\u5728\u8BB0\u5F55\u4E0B\u89E3\u51B3\u65B9\u6848\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fuse libfuse2
<span class="token function">sudo</span> modprobe fuse
<span class="token function">sudo</span> <span class="token function">groupadd</span> fuse
<span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">whoami</span><span class="token variable">)</span></span>&quot;</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -a -G fuse <span class="token variable">$user</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003\uFF1A</p>`,6),u={href:"https://github.com/AppImage/AppImageKit/wiki/FUSE",target:"_blank",rel:"noopener noreferrer"},d=l("https://github.com/AppImage/AppImageKit/wiki/FUSE");function m(v,b){const e=a("ExternalLinkIcon");return i(),t("div",null,[r,n("blockquote",null,[n("p",null,[n("a",u,[d,o(e)])])])])}var h=s(c,[["render",m],["__file","linux-appimage.html.vue"]]);export{h as default};
