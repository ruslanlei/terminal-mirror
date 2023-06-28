export { default as UiModal } from '@/components/modal/Modal.vue';
export interface ModalProps {
  label?: string,
  isLoading?: boolean,
  showClose?: boolean,
  contentClass?: string,
}
