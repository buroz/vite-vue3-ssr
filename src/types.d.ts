import { RouterLink, RouterView } from 'vue-router';

declare module "vue" {
  interface GlobalComponents {
    RouterLink: typeof RouterLink;
    RouterView: typeof RouterView;
  }
}