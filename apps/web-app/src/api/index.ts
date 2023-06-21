import { createHttpTransport } from '@/api/httpTransport';
import { isDev } from '@/utils/env';

export const {
  get,
  post,
  put,
  patch,
  del,
} = createHttpTransport({
  url: isDev
    ? '/api'
    : String(import.meta.env.VITE_API_BASE_URL),
});
