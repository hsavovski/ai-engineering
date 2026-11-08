import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ChapterMeta from './ChapterMeta.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // every chapter gets its meta badge without including it by hand
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-before': () => h(ChapterMeta) }),
}
