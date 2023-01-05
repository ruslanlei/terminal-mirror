import { post } from '@/api';
import { Order } from '@/api/types/order';

export type CreateOrderDTO = Pick<
  Order,
  'pair' | 'side' | 'order_type' | 'quantity' | 'price' | 'leverage'
>;

export const createOrder = (
  dto: CreateOrderDTO,
) => post('/trading/orders', dto);
