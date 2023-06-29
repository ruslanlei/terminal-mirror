export { default as UiInlineDropdown } from './InlineDropdown.vue';
export type InlineDropdownState =
  'gradientPurpleTriggerOnActive'
  | 'gradientBlueTriggerOnActive'
  | 'background3TriggerColor'
  | 'background2BodyColor';

export interface InlineDropdownProps {
  gap: number,
  size: 'lg',
  state: InlineDropdownState | InlineDropdownState[],
}
