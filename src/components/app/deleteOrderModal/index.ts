import { Order, SubOrder } from '@/api/types/order';

export interface DeleteOrderModalProps {
    order: Order,
    takeProfits?: SubOrder[],
}

export interface DeleteOrderModalEmits {
    (e: 'close'): void,
}
