import { Order } from '@terminal/common/types/order';

export interface OrderEventToastProps {
  order: Order,
}

export interface OrderEventToastEmits {
  (e: 'close'): void,
}
