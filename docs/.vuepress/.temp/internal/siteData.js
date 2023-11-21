export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"LearnHabs-开源笔记\",\"description\":\"开源工具、效率方法、心理学探索的自我提升笔记，记录并输出一切能让自己提升的知识。\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://gpt-vip.top/rss.xml\",\"title\":\"LearnHabs-开源笔记 RSS Feed\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
