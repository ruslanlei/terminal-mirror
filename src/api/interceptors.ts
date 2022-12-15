import { useSessionStore } from '@/stores/session';

export const requestOnResolve = (config: any) => {
  const sessionStore = useSessionStore();

  if (sessionStore.token) {
    config.headers.Authorization = sessionStore.token;
  }
  return config;
};

export const responseOnReject = (error: Error) => {
  const sessionStore = useSessionStore();

  if (error.toString().indexOf('Request failed with status code 403') > 0) {
    sessionStore.setToken(null);
  }

  throw error;
};
