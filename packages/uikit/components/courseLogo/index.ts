export { default as UiCourseLogo } from './CourseLogo.vue';
export type CourseLogoState =
  'xlThickBorder'
  | 'background2Color';

export interface CourseLogoProps {
  type: 'slim' | 'full',
  state?: null | CourseLogoState | CourseLogoState[],
  shape?: 'circle' | 'square',
  size?: 'md',
}
