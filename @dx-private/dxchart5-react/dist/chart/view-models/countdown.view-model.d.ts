/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export declare const countdownViewModel: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"yAxisConfiguratorViewModel", import("./yaxis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"chartDataViewModel", import("./chart-data.view-model").ChartDataViewModel> & Record<"aggregationPeriodViewModel", import("./aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartSessionsViewModel", import("./chart-sessions.view-model").ChartSessionsViewModel>, import("../../utils/adt/sink.utils").Sink1<"Observable", {}>>;
