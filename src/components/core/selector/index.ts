export type SelectorOption = {
  label: string,
  value: string,
  state?: 'success' | 'danger',
} & Record<any, any>;

type SelectorState =
  'primaryColor'
  | 'defaultSize'
  | 'default'
  | 'tabsShape'
  | 'secondaryColor2';

export interface SelectorProps {
  options: SelectorOption[],
  modelValue: string,
  state?: SelectorState | Array<SelectorState>,
  label?: string,
  thickening?: number,
  isGhostAppearAnimation?: boolean,
}

export interface SelectorEmits {
  (e: 'update:modelValue', value: string): void,
  (e: 'selectNext'): void,
  (e: 'selectPrev'): void,
}
