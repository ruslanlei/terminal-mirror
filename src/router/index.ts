import { createRouter, createWebHistory } from 'vue-router';
import { checkAuth, useSessionStore } from '@/stores/session';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import routes from '~pages';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  const sessionStore = useSessionStore();

  const { guestRequired, authRequired } = to.meta;

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

router.afterEach(() => {
  NProgress.done();
});
