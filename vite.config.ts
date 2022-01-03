import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Pages from "vite-plugin-pages";
import Markdown from 'vite-plugin-md';
import SSR from 'vite-ssr/plugin';
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/public',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      dirs: ['src/pages'],
      extensions: ['md', 'vue'],
    }),
    Markdown({
      headEnabled: true,
    }),
    SSR({
      build: {
        keepIndexHtml: false,
      },
    }),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
      compositionOnly: true,
    })
  ],
})
