export { default as UiAnimatedText } from "../../../components/animatedText/AnimatedText";
export interface AnimatedTextProps {
    text: string | number;
    animationType?: 'verticalAuto' | 'verticalBack' | 'verticalForward';
}
