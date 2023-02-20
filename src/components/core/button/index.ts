export type ButtonState =
  'primaryColor'
  | 'gradientColor'
  | 'colored'
  | 'secondary1Color'
  | 'secondary2Color'
  | 'successColor'
  | 'dangerColor'
  // | 'smSize'
  // | 'mdSize'
  // | 'lgSize'
  | 'interactive';

export interface ButtonProps {
  state?: ButtonState | ButtonState[],
  size: 'sm' | 'md' | 'lg',
  isDisabled?: boolean,
  isLoading?: boolean,
}
