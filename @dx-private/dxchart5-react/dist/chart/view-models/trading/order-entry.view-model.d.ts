/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { Property } from '../../../utils/property.utils';
import { OrderEntryType } from '../../model/order.model';
import { TradingCoreViewModel } from './trading-core.view-model';
import { Sink } from '../../../utils/sink';
import { YAxisConfiguratorViewModel } from '../yaxis-configurator.view-model';
import { ChartDataViewModel } from '../chart-data.view-model';
export interface OrderEntryState {
    visible: boolean;
    opened: boolean;
    quantity: number;
    limitQuantity: number;
    type: OrderEntryType;
}
export interface OrderEntryViewModel {
    readonly orderEntryEnabled: Property<boolean>;
    readonly orderEntry: Property<OrderEntryState>;
    readonly orderEntryPrice: Property<number>;
    readonly orderEntryYPosition: Property<number>;
    readonly orderEntryRightOffset: Property<number>;
    readonly setOrderEntryOpened: (opened: boolean) => void;
    readonly setOrderQuantity: (quantity: number) => void;
    readonly setOrderType: (type: OrderEntryType) => void;
    readonly resetOrderEntryToDefault: () => void;
}
export declare const ORDER_ENTRY_HEIGHT = 24;
export declare const createOrderEntryViewModel: import("../../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartInstance", ChartWithModules> & Record<"chartReactConfig", ChartReactConfig> & Record<"tradingCoreViewModel", TradingCoreViewModel> & Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chartDataViewModel", ChartDataViewModel>, Sink<OrderEntryViewModel>>;
