export { default as UiAnimatedText } from '@/components/animatedText/AnimatedText.vue';

export interface AnimatedTextProps {
  text: string | number,
  animationType?: 'verticalAuto'
    | 'verticalBack'
    | 'verticalForward',
}
