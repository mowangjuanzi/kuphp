import{_ as o,r as c,o as t,c as l,a as n,b as a,e as i,d as e}from"./app.4df1de64.js";const r={},d=i(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>// TODO</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> version
Client:
 Version:           <span class="token number">20.10</span>.12
 API version:       <span class="token number">1.41</span>
 Go version:        go1.17.3
 Git commit:        <span class="token number">20.10</span>.12-0ubuntu4
 Built:             Mon Mar  <span class="token number">7</span> <span class="token number">17</span>:10:06 <span class="token number">2022</span>
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      <span class="token boolean">true</span>

Server:
 Engine:
  Version:          <span class="token number">20.10</span>.12
  API version:      <span class="token number">1.41</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.17.3
  Git commit:       <span class="token number">20.10</span>.12-0ubuntu4
  Built:            Mon Mar  <span class="token number">7</span> <span class="token number">15</span>:57:50 <span class="token number">2022</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.5</span>.9-0ubuntu3
  GitCommit:        
 runc:
  Version:          <span class="token number">1.1</span>.0-0ubuntu1
  GitCommit:        
 docker-init:
  Version:          <span class="token number">0.19</span>.0
  GitCommit:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u8FD0\u884C\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl status <span class="token function">docker</span>
\u25CF docker.service - Docker Application Container Engine
     Loaded: loaded <span class="token punctuation">(</span>/lib/systemd/system/docker.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
     Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Sat <span class="token number">2022</span>-04-23 <span class="token number">18</span>:54:26 CST<span class="token punctuation">;</span> 2min 25s ago
TriggeredBy: \u25CF docker.socket
       Docs: https://docs.docker.com
   Main PID: <span class="token number">10058</span> <span class="token punctuation">(</span>dockerd<span class="token punctuation">)</span>
      Tasks: <span class="token number">9</span>
     Memory: <span class="token number">30</span>.1M
        CPU: 361ms
     CGroup: /system.slice/docker.service
             \u2514\u250010058 /usr/bin/dockerd -H fd:// --containerd<span class="token operator">=</span>/run/containerd/containerd.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-io-vs-docker-ce" tabindex="-1"><a class="header-anchor" href="#docker-io-vs-docker-ce" aria-hidden="true">#</a> docker.io vs. docker-ce</h2>`,11),u=e("\u53EF\u4EE5\u53C2\u8003 "),p={href:"https://www.collabora.com/news-and-blog/blog/2018/07/04/docker-io-debian-package-back-to-life/",target:"_blank",rel:"noopener noreferrer"},m=e("The docker.io Debian package is back to life"),v=e("\u3002"),b=i(`<p>\u7B80\u5355\u8BF4\u4E0B\u5C31\u662F\u6253\u5305\u65B9\u5F0F\u4E0D\u540C\u3002</p><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h2><p>\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">docker-compose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),k=n("p",null,"\u5B98\u65B9\u5DF2\u7ECF\u6709 Golang \u91CD\u5199\u7684 v2 \u7248\u672C\u3002v1 \u7248\u672C\u662F\u4F7F\u7528 Python \u7F16\u5199\u7684\u3002\u4F46\u662F Ubuntu 22.04 \u9ED8\u8BA4\u8FD8\u662F v1\u3002",-1),h=e("\u6211\u53BB\u67E5\u770B\u4E86\u4E00\u4E0B"),f={href:"https://docs.docker.com/compose/cli-command/#transitioning-to-ga-for-compose-v2",target:"_blank",rel:"noopener noreferrer"},_=e("\u5B98\u65B9\u6587\u6863"),g=e("\u3002\u5B98\u65B9\u63CF\u8FF0\u5982\u4E0B\uFF1A"),x=n("p",null,"We would like to make the Compose V2 transition to be as smooth as possible for all users. We currently don\u2019t have a concrete timeline to deprecate Compose V1. We will review the feedback from the community on the GA and the adoption on Linux, and come up with a plan to deprecate Compose V1. We are not planning to remove the aliasing of to . We would like to make it easier for users to switch to V2 without breaking any existing scripts. We will follow up with a blog post with more information on the exact timeline on V1 deprecation and the end of support policies for security issues.",-1),w=n("p",null,"\u8BE5\u6BB5\u5185\u5BB9\u8868\u793A\u5E76\u6CA1\u6709\u660E\u786E\u7684\u5F03\u7528\u8BA1\u5212\u3002\u6240\u4EE5\u7EE7\u7EED\u4F7F\u7528 v1 \u4E5F\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\u3002",-1);function V(C,y){const s=c("ExternalLinkIcon");return t(),l("div",null,[d,n("p",null,[u,n("a",p,[m,a(s)]),v]),b,n("blockquote",null,[k,n("p",null,[h,n("a",f,[_,a(s)]),g]),x,w])])}var A=o(r,[["render",V],["__file","index.html.vue"]]);export{A as default};
