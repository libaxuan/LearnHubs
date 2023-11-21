<template><div><h2 id="静态托管" tabindex="-1"><a class="header-anchor" href="#静态托管" aria-hidden="true">#</a> 静态托管</h2>
<p>如果在国内静态资源库找不到所需的静态包，建议使用 <code v-pre>npm i</code> 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。</p>
<p>静态资源库：</p>
<ul>
<li><a href="https://www.staticfile.org/" target="_blank" rel="noopener noreferrer">Staticfile CDN<ExternalLinkIcon/></a>：国内维护最稳定的 CDN。</li>
<li><a href="https://cdn.bytedance.com/" target="_blank" rel="noopener noreferrer">字节 CDN<ExternalLinkIcon/></a>：测速表现不错，缓存过期时间最长设置一年，而自 2022 年 3 月起，静态资源已不再更新。</li>
</ul>
<p>emoji 等可以使用静态资源库上的项目，比如 twemoji，上面有集成 png 图片。</p>
<h3 id="npm-包" tabindex="-1"><a class="header-anchor" href="#npm-包" aria-hidden="true">#</a> NPM 包</h3>
<ul>
<li>UNPKG：<strong>有墙风险且不稳定</strong>，默认为最新版本，无需 <code v-pre>@latest</code> 标签。
<ul>
<li>将静态文件发布为 npm 包，参考<a href="https://segmentfault.com/a/1190000023075167" target="_blank" rel="noopener noreferrer">一分钟教你发布 npm 包<ExternalLinkIcon/></a>。</li>
<li>加速：在 <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm 官方源<ExternalLinkIcon/></a>中搜索包位置，然后使用前缀 <code v-pre>https://unpkg.com/</code>。</li>
</ul>
</li>
<li><a href="https://npmmirror.com/" target="_blank" rel="noopener noreferrer">NPM MIRROR<ExternalLinkIcon/></a>：NPM 项目的国内镜像镜像，不能做静态托管用途。<code v-pre>https://registry.npmmirror.com/项目名/版本号</code> 可以看见项目的各种信息，但看不了里面的文件。</li>
<li>UNPKG 镜像：有资源可以用服务器自建服务，反向代理 unpkg。
<ul>
<li><s>饿了么 CDN（已关）：国内唯一能用的 npm 镜像，2022.07.13 发现外部访问被拒绝。之前饿了么并没说支持对外，可能已经彻底取消了。使用饿了么 CDN 时，注意 <code v-pre>https://npm.elemecdn.com/react@latest/</code> 需要时间更新，具体频率未知，可固定大版本号来获取更新 <code v-pre>https://npm.elemecdn.com/react@^18/</code>。</s></li>
</ul>
</li>
<li>GitHub：基于 GitHub 公共仓库的资源托管，资源不会失效，但有时需要根据 CDN 服务商而更换域名。
<ul>
<li><s><a href="https://statically.io/" target="_blank" rel="noopener noreferrer">Statically<ExternalLinkIcon/></a>：jsDeliver 的替代品，在中国大陆所有地区连接异常。</s></li>
<li><s>jsDelivr（已墙）：速度最快，原本是最稳的，但域名暴雷后，经常断开，2022.06.01 彻底打不开。配合 Github action，更新后自动访问 jsdelivr CDN 缓存刷新链接，保持页面常新。刷新命令参考 <code v-pre>curl https://purge.jsdelivr.net/gh/username/project/file</code>。</s></li>
</ul>
</li>
</ul>
<p>由于第三方托管过于不稳定，目前我使用自托管 oss.gpt-vip.top。</p>
<h3 id="部署平台" tabindex="-1"><a class="header-anchor" href="#部署平台" aria-hidden="true">#</a> 部署平台</h3>
<ul>
<li>Cloudflare：Pages 和 Workers 两类部署方式。
<ul>
<li><RouterLink to="/deploy/Cloudflare.html#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86">Workers</RouterLink>：复制镜像网站，可直接访问，但反向代理稳定性成疑。</li>
<li>Pages：部署简单，外网速度很快，但国内速度不稳，而且 page.dev 域名有时会被墙，可购买便宜的临时域名（一年）来解决该问题。</li>
</ul>
</li>
<li>Netlify：国内速度慢点，图片容易卡死，但还算稳定。</li>
<li>Vercel：推荐使用 GitHub 账户登录，需绑定手机号（不支持 Voice），支持国内手机号。2022.08.26，「*.vercel.app」域名被 DNS 污染，需要绑定自定义域名。</li>
<li>AWS: 邮箱注册，不过需要信用卡认证。</li>
<li>国内平台：Gitee、WuliHub、CODING，都需要实名认证。</li>
</ul>
<h3 id="ipfs" tabindex="-1"><a class="header-anchor" href="#ipfs" aria-hidden="true">#</a> IPFS</h3>
<p>IPFS 无需服务器就可建立静态网站，号称永不失效，但<strong>国内稳定性成疑问，实用性一般</strong>。IPFS 托管在一个网关上，并不会自动复制到所有网关。</p>
<p><a href="https://pinata.cloud/" target="_blank" rel="noopener noreferrer">pinata<ExternalLinkIcon/></a> 上传网站构建的目录文件夹，上传后，即可通过 IPFS Hash 访问。网站目录中必须有 index.html，否则网页中将显示网站目录。即使有 index.html，其他人在拥有 CID 后，可以通过 IPFS Desktop 来获取网站的完整目录。为确保私密性，建议只上传单文件。使用单文件 CID 视为单一网站，不可调用原目录中的文件。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<p>上传 ipfs 到 pinata 之后，cloudflare 等其他网关不一定会完全复制文件，php 无法抓取加载，所以不建议使用 cloudflare 网关。</p>
<p>cloudflare 接管 pinata 后，ipfs 域名需通过「pinata 托管」&gt;「cloudflare DNS」&gt;「cloudflare SSL」。如果中途将 DNS 指向 <code v-pre>http://gateway.pinata.cloud</code> 等非 cloudflare ipfs 网关域名，cloudflare SSL 证书将失效。即便把链接改为非加密的 http，pinata 依然会视之为无效链接而拒绝访问。</p>
<p>对于文件较少且链接有效的域名，可按 <a href="https://www.cloudflare.com/zh-cn/distributed-web-gateway/" target="_blank" rel="noopener noreferrer">Cloudflare IPFS<ExternalLinkIcon/></a> 页面说明来设置 DNS，提交 IPFS 域名 30 分钟后，即可获取 SSL 证书。</p>
<ol>
<li>添加 CNAME 记录，将你的 IPFS 域名 <code v-pre>xxx.example.com</code> 指向 <code v-pre>cloudflare-ipfs.com</code>。</li>
<li><code v-pre>_dnslink.xxx.example.com</code> 设置为 <code v-pre>dnslink=/ipfs/&lt;your_ipfs_hash_here&gt;</code>。</li>
</ol>
<h2 id="github-同步到-vps" tabindex="-1"><a class="header-anchor" href="#github-同步到-vps" aria-hidden="true">#</a> GitHub 同步到 VPS</h2>
<p>代码、文章推送到 GitHub 后，会自动生成可访问的网页，但国内访问 GitHub Pages 的速度极不稳定，为了确保网站能被正常访问，必须增加国内的访问节点。</p>
<p>很多人选择 Gitee Pages 作为国内节点，GitHub Actions 将新文档同步到 Gitee，生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 的限制非常多，免费版无法自定义域名，必须实名验证，更别提近期的下架风波。因此，我没选 Gitee，而是把文档同步到国内服务器（域名需备案）。</p>
<div class="hint-container tip">
<p class="hint-container-title">文件夹名称请勿使用大写字母，否则在同步时容易产生错误。</p>
</div>
<h3 id="同步到-ftp" tabindex="-1"><a class="header-anchor" href="#同步到-ftp" aria-hidden="true">#</a> 同步到 FTP</h3>
<p>如果你有 FTP 服务器，可使用 <a href="https://github.com/SamKirkland/FTP-Deploy-Action" target="_blank" rel="noopener noreferrer">FTP-Deploy-Action<ExternalLinkIcon/></a> 将 github 代码推送到服务器上。Actions 步骤参考 <RouterLink to="/deploy/GitHub.html">GitHub 说明</RouterLink>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>on: push
name: 🚀 Deploy website on push
jobs:
  web-deploy:
    name: 🎉 Deploy
    runs-on: ubuntu-latest
    steps:
    - name: 🚚 Get latest code
      uses: actions/checkout@v3

    - name: 📂 Sync files
      uses: SamKirkland/FTP-Deploy-Action@4.3.3
      with:
        server: <span class="token variable">${{ secrets.ftp_host }</span><span class="token punctuation">}</span>
        username: <span class="token variable">${{ secrets.ftp_username }</span><span class="token punctuation">}</span>
        password: <span class="token variable">${{ secrets.ftp_password }</span><span class="token punctuation">}</span>
        port: <span class="token variable">${{ secrets.ftp_port }</span><span class="token punctuation">}</span> <span class="token comment"># 建议更改默认的 21 端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 FTP 时，需在云服务商的安全组和服务器上开放 FTP 端口，并临时暂停宝塔系统加固等安全插件（新建 FTP 容易与安全插件冲突）。</p>
