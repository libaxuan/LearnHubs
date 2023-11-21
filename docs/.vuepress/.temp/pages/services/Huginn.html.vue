<template><div><ul>
<li>Huginn 部署：查看 <a href="https://github.com/huginn/huginn/blob/master/doc/docker/install.md" target="_blank" rel="noopener noreferrer">deploy Huginn inside of Docker<ExternalLinkIcon/></a> 和 <a href="https://github.com/huginn/huginn/blob/master/.env.example" target="_blank" rel="noopener noreferrer">.env 设置<ExternalLinkIcon/></a>，或按下方的教程手动部署到服务器上，轻量使用推荐部署到 Docker。</li>
<li>Huginn 抓取教程：<a href="https://gpt-vip.top/posts/2018-10-07-huginn_scraping_any_website.html" target="_blank" rel="noopener noreferrer">RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）<ExternalLinkIcon/></a></li>
</ul>
<h2 id="常用-agent" tabindex="-1"><a class="header-anchor" href="#常用-agent" aria-hidden="true">#</a> 常用 Agent</h2>
<p><a href="https://github.com/huginn/huginn/wiki/Agent-Types-&amp;-Descriptions" target="_blank" rel="noopener noreferrer">Huginn Agents<ExternalLinkIcon/></a>：</p>
<ul>
<li>
<p>Website Agent 解析网页、XML 文档和 json 数据，最常使用</p>
</li>
<li>
<p>Event Formatting Agent 事件信息格式化，可以对收到的信息内容进行格式化，允许添加自定义新内容</p>
</li>
<li>
<p>Phantom Js Cloud Agent 借助 Phantom 抓取动态页面源码，防止部门网站屏蔽爬虫</p>
</li>
<li>
<p>Trigger Agent 监控事件反馈信息的触发器，多用来过滤部分内容</p>
</li>
<li>
<p>De Duplicate Agent 去重</p>
</li>
<li>
<p>Data Output Agent 将数据以 RSS 和 Json 的形式向外部推送</p>
</li>
<li>
<p>Liquid Output Agent 自定义格式数据输出，可以用它创建 HTML 页面，json 数据等</p>
</li>
<li>
<p>Webhook Agent</p>
</li>
<li>
<p>Trigger Agent 监测敏感事件，然后可以用来发送邮件等提醒。</p>
</li>
<li>
<p>Javascript Agent 允许执行自定义的 JS 代码，可以用于个性化操作</p>
</li>
<li>
<p>Digest Agent 汇总节点，收集所有收到的事件再作为一个事件发送出去</p>
</li>
<li>
<p>Email Agent 用邮箱发送最新接收到的讯息</p>
</li>
<li>
<p>Post Agent 可以由其他节点触发，根据固定模板合并事件信息，并以 POST 或 GET 方式向指定的 URL 发起请求</p>
</li>
<li>
<p>Delay Agent 可以作为事件或者副本的暂存器或者缓冲区，统一触发发布</p>
</li>
<li>
<p>Scheduler Agent 定时器节点</p>
</li>
<li>
<p>Attribute Difference Agent 数值差异比较</p>
</li>
<li>
<p>Commander Agent 触发器代理，可以用于向其他节点发起指令控制，控制节点的执行和停止等</p>
</li>
</ul>
<p>{{created_at}} 为自带抓取时间，Agent 设置中的特殊字符<code v-pre>+</code>，需要用反义符<code v-pre>\\</code>。</p>
<h2 id="huginn-部署" tabindex="-1"><a class="header-anchor" href="#huginn-部署" aria-hidden="true">#</a> Huginn 部署</h2>
<p>Huginn 的任务有时会卡住，导致后续任务无法进行，重启容器也无法恢复正常。因此，我改为手动部署 Huginn，并定期使用重置命令以防止任务卡住。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/huginn/huginn
<span class="token function">sudo</span> bundle <span class="token builtin class-name">exec</span> rake production:force_stop
<span class="token function">sudo</span> bundle <span class="token builtin class-name">exec</span> rake production:export
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器重启后，需执行以下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> huginn <span class="token function">bash</span>
<span class="token function">sudo</span> <span class="token function">service</span> mysql restart
<span class="token function">sudo</span> <span class="token function">service</span> mysql start
<span class="token function">sudo</span> <span class="token function">service</span> nginx restart
<span class="token builtin class-name">cd</span> /home/huginn/huginn
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> safe.directory /home/huginn/huginn
<span class="token function">sudo</span> runsvdir /etc/service <span class="token operator">&amp;</span>
<span class="token function">sudo</span> bundle <span class="token builtin class-name">exec</span> rake production:export
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Huginn 经常用到的位置包括 <code v-pre>/home/huginn/huginn</code>（<code v-pre>env</code> 环境设置）和 <code v-pre>/var/lib/mysql</code>（数据库）。为了使这些位置能够在外部存储上工作，需要将外部存储位置的权限设置为 <code v-pre>everyone</code>，否则会出现错误。</p>
<p>需要注意的是，内部数据库默认情况下不会被外部识别。为了使其能够与外部进行连接，需要进行以下操作：</p>
<ol>
<li>
<p>使用 <code v-pre>sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf</code> 命令找到 <code v-pre>bind-address</code> 行，并注释掉（在行的前面添加 #）：<code v-pre>#bind-address = 127.0.0.1</code>。同时，将 <code v-pre>max_allowed_packet</code> 设置为 <code v-pre>200M</code>。</p>
</li>
<li>
<p>根据连接反馈获取连接 IP 并授权，同时开放 process 权限，方便后期数据库备份。数据库备用可使用 backup_script.sh 脚本，定期将 sql 文件导出到外部存储。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
GRANT ALL PRIVILEGES ON *.* TO <span class="token string">'huginn'</span>@<span class="token string">'172.17.0.1'</span> IDENTIFIED BY <span class="token string">'YourPassword'</span><span class="token punctuation">;</span>
GRANT PROCESS ON *.* TO <span class="token string">'huginn'</span>@<span class="token string">'localhost'</span><span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
<span class="token punctuation">\</span>q
<span class="token function">sudo</span> <span class="token function">service</span> mysql restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>2 个疑问：</p>
<ul>
<li>测试当任务卡住时，<code v-pre>rake production:export</code> 是否有效。（优化后，一直没出现卡住问题？）</li>
<li>部署时 <code v-pre>production:export</code> 步骤会提示 <code v-pre>unable to lock supervise/lock: temporary failure</code>，但此报错似乎不影响 Huginn 的运行，等有时间看看是否有相关报错。</li>
</ul>
<h3 id="ubuntu-手动部署" tabindex="-1"><a class="header-anchor" href="#ubuntu-手动部署" aria-hidden="true">#</a> Ubuntu 手动部署</h3>
<p>部署环境：Ubuntu 18.04 的 Docker 镜像（同样适用于服务器）<br>
安装参考：<a href="https://github.com/huginn/huginn/blob/master/doc/manual/installation.md" target="_blank" rel="noopener noreferrer">Manual Installation on Debian/Ubuntu<ExternalLinkIcon/></a>，<a href="https://github.com/huginn/huginn/wiki/Novice-setup-guide" target="_blank" rel="noopener noreferrer">Novice-setup-guide<ExternalLinkIcon/></a><br>
手动升级：<a href="https://github.com/huginn/huginn/blob/master/doc/manual/update.md" target="_blank" rel="noopener noreferrer">manual Update<ExternalLinkIcon/></a></p>
<p>Huginn 部署步骤：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 进入 huginn 容器命令行，某些容器命令为 /bin/bash</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> huginn <span class="token function">bash</span>
<span class="token comment"># run as root!</span>
<span class="token function">apt-get</span> update <span class="token parameter variable">-y</span>
<span class="token function">apt-get</span> upgrade <span class="token parameter variable">-y</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">sudo</span> <span class="token parameter variable">-y</span>

<span class="token comment"># Install vim and set as default editor</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span>
<span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--set</span> editor /usr/bin/vim.basic

<span class="token comment"># Install the required packages</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> runit build-essential <span class="token function">git</span> zlib1g-dev libyaml-dev libssl-dev libgdbm-dev libreadline-dev libncurses5-dev libffi-dev <span class="token function">curl</span> openssh-server checkinstall libxml2-dev libxslt-dev libcurl4-openssl-dev libicu-dev <span class="token function">logrotate</span> pkg-config cmake nodejs graphviz jq shared-mime-info

<span class="token comment"># Ubuntu 18.04 Bionic</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> runit-systemd

<span class="token comment"># Download Ruby and compile it:</span>
<span class="token function">mkdir</span> /tmp/ruby <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /tmp/ruby
<span class="token function">curl</span> <span class="token parameter variable">-L</span> --progress-bar https://cache.ruby-lang.org/pub/ruby/2.7/ruby-2.7.7.tar.bz2 <span class="token operator">|</span> <span class="token function">tar</span> xj
<span class="token builtin class-name">cd</span> ruby-2.7.7
./configure --disable-install-rdoc
<span class="token function">make</span> -j<span class="token variable"><span class="token variable">`</span>nproc<span class="token variable">`</span></span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># curl -L --progress-bar https://cache.ruby-lang.org/pub/ruby/3.2/ruby-3.2.2.tar.xz | tar xJ</span>
<span class="token comment"># cd ruby-3.2.2</span>

<span class="token function">sudo</span> gem update <span class="token parameter variable">--system</span> --no-document
<span class="token function">sudo</span> gem <span class="token function">install</span> foreman --no-document

<span class="token comment"># Create a user for Huginn:</span>
<span class="token function">sudo</span> adduser --disabled-login <span class="token parameter variable">--gecos</span> <span class="token string">'Huginn'</span> huginn

