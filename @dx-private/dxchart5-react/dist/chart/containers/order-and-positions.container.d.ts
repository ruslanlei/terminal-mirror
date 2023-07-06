/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartReactConfig } from '../../config/chart-react-config';
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
import { YAxisConfiguratorViewModel } from '../view-models/yaxis-configurator.view-model';
import { TradingViewModel } from '../view-models/trading/trading.view-model';
import { TradingCoreViewModel } from '../view-models/trading/trading-core.view-model';
export declare const OrderAndPositionsContainer: import("../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"tradingVM", TradingViewModel> & Record<"tradingCoreVM", TradingCoreViewModel> & Record<"chartInstance", import("../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel>, import("react").FC<Record<string, any>>>;
