import { IToast } from '../toast';

export { default as UiToastLayer } from './ToastLayer.vue';

export interface ToastLayerProps {
  toasts: IToast[],
  hideAnimationDuration: number,
}

export interface ToastLayerEmits {
  (e: 'update:toasts', payload: IToast[]): void
}
