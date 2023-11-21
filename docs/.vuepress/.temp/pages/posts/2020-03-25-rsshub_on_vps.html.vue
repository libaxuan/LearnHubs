<template><div><p>RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好<strong>域名和服务器</strong>。</p>
<p>新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。</p>
<h2 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤" aria-hidden="true">#</a> 部署步骤</h2>
<ol>
<li>
<p>将 RSSHub 代码下载到根目录 root，执行命令 <code v-pre>git clone https://github.com/DIYgod/RSSHub.git</code>。</p>
</li>
<li>
<p>安装宝塔面板，查看<a href="https://www.bt.cn/bbs/thread-19376-1-1.html" target="_blank" rel="noopener noreferrer">官方安装教程<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>登陆宝塔面板，点击「软件商店」-「运行环境」，安装<strong>PM2 管理器</strong>。</p>
<figure><img src="https://img.gpt-vip.top/20200325120705.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 <code v-pre>lib</code>。</p>
<figure><img src="https://img.gpt-vip.top/20200325121639.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>添加后，点击项目中的「映射」，输入指定域名，如 <code v-pre>rsshub.xxx.com</code>，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。</p>
<figure><img src="https://img.gpt-vip.top/20200325121921.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<p>程序运行时，如果遇到报错，可以直接用命令运行 pm2，如 <code v-pre>pm2 start /root/RSSHub/lib/index.js --name rsshub</code>。</p>
<h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2>
<ol>
<li>
<p>打开 <a href="https://docs.rsshub.app/" target="_blank" rel="noopener noreferrer">RSSHub 接口指南<ExternalLinkIcon/></a>，搜索需要订阅的网站。RSSHub 支持国内大部分的主流网站。</p>
</li>
<li>
<p>根据 <a href="https://docs.rsshub.app/social-media.html#bilibili" target="_blank" rel="noopener noreferrer">bilibili 番剧路由<ExternalLinkIcon/></a>的文档，将生成源 <code v-pre>https://rsshub.app/bilibili/bangumi/media/9192</code> 其中的域名 <code v-pre>https://rsshub.app</code> 替换为你自部署的域名，如 <code v-pre>http://rsshub.xxx.com/bilibili/bangumi/media/9192</code>。</p>
</li>
</ol>
<p>另外 RSSHub 支持很多实用的参数，比如内容过滤、全文输出等。全文输出参数为 <code v-pre>mode=fulltext</code>，应用举例：果壳科学人全文输出 <code v-pre>https://rsshub.xxx.com/guokr/scientific?mode=fulltext</code>。其他可以在<a href="https://docs.rsshub.app/parameter.html" target="_blank" rel="noopener noreferrer">通用参数<ExternalLinkIcon/></a>官方文档了解具体使用方法。</p>
<h2 id="rsshub-vs-huginn" tabindex="-1"><a class="header-anchor" href="#rsshub-vs-huginn" aria-hidden="true">#</a> RSSHub VS. Huginn</h2>
<ul>
<li>RSSHub：使用简单，使用现成的抓取规则，适用于国内主流网站；但无法抓取对小众网站，必须 RSSHub 官方定制订阅源。</li>
<li>Huginn：适用于所有网站，可设定抓取频率、内容结构、js 结果、输出样式等；但部署、配置复杂，入门门槛高，需要针对网站单独定制抓取规则。</li>
</ul>
<h2 id="rss-合集" tabindex="-1"><a class="header-anchor" href="#rss-合集" aria-hidden="true">#</a> RSS 合集</h2>
<p>汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。</p>
<ul>
<li>
<p><a href="https://gpt-vip.top/posts/2017-04-22-rss_feed43_feedex.html" target="_blank" rel="noopener noreferrer">RSS 入门篇：FEED43&amp;FeedEx-为静态网页定制 RSS 源<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://gpt-vip.top/posts/2018-10-07-huginn_scraping_any_website.html" target="_blank" rel="noopener noreferrer">RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://gpt-vip.top/posts/2019-04-01-rsshub_noob.html" target="_blank" rel="noopener noreferrer">RSS 速成篇：RSSHub 捡现成的轮子<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://gpt-vip.top/posts/2020-03-25-rsshub_on_vps.html" target="_blank" rel="noopener noreferrer">RSS 速成篇 2：RSSHub 自部署<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://gpt-vip.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html" target="_blank" rel="noopener noreferrer">RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://gpt-vip.top/posts/2022-03-17-rss_persistent_link_collection.html" target="_blank" rel="noopener noreferrer">RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


