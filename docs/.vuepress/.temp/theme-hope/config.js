import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-shared@2.0.0-beta.245_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.245_@waline+client@2.15.8_mathjax-full@3.2.2_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.245_@waline+client@2.15.8_mathjax-full@3.2.2_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.245_@waline+client@2.15.8_mathjax-full@3.2.2_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";

import "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.245_@waline+client@2.15.8_mathjax-full@3.2.2_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("BloggerInfo", BloggerInfo);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});
