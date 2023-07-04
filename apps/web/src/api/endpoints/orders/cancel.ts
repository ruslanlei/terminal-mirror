import { Order } from '@terminal/common/types/order';
import { get } from '@/api';

export const closeOrder = (
  orderId: Order['id'],
) => get(`trading/orders/${orderId}/close`);
