export type DropdownPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface DropdownProps {
  isVisible: boolean,
  distance?: number,
  placement?: DropdownPlacement | [DropdownPlacement, DropdownPlacement],
  toggleByClick?: boolean,
  keepWithinWindowVertical?: boolean,
  keepWithinWindowHorizontal?: boolean,
}

export interface DropdownEmits {
  (e: 'update:isVisible', value: boolean): void,
}
