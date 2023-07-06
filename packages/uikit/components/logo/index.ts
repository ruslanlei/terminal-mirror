export { default as UiLogo } from './Logo.vue';
export type LogoState =
    'defaultState'
    | 'defaultState2'
    | 'xlThickBorder';

export interface LogoProps {
  type: 'slim' | 'full',
  state?: LogoState | LogoState[],
  shape?: 'circle' | 'square',
  size?: 'sm' | 'md' | 'lg' | 'xl',
}
