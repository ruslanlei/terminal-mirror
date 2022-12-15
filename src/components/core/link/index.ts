import { RouteLocationRaw } from 'vue-router';

export interface LinkProps {
  label?: string,
  to: RouteLocationRaw,
  state: 'default' | 'primary',
  size: 'md' | 'sm',
  tabIndex: number,
}
