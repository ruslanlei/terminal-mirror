export { default as UiPagination } from './Pagination.vue';
export interface PaginationProps {
  modelValue: number,
  totalPages: number,
  visiblePageCount?: number,
}

export interface PaginationEmits {
  (e: 'update:modelValue'): void,
}
