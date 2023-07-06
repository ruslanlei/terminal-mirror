export { default as UiAvatar } from './Avatar.vue';
export interface AvatarProps {
  src?: string,
  label?: string,
  size?: 'sm' | 'md',
  state?: 'success' | 'danger',
}
