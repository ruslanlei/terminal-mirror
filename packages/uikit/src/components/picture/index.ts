export { default as UiPicture } from '@/components/picture/Picture.vue';
export interface PictureProps {
  src?: string,
  srcset?: string,
  alt?: string,
  transitionDuration?: number,
  isFill?: boolean,
}
