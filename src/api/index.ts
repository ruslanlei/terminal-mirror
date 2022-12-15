import { createHttpTransport } from '@/api/httpTransport';

export const {
  get,
  post,
  put,
  patch,
  del,
} = createHttpTransport({
  url: String(import.meta.env.VITE_API_BASE_URL),
});
