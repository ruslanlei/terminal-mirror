export { default as UiSlider } from './Slider.vue';
export interface SliderElement {
  data: any,
}

export interface SliderProps {
  gap: number,
  slidesPerView: number,
  slides: SliderElement[],
}