<p>如果出现 <code v-pre>FTPError: 530 Login authentication failed</code>，则说明 FTP 密码错误或账号不存在，需用 FileZilla 测试 FTP 的有效性。确认 FTP 无效后，检查 FTP 密码是否填写正确，是否只有大小写字母和数字。如果密码错误，则在 github secrets 重新 update 密钥。如果密码正确，则进入 <code v-pre>/www/server/pure-ftpd/etc/pureftpd.passwd</code>，检查是否有该 FTP 账户。没有 FTP 账户的话，<strong>暂停宝塔系统加固</strong>等安全插件后，重新新建 FTP。</p>
<p>如果出现 <code v-pre>Error: Timeout (control socket)</code>，则说明同步服务器超时，可进入 Actions 页面点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭防火墙，测试是否 GitHub 服务器被拉黑了。</p>
<h3 id="ssh-同步" tabindex="-1"><a class="header-anchor" href="#ssh-同步" aria-hidden="true">#</a> SSH 同步</h3>
<p>如果你有服务器的 SSH 权限，可以使用 <a href="https://github.com/SamKirkland/web-deploy" target="_blank" rel="noopener noreferrer">web-deploy<ExternalLinkIcon/></a> 以 SSH 同步方式发布页面。但与 FTP 相比，不确定安全性、速度、时间是否会区别。我尝试连接一直报错 <code v-pre>Permission denied (publickey,password)</code>。（有可能是服务器需要非 root 用户，adduser 一直加不上。）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>on: push
name: Publish Website
jobs:
  web-deploy:
    name: 🚀 Deploy Website Every Commit
    runs-on: ubuntu-latest
    steps:
    - name: 🚚 Get Latest Code
      uses: actions/checkout@v3

    - name: 📂 Sync Files
      uses: SamKirkland/web-deploy@v1
      with:
        source-path: docs/.vuepress/dist/
        target-server: <span class="token variable">${{ secrets.host }</span><span class="token punctuation">}</span>
        remote-user: <span class="token variable">${{ secrets.ssh_username }</span><span class="token punctuation">}</span>
        private-ssh-key: <span class="token variable">${{ secrets.SSH_KEY }</span><span class="token punctuation">}</span>
        destination-path: <span class="token variable">${{ secrets.destination_folder }</span><span class="token punctuation">}</span>
        ssh-port: <span class="token variable">${{ secrets.ssh_port }</span><span class="token punctuation">}</span> <span class="token comment"># 建议更改默认的 22 端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现报错 <code v-pre>error in libcrypto</code>，说明 SSH 密钥错误，需要登陆服务器终端，运行以下命令。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-m</span> PEM <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span>
