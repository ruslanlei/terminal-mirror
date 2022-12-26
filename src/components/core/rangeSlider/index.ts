export interface RangeSliderProps {
  modelValue: number,
  min?: number,
  max?: number,
}

export interface RangeSliderEmits {
  (e: 'update:modelValue', value: number): void
}
