export { default as UiDivider } from '@/components/divider/Divider.vue';
export interface DividerProps {
  type?: 'vertical' | 'horizontal',
  state?: 'default' | 'accent3',
  maxLong?: number,
}
