export { default as UiAnimatedText } from './AnimatedText.vue';
export interface AnimatedTextProps {
  text: string | number,
  animationType?: 'verticalAuto'
    | 'verticalBack'
    | 'verticalForward',
}
