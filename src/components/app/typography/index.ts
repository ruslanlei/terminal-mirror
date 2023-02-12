export type TypographyState =
    'success'
    | 'danger'
    | 'bold'
    | 'semiBold'
    | 'medium'
    | 'accent1'
    | 'accent2';

export type TypographySize =
    'title1'
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
    state?: TypographyState | TypographyState[],
    size?: TypographySize | TypographySize[],
}
