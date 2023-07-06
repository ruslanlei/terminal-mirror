import { Order } from '@/api/types/order';
import { del } from '@/api';

export const deleteOrder = (
  orderId: Order['id'],
) => del(`trading/orders/${orderId}`);
