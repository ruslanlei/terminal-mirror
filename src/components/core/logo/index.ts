export type LogoState = 'smSize' | 'mdSize' | 'defaultState' | 'defaultState2';

export interface LogoProps {
  type: 'slim' | 'full',
  state?: LogoState | LogoState[],
}
