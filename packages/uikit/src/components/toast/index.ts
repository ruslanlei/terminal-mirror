export { default as UiToast } from '@/components/toast/Toast.vue';
export type IToast = {
  id: string,
  type: 'success' | 'danger',
  text: string,
  duration?: number | null,
  icon?: string,
}

export interface ToastProps {
  toast: IToast,
  smoothAppearance?: boolean,
}

export interface ToastEmits {
  (e: 'close'): void
}
