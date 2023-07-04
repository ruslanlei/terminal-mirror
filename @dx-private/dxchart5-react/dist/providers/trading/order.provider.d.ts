/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { OrderType } from '../../chart/model/order.model';
export type OrderId = string;
export interface Order {
    type: OrderType;
    side: 'buy' | 'sell';
    quantity: number;
    limitPrice?: number;
    stopPrice?: number;
    linkedOrders?: Array<LinkedOrder>;
}
export interface OrderWithId extends Order {
    id: string;
}
export interface LinkedOrder {
    type: 'tp' | 'sl' | 'original';
    order: OrderWithId;
}
export interface OrderProvider {
    /**
     * Observes the order lines updates.
     * We expect to be the full list of orders - no partial updates, for now the full list will be replaced.
     * @param symbol
     * @param dataCallback
     */
    observeOrders(symbol: string, dataCallback: (orders: OrderWithId[]) => void): void;
    createOrder(symbol: string, order: Order): Promise<OrderId>;
    /**
     * Updates order with potential linked structure.
     * If order has new linked orders - assume they will be created as well and be linked.
     * Also updates common fields like: type, price.
     * @param symbol
     * @param order
     */
    updateOrder(symbol: string, order: OrderWithId): Promise<void>;
    /**
     * Updates single order common fields without touching linked structure.
     * @param symbol
     * @param order
     */
    updateSingleOrder(symbol: string, order: OrderWithId): Promise<void>;
    deleteOrder(symbol: string, id: string): Promise<void>;
}
