export { default as UiTypography } from './Typography.vue';

export type TypographyState =
    'success'
    | 'danger'
    | 'danger2'
    | 'danger3'
    | 'bold'
    | 'semiBold'
    | 'alignCenter'
    | 'alignRight'
    | 'medium'
    | 'accent1'
    | 'accent15'
    | 'accent2'
    | 'black'
    | 'lightBlack'
    | 'gradientPrimary'
    | 'blueGradient'
    | 'background1'
    | 'uppercase'
    | 'nowrap';

export type TypographySize =
    'h1'
    | 'h2'
    | 'h3'
    | 'massive1'
    | 'massive2'
    | 'massive3'
    | 'massive4'
    | 'massive2sm'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'title6'
    | 'title7'
    | 'textLg'
    | 'text'
    | 'textSm';

export interface TypographyProps {
    text?: string,
    isInline?: boolean,
    state?: null | TypographyState | TypographyState[],
    size?: null | TypographySize | TypographySize[],
}
