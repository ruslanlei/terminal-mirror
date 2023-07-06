/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { YAxisConfiguratorViewModel } from '../view-models/yaxis-configurator.view-model';
import { Localization } from '../../config/localization/localization';
export declare const YAxisConfiguratorContainer: import("../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"localization", Localization> & Record<"chartInstance", import("../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartDataViewModel", import("../view-models/chart-data.view-model").ChartDataViewModel> & Record<"aggregationPeriodViewModel", import("../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartSessionsViewModel", import("../view-models/chart-sessions.view-model").ChartSessionsViewModel>, import("react").FC<Record<string, any>>>;
