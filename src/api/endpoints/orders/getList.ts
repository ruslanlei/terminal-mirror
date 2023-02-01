import { get } from '@/api';
import { Order, OrderStatus } from '@/api/types/order';

export const getOrdersList = (
  status: OrderStatus,
) => get<Order[]>('/trading/orders', { status });
