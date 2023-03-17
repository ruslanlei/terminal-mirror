export interface SliderElement {
  data: any,
}

export interface SliderProps {
  gap: number,
  slidesPerView: number,
  slides: SliderElement[],
}
