import { Order, TakeProfit } from '@terminal/common/types/order';

export interface DeleteOrderModalProps {
    order: Order,
    takeProfits?: TakeProfit[],
}

export interface DeleteOrderModalEmits {
    (e: 'close'): void,
}
