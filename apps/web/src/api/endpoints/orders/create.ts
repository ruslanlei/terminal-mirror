import { post } from '@/api';
import { ErrorResponse } from '@/api/common';
import { Order } from '@terminal/common/types/order';

export type CreateOrderDTO = Pick<
  Order,
  'pair' | 'side' | 'order_type' | 'quantity' | 'price' | 'leverage'
>;

export const createOrder = (
  dto: CreateOrderDTO,
) => post<Order | ErrorResponse>('/trading/orders', dto);
