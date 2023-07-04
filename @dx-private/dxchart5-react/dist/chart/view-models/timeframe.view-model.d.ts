/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../context/sink2';
import { MultiChartViewModel } from './multi-chart.view-model';
import { Observable } from 'rxjs';
import { TimestampRange, TimeUnits } from '../model/timeframe.model';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export interface TimeFrameViewModel {
    readonly timestampRange: Observable<TimestampRange>;
    readonly setTimestampRange: (timestampRange: TimestampRange) => void;
    readonly setTimeUnits: (timeUnits: TimeUnits) => void;
}
export declare const createTimeFrameViewModel: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartId", string>, Sink<TimeFrameViewModel>>;
