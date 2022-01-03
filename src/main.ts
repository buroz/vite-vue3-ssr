import 'flag-icons/css/flag-icons.css';
import './styles/tailwind.css';

import { createHead } from '@vueuse/head';
import viteSSR, { ClientOnly } from 'vite-ssr'

import routes from 'virtual:generated-pages';

import App from './App.vue';

import { installI18n } from './i18n';

export default viteSSR(App, { routes }, async ({ app }) => {
  if (import.meta.env.SSR) {
    // console.log("SSR!");
  }
  
  
  const head = createHead();
  app.use(head);

  await installI18n(app)

  app.component(ClientOnly.name, ClientOnly)

  return {
    head,
  }
});