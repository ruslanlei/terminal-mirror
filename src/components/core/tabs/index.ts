import { SelectorProps } from '@/components/core/selector';

export interface TabsProps {
  modelValue: SelectorProps['modelValue'],
  tabs: SelectorProps['options'],
  selectorProps?: Partial<SelectorProps>,
  contentClass?: string,
}

export interface TabsEmits {
  (e: 'update:modelValue', value: SelectorProps['modelValue']): void,
}
