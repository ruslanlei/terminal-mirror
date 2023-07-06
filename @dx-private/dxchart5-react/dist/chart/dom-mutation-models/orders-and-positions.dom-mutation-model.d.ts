/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { TradingViewModel } from '../view-models/trading/trading.view-model';
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import React from 'react';
import { TradingItemsGroup, VisualOrder, VisualPosition } from '../model/order.model';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { YAxisConfiguratorViewModel } from '../view-models/yaxis-configurator.view-model';
import { TradingCoreViewModel } from '../view-models/trading/trading-core.view-model';
export interface OrdersAndPositionsDomMutationModel {
    readonly ordersAndPositionsContainerRefHolder: OrdersAndPositionsContainerRefHolder;
    readonly orderRefHolders: Property<OrderRefHolder[]>;
    readonly positionRefHolders: Property<PositionRefHolder[]>;
    readonly groupRefHolders: Property<TradingGroupRefHolder[]>;
    readonly tradingItemsWidths: Property<Record<string, number>>;
}
export interface OrderRefHolder {
    readonly ref: React.RefObject<HTMLDivElement>;
    readonly priceRef: React.RefObject<HTMLDivElement>;
    readonly order: VisualOrder;
}
export interface PositionRefHolder {
    readonly ref: React.RefObject<HTMLDivElement>;
    readonly position: VisualPosition;
}
export interface TradingGroupRefHolder {
    readonly ref: React.RefObject<HTMLDivElement>;
    readonly group: TradingItemsGroup;
    readonly initialY: number;
}
export interface OrdersAndPositionsContainerRefHolder {
    readonly ref: React.RefObject<HTMLDivElement>;
    readonly initialOffset: number;
}
export declare const createOrdersAndPositionsDMM: import("../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"tradingVM", TradingViewModel> & Record<"tradingCoreVM", TradingCoreViewModel> & Record<"chartInstance", ChartWithModules>, Sink<OrdersAndPositionsDomMutationModel>>;
