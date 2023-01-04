import { get } from '@/api';
import { Order } from '@/api/types/order';

export const getOrdersList = () => get<Order[]>('/trading/orders');
