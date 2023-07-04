import { get } from '@/api';
import { Order, OrderStatus } from '@terminal/common/types/order';

export const getorderList = (
  status: OrderStatus,
) => get<Order[]>('/trading/orders', { status });
