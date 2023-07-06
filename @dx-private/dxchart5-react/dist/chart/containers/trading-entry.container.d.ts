/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { Localization } from '../../config/localization/localization';
import { ChartReactConfig } from '../../config/chart-react-config';
import { OrderEntryViewModel } from '../view-models/trading/order-entry.view-model';
import { YAxisConfiguratorViewModel } from '../view-models/yaxis-configurator.view-model';
import { TradingViewModel } from '../view-models/trading/trading.view-model';
export declare const TradingEntryContainer: import("../../context/context2").Context<Record<"orderEntryVM", OrderEntryViewModel> & Record<"tradingVM", TradingViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig> & Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel>, import("react").FC<Record<string, any>>>;
