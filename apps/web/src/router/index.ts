import { createRouter, createWebHistory } from 'vue-router';
import { DEFAULT_FAVICON_PATH } from '@/enums/favicon';
import { setFavicon } from '@terminal/uikit/utils/dom';
import routes from '~pages';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { favicon } = to.meta;

  setFavicon((favicon as string) || DEFAULT_FAVICON_PATH);

  next();
});