<span class="token comment"># Install the database packages</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> mysql-server mysql-client libmysqlclient-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 <code v-pre>service mysql start</code> 启动数据库，否则下一步数据库设置容易报错 <code v-pre>Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock'</code>。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 逐步设置数据库 root 密码</span>
<span class="token function">sudo</span> mysql_secure_installation

<span class="token comment"># 用上方设置的密码登陆数据库</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>

<span class="token comment"># ⚠️逐行输入代码到数据库命令行 `mysql>`，需将 `$password` 替换为你要设置的密码</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">'huginn'</span>@<span class="token string">'localhost'</span> IDENTIFIED BY <span class="token string">'$password'</span><span class="token punctuation">;</span>
SET <span class="token assign-left variable">default_storage_engine</span><span class="token operator">=</span>INNODB<span class="token punctuation">;</span>
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, LOCK TABLES ON <span class="token variable"><span class="token variable">`</span>huginn_production<span class="token variable">`</span></span>.* TO <span class="token string">'huginn'</span>@<span class="token string">'localhost'</span><span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
<span class="token punctuation">\</span>q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库设置好后，拉取 huginn 主体程序，此段命令可以整段复制到 ssh。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># We'll install Huginn into the home directory of the user "huginn"</span>
<span class="token builtin class-name">cd</span> /home/huginn

<span class="token comment"># Clone Huginn repository，不能直接使用 master，避免 ruby 3.2 问题</span>
<span class="token comment"># sudo -u huginn -H git clone https://github.com/huginn/huginn.git -b master huginn</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> <span class="token function">git</span> clone https://github.com/huginn/huginn.git <span class="token parameter variable">-b</span> latest_rubygems huginn

<span class="token comment"># Go to Huginn installation folder</span>
<span class="token builtin class-name">cd</span> /home/huginn/huginn

<span class="token comment"># Copy the example Huginn config</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> <span class="token function">cp</span> .env.example .env

<span class="token comment"># Create the log/, tmp/pids/ and tmp/sockets/ directories</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> log tmp/pids tmp/sockets

<span class="token comment"># Make sure Huginn can write to the log/ and tmp/ directories</span>
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> huginn log/ tmp/
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> u+rwX,go-w log/ tmp/

<span class="token comment"># Make sure permissions are set correctly</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> u+rwX,go-w log/
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> u+rwX tmp/
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> <span class="token function">chmod</span> o-rwx .env

<span class="token comment"># Copy the example Unicorn config</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> <span class="token function">cp</span> config/unicorn.rb.example config/unicorn.rb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>sudo -u huginn -H editor .env</code> 设置 huginn 环境依赖，更多选项查看 <a href="https://github.com/huginn/huginn/blob/master/.env.example" target="_blank" rel="noopener noreferrer">.env 设置案例<ExternalLinkIcon/></a>。编辑器为上面安装的 vim，<code v-pre>i</code> 在光标所在的位置插入，<code v-pre>esc</code> 退出编辑，<code v-pre>:wq</code> 保存并退出。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">DATABASE_ADAPTER</span><span class="token operator">=</span>mysql2
<span class="token comment">#DATABASE_ENCODING=utf8   # 修改点</span>
<span class="token assign-left variable">DATABASE_RECONNECT</span><span class="token operator">=</span>true
<span class="token assign-left variable">DATABASE_NAME</span><span class="token operator">=</span>huginn_production  <span class="token comment"># 修改点</span>
<span class="token assign-left variable">DATABASE_POOL</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token assign-left variable">DATABASE_USERNAME</span><span class="token operator">=</span>huginn   <span class="token comment"># 修改点</span>
<span class="token assign-left variable">DATABASE_PASSWORD</span><span class="token operator">=</span><span class="token string">'$password'</span> <span class="token comment"># 修改点，换为你自己的密码</span>
<span class="token comment">#DATABASE_HOST=your-domain-here.com</span>
<span class="token comment">#DATABASE_PORT=3306</span>
<span class="token comment">#DATABASE_SOCKET=/tmp/mysql.sock</span>

<span class="token comment"># MySQL only: If you are running a MySQL server >=5.5.3, you should</span>
<span class="token comment"># set DATABASE_ENCODING to utf8mb4 instead of utf8 so that the</span>
<span class="token comment"># database can hold 4-byte UTF-8 characters like emoji.</span>
<span class="token assign-left variable">DATABASE_ENCODING</span><span class="token operator">=</span>utf8mb4  <span class="token comment">#修改点</span>

<span class="token punctuation">..</span>.
<span class="token assign-left variable">RAILS_ENV</span><span class="token operator">=</span>production  <span class="token comment"># 修改点</span>

<span class="token assign-left variable">USE_GRAPHVIZ_DOT</span><span class="token operator">=</span>dot <span class="token comment"># 取消注释，启用 GRAPHVIZ 来生成 diagram</span>

<span class="token assign-left variable">TIMEZONE</span><span class="token operator">=</span><span class="token string">"Beijing"</span> <span class="token comment"># bundle exec rake time:zones:local，时区需按指定格式填写，否则会报错 runsv not running</span>

<span class="token assign-left variable">DEFAULT_HTTP_USER_AGENT</span><span class="token operator">=</span><span class="token string">"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"</span> <span class="token comment"># 浏览器访问</span>

<span class="token comment"># 邮件发送设置</span>
<span class="token assign-left variable">SMTP_DOMAIN</span><span class="token operator">=</span>gpt-vip.top
<span class="token assign-left variable">SMTP_USER_NAME</span><span class="token operator">=</span>benson@gpt-vip.top
<span class="token assign-left variable">SMTP_PASSWORD</span><span class="token operator">=</span>somepassword
<span class="token assign-left variable">SMTP_SERVER</span><span class="token operator">=</span>smtp.feishu.cn
<span class="token assign-left variable">SMTP_PORT</span><span class="token operator">=</span><span class="token number">465</span>
<span class="token assign-left variable">SMTP_AUTHENTICATION</span><span class="token operator">=</span>plain
<span class="token assign-left variable">SMTP_ENABLE_STARTTLS_AUTO</span><span class="token operator">=</span>true
<span class="token assign-left variable">SMTP_SSL</span><span class="token operator">=</span>true
<span class="token assign-left variable">SEND_EMAIL_IN_DEVELOPMENT</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install Gems 前用子账户重新设置运行目录权限 <code v-pre>sudo chown -R huginn:huginn /home/huginn</code>，防止报错 <code v-pre>Your user account isn't allowed to install to the system RubyGems</code>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 注意看黄字警告</span>
gem <span class="token function">install</span> bundler
<span class="token comment"># Docker 环境中，时区容易丢失(6-70)</span>
<span class="token function">apt-get</span> <span class="token function">install</span> tzdata
<span class="token comment"># Install Gems</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> bundle config <span class="token builtin class-name">set</span> deployment <span class="token string">'true'</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> bundle config <span class="token builtin class-name">set</span> without <span class="token string">'development test'</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> bundle <span class="token function">install</span>
<span class="token comment"># 备用 Gems 修复命令</span>
<span class="token comment"># bundle update</span>
<span class="token comment"># gem update bundler</span>
<span class="token comment"># vim /home/huginn/huginn/Gemfile</span>

<span class="token comment"># Initialize Database</span>
<span class="token comment"># Create the database</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> bundle <span class="token builtin class-name">exec</span> rake db:create <span class="token assign-left variable">RAILS_ENV</span><span class="token operator">=</span>production

<span class="token comment"># Migrate to the latest version</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> bundle <span class="token builtin class-name">exec</span> rake db:migrate <span class="token assign-left variable">RAILS_ENV</span><span class="token operator">=</span>production

<span class="token comment"># ⚠️设置登陆账户密码，Create admin user and example agents using the default admin/password login</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> bundle <span class="token builtin class-name">exec</span> rake db:seed <span class="token assign-left variable">RAILS_ENV</span><span class="token operator">=</span>production <span class="token assign-left variable">SEED_USERNAME</span><span class="token operator">=</span>admin <span class="token assign-left variable">SEED_PASSWORD</span><span class="token operator">=</span>password

<span class="token comment"># Compile Assets</span>
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> huginn <span class="token parameter variable">-H</span> bundle <span class="token builtin class-name">exec</span> rake assets:precompile <span class="token assign-left variable">RAILS_ENV</span><span class="token operator">=</span>production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>sudo -u huginn -H editor Procfile</code> 修改 huginn 设置。如果需多现成运行，可移除 Multiple DelayedJob workers 部分的注释。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 在下两行前，添加符号「#」</span>
<span class="token comment">#web: bundle exec rails server -p ${PORT-3000} -b ${IP-0.0.0.0}</span>
<span class="token comment">#jobs: bundle exec rails runner bin/threaded.rb</span>

<span class="token comment"># 删除以下下两行前的符号「#」</span>
web: bundle <span class="token builtin class-name">exec</span> unicorn <span class="token parameter variable">-c</span> config/unicorn.rb
jobs: bundle <span class="token builtin class-name">exec</span> rails runner bin/threaded.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>'sv stop huginn-web-1' exited with a non-zero return value: fail: huginn-web-1: runsv not running</code> 的报错，使用 <code v-pre>foreman export runit -a huginn -l /home/huginn/huginn/log /etc/service</code> 和 <code v-pre>chown -R huginn:huginn /etc/service/huginn*</code>。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup> <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3" /></sup> 如果是重启 Huginn 时出现此报错，则检查 <code v-pre>sudo -u huginn -H editor .env</code> 设置。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 切换到</span>
<span class="token builtin class-name">cd</span> /home/huginn/huginn
<span class="token comment"># 设置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> safe.directory /home/huginn/huginn
<span class="token comment"># 设置开机启动</span>
<span class="token function">sudo</span> runsvdir /etc/service <span class="token operator">&amp;</span>
<span class="token function">sudo</span> bundle <span class="token builtin class-name">exec</span> rake production:export

