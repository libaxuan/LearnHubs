<template><div><p>有时在外面需要访问家里的文件，或直接利用家中网络设置翻墙。为此，利用路由器 OpenVPN 搭建了一条回家的路。</p>
<h2 id="内网穿透" tabindex="-1"><a class="header-anchor" href="#内网穿透" aria-hidden="true">#</a> 内网穿透</h2>
<p>连接家中内网，家里必须有个固定的访问地址。我将子域名 <a href="http://home.xxx.com" target="_blank" rel="noopener noreferrer">home.xxx.com<ExternalLinkIcon/></a> 指向家中 IP。</p>
<p>梅林路由器进入「高级设置」→「外部网络（WAN）」→「DDNS」，将路由器指向准备好的子域名。</p>
<figure><img src="https://img.gpt-vip.top/20190331203233.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>电信分配的公网 IP 经常会更换，每次都需要重定向子域名。在路由器 koolshare - 软件中心中安装 Aliddns，帮助更新家的公网 IP。插件中输入定向子域名和阿里云的 appkey，配置就完成了。如果没有自动在阿里云解析，可以先手动解析设置。</p>
<p>光猫设置参考<a href="https://gpt-vip.top/posts/2018-06-08-Baizhuo_GP1700.html" target="_blank" rel="noopener noreferrer">光猫改造 篇三：百卓 GP1700 进阶设置 - 端口映射<ExternalLinkIcon/></a>。</p>
<h2 id="openvpn-配置" tabindex="-1"><a class="header-anchor" href="#openvpn-配置" aria-hidden="true">#</a> OpenVPN 配置</h2>
<p>内网穿透完成后，开始 OpenVPN 配置。梅林路由器进入「高级设置」→「VPN」→「虚拟专用网（VPN）服务器」，开启路由器自带的 OpenVPN。</p>
<figure><img src="https://img.gpt-vip.top/20190331200921.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>高级配置红色的部分有修改，特别是<strong>VPN 子网必须修改为与路由器不同的号段</strong>，如 192.168.3.0。如果使用默认子网，会无法顺利翻墙。</p>
<p>应用设置后，点击「一般设置」，并导出 .ovpn 文件。打开该配置文件，将远程端口改为光猫上虚拟服务器映射的端口。</p>
<figure><img src="https://img.gpt-vip.top/20190331202017.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>最后，手机导入 <code v-pre>.ovpn</code> 设置文件，就可以上网回家了！</p>
</div></template>


