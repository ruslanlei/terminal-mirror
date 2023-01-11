export type SelectorOption<V = string> = {
  label: string,
  value: V,
  state?: 'success' | 'danger',
} & Record<any, any>;

type SelectorState =
  'primaryColor'
  | 'primaryColor2'
  | 'defaultSize'
  | 'mdSize'
  | 'default'
  | 'tabsShape'
  | 'secondaryColor2';

export interface SelectorProps {
  options: SelectorOption[],
  modelValue: string,
  state?: SelectorState | SelectorState[],
  label?: string,
  thickening?: number,
  isGhostAppearAnimation?: boolean,
}

export interface SelectorEmits {
  (e: 'update:modelValue', value: string): void,
  (e: 'selectNext'): void,
  (e: 'selectPrev'): void,
}
