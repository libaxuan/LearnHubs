<template><div><p>Tiny Tiny RSS 推荐用 <a href="http://ttrss.henry.wang/zh/" target="_blank" rel="noopener noreferrer">Awesome TTRSS<ExternalLinkIcon/></a> 的 Docker 镜像，搭建步骤参考 <RouterLink to="/services/NAS.html#nas-docker">NAS 上搭建 Docker</RouterLink>。Awesome TTRSS 镜像不含插件「no_title_counters」，导致 TTRSS 网页标题会显示未读 RSS 数量。</p>
<ul>
<li>主题：<a href="https://github.com/levito/tt-rss-feedly-theme" target="_blank" rel="noopener noreferrer">feedly-sepia.css<ExternalLinkIcon/></a></li>
<li>常见问题：<a href="https://tt-rss.org/wiki/FAQ" target="_blank" rel="noopener noreferrer">Tiny Tiny RSS – FAQ<ExternalLinkIcon/></a></li>
<li>定期备份：选择「偏好设置」&gt;「订阅源」导出订阅源和 tt-rss 设置。</li>
<li>移动端：<a href="https://gitlab.tt-rss.org/tt-rss/tt-rss-android/-/releases" target="_blank" rel="noopener noreferrer">Tiny Tiny RSS for Android<ExternalLinkIcon/></a>。由于 Google Play 的折腾，作者已经放弃在 Play 上更新本应用，改为通过 CI/CD 自动构建并取消了收费。</li>
</ul>
<h2 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署" aria-hidden="true">#</a> 手动部署</h2>
<p>虽然 Tiny Tiny RSS 官方推荐用 Docker 部署，不过手动部署也很简单，挑选适合自己的方式即可。</p>
<ol>
<li>进入指定目录，<code v-pre>cd /www/wwwroot/</code>。</li>
<li>新建 rss 目录，并下载最新 tt-rss，<code v-pre>git clone https://git.tt-rss.org/fox/tt-rss.git rss</code>。</li>
<li>打开 rss 链接，页面会出现指定要求，如：提升文件权限，删除禁用函数 passthru，安装 php 扩展-fileinfo。配置好后，重新加载 php 配置。</li>
</ol>
<p>部署完成后，需要让 TTRSS 定期更新 RSS，步骤参考 <a href="https://tt-rss.org/wiki/UpdatingFeeds" target="_blank" rel="noopener noreferrer">Tiny Tiny RSS – Updating Feeds<ExternalLinkIcon/></a>。如果遇到提示 daemon 未启动，可删除 <code v-pre>lock/update_daemon.lock</code>和<code v-pre>update_daemon.stamp</code>。</p>
<p>阿里云<a href="https://www.cnblogs.com/imyalost/p/9801426.html" target="_blank" rel="noopener noreferrer">用非 root 账户登录远程 vnc<ExternalLinkIcon/></a>，然后启动 RSS 更新 (默认 2 分钟)。远程 vnc 黑屏时，点左上角「发送远程命令」，点击菜单栏或「关机后重新启动」后不再黑屏。不用直接重启，否则报错。</p>
<ul>
<li>指定 PHP 版本来运行：<code v-pre>/www/server/php/74/bin/php /www/wwwroot/rss/update.php --daemon</code>。</li>
<li>不指定版本运行：<code v-pre>php /www/wwwroot/rss/update.php --daemon</code>。</li>
</ul>
<p>服务器使用定时任务更新 TTRSS：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span> <span class="token comment">#进入 Cpanel 面板添加定时任务</span>
*/15 * * * * /usr/bin/php /www/wwwroot/rss/update.php <span class="token parameter variable">--feeds</span> <span class="token parameter variable">--quiet</span> <span class="token comment">#只安装了一个php</span>
*/15 * * * * /www/server/php/74/bin/php /www/wwwroot/rss/update.php <span class="token parameter variable">--feeds</span> <span class="token parameter variable">--quiet</span> <span class="token comment">#安装了多个php</span>
<span class="token comment"># 同时按下ctrl+c退出编辑模式，按下shift+: 输入wq 退出 crontab</span>
*/15 * * * *表示每隔15分钟更新一次，你可以自己改成其它的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器或 nginx 重启后，TTRss 会出现文件夹权限丢失，需重新设置权限。建议将此步骤设为定期任务自动执行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/cache/images
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/cache/upload
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/cache/export
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/feed-icons
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /www/wwwroot/rss/lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级 Tiny Tiny RSS：进行 TTRSS 目录后执行升级命令 <code v-pre>git pull origin master</code>。无法升级时重命名 TTRSS 路径，全新下载后没问题再删除。数据库没变化就没事，主题重新安装。</p>
</div></template>


