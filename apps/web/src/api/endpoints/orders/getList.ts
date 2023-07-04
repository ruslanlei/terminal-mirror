import { Order, OrderStatus } from '@terminal/common/types/order';
import { get } from '@/api';

export const getorderList = (
  status: OrderStatus,
) => get<Order[]>('/trading/orders', { status });
