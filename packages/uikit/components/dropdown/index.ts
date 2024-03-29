export { default as UiDropdown } from './Dropdown.vue';

export type DropdownPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface DropdownProps {
  isVisible?: boolean | undefined,
  distance?: number,
  placement?: DropdownPlacement | [DropdownPlacement, DropdownPlacement],
  toggleByClick?: boolean,
  keepWithinWindowVertical?: boolean,
  keepWithinWindowHorizontal?: boolean,
  containerGap?: number,
  automaticReplace?: boolean,
  isDisabled?: boolean,
  dropAnimationInitialPositionShift?: number,
  transitionDuration?: 720 | 600,
  blockInnerToggling?: boolean,
  showBy?: 'click' | 'hover'
}

export interface DropdownEmits {
  (e: 'update:isVisible', value: boolean): void,
  (e: 'triggerClick'): void,
  (e: 'triggerDbclick'): void,
  (e: 'clickOutside'): void,
}
