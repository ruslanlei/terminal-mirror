export type ButtonState =
  'primaryColor'
  | 'gradientColor'
  | 'colored'
  | 'secondary1Color'
  | 'secondary2Color'
  | 'successColor'
  | 'dangerColor'
  | 'interactive';

export interface ButtonProps {
  state?: ButtonState | ButtonState[],
  size?: 'sm' | 'md' | 'lg',
  isWide?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
}
