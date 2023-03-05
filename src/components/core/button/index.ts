export type ButtonState =
  'primaryColor'
  | 'gradientColor'
  | 'colored'
  | 'secondary1Color'
  | 'secondary2Color'
  | 'successColor'
  | 'dangerColor'
  | 'interactive'
  | 'textAccent1'
  | 'borderedDefault'
  | 'textAccent2'
  | 'accent3Color'
  | 'background1';

export interface ButtonProps {
  state?: ButtonState | ButtonState[],
  size?: 'sm' | 'md' | 'lg' | 'xl',
  isWide?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
  hideLoaderOnHover?: boolean,
}
