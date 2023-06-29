export { default as UiSelector } from "../../../components/selector/Selector";
export type SelectorButtonState = 'primaryTextColor' | 'danger2TextColor' | 'accent1TextColor' | 'successBackground' | 'dangerBackground';
export type SelectorOption<V = string> = {
    label: string;
    value: V;
    ghostState?: SelectorButtonState;
    state?: SelectorButtonState;
    activeState?: SelectorButtonState;
} & Record<any, any>;
type SelectorState = 'primaryColor' | 'primaryColor2' | 'defaultSize' | 'mdSize' | 'default' | 'tabsShape' | 'secondaryColor2' | 'secondaryColor5' | 'simpleColor' | 'lgSize' | 'blueGlassVerticalRight' | 'specialFavoritesSize' | 'vertical';
export interface SelectorProps {
    options: SelectorOption[];
    modelValue: string;
    state?: SelectorState | SelectorState[];
    label?: string;
    thickening?: number;
    isGhostAppearAnimation?: boolean;
    isDisabled?: boolean;
}
export interface SelectorEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'selectNext'): void;
    (e: 'selectPrev'): void;
}
