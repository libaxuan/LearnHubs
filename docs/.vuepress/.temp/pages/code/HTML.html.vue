<template><div><p>HTTPS 网页中，js、css、gif 等文件都必须要使用 https，否则会加载报错，图片可以不使用 https。</p>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<h3 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">/</span> 根目录（electron 不适用）
<span class="token punctuation">.</span><span class="token operator">/</span> 当前目录（可省略不写）
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span> 父级目录（返回到上一级目录）
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span> 祖父级目录（返回两级目录）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反义、转义字符" tabindex="-1"><a class="header-anchor" href="#反义、转义字符" aria-hidden="true">#</a> 反义、转义字符</h3>
<p>一些字符在 HTML 中拥有特殊的含义，如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体。</p>
<table>
<thead>
<tr>
<th>显示结果</th>
<th>描述</th>
<th>实体名称</th>
<th>实体编号</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>空格</td>
<td>&amp;nbsp;</td>
<td>&amp;#160;</td>
</tr>
<tr>
<td>&lt;</td>
<td>小于号</td>
<td>&amp;lt;</td>
<td>&amp;#60;</td>
</tr>
<tr>
<td>&gt;</td>
<td>大于号</td>
<td>&amp;gt;</td>
<td>&amp;#62;</td>
</tr>
<tr>
<td>&amp;</td>
<td>和号</td>
<td>&amp;amp;</td>
<td>&amp;#38;</td>
</tr>
<tr>
<td>&quot;</td>
<td>引号</td>
<td>&amp;quot;</td>
<td>&amp;#34;</td>
</tr>
<tr>
<td>'</td>
<td>撇号</td>
<td>&amp;apos;</td>
<td>&amp;#39;</td>
</tr>
</tbody>
</table>
<h2 id="javascript-插件" tabindex="-1"><a class="header-anchor" href="#javascript-插件" aria-hidden="true">#</a> JavaScript 插件</h2>
<ul>
<li><a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">font-awesome<ExternalLinkIcon/></a>：图标字体。</li>
<li><a href="https://layuion.com/" target="_blank" rel="noopener noreferrer">Layui<ExternalLinkIcon/></a>：开源模块化前端 UI 组件库。</li>
<li><a href="https://github.com/CodeSeven/toastr" target="_blank" rel="noopener noreferrer">toastr.js<ExternalLinkIcon/></a>：通知提示。</li>
<li><a href="https://popper.js.org/" target="_blank" rel="noopener noreferrer">popper.js<ExternalLinkIcon/></a>：一个轻量级的库用于管理工具提示和弹窗效果。</li>
<li><a href="https://dayjs.gitee.io/docs/zh-CN/get-set/get-set" target="_blank" rel="noopener noreferrer">Day.js<ExternalLinkIcon/></a>：时间输入转换，支持时间戳，格式化时间、过去时间展示、解决因时区变更。</li>
<li><a href="https://github.com/javve/list.js" target="_blank" rel="noopener noreferrer">list.js<ExternalLinkIcon/></a>：实时搜索页面，并直接显示结果页面。为列表、表格或其他任何 HTMLL 标签增加了搜索，排序，过滤器和灵活性等元素。网页中会自动会大段空格压缩为一个空格，不用特意替换。</li>
<li><a href="https://github.com/saucxs/watermark-dom" target="_blank" rel="noopener noreferrer">watermark.js<ExternalLinkIcon/></a>：网页文字水印。</li>
<li><a href="https://codemirror.net/" target="_blank" rel="noopener noreferrer">codemirror<ExternalLinkIcon/></a>：代码编辑器，为 textarea 加行号。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></li>
</ul>
<h3 id="功能加强" tabindex="-1"><a class="header-anchor" href="#功能加强" aria-hidden="true">#</a> 功能加强</h3>
<ul>
<li><a href="https://clipboardjs.com/" target="_blank" rel="noopener noreferrer">clipboard.js<ExternalLinkIcon/></a>：复制到剪贴板方式，无需 Flash。</li>
<li><a href="https://github.com/eligrey/FileSaver.js" target="_blank" rel="noopener noreferrer">FileSaver.js<ExternalLinkIcon/></a>：导出为本地文件，需手动指定路径。</li>
<li><a href="https://github.com/pqina/filepond" target="_blank" rel="noopener noreferrer">filepond<ExternalLinkIcon/></a>：一个 JavaScript 文件上传库，可以上传拖入的任何内容，具有体积小、上传快、方便的文件管理等特点。</li>
<li><a href="https://github.com/oct16/TimeCat" target="_blank" rel="noopener noreferrer">timecat.js<ExternalLinkIcon/></a>：一款 JS 的网页录屏工具。参考了游戏录像的原理而实现的渲染引擎，生成的录像文件只有传统视频的百分之一！还可以在录制语音的同时自动生成字幕，导出的视频文件可以跨端播放。</li>
</ul>
<h3 id="小游戏代码" tabindex="-1"><a class="header-anchor" href="#小游戏代码" aria-hidden="true">#</a> 小游戏代码</h3>
<ul>
<li><a href="https://github.com/muan/emoji-minesweeper" target="_blank" rel="noopener noreferrer">emoji-minesweeper<ExternalLinkIcon/></a>：Emoji 符号的扫雷游戏。代码很简短，游戏创意很酷。寥寥 300+ 行代码实现该游戏，简短易于初学者学习。</li>
<li><a href="https://github.com/KilledByAPixel/HueJumper2k" target="_blank" rel="noopener noreferrer">HueJumper2k<ExternalLinkIcon/></a>：JS 实现的 2KB 大小的 3D 赛车游戏。</li>
<li><a href="https://github.com/shinima/battle-city" target="_blank" rel="noopener noreferrer">battle-city<ExternalLinkIcon/></a>：基于 React 的经典坦克大战。</li>
<li><a href="https://github.com/chvin/react-tetris" target="_blank" rel="noopener noreferrer">react-tetris<ExternalLinkIcon/></a>：逼真的俄罗斯方块。</li>
</ul>
<h2 id="css-样式" tabindex="-1"><a class="header-anchor" href="#css-样式" aria-hidden="true">#</a> CSS 样式</h2>
<p>CSS 样式：<a href="https://lhammer.cn/You-need-to-know-css/#/zh-cn/" target="_blank" rel="noopener noreferrer">You-need-to-know-css<ExternalLinkIcon/></a></p>
<h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h3>
<p>图片增加属性，自动扩展宽高。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;https://img.gpt-vip.top/xxx.png><span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;https://img.gpt-vip.top/xxx.png><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- bootstrap 下自动控制图片大小 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;https://img.gpt-vip.top/xxx.png><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-fluid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图片链接为空时，去除图片所占区域，并防止出现空边框。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">img[src=""],
  img:not([src])</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当图床图片无法显示时，尝试屏蔽自己网站的 referrer，在源码中添加：<code v-pre>&lt;meta name=&quot;referrer&quot; content=&quot;no-referrer&quot; /&gt;</code>。</p>
