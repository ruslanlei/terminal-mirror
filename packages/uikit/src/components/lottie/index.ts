export { default as UiLottie } from '@/components/lottie/Lottie.vue';
export interface LottieProps {
  path: string,
}

export interface LottieEmits {
  (e: 'dataReady'): void,
}
