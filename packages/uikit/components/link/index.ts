import { RouteLocationRaw } from 'vue-router';
import { DefineComponent } from 'vue';

export { default as UiLink } from './Link.vue';

export interface UiLinkProps {
  to: string | RouteLocationRaw,
  internalLinkComponent: string | DefineComponent,
  label?: string,
  state?: null | 'default' | 'primary' | 'accent1' | 'accent2',
  size?: null | 'md' | 'sm',
  tabIndex?: number,
  isInline?: boolean,
}