<h3 id="纯色背景" tabindex="-1"><a class="header-anchor" href="#纯色背景" aria-hidden="true">#</a> 纯色背景</h3>
<p>body 铺满页面，添加纯色背景。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #222b3a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">html,
  body</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或使用 bootstrap 的样式<code v-pre>class=&quot;bg-light&quot;</code>。</p>
<h3 id="鼠标经过变色" tabindex="-1"><a class="header-anchor" href="#鼠标经过变色" aria-hidden="true">#</a> 鼠标经过变色</h3>
<p>鼠标经过重链接，则该区域变色。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.tg td a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f29901<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏元素" tabindex="-1"><a class="header-anchor" href="#隐藏元素" aria-hidden="true">#</a> 隐藏元素</h3>
<p>隐藏网页元素</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 将元素的显示设为无，元素在网页中不占任何的位置。</span>
<span class="token assign-left variable">style</span><span class="token operator">=</span><span class="token string">"display:none;"</span>
<span class="token comment"># 将元素隐藏，但是元素在网页中的位置还是被占着。</span>
<span class="token assign-left variable">style</span><span class="token operator">=</span><span class="token string">"visibility:hidden;"</span>

<span class="token comment"># 显示隐藏元素</span>
<span class="token variable"><span class="token variable">$(</span>'<span class="token comment">#hidden_sort'</span><span class="token variable">)</span></span>.show<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 继续隐藏#hidden_sort</span>
<span class="token variable"><span class="token variable">$(</span>'<span class="token comment">#hidden_sort'</span><span class="token variable">)</span></span>.hide<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">"hidden_alert"</span> <span class="token assign-left variable">style</span><span class="token operator">=</span><span class="token string">"display:none;"</span> <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">"col-12 alert alert-primary"</span> <span class="token assign-left variable">role</span><span class="token operator">=</span><span class="token string">"alert"</span><span class="token operator">></span>标题数过大<span class="token operator">&lt;</span>/div<span class="token operator">></span>
<span class="token comment"># 当无法使用，继续隐藏#hidden_sort</span>
document.getElementById<span class="token punctuation">(</span><span class="token string">'hidden_alert'</span><span class="token punctuation">)</span>.style.display<span class="token operator">=</span><span class="token string">"none"</span><span class="token punctuation">;</span>
document.getElementById<span class="token punctuation">(</span><span class="token string">'hidden_alert'</span><span class="token punctuation">)</span>.style.display<span class="token operator">=</span><span class="token string">"block"</span><span class="token punctuation">;</span>

