import { Order } from '@/api/types/order';
import { post } from '@/api';
import { ErrorResponse } from '@/api/common';

export type CreateOrderDTO = Pick<
  Order,
  'pair' | 'side' | 'order_type' | 'quantity' | 'price' | 'leverage'
>;

export const createOrder = (
  dto: CreateOrderDTO,
) => post<Order | ErrorResponse>('/trading/orders', dto);
