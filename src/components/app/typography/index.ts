export type TypographyState =
    'success'
    | 'danger'
    | 'bold'
    | 'semiBold'
    | 'alignCenter'
    | 'medium'
    | 'accent1'
    | 'gradientPrimary'
    | 'accent2'
    | 'nowrap';

export type TypographySize =
    'h1'
    | 'h2'
    | 'massive1'
    | 'massive2'
    | 'massive3'
    | 'massive4'
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
