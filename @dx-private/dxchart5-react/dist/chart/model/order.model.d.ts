/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export type OrderSide = 'buy' | 'sell';
export type PositionSide = 'buy' | 'sell';
export type OrderType = 'market' | 'limit' | 'stop';
export type OrderTradingItemType = 'order';
export type PositionTradingItemType = 'position';
export type LinkedOrderType = 'tp' | 'sl' | 'original';
export type OrderPriceFormatter = (v: number) => string;
export declare const defaultOrderPriceFormatter: OrderPriceFormatter;
export type PositionPLFormatter = (v: number, currency: string) => string;
export declare const defaultPositionPLFormatter: PositionPLFormatter;
export interface VisualOrderProps {
    y?: number;
    visible?: boolean;
    readonly marketPrice?: number;
    readonly selected?: boolean;
    readonly disabled?: boolean;
}
export interface Order {
    id: string;
    type: OrderType;
    quantity: number;
    stopPrice?: number;
    limitPrice?: number;
    side: OrderSide;
    formatter?: OrderPriceFormatter;
    linkedOrders?: LinkedOrder[];
}
export interface LinkedOrder {
    type: LinkedOrderType;
    order: Order;
}
export interface Position {
    id: string;
    side: PositionSide;
    quantity: number;
    price: number;
    pl: number;
    currency?: string;
    formatter?: PositionPLFormatter;
}
export interface OrderTradingItem {
    type: OrderTradingItemType;
    model: Order;
}
export interface PositionTradingItem {
    type: PositionTradingItemType;
    model: Position;
}
export interface TradingItemsGroup {
    items: VisualTradingItem[];
    groupPrice: number;
    visible?: boolean;
}
export type VisualOrder = OrderTradingItem & VisualOrderProps;
export type VisualPosition = PositionTradingItem & VisualOrderProps;
export type VisualTradingItem = VisualOrder | VisualPosition;
declare const availableOrderEntryTypes: readonly ["market", "limit", "stop"];
export type OrderEntryType = (typeof availableOrderEntryTypes)[number];
export declare function checkForLinkedOrder(orders: LinkedOrder[], typeToCheck: LinkedOrderType): boolean;
/**
 * Get price functions.
 */
export declare const getOrderPrice: (order: Order, marketPrice?: number) => number;
export declare const getOrderPriceByType: (orderType: OrderType, limitPrice?: number, stopPrice?: number, marketPrice?: number) => number;
export declare const getTradingItemPrice: (item: VisualOrder | VisualPosition, marketPrice?: number) => number;
/**
 * Finds the current order linked type. Searches the linked orders.
 * If there are no linked orders - returns 'original' as a fallback.
 * @param order
 */
export declare const getLinkedOrderType: (order: Order) => LinkedOrderType;
export declare const sortTradingItems: <A extends VisualOrder | VisualPosition>(as: A[]) => A[];
/**
 * Remove the UUID from order before sending to server.
 * The server will recognize orders without ID as new orders.
 * @param order
 */
export declare const removeOrderUUID: (order: Order) => Order;
/**
 * Checks that order is created only on UI and was not send to server yet.
 * @param order
 */
export declare const checkOrderIsNew: (order: Order) => boolean;
/**
 * Filters invisible trading items out of array
 * @param tradingItems
 */
export declare function filterVisibleTradingItems<T extends VisualOrder | VisualPosition | TradingItemsGroup>(tradingItems: T[]): T[];
export {};
