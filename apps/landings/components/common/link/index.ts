import { RouteLocationRaw } from 'vue-router';

export interface LinkProps {
  label?: string,
  to: string | RouteLocationRaw,
  state?: null | 'default' | 'primary' | 'accent1' | 'accent2',
  size?: null | 'md' | 'sm',
  tabIndex?: number,
  isInline?: boolean,
}
