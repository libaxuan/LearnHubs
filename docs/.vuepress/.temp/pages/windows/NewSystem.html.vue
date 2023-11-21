<template><div><h2 id="重装准备" tabindex="-1"><a class="header-anchor" href="#重装准备" aria-hidden="true">#</a> 重装准备</h2>
<ul>
<li>备份<a href="https://gpt-vip.top/apps/Applist.html" target="_blank" rel="noopener noreferrer">必备应用<ExternalLinkIcon/></a>，油猴脚本，输入法配置，UMP 版微信聊天记录 <code v-pre>C:\Users\Benson\AppData\Local\Packages\TencentWeChatLimited.forWindows10_sdtnhv12zgd7a\LocalCache\Roaming\Tencent\WeChatAppStore</code>。</li>
<li>核对群晖已同步到最新备份。</li>
<li>反激活已购软件，如：Eagle、MoneyWiz、妙笔。</li>
<li>更新<a href="https://www.microsoft.com/zh-cn/software-download/windows11" target="_blank" rel="noopener noreferrer">原版镜像<ExternalLinkIcon/></a>。</li>
</ul>
<h2 id="安装系统" tabindex="-1"><a class="header-anchor" href="#安装系统" aria-hidden="true">#</a> 安装系统</h2>
<p>系统重装/维修前，在 <strong>NTFS/exFAT</strong> 格式的 U 盘上安装<a href="https://www.itsk.com/thread-428078-1-1.html" target="_blank" rel="noopener noreferrer">优启通<ExternalLinkIcon/></a>或<a href="https://www.wepe.com.cn/" target="_blank" rel="noopener noreferrer">微 PE 工具箱<ExternalLinkIcon/></a>。Windows 10/11 镜像超过 4GB，已经不再支持 FAT32 格式的 U 盘。</p>
<p>使用 U 盘引导安装系统：</p>
<ul>
<li>本地安装：右键 ISO 文件，选择挂载；在新出现的驱动器中，找到 setup.exe，直接运行；选择「现在安装」。</li>
<li>引导安装：采用 UEFI+GPT。如果是自定义安装清空系统盘所有分区后，一定要用 <strong>GPT</strong> 对系统盘分区。</li>
</ul>
<h2 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置" aria-hidden="true">#</a> 系统配置</h2>
<ul>
<li>将电脑调整到高性能/卓越模式。</li>
<li>将 Documents、Desktop 转移到 D 盘。</li>
<li>任务栏：在任务栏底部右键单击，选择「任务栏设置」&gt;「通知区域」&gt;「选择哪些图标显示在任务栏上」；在同页面的「多显示器设置」中，取消「在所有显示器上显示任务栏」。</li>
<li><a href="https://zhuanlan.zhihu.com/p/25942015" target="_blank" rel="noopener noreferrer">清理导航栏<ExternalLinkIcon/></a>。</li>
<li><a href="https://gpt-vip.top/posts/2017-09-02-forced_shutdown.html" target="_blank" rel="noopener noreferrer">设置系统强制关机<ExternalLinkIcon/></a>，防止系统关机不成功。</li>
<li>Everything 注册右键搜索当前路径；右键清除。
<ul>
<li>win+r，regedit 打开注册表，打开路径 <code v-pre>HKEY_CLASSES_ROOT\Directory\Background\shell</code>。</li>
<li>新建项，命名随意（即右键菜单显示的文字）-「Everything 搜索当前路径」。</li>
<li>右键再次新建项，命名 Command，打开修改右侧默认值为 <code v-pre>&quot;D:\Everything\Everything.exe&quot; -path &quot;.&quot;</code>。</li>
</ul>
</li>
<li>显示屏参数：屏幕换线或换主机，参数可能会变动。
<ul>
<li>左侧：自定义颜色，红 70 绿 75 蓝 50；亮度 66，对比 75。</li>
<li>右侧 0020：自定义颜色，红 70 绿 75 蓝 50；亮度 50，对比 80。</li>
</ul>
</li>
</ul>
<h2 id="安装应用" tabindex="-1"><a class="header-anchor" href="#安装应用" aria-hidden="true">#</a> 安装应用</h2>
<ul>
<li><a href="https://gpt-vip.top/posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html" target="_blank" rel="noopener noreferrer">winstall<ExternalLinkIcon/></a> 批量安装应用；</li>
<li>电脑运行 Android 手机应用，<a href="https://www.iplaysoft.com/win11-wsa.html" target="_blank" rel="noopener noreferrer">Win11 安卓子系统<ExternalLinkIcon/></a> (WSA) 安装；</li>
<li>Synology Drive：设置 NAS 本地备份；</li>
<li>Mircrosoft Store：Snipaste、微信 For Windows；</li>
<li>绿色开机：Keepass、Ditto、RunAny、天若 OCR；WPS 安装宏；</li>
<li>配置：Eagle、RIME、Picgo、wonderpen；</li>
<li>firefox-about:config 修改原值 18 的 <code v-pre>ui.key.menuAccessKey</code> 为 0，以屏蔽 alt 防止热键冲突；选择「options」&gt;「Network Settings」，取消勾选「DNS over HTTPS」；</li>
<li>火绒－安全设置－高级防护－导入隐私规则，增加<a href="https://github.com/tutugreen/Huorong-Rules/tree/main/Tencent" target="_blank" rel="noopener noreferrer">腾讯屏蔽规则<ExternalLinkIcon/></a>。</li>
</ul>
<h2 id="修改按键" tabindex="-1"><a class="header-anchor" href="#修改按键" aria-hidden="true">#</a> 修改按键</h2>
<ul>
<li>Powertoys：将 insert 键改为 backspace；</li>
<li>Option：计算器改为「上一个桌面」；右键菜单改为「下一个桌面」。</li>
</ul>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<ul>
<li>Win11 本地账户也被提示需要登录密码，但设置密码后，无法直接开机登录。设置新密码后，点击「设置」&gt;「账户」&gt;「登录选项」&gt;「密码」，可以重新设置空密码，实现自动登录。</li>
<li><a href="https://dandelioncloud.cn/article/details/1569126817577791489" target="_blank" rel="noopener noreferrer">WSL 从 C 盘迁移至 D 盘的简单实用方法<ExternalLinkIcon/></a></li>
<li>英语键盘删不掉：添加英语语言包，然后再删除，英语键盘也会一起删除。</li>
<li>右键更改前先备份注册表，有几率会影响系统稳定性。</li>
<li>实时将音频转文字：管理员方式安装 <a href="https://vb-audio.com/Cable/" target="_blank" rel="noopener noreferrer">VB-CABLE<ExternalLinkIcon/></a>，输入输出设备都选 VB-CABLE，详细设置查看 <a href="https://www.youtube.com/watch?v=1DsrniDGOJQ" target="_blank" rel="noopener noreferrer">How to Convert Audio to Text - FREE &amp; No Time Limits<ExternalLinkIcon/></a>。</li>
<li>开机用<RouterLink to="/code/AutoHotkey.html#%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC">管理员权限启动脚本</RouterLink>。</li>
</ul>
</div></template>


