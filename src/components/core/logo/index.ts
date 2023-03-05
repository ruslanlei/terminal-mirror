export type LogoState =
    'defaultState'
    | 'defaultState2';

export interface LogoProps {
  type: 'slim' | 'full',
  state?: LogoState | LogoState[],
  shape?: 'circle' | 'square',
  size?: 'sm' | 'md' | 'lg',
}
