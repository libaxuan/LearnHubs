<template><div><p><a href="https://github.com/louislam/uptime-kuma" target="_blank" rel="noopener noreferrer">Uptime Kuma<ExternalLinkIcon/></a> 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。如果您只需检查特定关键词是否存在于网页中，使用 Uptime Kuma 就足够了。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.8'</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">uptime-kuma</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> louislam/uptime<span class="token punctuation">-</span>kuma<span class="token punctuation">:</span><span class="token number">1</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> uptime<span class="token punctuation">-</span>kuma
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/uptime<span class="token punctuation">-</span>kuma/data<span class="token punctuation">:</span>/app/data
      <span class="token comment"># 用于 Docker 容器监控</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">"3001:3001"</span>  <span class="token comment"># &lt;Host Port>:&lt;Container Port></span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


