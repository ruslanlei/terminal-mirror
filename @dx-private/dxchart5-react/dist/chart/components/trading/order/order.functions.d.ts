/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LinkedOrderType, Order, OrderType } from '../../../model/order.model';
import { DraggableEvent } from 'react-draggable';
export declare const getRegularOrderName: (type: OrderType) => "MKT" | "LMT" | "STP";
export declare const getProtectionOrderName: (type: LinkedOrderType) => "Stop Loss" | "Take Profit";
export declare const getOrderName: (order: Order) => "MKT" | "LMT" | "STP" | "Stop Loss" | "Take Profit";
export declare const skipSelectOrder: (e: DraggableEvent, value: boolean) => void;
export declare const isSelectSkippable: (e: DraggableEvent) => any;
