export { default as UiButton } from "../../../components/button/Button";
export type ButtonState = 'primaryColor' | 'gradientColor' | 'colored' | 'secondary1Color' | 'secondary2Color' | 'successColor' | 'dangerColor' | 'interactive' | 'textAccent1' | 'borderedDefault' | 'backgroundAccent1' | 'textAccent2' | 'accent3Color' | 'background3' | 'greyBordered' | 'blueGradientColor' | 'orangeGradientColor' | 'background2' | 'background1' | 'nowrap';
export interface ButtonProps {
    state?: ButtonState | ButtonState[];
    size?: 'sm' | 'md' | 'lg' | 'xl';
    isWide?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    hideLoaderOnHover?: boolean;
}