<span class="token comment"># Setup Logrotate</span>
<span class="token function">sudo</span> <span class="token function">cp</span> deployment/logrotate/huginn /etc/logrotate.d/huginn

<span class="token comment"># Ensure Your Huginn Instance Is Running</span>
<span class="token function">sudo</span> bundle <span class="token builtin class-name">exec</span> rake production:status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx 站点设置：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx

<span class="token comment"># Site Configuration</span>
<span class="token function">sudo</span> <span class="token function">cp</span> deployment/nginx/huginn /etc/nginx/sites-available/huginn
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/nginx/sites-available/huginn /etc/nginx/sites-enabled/huginn

<span class="token comment"># Change YOUR_SERVER_FQDN to the fully-qualified domain name of your host serving Huginn.</span>
<span class="token function">sudo</span> editor /etc/nginx/sites-available/huginn

<span class="token comment"># 不需要 https，则改为下方配置</span>
server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span> <span class="token comment"># 监听的端⼝</span>
  server_name localhost home.gpt-vip.top<span class="token punctuation">;</span> <span class="token comment"># 域名或ip，这里启用了两个地址，用空格分开</span>

<span class="token comment"># 测试设置是否正确</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 移除默认网站设置，只有当服务器/容器只存在 Huginn 网站方执行下行命令</span>
<span class="token function">sudo</span> <span class="token function">rm</span> /etc/nginx/sites-enabled/default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上完成了 Huginn 的所有部署，执行 <code v-pre>sudo service nginx restart</code> 即可访问网站。</p>
<h3 id="huginn-docker" tabindex="-1"><a class="header-anchor" href="#huginn-docker" aria-hidden="true">#</a> Huginn Docker</h3>
<p>Huginn <a href="https://github.com/huginn/huginn/tree/master/docker/multi-process" target="_blank" rel="noopener noreferrer">multi-process<ExternalLinkIcon/></a> 镜像基于 Ubuntu 18.04，没有 root 权限。如果不导出卷，或者使用单独的数据库容器，则无法在不丢失数据的情况下更新 Huginn。可以手动设置数据库对外端口和外部存储路径。</p>
<p>此外，官方镜像路径与手动版不同，不支持 force_stop 命令。官方建议 Docker 中使用下方命令删除数据库中卡住的任务。这个命令实测是有效的，但我有次碰到了未知 bug，卡住的任务被删除，后续任务却没继续。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># get a shell inside the docker container (replace huginn with the name or id of the container)</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> huginn /bin/bash

<span class="token comment"># source the environment file</span>
<span class="token builtin class-name">source</span> .env

<span class="token comment"># get a rails console</span>
bundle <span class="token builtin class-name">exec</span> rails console

<span class="token comment"># inside the rails console delete  the job</span>
Delayed::Job.where<span class="token punctuation">(</span><span class="token string">'locked_at IS NOT NULL AND locked_by IS NOT NULL AND failed_at IS NULL'</span><span class="token punctuation">)</span>.destroy_all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="agents" tabindex="-1"><a class="header-anchor" href="#agents" aria-hidden="true">#</a> Agents</h2>
<h3 id="trigger-agent" tabindex="-1"><a class="header-anchor" href="#trigger-agent" aria-hidden="true">#</a> Trigger Agent</h3>
<p>Trigger Agent 挑选符合条件的事件。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># content 字段中不包含 周雅萌 或 邓雅萌</span>
<span class="token punctuation">{</span>
  <span class="token key atrule">"expected_receive_period_in_days"</span><span class="token punctuation">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"keep_event"</span><span class="token punctuation">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"rules"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">"type"</span><span class="token punctuation">:</span> <span class="token string">"!regex"</span><span class="token punctuation">,</span>
      <span class="token key atrule">"value"</span><span class="token punctuation">:</span> <span class="token string">"周雅萌 | 邓雅萌"</span><span class="token punctuation">,</span>
      <span class="token key atrule">"path"</span><span class="token punctuation">:</span> <span class="token string">"$.content"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">"message"</span><span class="token punctuation">:</span> <span class="token string">"Looks like your pattern matched in '{{value}}'!"</span>
<span class="token punctuation">}</span>

