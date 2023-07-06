/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LinkedOrderType, Order, Position, VisualOrder, VisualPosition, VisualTradingItem } from '../../model/order.model';
import { option } from 'fp-ts';
import { HighLow } from '@dx-private/dxchart5-light/dist/chart/model/scaling/auto-scale.model';
import { OrderWithId } from '../../../providers/trading/order.provider';
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
export declare const findOrderById: (id: string) => (orders: VisualOrder[]) => option.Option<VisualOrder>;
export type PriceConverter = (price: number) => number;
export type YConverter = (y: number) => number;
export type PriceToYConverter = (price: number) => number;
/**
 * Creates a linked order from original.
 * Links both orders together.
 * @param originalOrder
 * @param type
 * @param yConverter
 * @param priceConverter
 *
 * @doc-tags trading
 */
export declare const createLinkedOrderFromOriginal: (originalOrder: VisualOrder, type: LinkedOrderType, yConverter: YConverter | undefined, priceConverter: PriceConverter | undefined, chartInstance: ChartBootstrap) => VisualOrder;
export declare const linkToOriginalOrder: (original: Order, linked: Order, type: LinkedOrderType) => void;
export declare const linkOrder: (source: Order, target: Order, type: LinkedOrderType) => void;
export declare function tradingItemVisibilityInHighLow(price: number, highLow: HighLow): boolean;
export declare const tradingItemVisibilityInBounds: (chartBounds: Bounds, offset: number, y: number) => boolean;
export declare const mapOrderToVisualOrder: (order: OrderWithId, chartInstance: ChartBootstrap, marketPrice: number, bounds: HighLow) => VisualOrder;
export declare const flattenOrders: (orders: OrderWithId[]) => OrderWithId[];
export declare const flattenOrder: (order: OrderWithId) => OrderWithId[];
/**
 * Finds all ids in linked structure.
 * @param order
 */
export declare const findAllLinkedIds: (order: OrderWithId) => string[];
export declare const compareTradingItemIds: (o1: VisualTradingItem, o2: VisualTradingItem) => boolean;
export declare const mapPositionToVisualPosition: (position: Position, priceToY: PriceToYConverter, chartInstance: ChartBootstrap) => VisualPosition;
/**
 * Removes the link from original order to this order (if exist).
 * @param order
 */
export declare const unlinkFromOriginal: (order: OrderWithId) => void;
export interface LineStyledOptionProps {
    readonly disabled?: boolean;
    readonly selected?: boolean;
    readonly pl?: number;
}
