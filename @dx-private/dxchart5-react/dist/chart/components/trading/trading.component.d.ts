/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartReactConfig } from '../../../config/chart-react-config';
export declare const TradingComponent: import("../../../context/context2").Context<Record<"orderEntryVM", import("../../view-models/trading/order-entry.view-model").OrderEntryViewModel> & Record<"tradingVM", import("../../view-models/trading/trading.view-model").TradingViewModel> & Record<"localization", import("../../../config/localization/localization").Localization> & Record<"chartReactConfig", ChartReactConfig> & Record<"yAxisConfiguratorViewModel", import("../../view-models/yaxis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"tradingCoreVM", import("../../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"chartInstance", import("../canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel>, React.MemoExoticComponent<() => JSX.Element>>;
