export { default as UiAvatar } from '@/components/avatar/Avatar.vue';
export interface AvatarProps {
  src?: string,
  label?: string,
  size?: 'sm' | 'md',
  state?: 'success' | 'danger',
}
