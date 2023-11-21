<template><div><p>随着电视、机顶盒、以及 IPTV 盒的增多，家中的遥控器也变得越来越多。为了摆脱众多的遥控器，开始直接使用直播源来播放电视。</p>
<p>如果你有上海电信的 IPTV，可以使用 lucifersun 抓取的<a href="https://github.com/lucifersun/China-Telecom-ShangHai-IPTV-list" target="_blank" rel="noopener noreferrer">上海电信 IPTV 视频回放源<ExternalLinkIcon/></a>（原理上<strong>仅限上海电信</strong>）。借助直播源地址，我们可以在 PC、电视、手机上直接看电视直播。这个 IPTV 直播源比电视直播<strong>慢 15 秒</strong>，对普通用户来说已经足够了。回放服务器已屏蔽公网 IP 的访问，仅限 vlan85 的 B 平面专网 IP 访问，参考：<a href="https://github.com/lucifersun/China-Telecom-ShangHai-IPTV-list/issues/28" target="_blank" rel="noopener noreferrer">电信公网疑似已屏蔽回放源 IP · Issue #28<ExternalLinkIcon/></a></p>
<blockquote>
<p>这个播放列表使用 IPTV 的频道 回放 功能。IPTV 直播用的是专网组播，无法直接通过 Internet 播放。<br>
因为不是所有频道都支持回放，所以这个列表里的频道 必然少于 IPTV 的直播频道。<br>
还有部分频道的回放地址播放错误，所以也没有收录。</p>
</blockquote>
<p>如果你没有 IPTV，推荐使用 fanmingming 的 <a href="https://github.com/fanmingming/live" target="_blank" rel="noopener noreferrer">live<ExternalLinkIcon/></a> 项目，这是一个国内可直连的直播源分享项目，直播源支持 IPv4/IPv6 双栈访问。</p>
<h2 id="提取直播源列表" tabindex="-1"><a class="header-anchor" href="#提取直播源列表" aria-hidden="true">#</a> 提取直播源列表</h2>
<p>进入<a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/lucifersun/China-Telecom-ShangHai-IPTV-list/master/IPTV.html" target="_blank" rel="noopener noreferrer">上海电信 IPTV 视频流地址<ExternalLinkIcon/></a>。点击「生成 txt 内容」，然后复制下方的<strong>视频直播源列表</strong>，保存为 tv.txt，并将 tv.txt 文本转为 <strong>ANSI 编码</strong>（避免节目名会出现中文乱码）。</p>
<figure><img src="https://img.gpt-vip.top/20180619170944.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="电视盒子直播" tabindex="-1"><a class="header-anchor" href="#电视盒子直播" aria-hidden="true">#</a> 电视盒子直播</h2>
<ol>
<li>
<p>电视盒子上安装 APP-「超级直播」。</p>
</li>
<li>
<p>进入「超级直播」应用后，点击「设置」-「二维码扫一扫 开启更多功能」，调出隐藏管理地址 <code v-pre>192.168.2.203:9188</code>。</p>
</li>
<li>
<p>用与电视盒子位于同一局域网的电脑或手机访问<strong>隐藏管理地址</strong>，点击「我」-「上次自定义 (tv.txt)」-「上传」，上传刚保存好的 tv.txt。</p>
<figure><img src="https://img.gpt-vip.top/20180619164137.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>将「超级直播」的播放列表切换到<strong>自定义</strong>，直接观看导入的电视节目。</p>
</li>
</ol>
<h2 id="pc-端电视直播" tabindex="-1"><a class="header-anchor" href="#pc-端电视直播" aria-hidden="true">#</a> PC 端电视直播</h2>
<ol>
<li>
<p>PC 端安排 <a href="http://www.potplayer.org/" target="_blank" rel="noopener noreferrer">Potplayer<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>复制节目 rtsp 直播源链接，打开 Potplayer , 右键单击主界面 &gt;「打开」&gt;「打开剪贴板」。</p>
<figure><img src="https://img.gpt-vip.top/20180619140722.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<p>这样就可以在 PC 端看电视了。</p>
<p>参考资料：</p>
<ul>
<li><a href="http://koolshare.cn/thread-133246-1-1.html" target="_blank" rel="noopener noreferrer">丢了你的 iptv 吧！上海电信 IPTV 直播源<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/lucifersun/China-Telecom-ShangHai-IPTV-list" target="_blank" rel="noopener noreferrer">上海电信 IPTV 视频流项目主页<ExternalLinkIcon/></a></li>
<li><a href="http://htmlpreview.github.io/?https://raw.githubusercontent.com/lucifersun/China-Telecom-ShangHai-IPTV-list/master/iptvplayseek.html" target="_blank" rel="noopener noreferrer">上海电信 IPTV 视频流地址<ExternalLinkIcon/></a></li>
</ul>
</div></template>


