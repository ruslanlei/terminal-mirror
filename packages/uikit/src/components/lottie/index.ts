export { default as UiLottie } from './Lottie.vue';
export interface LottieProps {
  path: string,
}

export interface LottieEmits {
  (e: 'dataReady'): void,
}