<span class="token comment"># 显示 div span 的文本内容</span>
<span class="token assign-left variable">hidden_alert.textContent</span><span class="token operator">=</span><span class="token string">"标题数超过，请减少标题数或取消勾选「避重」"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高亮" tabindex="-1"><a class="header-anchor" href="#高亮" aria-hidden="true">#</a> 高亮</h3>
<p>对选择文章进行着色高亮。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>xxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局" aria-hidden="true">#</a> 页面布局</h2>
<h3 id="自适应布局" tabindex="-1"><a class="header-anchor" href="#自适应布局" aria-hidden="true">#</a> 自适应布局</h3>
<p>自适应布局以 Bootstrap 为主，具体说明参考 <a href="https://getbootstrap.com/docs/5.1/utilities/spacing/" target="_blank" rel="noopener noreferrer">Bootstrap 文档<ExternalLinkIcon/></a>。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code># 分别为距离上下左右，
class=<span class="token string">"mt-5 mb-5 ms-4 me-4"</span>

# 修改间距
style=<span class="token string">"margin-top:-15px;margin-bottom:-15px"</span>

# 图片自动拉伸宽度
style=<span class="token string">"background-size:contain|cover;width:100%;height:auto;"</span>

# 视频将宽度设置大些，然后让其自动缩放
width=<span class="token string">"2400px"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端自适应" tabindex="-1"><a class="header-anchor" href="#客户端自适应" aria-hidden="true">#</a> 客户端自适应</h3>
<p>判断设备是移动还是 PC，然后显示不同样式内容。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">browserRedirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">browserRedirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sUserAgent <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bIsIpad <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ipad</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"ipad"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bIsIphoneOs <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone os</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"iphone os"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bIsMidp <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">midp</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"midp"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bIsUc7 <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">rv:1.2.3.4</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"rv:1.2.3.4"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bIsUc <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ucweb</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"ucweb"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bIsAndroid <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">android</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"android"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bIsCE <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">windows ce</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"windows ce"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bIsWM <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">windows mobile</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"windows mobile"</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      bIsIpad <span class="token operator">||</span>
      bIsIphoneOs <span class="token operator">||</span>
      bIsMidp <span class="token operator">||</span>
      bIsUc7 <span class="token operator">||</span>
      bIsUc <span class="token operator">||</span>
      bIsAndroid <span class="token operator">||</span>
      bIsCE <span class="token operator">||</span>
      bIsWM
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//移动端页面</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#mobile"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#pc"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">//pc 端页面</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#mobile"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#pc"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pc<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../upload/202108/1629972325344278.png<span class="token punctuation">"</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
    <span class="token attr-name">data-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1920<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1080<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mobile<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/upload/202108/1628149761.png<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地压缩-html" tabindex="-1"><a class="header-anchor" href="#本地压缩-html" aria-hidden="true">#</a> 本地压缩 HTML</h3>
<p><a href="https://github.com/kangax/html-minifier" target="_blank" rel="noopener noreferrer">html-minifier<ExternalLinkIcon/></a> 能在本地批量压缩 HTML、CSS 和 JavaScript 源码。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 全局安装 html-minifier</span>
<span class="token function">npm</span> <span class="token function">install</span> html-minifier <span class="token parameter variable">-g</span>
<span class="token comment"># 终端中执行压缩命令，默认压缩 input 下所有文件，压缩选项参照 http://kangax.github.io/html-minifier/</span>
html-minifier --collapse-boolean-attributes --collapse-whitespace --decode-entities --no-html5 --minify-css <span class="token boolean">true</span> --minify-js <span class="token boolean">true</span> --process-conditional-comments --process-scripts text/html --remove-attribute-quotes --remove-comments --remove-empty-attributes --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-style-link-type-attributes --remove-tag-whitespace --sort-attributes --sort-class-name --trim-custom-fragments --use-short-doctype --input-dir D:<span class="token punctuation">\</span>Backup<span class="token punctuation">\</span>raw --output-dir D:<span class="token punctuation">\</span>Backup<span class="token punctuation">\</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="https://www.cnblogs.com/zhnaglei/p/6697638.html" target="_blank" rel="noopener noreferrer">开源 JavaScript 插件和库<ExternalLinkIcon/></a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


