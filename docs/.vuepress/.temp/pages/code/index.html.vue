<template><div><p>代码编程的学习路径：</p>
<ul>
<li>基础知识：ES6, MySQL，HTML，Markdown，正则表达式</li>
<li>脚本/开发工具：AutoHotkey，Electron</li>
<li>编程语言：<a href="https://www.typescriptlang.org/zh/" target="_blank" rel="noopener noreferrer">TypeScript 4.x<ExternalLinkIcon/></a> + <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a></li>
<li>前端框架：<a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue 3.x<ExternalLinkIcon/></a>
<ul>
<li>构建工具：<a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite 2.x<ExternalLinkIcon/></a></li>
<li>路由工具：<a href="https://router.vuejs.org/zh/index.html" target="_blank" rel="noopener noreferrer">Vue Router 4.x<ExternalLinkIcon/></a></li>
<li>状态管理：<a href="https://next.vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuex 4.x<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>UI 框架：<a href="https://element-plus.gitee.io/zh-CN/guide/quickstart.html" target="_blank" rel="noopener noreferrer">Element Plus<ExternalLinkIcon/></a>
<ul>
<li>CSS 预编译：<a href="https://stylus-lang.com/" target="_blank" rel="noopener noreferrer">Stylus<ExternalLinkIcon/></a> / <a href="https://sass.bootcss.com/documentation" target="_blank" rel="noopener noreferrer">Sass<ExternalLinkIcon/></a> / <a href="http://lesscss.cn/" target="_blank" rel="noopener noreferrer">Less<ExternalLinkIcon/></a></li>
<li>CSS 后处理器：PostCSS，<a href="https://www.tailwindcss.cn/docs" target="_blank" rel="noopener noreferrer">tailwindcss<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Node.js 框架：<a href="https://www.midwayjs.org/docs/intro" target="_blank" rel="noopener noreferrer">Midway<ExternalLinkIcon/></a></li>
<li>HTTP 工具：<a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer">Axios<ExternalLinkIcon/></a>
<ul>
<li>Git Hook 工具：<a href="https://typicode.github.io/husky/#/" target="_blank" rel="noopener noreferrer">husky<ExternalLinkIcon/></a> + <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged<ExternalLinkIcon/></a></li>
<li>代码规范：<a href="http://editorconfig.org" target="_blank" rel="noopener noreferrer">EditorConfig<ExternalLinkIcon/></a> + <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier<ExternalLinkIcon/></a> + <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint<ExternalLinkIcon/></a> + <a href="https://github.com/airbnb/javascript#translation" target="_blank" rel="noopener noreferrer">Airbnb JavaScript Style Guide<ExternalLinkIcon/></a></li>
<li>提交规范：<a href="http://commitizen.github.io/cz-cli/" target="_blank" rel="noopener noreferrer">Commitizen<ExternalLinkIcon/></a> + <a href="https://commitlint.js.org/#/" target="_blank" rel="noopener noreferrer">Commitlint<ExternalLinkIcon/></a></li>
<li>单元测试：<a href="https://next.vue-test-utils.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-test-utils<ExternalLinkIcon/></a> + <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">jest<ExternalLinkIcon/></a> + <a href="https://github.com/vuejs/vue-jest" target="_blank" rel="noopener noreferrer">vue-jest<ExternalLinkIcon/></a> + <a href="https://kulshekhar.github.io/ts-jest/" target="_blank" rel="noopener noreferrer">ts-jest<ExternalLinkIcon/></a></li>
<li>自动部署：<a href="https://docs.github.com/cn/actions/learn-github-actions" target="_blank" rel="noopener noreferrer">GitHub Actions<ExternalLinkIcon/></a></li>
<li><a href="https://documate.site/" target="_blank" rel="noopener noreferrer">Documate<ExternalLinkIcon/></a>：用于在文档网站中嵌入人工智能聊天对话框，根据内容回答用户问题。中间会调用 OpenAI API 用于回答问题。</li>
</ul>
</li>
</ul>
<h2 id="visual-studio-code" tabindex="-1"><a class="header-anchor" href="#visual-studio-code" aria-hidden="true">#</a> Visual Studio Code</h2>
<p>本地代码编辑器使用 Visual Studio Code，其插件生态成熟，能实现大部分的需求。</p>
<p>GitHub Copilot，CodeGeeX，Tabnine，aiXcoder 插件均可以辅助补全代码。Tabnine 和 aiXcoder 有免费版，可以预测一到两行的代码。CodeGeeX 由清华大学开发，提供完整补全功能。</p>
<h3 id="修改快捷键" tabindex="-1"><a class="header-anchor" href="#修改快捷键" aria-hidden="true">#</a> 修改快捷键</h3>
<p>选择「菜单栏」&gt;「文件」&gt;「首选项」&gt;「键盘快捷方式」，修改或解绑快捷键。</p>
<p>以 PicGo 图床为例，其默认配置放置于 <code v-pre>%AppData%\picgo\data.json</code>，推荐快捷键为</p>
<ul>
<li>剪贴板图片上传：<code v-pre>ctrlOrCmd+alt+q</code></li>
<li>打开文件管理器上传：<code v-pre>ctrlOrCmd+alt+e</code></li>
<li>打开输入框输入路径上传：<code v-pre>ctrlOrCmd+alt+x</code></li>
</ul>
<p>另外，右键对应快捷方式，点击「重置按键绑定」，即可将快捷键设为默认。</p>
<h3 id="排除文件夹" tabindex="-1"><a class="header-anchor" href="#排除文件夹" aria-hidden="true">#</a> 排除文件夹</h3>
<p>在 VS Code 中点击快捷键 Ctrl/Command+Shift+P，输入「setting」，在设置中添加排除文件夹选项。注意：排除文件夹不能使用全路径，只能使用规则排除。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"files.exclude"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"**/blog"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏指定文件夹</span>
  <span class="token property">"**/[Pp]lugins"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//使用中括号时表示不区分大小写</span>
  <span class="token property">"**/*.pyc"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏所有 pyc 文件</span>
  <span class="token property">"**/*.d.ts"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏所有 d.ts 文件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在线-ide" tabindex="-1"><a class="header-anchor" href="#在线-ide" aria-hidden="true">#</a> 在线 IDE</h2>
<p>在线 IDE 最大的优势是开箱即用，无需搭建环境，避免本地环境错误导致的各类 bug。</p>
<p><a href="https://stackblitz.com/" target="_blank" rel="noopener noreferrer">StackBlitz<ExternalLinkIcon/></a>：StackBlitz 界面类似 Visual Studio Code，可以直接 push 和拉取 GitHub 仓库的代码进行查看和编辑，项目支持离线开发，同时所有应用程序会自动部署在其服务器上。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<p><a href="https://codepen.io/pen/" target="_blank" rel="noopener noreferrer">CodePen<ExternalLinkIcon/></a>：CodePen 是一个在线的 HTML、CSS 和 JavaScript 代码编辑器，能够编写代码并即时预览效果，便于项目分享预览。CodePen 也一个庞大的前端社区，上面有来自全球开发者分享的各种各样炫酷的效果，并且这些代码都是开源和共享的。</p>
<p><a href="https://codesandbox.io/s/" target="_blank" rel="noopener noreferrer">CodeSandbox<ExternalLinkIcon/></a>：CodeSandbox 编辑体验与 VSCode 类似，并支持 GitHub 导出、静态文件托管、本地项目导入等。缺点：不能直接导入 GitHub 项目。</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="https://www.51cto.com/article/718302.html" target="_blank" rel="noopener noreferrer">六个好用的在线代码编辑器，你选哪个？<ExternalLinkIcon/></a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


