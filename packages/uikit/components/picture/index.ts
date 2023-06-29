export { default as UiPicture } from './Picture.vue';
export interface PictureProps {
  src?: string,
  srcset?: string,
  alt?: string,
  transitionDuration?: number,
  isFill?: boolean,
}
