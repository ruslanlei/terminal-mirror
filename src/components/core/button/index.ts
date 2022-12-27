export interface ButtonProps {
  state?: 'primary' | 'colored' | 'secondary1' | 'secondary2',
  size: 'sm' | 'md' | 'lg',
  isDisabled?: boolean,
  isLoading?: boolean,
}
