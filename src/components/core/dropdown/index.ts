export type DropdownPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface DropdownProps {
  distance?: number,
  placement?: DropdownPlacement | [DropdownPlacement, DropdownPlacement],
  isVisible: boolean,
  toggleByClick?: boolean,
}

export interface DropdownEmits {
  (e: 'update:isVisible', value: boolean): void,
}
