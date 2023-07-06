/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartReactConfig } from '../../../config/chart-react-config';
import { Sink } from '../../../context/sink2';
import { OrderProvider } from '../../../providers/trading/order.provider';
import { PositionProvider } from '../../../providers/trading/position.provider';
import { Property } from '../../../utils/property.utils';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { LinkedOrderType, OrderSide, TradingItemsGroup, VisualOrder, VisualPosition } from '../../model/order.model';
import { UnsubscribeCallback } from '../api/chart-react-api.view-model';
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { ChartDataViewModel } from '../chart-data.view-model';
import { MultiChartViewModel } from '../multi-chart.view-model';
import { YAxisConfiguratorViewModel } from '../yaxis-configurator.view-model';
import { OrderEntryViewModel } from './order-entry.view-model';
import { TradingCoreViewModel } from './trading-core.view-model';
export interface TradingViewModel {
    rightOffset: Property<number>;
    orders: Property<VisualOrder[]>;
    editableOrders: Property<VisualOrder[]>;
    positions: Property<VisualPosition[]>;
    createOrderFromOrderEntry: (side: OrderSide) => void;
    createLinkedOrder: (type: LinkedOrderType, originalId: string) => void;
    removePosition: (id: string) => void;
    removeOrder: (id: string) => void;
    selectOrder: (id: string) => void;
    deselectOrder: () => void;
    updateOrderPosition: (id: string, y: number) => void;
    updateOrderPriceUI: (id: string, y: number) => void;
    onOrderDragStart: () => void;
    onOrderDblClick: (id: string) => void;
    onOrderClick: (id: string) => void;
    onOrderDblClickEventRegister: (callback: (chartId: string, order: VisualOrder) => void) => UnsubscribeCallback;
    onOrderClickEventRegister: (callback: (chartId: string, order: VisualOrder) => void) => UnsubscribeCallback;
    orderHeight: Property<number>;
    setOrderHeight: (value: number) => void;
    groupedVisualTradingItems: Property<TradingItemsGroup[]>;
    onGroupItemSelect: (id: string) => void;
    resizer: Property<ResizerProps>;
    setResizer: (resizer: ResizerProps) => void;
    onResizerDrag: (posX: number) => void;
    onResizerHover: () => void;
    onDragStartFromGroup: (id: string) => void;
    showPriceAsLabels: Property<boolean>;
    ordersBounds: Property<OnPBounds>;
    isDragging: Property<boolean>;
}
export interface ResizerProps {
    visible: boolean;
    maxOrderWidth: number;
    initialRightOffset: number;
    canvasHeight: number;
}
export interface OnPBounds {
    top: number;
    bottom: number;
}
export declare const createTradingViewModel: import("../../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"orderProvider", OrderProvider> & Record<"positionProvider", PositionProvider> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"orderEntryViewModel", OrderEntryViewModel> & Record<"tradingCoreViewModel", TradingCoreViewModel> & Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartId", string>, Sink<TradingViewModel>>;
export declare const orderArrayEq: import("fp-ts/Eq").Eq<VisualOrder[]>;
export declare const positionArrayEq: import("fp-ts/Eq").Eq<VisualPosition[]>;
export declare const groupedItemsArrayEq: import("fp-ts/Eq").Eq<TradingItemsGroup[]>;
