import { get } from '@/api';
import { Order } from '@/api/types/order';

export const closeOrder = (
  orderId: Order['id'],
) => get(`trading/orders/${orderId}`);
