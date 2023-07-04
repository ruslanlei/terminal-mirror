import { get } from '@/api';
import { Order } from '@terminal/common/types/order';

export const closeOrder = (
  orderId: Order['id'],
) => get(`trading/orders/${orderId}/close`);
