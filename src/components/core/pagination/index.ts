export interface PaginationProps {
  modelValue: number,
  totalPages: number,
  visiblePageCount?: number,
}

export interface PaginationEmits {
  (e: 'update:modelValue'): void,
}
