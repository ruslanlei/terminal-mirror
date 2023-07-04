/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { YAxisLabelsProvider } from '@dx-private/dxchart5-light/dist/chart/components/y_axis/price_labels/y-axis-labels.model';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from '../aggregation-period.view-model';
import { ChartDataViewModel } from '../chart-data.view-model';
import { ChartSessionsViewModel } from '../chart-sessions.view-model';
import { YAxisConfiguratorViewModel } from '../yaxis-configurator.view-model';
export declare const createCountdownToBarCloseProvider: import("../../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartInstance", ChartWithModules> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chartSessionsViewModel", ChartSessionsViewModel>, (nextCandleTimestampsCache: Map<number, number>) => YAxisLabelsProvider>;
/**
 * Countdown label date formatter function
 * Returns different date format depends on the difference between current time and next candle time of appearance
 * Link to the requirements:
 * https://confluence.in.devexperts.com/display/DR/Price+Scale#req-scale-17
 */
export declare function countdownDateTimeFormatter(diff: number): string;
