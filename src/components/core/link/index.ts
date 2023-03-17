import { RouteLocationRaw } from 'vue-router';

export interface LinkProps {
  label?: string,
  to: RouteLocationRaw | string,
  state: 'default' | 'primary' | 'accent1' | 'accent2',
  size: 'md' | 'sm',
  tabIndex: number,
}