<span class="token comment"># title 中包含品牌词 iluminage 或 易美肌</span>
<span class="token punctuation">{</span>
  <span class="token key atrule">"expected_receive_period_in_days"</span><span class="token punctuation">:</span> <span class="token string">"4"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"keep_event"</span><span class="token punctuation">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"rules"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">"type"</span><span class="token punctuation">:</span> <span class="token string">"regex"</span><span class="token punctuation">,</span>
      <span class="token key atrule">"value"</span><span class="token punctuation">:</span> <span class="token string">"iluminage|易美肌"</span><span class="token punctuation">,</span>
      <span class="token key atrule">"path"</span><span class="token punctuation">:</span> <span class="token string">"$.title"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">"message"</span><span class="token punctuation">:</span> <span class="token string">"Looks like your pattern matched in '{{value}}'!"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="liquid-output-agent" tabindex="-1"><a class="header-anchor" href="#liquid-output-agent" aria-hidden="true">#</a> Liquid Output Agent</h3>
<p>用自定义模板将数据整理，输出为 HTML，json 和 xml 格式链接。</p>
<p>模式一般选 <code v-pre>Last X events</code>，将接收到的所有数据对外输出，默认为 1000。</p>
<p><code v-pre>Last X events</code> 模式下，可以设置 <code v-pre>Event limit</code> 以控制输出数据的数量和时间段。<code v-pre>Event limit</code> 可以设为 100，即输出数据为 100；也可以设为「1 day」或「5 minutes」，即仅输出最近一天的内容。</p>
<h3 id="event-formatting-agent" tabindex="-1"><a class="header-anchor" href="#event-formatting-agent" aria-hidden="true">#</a> Event Formatting Agent</h3>
<p>Event Formatting Agent 允许您格式化传入的事件，根据需要添加新的字段。可以用正则来替换输入中的某些元素。具体样例参考，<a href="http://huginnio.herokuapp.com/scenarios/14/download" target="_blank" rel="noopener noreferrer">新京报 #5 清理版面字段格式<ExternalLinkIcon/></a>。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># strftime() 方法中常用的占位符</span>
<span class="token comment"># %Y 表示年份，%m 表示月份，%d 表示日期，%H 表示小时（24小时制），%M 表示分钟，%S 表示秒，%B 代表英文的月份，`%I` 代表小时（12小时制），`%p` 代表 AM/PM。`%e` 代表日期，不会在首位添加零。</span>
<span class="token key atrule">"created_at"</span><span class="token punctuation">:</span> <span class="token string">"{{created_at | date:'%Y-%m-%d'}}"</span>

<span class="token comment"># 将 2023-03-02 23:33:30 +0800 替换为 2023-03-02</span>
<span class="token key atrule">"created_at"</span><span class="token punctuation">:</span> <span class="token string">"{{created_at | regex_replace: ' ', ''| regex_replace: '(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?', ''| regex_replace: '\\+0800', ''}}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="正则重构" tabindex="-1"><a class="header-anchor" href="#正则重构" aria-hidden="true">#</a> 正则重构</h4>
<p>比如生成时间规则为 <code v-pre>&quot;created_at&quot;: &quot;{{created_at}}&quot;</code>，默认时间 <code v-pre>2022-07-06 21:09:51 +0800</code>，使用正则删除规则为<br>
<code v-pre>&quot;created_at&quot;: &quot;{{created_at | regex_replace: ' ', ''| regex_replace: '(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?', ''| regex_replace: '\\+0800', ''}}&quot;</code>。</p>
<h4 id="加前后缀" tabindex="-1"><a class="header-anchor" href="#加前后缀" aria-hidden="true">#</a> 加前后缀</h4>
<p>抓取链接不完整时，需要完善链接，比如 <code v-pre>&quot;url_link&quot;: &quot;https://so.toutiao.com{{temp_link}}&quot;</code>。</p>
<p>For example, here is a possible Event:</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">"high"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">"celsius"</span><span class="token punctuation">:</span> <span class="token string">"18"</span><span class="token punctuation">,</span> <span class="token key atrule">"fahreinheit"</span><span class="token punctuation">:</span> <span class="token string">"64"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">"date"</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span> <span class="token key atrule">"epoch"</span><span class="token punctuation">:</span> <span class="token string">"1357959600"</span><span class="token punctuation">,</span> <span class="token key atrule">"pretty"</span><span class="token punctuation">:</span> <span class="token string">"10:00 PM EST on January 11, 2013"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">"conditions"</span><span class="token punctuation">:</span> <span class="token string">"Rain showers"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"data"</span><span class="token punctuation">:</span> <span class="token string">"This is some data"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may want to send this event to another Agent, for example a Twilio Agent, which expects a <code v-pre>message</code> key. You can use an Event Formatting Agent's <code v-pre>instructions</code> setting to do this in the following way:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"instructions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Today's conditions look like {{conditions}} with a high temperature of {{high.celsius}} degrees Celsius."</span><span class="token punctuation">,</span>
  <span class="token property">"subject"</span><span class="token operator">:</span> <span class="token string">"{{data}}"</span><span class="token punctuation">,</span>
  <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"{{created_at}}"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Names here like <code v-pre>conditions</code>, <code v-pre>high</code> and <code v-pre>data</code> refer to the corresponding values in the Event hash.</p>
<p>The special key <code v-pre>created_at</code> refers to the timestamp of the Event, which can be reformatted by the <code v-pre>date</code> filter, like <code v-pre>{{created_at | date:&quot;at %I:%M %p&quot; }}</code>.</p>
<p>The upstream agent of each received event is accessible via the key <code v-pre>agent</code>, which has the following attributes: <code v-pre>name</code>, <code v-pre>options</code>, <code v-pre>sources</code>, <code v-pre>type</code>, <code v-pre>url</code>, <code v-pre>id</code>, <code v-pre>disabled</code>, <code v-pre>memory</code>, <code v-pre>controllers</code>, <code v-pre>schedule</code>, <code v-pre>keep_events_for</code>, <code v-pre>propagate_immediately</code>, <code v-pre>working</code>, <code v-pre>receivers</code>, <code v-pre>control_targets</code>.</p>
<p>Have a look at the <a href="https://github.com/huginn/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Wiki<ExternalLinkIcon/></a> to learn more about liquid templating.</p>
<p>Events generated by this possible Event Formatting Agent will look like:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Today's conditions look like Rain showers with a high temperature of 18 degrees Celsius."</span><span class="token punctuation">,</span>
  <span class="token property">"subject"</span><span class="token operator">:</span> <span class="token string">"This is some data"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In <code v-pre>matchers</code> setting you can perform regular expression matching against contents of events and expand the match data for use in <code v-pre>instructions</code> setting. Here is an example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"matchers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"{{date.pretty}}"</span><span class="token punctuation">,</span>
      <span class="token property">"regexp"</span><span class="token operator">:</span> <span class="token string">"A(?&lt;time>dd:dd [AP]M [A-Z]+)"</span><span class="token punctuation">,</span>
      <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"pretty_date"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This virtually merges the following hash into the original event hash:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"pretty_date"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"10:00 PM EST"</span><span class="token punctuation">,</span>
  <span class="token property">"0"</span><span class="token operator">:</span> <span class="token string">"10:00 PM EST on January 11, 2013"</span>
  <span class="token property">"1"</span><span class="token operator">:</span> <span class="token string">"10:00 PM EST"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>So you can use it in <code v-pre>instructions</code> like this:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"instructions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Today's conditions look like {{conditions}} with a high temperature of {{high.celsius}} degrees Celsius according to the forecast at {{pretty_date.time}}."</span><span class="token punctuation">,</span>
  <span class="token property">"subject"</span><span class="token operator">:</span> <span class="token string">"{{data}}"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to retain original contents of events and only add new keys, then set <code v-pre>mode</code> to <code v-pre>merge</code>, otherwise set it to <code v-pre>clean</code>.</p>
<p>To CGI escape output (for example when creating a link), use the Liquid <code v-pre>uri_escape</code> filter, like so:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"A peak was on Twitter in {{group_by}}.  Search: https://twitter.com/search?q={{group_by | uri_escape}}"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="adioso-agent-机票价格追踪" tabindex="-1"><a class="header-anchor" href="#adioso-agent-机票价格追踪" aria-hidden="true">#</a> Adioso Agent - 机票价格追踪</h3>
<p><code v-pre>Creates events</code></p>
<p>Adioso Agent 可以查询两个城市间，在指定时间内的最低飞机票价格。机票价格货币是美元。查询日期 <code v-pre>start_date</code> 和 <code v-pre>end_date</code> 之间的差异需小于 150 天。需要注册 <a href="http://adioso.com/" target="_blank" rel="noopener noreferrer">Adioso<ExternalLinkIcon/></a>，并在 <code v-pre>username</code> and <code v-pre>password</code> 中输入。</p>
<hr>
<h3 id="aftership-agent-物流追踪-api-付费" tabindex="-1"><a class="header-anchor" href="#aftership-agent-物流追踪-api-付费" aria-hidden="true">#</a> Aftership Agent - 物流追踪-API 付费</h3>
<p><code v-pre>Creates events</code></p>
<p>Aftership agent 帮助你追踪你的快递，并实时更新包裹动态。为了能够使用 Aftership API，您需要生成一个 <code v-pre>API Key</code>。这需要付费才能使用其跟踪功能。</p>
<p>操作说明：<br>
Provide the <code v-pre>path</code> for the API endpoint that you’d like to hit. For example, for all active packages, enter <code v-pre>trackings</code> (see <a href="https://www.aftership.com/docs/api/4/trackings" target="_blank" rel="noopener noreferrer">https://www.aftership.com/docs/api/4/trackings<ExternalLinkIcon/></a>), for a specific package, use <code v-pre>trackings/SLUG/TRACKING_NUMBER</code> and replace <code v-pre>SLUG</code> with a courier code and <code v-pre>TRACKING_NUMBER</code> with the tracking number. You can request last checkpoint of a package by providing <code v-pre>last_checkpoint/SLUG/TRACKING_NUMBER</code> instead.</p>
<p>You can get a list of courier information here <code v-pre>https://www.aftership.com/courier</code></p>
<p>Required Options:</p>
<ul>
<li><code v-pre>api_key</code> - YOUR_API_KEY.</li>
<li><code v-pre>path request and its full path</code></li>
</ul>
<hr>
<h3 id="algorithmia-agent-ai-算法" tabindex="-1"><a class="header-anchor" href="#algorithmia-agent-ai-算法" aria-hidden="true">#</a> Algorithmia Agent - AI 算法</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code> <code v-pre>Dry runs</code><br>
<a href="http://huginnio.herokuapp.com/agent_gems#huginn_algorithmia_agent" target="_blank" rel="noopener noreferrer">huginn_algorithmia_agent<ExternalLinkIcon/></a></p>
<p>AlgoritmiaAgent 运行 Algorithmia 中的算法。在使用此代理之前，您需要注册一个<a href="https://algorithmia.com" target="_blank" rel="noopener noreferrer">Algorithmia<ExternalLinkIcon/></a>帐户。</p>
<p>The created event will have the output from Algorithmia in the <code v-pre>result</code> key. To merge incoming Events with the result, use <code v-pre>merge</code> for the <code v-pre>mode</code> key.</p>
<hr>
<h3 id="attribute-difference-agent-属性差异-待深入理解" tabindex="-1"><a class="header-anchor" href="#attribute-difference-agent-属性差异-待深入理解" aria-hidden="true">#</a> Attribute Difference Agent - 属性差异（待深入理解）</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code></p>
<p>The Attribute Difference Agent receives events and emits a new event with the difference or change of a specific attribute in comparison to the previous event received.<br>
Attribute Difference Agent 用于传递两个不同值的差异和改变。</p>
<p><code v-pre>path</code> specifies the JSON path of the attribute to be used from the event.</p>
<p><code v-pre>output</code> specifies the new attribute name that will be created on the original payload and it will contain the difference or change.</p>
<p><code v-pre>method</code> specifies if it should be…</p>
<ul>
<li><code v-pre>percentage_change</code> eg. Previous value was <code v-pre>160</code>, new value is <code v-pre>116</code>. Percentage change is <code v-pre>-27.5</code></li>
<li><code v-pre>decimal_difference</code> eg. Previous value was <code v-pre>5.5</code>, new value is <code v-pre>15.2</code>. Difference is <code v-pre>9.7</code></li>
<li><code v-pre>integer_difference</code> eg. Previous value was <code v-pre>50</code>, new value is <code v-pre>40</code>. Difference is <code v-pre>-10</code></li>
</ul>
<p><code v-pre>decimal_precision</code> defaults to <code v-pre>3</code>, but you can override this if you want.</p>
<p><code v-pre>expected_update_period_in_days</code> is used to determine if the Agent is working.</p>
<p>The resulting event will be a copy of the received event with the difference or change added as an extra attribute. If you use the <code v-pre>percentage_change</code> the attribute will be formatted as such <code v-pre>{{attribute}}_change</code>, otherwise it will be <code v-pre>{{attribute}}_diff</code>.</p>
<p>All configuration options will be liquid interpolated based on the incoming event.</p>
<hr>
<h3 id="basecamp-agent-service-停用" tabindex="-1"><a class="header-anchor" href="#basecamp-agent-service-停用" aria-hidden="true">#</a> <s>Basecamp Agent - Service 停用</s></h3>
<p><code v-pre>Creates events</code> <code v-pre>37signals</code></p>
<p>The Basecamp Agent checks a Basecamp project for new Events</p>
<p>To be able to use this Agent you need to authenticate with 37signals in the <a href="http://huginnio.herokuapp.com/services" target="_blank" rel="noopener noreferrer">Services<ExternalLinkIcon/></a> section first.</p>
<hr>
<h3 id="bigquery-agent-大型数据库分析" tabindex="-1"><a class="header-anchor" href="#bigquery-agent-大型数据库分析" aria-hidden="true">#</a> Bigquery Agent - 大型数据库分析</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code> <code v-pre>Dry runs</code><br>
<a href="http://huginnio.herokuapp.com/agent_gems#huginn_bigquery_agent" target="_blank" rel="noopener noreferrer">huginn_bigquery_agent<ExternalLinkIcon/></a></p>
<p>Bigquery Agent 会调用 Google BigQuery 和 Goolge Cloud 账户，可能需要付费。同时，Bigquery Agent 依靠服务帐户进行身份验证，而不是 oauth。</p>
<p>Setup:</p>
<ol>
<li>Visit <a href="https://code.google.com/apis/console/b/0/" target="_blank" rel="noopener noreferrer">the google api console<ExternalLinkIcon/></a></li>
<li>Use your existing project (or create a new one)</li>
<li>APIs &amp; Auth -&gt; Enable BigQuery</li>
<li>Credentials -&gt; Create new Client ID -&gt; Service Account</li>
<li>Download the JSON keyfile and either save it to a path, ie: <code v-pre>/home/huginn/Huginn-5d12345678cd.json</code>, or copy the value of <code v-pre>private_key</code> from the file.</li>
<li>Grant that service account access to the BigQuery datasets and tables you want to query.</li>
</ol>
<p>The JSON keyfile you downloaded earlier should look like this:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"service_account"</span><span class="token punctuation">,</span>
  <span class="token property">"project_id"</span><span class="token operator">:</span> <span class="token string">"huginn-123123"</span><span class="token punctuation">,</span>
  <span class="token property">"private_key_id"</span><span class="token operator">:</span> <span class="token string">"6d6b476fc6ccdb31e0f171991e5528bb396ffbe4"</span><span class="token punctuation">,</span>
  <span class="token property">"private_key"</span><span class="token operator">:</span> <span class="token string">"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"</span><span class="token punctuation">,</span>
  <span class="token property">"client_email"</span><span class="token operator">:</span> <span class="token string">"huginn@huginn-123123.iam.gserviceaccount.com"</span><span class="token punctuation">,</span>
  <span class="token property">"client_id"</span><span class="token operator">:</span> <span class="token string">"123123...123123"</span><span class="token punctuation">,</span>
  <span class="token property">"auth_uri"</span><span class="token operator">:</span> <span class="token string">"https://accounts.google.com/o/oauth2/auth"</span><span class="token punctuation">,</span>
  <span class="token property">"token_uri"</span><span class="token operator">:</span> <span class="token string">"https://accounts.google.com/o/oauth2/token"</span><span class="token punctuation">,</span>
  <span class="token property">"auth_provider_x509_cert_url"</span><span class="token operator">:</span> <span class="token string">"https://www.googleapis.com/oauth2/v1/certs"</span><span class="token punctuation">,</span>
  <span class="token property">"client_x509_cert_url"</span><span class="token operator">:</span> <span class="token string">"https://www.googleapis.com/robot/v1/metadata/x509/huginn%40huginn-123123.iam.gserviceaccount.com"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Agent Configuration:</p>
<p><code v-pre>project_id</code> - The id of the Google Cloud project.</p>
<p><code v-pre>query</code> - The BigQuery query to run. <a href="https://github.com/cantino/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> formatting is supported to run queries based on receiving events.</p>
<p><code v-pre>use_legacy</code> - Whether or not to use BigQuery legacy SQL or standard SQL. (Defaults to <code v-pre>false</code>)</p>
<p><code v-pre>max</code> - Maximum number of rows to return. Defaults to unlimited, but results are always <a href="https://googlecloudplatform.github.io/google-cloud-ruby/#/docs/google-cloud-bigquery/v0.27.0/google/cloud/bigquery/project" target="_blank" rel="noopener noreferrer">limited to 10 MB<ExternalLinkIcon/></a>.</p>
<p><code v-pre>timeout</code> - How long to wait for query to complete (in ms). Defaults to <code v-pre>10000</code>.</p>
<p><code v-pre>event_per_row</code> - Whether to create one Event per row returned, or one event with all rows as <code v-pre>results</code>. Defaults to <code v-pre>false</code>.</p>
<p><strong>Authorization</strong></p>
<p><code v-pre>keyfile</code> - (String) The path (relative to where Huginn is running) to the JSON keyfile downloaded in step 5 above.</p>
<p>Alternately, <code v-pre>keyfile</code> can be a hash:</p>
<p><code v-pre>keyfile</code> <code v-pre>private_key</code> - The private key (value of <code v-pre>private_key</code> from the downloaded file). <a href="https://github.com/cantino/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> formatting is supported if you want to use a Credential. (E.g., <code v-pre>{% credential google-bigquery-key %}</code>)</p>
<p><code v-pre>keyfile</code> <code v-pre>client_email</code> - The value of <code v-pre>client_email</code> from the downloaded file. Same as the service account email.</p>
<hr>
<h3 id="boxcar-agent-iphone-通知栏-app" tabindex="-1"><a class="header-anchor" href="#boxcar-agent-iphone-通知栏-app" aria-hidden="true">#</a> <s>Boxcar Agent - iPhone 通知栏 app</s></h3>
<p><code v-pre>Receives events</code></p>
<p>Boxcar agent 会在 iPhone 推送通知，但其不兼容于 iOS 10 系统，已经停止更新。</p>
<p>To be able to use the Boxcar end-user API, you need your <code v-pre>Access Token</code>. The access token is available on general “Settings” screen of Boxcar iOS app or from Boxcar Web Inbox settings page.</p>
<p>Please provide your access token in the <code v-pre>user_credentials</code> option. If you'd like to use a credential, set the <code v-pre>user_credentials</code> option to <code v-pre>{% credential CREDENTIAL_NAME %}</code>.</p>
<p>Options:</p>
<ul>
<li><code v-pre>user_credentials</code> - Boxcar access token.</li>
<li><code v-pre>title</code> - Title of the message.</li>
<li><code v-pre>body</code> - Body of the message.</li>
<li><code v-pre>source_name</code> - Name of the source of the message. Set to <code v-pre>Huginn</code> by default.</li>
<li><code v-pre>icon_url</code> - URL to the icon.</li>
<li><code v-pre>sound</code> - Sound to be played for the notification. Set to ‘bird-1’ by default.</li>
</ul>
<hr>
<h3 id="change-detector-agent-监测数据变化" tabindex="-1"><a class="header-anchor" href="#change-detector-agent-监测数据变化" aria-hidden="true">#</a> Change Detector Agent - 监测数据变化</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code></p>
<p>The Change Detector Agent receives a stream of events and emits a new event when a property of the received event changes.<br>
Change Detector Agent 会接收数据流内容，并在监测到数据属性改变后，传递出新事件。</p>
<p><code v-pre>property</code> specifies a <a href="https://github.com/huginn/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> template that expands to the property to be watched, where you can use a variable <code v-pre>last_property</code> for the last property value. If you want to detect a new lowest price, try this: <code v-pre>{% assign drop = last_property | minus: price %}{% if last_property == blank or drop &gt; 0 %}{{ price | default: last_property }}{% else %}{{ last_property }}{% endif %}</code></p>
<p><code v-pre>expected_update_period_in_days</code> is used to determine if the Agent is working.</p>
<p>The resulting event will be a copy of the received event.</p>
<hr>
<h3 id="commander-agent-触发命令" tabindex="-1"><a class="header-anchor" href="#commander-agent-触发命令" aria-hidden="true">#</a> Commander Agent - 触发命令</h3>
<p><code v-pre>Receives events</code> <code v-pre>Controls agents</code></p>
<p>Commander Agent 由时间表或传入事件触发，并触发其他 agents 运行，禁用，配置或启用自己。</p>
<p><strong>Action types</strong></p>
<p>Set <code v-pre>action</code> to one of the action types below:</p>
<ul>
<li>
<p><code v-pre>run</code>: Target Agents are run when this agent is triggered.</p>
</li>
<li>
<p><code v-pre>disable</code>: Target Agents are disabled (if not) when this agent is triggered.</p>
</li>
<li>
<p><code v-pre>enable</code>: Target Agents are enabled (if not) when this agent is triggered.</p>
</li>
<li>
<p><code v-pre>configure</code>: Target Agents have their options updated with the contents of <code v-pre>configure_options</code>.</p>
</li>
</ul>
<p>Here's a tip: you can use <a href="https://github.com/huginn/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> templating to dynamically determine the action type. For example:</p>
<ul>
<li>
<p>To create a CommanderAgent that receives an event from a WeatherAgent every morning to kick an agent flow that is only useful in a nice weather, try this: <code v-pre>{% if conditions contains 'Sunny' or conditions contains 'Cloudy' %}</code> <code v-pre>run{% endif %}</code></p>
</li>
<li>
<p>Likewise, if you have a scheduled agent flow specially crafted for rainy days, try this: <code v-pre>{% if conditions contains 'Rain' %}enable{% else %}disabled{% endif %}</code></p>
</li>
<li>
<p>If you want to update a WeatherAgent based on a UserLocationAgent, you could use <code v-pre>'action': 'configure'</code> and set 'configure*options' to <code v-pre>{ 'location': '{{\_location*.latlng}}' }</code>.</p>
</li>
<li>
<p>In templating, you can use the variable <code v-pre>target</code> to refer to each target agent, which has the following attributes: <code v-pre>name</code>, <code v-pre>options</code>, <code v-pre>sources</code>, <code v-pre>type</code>, <code v-pre>url</code>, <code v-pre>id</code>, <code v-pre>disabled</code>, <code v-pre>memory</code>, <code v-pre>controllers</code>, <code v-pre>schedule</code>, <code v-pre>keep_events_for</code>, <code v-pre>propagate_immediately</code>, <code v-pre>working</code>, <code v-pre>receivers</code>, and <code v-pre>control_targets</code>.</p>
</li>
</ul>
<p><strong>Targets</strong></p>
<p>Select Agents that you want to control from this CommanderAgent.</p>
<hr>
<h3 id="csv-agent-csv-表格数据处理" tabindex="-1"><a class="header-anchor" href="#csv-agent-csv-表格数据处理" aria-hidden="true">#</a> Csv Agent - CSV 表格数据处理</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code> <code v-pre>Consumes file pointer</code></p>
<p>CsvAgent 可以解析或重构 CSV 表格数据。解析时，可以针对整个 CSV，也可以单独处理一行数据。</p>
<p>Set <code v-pre>mode</code> to <code v-pre>parse</code> to parse CSV from incoming event, when set to <code v-pre>serialize</code> the agent serilizes the data of events to CSV.</p>
<p><strong>Universal options</strong></p>
<p>Specify the <code v-pre>separator</code> which is used to seperate the fields from each other (default is <code v-pre>,</code>).</p>
<p><code v-pre>data_key</code> sets the key which contains the serialized CSV or parsed CSV data in emitted events.</p>
<p><strong>Parsing</strong></p>
<p>If <code v-pre>use_fields</code> is set to a comma seperated string and the CSV file contains field headers the agent will only extract the specified fields.</p>
<p><code v-pre>output</code> determines wheather one event per row is emitted or one event that includes all the rows.</p>
<p>Set <code v-pre>with_header</code> to <code v-pre>true</code> if first line of the CSV file are field names.</p>
<p>This agent can consume a ‘file pointer’ event from the following agents with no additional configuration: <code v-pre>FtpsiteAgent</code>, <code v-pre>LocalFileAgent</code>, <code v-pre>S3Agent</code>. Read more about the concept in the <a href="https://github.com/huginn/huginn/wiki/How-Huginn-works-with-files" target="_blank" rel="noopener noreferrer">wiki<ExternalLinkIcon/></a>.</p>
<p>When receiving the CSV data in a regular event use <a href="http://goessner.net/articles/JsonPath/" target="_blank" rel="noopener noreferrer">JSONPath<ExternalLinkIcon/></a> to select the path in <code v-pre>data_path</code>. <code v-pre>data_path</code> is only used when the received event does not contain a 'file pointer'.</p>
<p><strong>Serializing</strong></p>
<p>If <code v-pre>use_fields</code> is set to a comma seperated string and the first received event has a object at the specified <code v-pre>data_path</code> the generated CSV will only include the given fields.</p>
<p>Set <code v-pre>with_header</code> to <code v-pre>true</code> to include a field header in the CSV.</p>
<p>Use <a href="http://goessner.net/articles/JsonPath/" target="_blank" rel="noopener noreferrer">JSONPath<ExternalLinkIcon/></a> in <code v-pre>data_path</code> to select with part of the received events should be serialized.</p>
<hr>
<h3 id="data-output-agent-网页输出数据-rss" tabindex="-1"><a class="header-anchor" href="#data-output-agent-网页输出数据-rss" aria-hidden="true">#</a> Data Output Agent - 网页输出数据（RSS）</h3>
<p><code v-pre>Receives events</code></p>
<p>Data Output Agent 将传入的数据输入为 RSS 或 JSON，具体格式为“.xml”或“.json”。</p>
<p>This Agent will output data at:</p>
<p><code v-pre>https:///users/1/web_requests/:id/:secret.xml</code></p>
<p>where <code v-pre>:secret</code> is one of the allowed secrets specified in your options and the extension can be <code v-pre>xml</code> or <code v-pre>json</code>.</p>
<p>You can setup multiple secrets so that you can individually authorize external systems to access your Huginn data.</p>
<p>Options:</p>
<ul>
<li><code v-pre>secrets</code> - An array of tokens that the requestor must provide for light-weight authentication.</li>
<li><code v-pre>expected_receive_period_in_days</code> - How often you expect data to be received by this Agent from other Agents.</li>
<li><code v-pre>template</code> - A JSON object representing a mapping between item output keys and incoming event values. Use <a href="https://github.com/huginn/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> to format the values. Values of the <code v-pre>link</code>, <code v-pre>title</code>, <code v-pre>description</code> and <code v-pre>icon</code> keys will be put into the <code v-pre>&lt;channel&gt;</code> section of RSS output. Value of the <code v-pre>self</code> key will be used as URL for this feed itself, which is useful when you serve it via reverse proxy. The <code v-pre>item</code> key will be repeated for every Event. The <code v-pre>pubDate</code> key for each item will have the creation time of the Event unless given.</li>
<li><code v-pre>events_to_show</code> - The number of events to output in RSS or JSON. (default: <code v-pre>40</code>)</li>
<li><code v-pre>ttl</code> - A value for the <code v-pre>&lt;ttl&gt;</code> element in RSS output. (default: <code v-pre>60</code>)</li>
<li><code v-pre>ns_media</code> - Add <a href="https://en.wikipedia.org/wiki/Media_RSS" target="_blank" rel="noopener noreferrer">yahoo media namespace<ExternalLinkIcon/></a> in output xml</li>
<li><code v-pre>ns_itunes</code> - Add <a href="http://lists.apple.com/archives/syndication-dev/2005/Nov/msg00002.html" target="_blank" rel="noopener noreferrer">itunes compatible namespace<ExternalLinkIcon/></a> in output xml</li>
<li><code v-pre>rss_content_type</code> - Content-Type for RSS output (default: <code v-pre>application/rss+xml</code>)</li>
<li><code v-pre>response_headers</code> - An object with any custom response headers. (example: <code v-pre>{&quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;}</code>)</li>
<li><code v-pre>push_hubs</code> - Set to a list of PubSubHubbub endpoints you want to publish an update to every time this agent receives an event. (default: none) Popular hubs include <a href="https://pubsubhubbub.superfeedr.com/" target="_blank" rel="noopener noreferrer">Superfeedr<ExternalLinkIcon/></a> and <a href="https://pubsubhubbub.appspot.com/" target="_blank" rel="noopener noreferrer">Google<ExternalLinkIcon/></a>. Note that publishing updates will make your feed URL known to the public, so if you want to keep it secret, set up a reverse proxy to serve your feed via a safe URL and specify it in <code v-pre>template.self</code>.</li>
</ul>
<p>If you'd like to output RSS tags with attributes, such as <code v-pre>enclosure</code>, use something like the following in your <code v-pre>template</code>:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"enclosure"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"_attributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"{{media_url}}"</span><span class="token punctuation">,</span>
    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token string">"1234456789"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"audio/mpeg"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"another_tag"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"_attributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"value"</span><span class="token punctuation">,</span>
    <span class="token property">"another_key"</span><span class="token operator">:</span> <span class="token string">"another_value"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"_contents"</span><span class="token operator">:</span> <span class="token string">"tag contents (can be an object for nesting)"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ordering events</strong></p>
<p>To specify the order of events, set <code v-pre>events_order</code> to an array of sort keys, each of which looks like either <code v-pre>expression</code> or <code v-pre>[expression, type, descending]</code>, as described as follows:</p>
<ul>
<li>
<p><em>expression</em> is a Liquid template to generate a string to be used as sort key.</p>
</li>
<li>
<p><em>type</em> (optional) is one of <code v-pre>string</code> (default), <code v-pre>number</code> and <code v-pre>time</code>, which specifies how to evaluate <em>expression</em> for comparison.</p>
</li>
<li>
<p><em>descending</em> (optional) is a boolean value to determine if comparison should be done in descending (reverse) order, which defaults to <code v-pre>false</code>.</p>
</li>
</ul>
<p>Sort keys listed earlier take precedence over ones listed later. For example, if you want to sort articles by the date and then by the author, specify <code v-pre>[[&quot;{{date}}&quot;, &quot;time&quot;], &quot;{{author}}&quot;]</code>.</p>
<p>Sorting is done stably, so even if all events have the same set of sort key values the original order is retained. Also, a special Liquid variable <code v-pre>_index_</code> is provided, which contains the zero-based index number of each event, which means you can exactly reverse the order of events by specifying <code v-pre>[[&quot;{{_index_}}&quot;, &quot;number&quot;, true]]</code>.</p>
<p>DataOutputAgent will select the last <code v-pre>events_to_show</code> entries of its received events sorted in the order specified by <code v-pre>events_order</code>, which is defaulted to the event creation time. So, if you have multiple source agents that may create many events in a run, you may want to either increase <code v-pre>events_to_show</code> to have a larger &quot;window&quot;, or specify the <code v-pre>events_order</code> option to an appropriate value (like <code v-pre>date_published</code>) so events from various sources are properly mixed in the resulted feed.</p>
<p>There is also an option <code v-pre>events_list_order</code> that only controls the order of events listed in the final output, without attempting to maintain a total order of received events. It has the same format as <code v-pre>events_order</code> and is defaulted to <code v-pre>[[&quot;{{_index_}}&quot;,&quot;number&quot;,true]]</code> so the selected events are listed in reverse order like most popular RSS feeds list their articles.</p>
<p><strong>Liquid Templating</strong></p>
<p>In <a href="https://github.com/huginn/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> templating, the following variable is available:</p>
<ul>
<li><code v-pre>events</code>: An array of events being output, sorted in the given order, up to <code v-pre>events_to_show</code> in number. For example, if source events contain a site title in the <code v-pre>site_title</code> key, you can refer to it in <code v-pre>template.title</code> by putting <code v-pre>{{events.first.site_title}}</code>.</li>
</ul>
<hr>
<h3 id="de-duplication-agent-数据去重" tabindex="-1"><a class="header-anchor" href="#de-duplication-agent-数据去重" aria-hidden="true">#</a> De Duplication Agent - 数据去重</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code></p>
<p>De-duplication Agent 在接受数据后，会自动比对并去除重复数据。</p>
<p><code v-pre>property</code> the value that should be used to determine the uniqueness of the event (empty to use the whole payload)</p>
<p><code v-pre>lookback</code> amount of past Events to compare the value to (0 for unlimited)</p>
<p><code v-pre>expected_update_period_in_days</code> is used to determine if the Agent is working.</p>
<hr>
<h3 id="delay-agent-缓冲存储区" tabindex="-1"><a class="header-anchor" href="#delay-agent-缓冲存储区" aria-hidden="true">#</a> Delay Agent - 缓冲存储区</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code></p>
<p>Delay Agent 存储收到的事件，并按计划发送它们的副本。将其用作事件的缓冲区或队列。</p>
<p><code v-pre>max_events</code> should be set to the maximum number of events that you'd like to hold in the buffer. When this number is reached, new events will either be ignored, or will displace the oldest event already in the buffer, depending on whether you set <code v-pre>keep</code> to <code v-pre>newest</code> or <code v-pre>oldest</code>.</p>
<p><code v-pre>expected_receive_period_in_days</code> is used to determine if the Agent is working. Set it to the maximum number of days that you anticipate passing without this Agent receiving an incoming Event.</p>
<p><code v-pre>max_emitted_events</code> is used to limit the number of the maximum events which should be created. If you omit this DelayAgent will create events for every event stored in the memory.</p>
<hr>
<h3 id="digest-agent-摘要汇总-未理解" tabindex="-1"><a class="header-anchor" href="#digest-agent-摘要汇总-未理解" aria-hidden="true">#</a> Digest Agent - 摘要汇总 - 未理解</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code></p>
<p>Digest Agent 收集发送给它的任何事件并将其作为单个事件发出。</p>
<p>The resulting Event will have a payload message of <code v-pre>message</code>. You can use liquid templating in the <code v-pre>message</code>, have a look at the <a href="https://github.com/huginn/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Wiki<ExternalLinkIcon/></a> for details.</p>
<p>Set <code v-pre>expected_receive_period_in_days</code> to the maximum amount of time that you'd expect to pass between Events being received by this Agent.</p>
<p>If <code v-pre>retained_events</code> is set to 0 (the default), all received events are cleared after a digest is sent. Set <code v-pre>retained_events</code> to a value larger than 0 to keep a certain number of events around on a rolling basis to re-send in future digests.</p>
<p>For instance, say <code v-pre>retained_events</code> is set to 3 and the Agent has received Events <code v-pre>5</code>, <code v-pre>4</code>, and <code v-pre>3</code>. When a digest is sent, Events <code v-pre>5</code>, <code v-pre>4</code>, and <code v-pre>3</code> are retained for a future digest. After Event <code v-pre>6</code> is received, the next digest will contain Events <code v-pre>6</code>, <code v-pre>5</code>, and <code v-pre>4</code>.</p>
<hr>
<h3 id="dkt-clustering-agent-数据挖掘算法" tabindex="-1"><a class="header-anchor" href="#dkt-clustering-agent-数据挖掘算法" aria-hidden="true">#</a> Dkt Clustering Agent - 数据挖掘算法？</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code> <code v-pre>Consumes file pointer</code> <code v-pre>Dry runs</code><br>
<a href="http://huginnio.herokuapp.com/agent_gems#huginn_dkt_curation_agents" target="_blank" rel="noopener noreferrer">huginn_dkt_curation_agents<ExternalLinkIcon/></a> 使用 DKT APIs，其中含有多个 agents，具体查看上方链接。</p>
<p>The <code v-pre>DktClusteringAgent</code> clusters the input document collection. The document collection first has to be converted to a set of vectors.<br>
DktClusteringAgent 会对输入文档集合进行聚类，文档集合首先必须被转换成一组向量。输入文档需要为特定格式，DktClusteringAgent 会在这个输入数据中查找集群。输入会包含查找到的集群数量和找到的集群特定值的信息。</p>
<p>The Agent expects the input in this particular format and then proceeds to find clusters in this input data. The output contains information on the number of clusters found and specific values for the found clusters.</p>
<p>The Agent accepts all configuration options of the <code v-pre>/e-clustering/generateClusters</code> endpoint as of september 2016, have a look at the <a href="https://github.com/dkt-projekt/e-Clustering#e-clustering-1" target="_blank" rel="noopener noreferrer">offical documentation<ExternalLinkIcon/></a> if you need additional information</p>
<p>All Agent configuration options are interpolated using <a href="https://github.com/cantino/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> in the context of the received event.</p>
<p><code v-pre>url</code> allows to customize the endpoint of the API when hosting the DKT services elswhere.</p>
<p><code v-pre>body</code> use <a href="https://github.com/cantino/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> templating to specify the input .arff file. See <a href="http://www.cs.waikato.ac.nz/ml/weka/arff.html" target="_blank" rel="noopener noreferrer">http://www.cs.waikato.ac.nz/ml/weka/arff.html<ExternalLinkIcon/></a> for an explanation of this format.</p>
<p><code v-pre>language</code> language of the source data</p>
<p><code v-pre>algorithm</code>: the algorithm to be used during clustering. Currently EM and Kmeans are supported.</p>
<p><code v-pre>merge</code> set to <code v-pre>true</code> to retain the received payload and update it with the extracted result</p>
<p><code v-pre>result_key</code> when present the emitted Event data will be nested inside the specified key</p>
<p><strong>When receiving a file pointer:</strong></p>
<p><code v-pre>body</code> will be ignored and the contents of the received file will be send instead.</p>
<p>This agent can consume a ‘file pointer’ event from the following agents with no additional configuration: <code v-pre>FtpsiteAgent</code>, <code v-pre>LocalFileAgent</code>, <code v-pre>S3Agent</code>. Read more about the concept in the <a href="https://github.com/huginn/huginn/wiki/How-Huginn-works-with-files" target="_blank" rel="noopener noreferrer">wiki<ExternalLinkIcon/></a>.</p>
<hr>
<h3 id="dropbox-file-url" tabindex="-1"><a class="header-anchor" href="#dropbox-file-url" aria-hidden="true">#</a> Dropbox File Url</h3>
<p><code v-pre>Agent Creates</code> <code v-pre>events Receives events</code> <code v-pre>Dry runs</code> <code v-pre>Dropbox oauth2</code></p>
<p>DropboxFileUrlAgent 用于使用 Dropbox。它需要一个文件路径（或多个文件路径），并通过<a href="https://www.dropbox.com/developers/core/docs#media" target="_blank" rel="noopener noreferrer">临时链接<ExternalLinkIcon/></a>或<a href="https://www.dropbox.com/developers/core/docs#shares" target="_blank" rel="noopener noreferrer">永久链接<ExternalLinkIcon/></a>发送事件。</p>
<p>Include the <code v-pre>dropbox-api</code> and <code v-pre>omniauth-dropbox</code> gems in your <code v-pre>Gemfile</code> and set <code v-pre>DROPBOX_OAUTH_KEY</code> and <code v-pre>DROPBOX_OAUTH_SECRET</code> in your environment to use Dropbox Agents.</p>
<p>The incoming event payload needs to have a <code v-pre>paths</code> key, with a comma-separated list of files you want the URL for. For example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token string">"first/path, second/path"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TIP</strong>: You can use the <em>Event Formatting Agent</em> to format events before they come in. Here’s an example configuration for formatting an event coming out of a <em>Dropbox Watch Agent</em>:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"instructions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token string">"{{ added | map: 'path' | join: ',' }}"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"matchers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"clean"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>An example of usage would be to watch a specific Dropbox directory (with the <em>DropboxWatchAgent</em>) and get the URLs for the added or updated files. You could then, for example, send emails with those links.</p>
<p>Set <code v-pre>link_type</code> to <code v-pre>'temporary'</code> if you want temporary links, or to <code v-pre>'permanent'</code> for permanent ones.</p>
<hr>
<h3 id="dropbox-watch-agent" tabindex="-1"><a class="header-anchor" href="#dropbox-watch-agent" aria-hidden="true">#</a> Dropbox Watch Agent</h3>
<p><code v-pre>Creates events</code> <code v-pre>Dropbox oauth2</code></p>
<p>Dropbox Watch Agent 监测给定值<code v-pre>dir_to_watch</code>并发出检测到的更改的事件。</p>
<p>Include the <code v-pre>dropbox-api</code> and <code v-pre>omniauth-dropbox</code> gems in your <code v-pre>Gemfile</code> and set <code v-pre>DROPBOX_OAUTH_KEY</code> and <code v-pre>DROPBOX_OAUTH_SECRET</code> in your environment to use Dropbox Agents.</p>
<hr>
<h3 id="email-agent" tabindex="-1"><a class="header-anchor" href="#email-agent" aria-hidden="true">#</a> Email Agent</h3>
<p>Email Agent 将刚收到的信息 <code v-pre>Receives events</code>，以邮件形式发送通知。</p>
<p>你可以通过提供<code v-pre>subject</code>选项来指定邮件的主题行，该选项可以包含<a href="https://github.com/huginn/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a>的格式。例如，你可以提供<code v-pre>&quot;Huginn email&quot;</code>来设置一个简单的主题，或者<code v-pre>{{subject}}</code>来使用传入事件中的<code v-pre>subject</code>键。</p>
<p>默认情况下，邮件正文将包含一个可选的 &quot;标题&quot;，然后是事件的键的列表。</p>
<p>你可以通过加入可选的<code v-pre>body</code>参数来定制邮件正文。像<code v-pre>subject</code>一样，<code v-pre>body</code>可以是一个简单的信息或一个液体模板。你可以只发送事件的<code v-pre>some_text</code>字段，<code v-pre>body</code>设置为<code v-pre>{{ some_text }}</code>。身体可以包含简单的 HTML，并将被净化。注意，当使用<code v-pre>body</code>时，它将被<code v-pre>&lt;html&gt;</code>和<code v-pre>&lt;body&gt;</code>标签包裹，所以你不需要自己添加这些。</p>
<p>你可以为邮件指定一个或多个 &quot;收件人&quot;，或者跳过这个选项，以便将邮件发送到你的账户的默认邮件地址。</p>
<p>你可以为邮件提供一个<code v-pre>from</code>地址，或者留空，默认为<code v-pre>EMAIL_FROM_ADDRESS</code> (``) 的值。</p>
<p>你可以为邮件提供一个<code v-pre>content_type</code>，并指定发送<code v-pre>text/plain</code>或<code v-pre>text/html</code>。如果你不指定<code v-pre>content_type</code>，那么收件人的邮件服务器将决定正确的渲染方式。</p>
<p>设置<code v-pre>expected_receive_period_in_days</code>为您希望该代理收到事件之间的最大时间。</p>
<hr>
<h3 id="email-digest-agent-邮件摘要" tabindex="-1"><a class="header-anchor" href="#email-digest-agent-邮件摘要" aria-hidden="true">#</a> Email Digest Agent - 邮件摘要</h3>
<p><code v-pre>Receives events</code></p>
<p>Email Digest Agent 收集发送给它的任何事件，并按计划通过电子邮件发送。使用事件的数目与 <code v-pre>Keep events</code> 有关，这意味着如果事件在 Email Digest Agent 计划运行之前到期，它们将不会出现在电子邮件中。</p>
<p>By default, the will have a <code v-pre>subject</code> and an optional <code v-pre>headline</code> before listing the Events. If the Events' payloads contain a <code v-pre>message</code>, that will be highlighted, otherwise everything in their payloads will be shown.</p>
<p>You can specify one or more <code v-pre>recipients</code> for the email, or skip the option in order to send the email to your account's default email address.</p>
<p>You can provide a <code v-pre>from</code> address for the email, or leave it blank to default to the value of <code v-pre>EMAIL_FROM_ADDRESS</code> (``).</p>
<p>You can provide a <code v-pre>content_type</code> for the email and specify <code v-pre>text/plain</code> or <code v-pre>text/html</code> to be sent. If you do not specify <code v-pre>content_type</code>, then the recipient email server will determine the correct rendering.</p>
<p>Set <code v-pre>expected_receive_period_in_days</code> to the maximum amount of time that you'd expect to pass between Events being received by this Agent.</p>
<hr>
<h3 id="evernote-agent" tabindex="-1"><a class="header-anchor" href="#evernote-agent" aria-hidden="true">#</a> Evernote Agent</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code> <code v-pre>Evernote</code></p>
<p>Evernote Agent 与你的 Evernote 账户相连，新建笔记。</p>
<p>Visit <a href="https://dev.evernote.com/doc/" target="_blank" rel="noopener noreferrer">Evernote<ExternalLinkIcon/></a> to set up an Evernote app and receive an api key and secret. Store these in the Evernote environment variables in the .env file. You will also need to create a <a href="https://sandbox.evernote.com/Registration.action" target="_blank" rel="noopener noreferrer">Sandbox<ExternalLinkIcon/></a> account to use during development.</p>
<p>Next, you'll need to authenticate with Evernote in the <a href="http://huginnio.herokuapp.com/services" target="_blank" rel="noopener noreferrer">Services<ExternalLinkIcon/></a> section.</p>
<p>Options:</p>
<ul>
<li>
<p><code v-pre>mode</code> - Two possible values:</p>
<ul>
<li>
<p><code v-pre>update</code> Based on events it receives, the agent will create notes or update notes with the same <code v-pre>title</code> and <code v-pre>notebook</code></p>
</li>
<li>
<p><code v-pre>read</code> On a schedule, it will generate events containing data for newly added or updated notes</p>
</li>
</ul>
</li>
<li>
<p><code v-pre>include_xhtml_content</code> - Set to <code v-pre>true</code> to include the content in ENML (Evernote Markup Language) of the note</p>
</li>
<li>
<p><code v-pre>note</code></p>
<ul>
<li>
<p>When <code v-pre>mode</code> is <code v-pre>update</code> the parameters of <code v-pre>note</code> are the attributes of the note to be added/edited. To edit a note, both <code v-pre>title</code> and <code v-pre>notebook</code> must be set.</p>
<p>For example, to add the tags 'comic' and 'CS' to a note titled 'xkcd Survey' in the notebook 'xkcd', use:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"notes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"xkcd Survey"</span><span class="token punctuation">,</span>
  <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"notebook"</span><span class="token operator">:</span> <span class="token string">"xkcd"</span><span class="token punctuation">,</span>
  <span class="token property">"tagNames"</span><span class="token operator">:</span> <span class="token string">"comic, CS"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If a note with the above title and notebook did note exist already, one would be created.</p>
</li>
<li>
<p>When <code v-pre>mode</code> is <code v-pre>read</code> the values are search parameters. Note: The <code v-pre>content</code> parameter is not used for searching. Setting <code v-pre>title</code> only filters notes whose titles contain <code v-pre>title</code> as a substring, not as the exact title.</p>
<p>For example, to find all notes with tag 'CS' in the notebook 'xkcd', use:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"notes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"notebook"</span><span class="token operator">:</span> <span class="token string">"xkcd"</span><span class="token punctuation">,</span>
  <span class="token property">"tagNames"</span><span class="token operator">:</span> <span class="token string">"CS"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<hr>
<h3 id="freme-explore-agent-sparql-数据断点" tabindex="-1"><a class="header-anchor" href="#freme-explore-agent-sparql-数据断点" aria-hidden="true">#</a> Freme Explore Agent - SPARQL-数据断点？</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code> <code v-pre>Dry runs</code> <a href="http://huginnio.herokuapp.com/agent_gems#huginn_freme_enrichment_agents" target="_blank" rel="noopener noreferrer">huginn_freme_enrichment_agents<ExternalLinkIcon/></a> 使用 FREME APIs，其中含有多个 agents，具体查看上方链接。</p>
<p>The <code v-pre>FremeExploreAgent</code> can retrieve description of a resource from a given endpoint. The endpoint can be SPARQL or Linked Data Fragments endpoint.<br>
FremeExploreAgent 可以检索给定端点的资源描述。端点可以是 SPARQL 或 Linked Data Fragments 端点。</p>
<p>The Agent accepts all configuration options of the <code v-pre>/e-link/explore</code> endpoint as of September 2016, have a look at the <a href="http://api.freme-project.eu/doc/current/api-doc/full.html#!/e-Link/explore" target="_blank" rel="noopener noreferrer">offical documentation<ExternalLinkIcon/></a> if you need additional information.</p>
<p>All Agent configuration options are interpolated using <a href="https://github.com/cantino/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> in the context of the received event.</p>
<p><code v-pre>base_url</code> allows to customize the API server when hosting the FREME services elswhere.</p>
<p><code v-pre>auth_token</code> can be set to access private filters, datasets, templates or pipelines (depending on the agent).</p>
<p><code v-pre>outformat</code> requested RDF serialization format of the output (required), CSV is only supported when using a filter.</p>
<p><code v-pre>resource</code> a URI of the resource which should be described (required).</p>
<p><code v-pre>endpoint</code> a URL of the endpoint which should be used to retrieve info about the resource.</p>
<p><code v-pre>endpoint_type</code> the type of the endpoint (required).</p>
<p><code v-pre>filter</code> allows to post-process the results using a pre-configured SPARQL filter. Check the <a href="http://api.freme-project.eu/doc/current/knowledge-base/freme-for-api-users/filtering.html" target="_blank" rel="noopener noreferrer">official documentation<ExternalLinkIcon/></a> for details.</p>
<p><code v-pre>merge</code> set to <code v-pre>true</code> to retain the received payload and update it with the extracted result</p>
<p><code v-pre>result_key</code> when present the emitted Event data will be nested inside the specified key</p>
<hr>
<h3 id="ftpsite-agent" tabindex="-1"><a class="header-anchor" href="#ftpsite-agent" aria-hidden="true">#</a> Ftpsite Agent</h3>
<p><code v-pre>Creates events</code> <code v-pre>Receives events</code> <code v-pre>Emits file pointer</code></p>
<p>Ftp Site Agent 检查 FTP 站点，并根据目录中新上载的文件创建事件。当接收到事件时，它会在配置的 FTP 服务器上创建文件。</p>
<p><code v-pre>mode</code> must be present and either <code v-pre>read</code> or <code v-pre>write</code>, in <code v-pre>read</code> mode the agent checks the FTP site for changed files, with <code v-pre>write</code> it writes received events to a file on the server.</p>
<p><strong>Universal options</strong></p>
<p>Specify a <code v-pre>url</code> that represents a directory of an FTP site to watch, and a list of <code v-pre>patterns</code> to match against file names.</p>
<p>Login credentials can be included in <code v-pre>url</code> if authentication is required: <code v-pre>ftp://username:password@ftp.example.com/path</code>. Liquid formatting is supported as well: <code v-pre>ftp://{% credential ftp_credentials %}@ftp.example.com/</code></p>
<p>Optionally specify the encoding of the files you want to read/write in <code v-pre>force_encoding</code>, by default UTF-8 is used.</p>
<p><strong>Reading</strong></p>
<p>Only files with a last modification time later than the <code v-pre>after</code> value, if specifed, are emitted as event.</p>
<p><strong>Writing</strong></p>
<p>Specify the filename to use in <code v-pre>filename</code>, Liquid interpolation is possible to change the name per event.</p>
<p>Use <a href="https://github.com/huginn/huginn/wiki/Formatting-Events-using-Liquid" target="_blank" rel="noopener noreferrer">Liquid<ExternalLinkIcon/></a> templating in <code v-pre>data</code> to specify which part of the received event should be written.</p>
<p>This agent only emits a ‘file pointer’, not the data inside the files, the following agents can consume the created events: <code v-pre>CsvAgent</code>, <code v-pre>PostAgent</code>, <code v-pre>ReadFileAgent</code>. Read more about the concept in the <a href="https://github.com/huginn/huginn/wiki/How-Huginn-works-with-files" target="_blank" rel="noopener noreferrer">wiki<ExternalLinkIcon/></a>.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="https://blog.csdn.net/qq_36822217/article/details/103156327" target="_blank" rel="noopener noreferrer">ERROR 2002 (HY000)<ExternalLinkIcon/></a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p><a href="https://github.com/huginn/huginn/issues/2410" target="_blank" rel="noopener noreferrer">rake export hangs<ExternalLinkIcon/></a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote3" class="footnote-item"><p><a href="https://github.com/huginn/huginn/issues/1618" target="_blank" rel="noopener noreferrer">Huginn failed to restart after installed node and systemd<ExternalLinkIcon/></a> <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


