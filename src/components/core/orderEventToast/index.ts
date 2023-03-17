import { Order } from '@/api/types/order';

export interface OrderEventToastProps {
  order: Order,
}

export interface OrderEventToastEmits {
  (e: 'close'): void,
}
