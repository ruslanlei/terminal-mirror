import { RouteLocationRaw } from 'vue-router';

export interface LinkProps {
  label?: string,
  to: RouteLocationRaw,
  state: 'default',
  size: 'md',
  tabIndex: number,
}
