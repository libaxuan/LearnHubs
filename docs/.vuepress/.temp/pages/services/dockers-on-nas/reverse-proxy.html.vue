<template><div><p>反向代理是一种方便的后端工具，其作用是拦截所有传入请求并进行统一的转发管理。在 Docker 容器管理领域，使用反向代理可以让你摆脱繁琐的端口号记忆，只需通过不同的域名即可访问特定的 Docker 服务。常见的反向代理工具包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky。</p>
<h2 id="nginx-proxy-manager" tabindex="-1"><a class="header-anchor" href="#nginx-proxy-manager" aria-hidden="true">#</a> Nginx Proxy Manager</h2>
<p><a href="https://github.com/jlesage/docker-nginx-proxy-manager" target="_blank" rel="noopener noreferrer">Nginx Proxy Manager<ExternalLinkIcon/></a> 具备图形用户界面，其 SSL 证书有效期为 3 个月，到期时会自动续期。由于国内家用宽带不支持 80 和 443 端口，因此这里未采用 Nginx Proxy Manager 官方容器，同时由于端口原因也不建议使用 Caddy。如果你对 Nginx Proxy Manager 不熟悉，也可以尝试国内开发的<a href="https://www.nginxwebui.cn/product.html" target="_blank" rel="noopener noreferrer">nginxWebUI<ExternalLinkIcon/></a>，它同样集成了图形化配置、SSL 证书申请、自动续签 SSL 证书等功能。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.8'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">'jlesage/nginx-proxy-manager:latest'</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>manager
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'9001:8080'</span>
      <span class="token punctuation">-</span> <span class="token string">'9002:8181'</span>
      <span class="token punctuation">-</span> <span class="token string">'9003:4443'</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/nginx<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>manager/config<span class="token punctuation">:</span>/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要访问后台管理界面，请前往 <code v-pre>localhost:9002</code>。初始登录账户为 <code v-pre>admin@example.com</code>，密码为 <code v-pre>changeme</code>。初次登录时，系统会提示你修改默认账户和密码。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<p>反向代理启用后，路由器只需要开放 9003 端口即可实现流量转发，避免了我们在公网上开放不必要的端口。接下来，通过 CNAME 方式将你定制的域名 xxx.gpt-vip.top 解析到你家中的 DDNS 域名 yyy.gpt-vip.top。完成设置后，访问 xxx.gpt-vip.top:9003 即可访问指定服务，并享受自动 SSL 部署的便利。在需要切换到其他服务时，只需更改 xxx 部分的服务名即可。</p>
<h2 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy" aria-hidden="true">#</a> Caddy</h2>
<p><a href="https://caddyserver.com/" target="_blank" rel="noopener noreferrer">Caddy<ExternalLinkIcon/></a> 的配置更加简便，但需要注意的是，Caddy v2 在默认情况下使用 http-01 方式进行 HTTPS 证书申请，这要求你能够通过公网访问域名的 80/443 端口，以进行所有权验证。因此，在国内的情况下，你可能需要手动指定证书。你可以选择通过 Certbot 免费申请证书，或者在阿里云、腾讯云等平台免费申请一年有效的证书。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.9"</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">caddy</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> caddy<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> caddy
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">"9080:80"</span>
      <span class="token punctuation">-</span> <span class="token string">"9443:443"</span>
      <span class="token punctuation">-</span> <span class="token string">"9443:443/udp"</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/caddy/Caddyfile<span class="token punctuation">:</span>/etc/caddy/Caddyfile
      <span class="token punctuation">-</span> /volume1/docker/caddy/site<span class="token punctuation">:</span>/srv
      <span class="token punctuation">-</span> /volume1/docker/caddy/caddy_data<span class="token punctuation">:</span>/data
      <span class="token punctuation">-</span> /volume1/docker/caddy/caddy_config<span class="token punctuation">:</span>/config

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">caddy_data</span><span class="token punctuation">:</span>
  <span class="token key atrule">caddy_config</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="https://post.smzdm.com/p/az6989nn/" target="_blank" rel="noopener noreferrer">NAS 原来这么有用 篇 143：一个端口访问 NAS 所有服务，使用二级域名定义你的每一项服务<ExternalLinkIcon/></a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


