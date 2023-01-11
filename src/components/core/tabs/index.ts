import { SelectorOption, SelectorProps } from '@/components/core/selector';

export type Tab<V = string> = SelectorOption<V>;

export interface TabsProps {
  modelValue: SelectorProps['modelValue'],
  tabs: Tab[],
  selectorProps?: Partial<SelectorProps>,
  contentClass?: string,
}

export interface TabsEmits {
  (e: 'update:modelValue', value: SelectorProps['modelValue']): void,
}
