import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-shared@2.0.0-beta.245_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/@vueuse+core@10.5.0_vue@3.3.7/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import AudioPlayer from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import VideoPlayer from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import YouTube from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/lihaitao/WebstormProjects/LearnHubs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.245_plyr@3.7.8_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    if(!hasGlobalComponent("YouTube")) app.component("YouTube", YouTube);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
