import { Order } from '@terminal/common/types/order';

export const collectOrderToastWrapperId = (
  orderId: Order['id'],
) => `orderToastWrapper${orderId}`;

export const collectOrderToastId = (
  orderId: Order['id'],
) => `orderToast${orderId}`;
