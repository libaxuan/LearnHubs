<template><div><p>Github 墙得太厉害，就想在服务器上自建 Jekyll 环境，用上 Travis CI 和 Docker 后才发现完全没必要。。</p>
<p>Jekyll 环境官方<a href="https://www.jekyll.com.cn/docs/quickstart/" target="_blank" rel="noopener noreferrer">安装指南<ExternalLinkIcon/></a>：</p>
<ol>
<li>
<p>使用 RVM 安装 Ruby (rvm -&gt; ruby -&gt; gem 网上大量教程就不赘述了)</p>
</li>
<li>
<p>安装 jekyll：<code v-pre>gem install jekyll</code>。</p>
</li>
<li>
<p>进入 jekyll 网站，执行命令行 <code v-pre>jekyll build</code>，生成 Jekyll 静态网页。</p>
</li>
<li>
<p>网站的执行目录需要指定在 <code v-pre>_site</code>，这是 Jekyll 生成的静态页面目录。之后每次更新博客，都需要进入服务器执行一次 <code v-pre>jekyll build</code>，重新生成静态页面。</p>
</li>
</ol>
<p>愿意折腾的话，可以使用 Travis CI 和 Docker 完成全自动化更新。</p>
</div></template>


