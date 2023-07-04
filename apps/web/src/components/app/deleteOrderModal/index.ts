import { Order, TakeProfit } from '@/api/types/order';

export interface DeleteOrderModalProps {
    order: Order,
    takeProfits?: TakeProfit[],
}

export interface DeleteOrderModalEmits {
    (e: 'close'): void,
}
