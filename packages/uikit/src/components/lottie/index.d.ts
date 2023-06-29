export { default as UiLottie } from "../../../components/lottie/Lottie";
export interface LottieProps {
    path: string;
}
export interface LottieEmits {
    (e: 'dataReady'): void;
}
