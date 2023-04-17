import { createRouter, createWebHistory } from 'vue-router';
import { checkAuth, useSessionStore } from '@/stores/session';
import { DEFAULT_FAVICON_PATH } from '@/enums/favicon';
import { setFavicon } from '@/utils/dom';
import routes from '~pages';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const sessionStore = useSessionStore();

  const { guestRequired, authRequired, favicon } = to.meta;

  setFavicon((favicon as string) || DEFAULT_FAVICON_PATH);

  const { result, redirect } = checkAuth(
    sessionStore.isAuthorized,
    guestRequired,
    authRequired,
  );

  if (!result && redirect) {
    next(redirect);
    return;
  }
  next();
});
