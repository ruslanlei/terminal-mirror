/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
import { MultiChartViewModel } from '../view-models/multi-chart.view-model';
import { Localization } from '../../config/localization/localization';
import { YAxisConfiguratorViewModel } from '../view-models/yaxis-configurator.view-model';
export declare const SwitchAxisTypeContainer: import("../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"localization", Localization>, import("react").FC<Record<string, any>>>;
