export { default as UiFavoritesButton } from './FavoritesButton.vue';
export interface FavoritesButtonProps {
    modelValue: boolean,
}

export interface FavoritesButtonEmits {
    (e: 'update:modelValue', value: boolean): void
}
