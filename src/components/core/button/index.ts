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
  | 'textAccent2';

export interface ButtonProps {
  state?: ButtonState | ButtonState[],
  size?: 'sm' | 'md' | 'lg',
  isWide?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
}