<span class="token function">cat</span> id_rsa.pub <span class="token operator">>></span> authorized_keys
<span class="token function">cat</span> id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步到-oss" tabindex="-1"><a class="header-anchor" href="#同步到-oss" aria-hidden="true">#</a> 同步到 oss</h3>
<p>如果没有服务器，可以把文件部署在云运营商的云存储上。比如用 <a href="https://github.com/marketplace/actions/aliyun-oss-website-action" target="_blank" rel="noopener noreferrer">aliyun-oss-website-action<ExternalLinkIcon/></a>，将 repo 文件 build 成网站文件，然后同步到阿里云 oss 并运行网站。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>name: deploy md to oss
on:
  push:
    branches: <span class="token punctuation">[</span> <span class="token string">"main"</span> <span class="token punctuation">]</span>
  pull_request:
    branches: <span class="token punctuation">[</span> <span class="token string">"main"</span> <span class="token punctuation">]</span>
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    <span class="token comment"># load repo to /github/workspace</span>
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: <span class="token string">'14.x'</span>
    <span class="token comment"># 打包文档命令</span>
    <span class="token comment"># - run: npm install yarn@1.22.4 -g</span>
    <span class="token comment"># - run: yarn install</span>
    <span class="token comment"># - run: yarn docs:build #需要配合 yarn 的 package.json</span>
    - name: aliyun-oss-website-action
      uses: fangbinwei/aliyun-oss-website-action@v1.3.0
      with:
          accessKeyId: <span class="token variable">${{ secrets.ACCESS_KEY_ID }</span><span class="token punctuation">}</span>
          accessKeySecret: <span class="token variable">${{ secrets.ACCESS_KEY_SECRET }</span><span class="token punctuation">}</span>
          bucket: learndata-notes
          <span class="token comment"># use your own endpoint</span>
          endpoint: oss-cn-shanghai.aliyuncs.com
          <span class="token comment"># 全目录上传</span>
          folder: <span class="token builtin class-name">.</span>
          <span class="token comment"># 不上传的文件</span>
          exclude: <span class="token operator">|</span>
            .github/
            .gitattributes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01" target="_blank" rel="noopener noreferrer">How to Easily Host a Website on IPFS<ExternalLinkIcon/></a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


