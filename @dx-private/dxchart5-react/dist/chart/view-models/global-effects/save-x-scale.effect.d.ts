/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartReactConfig } from '../../../config/chart-react-config';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { ChartDataViewModel } from '../chart-data.view-model';
import { MultiChartViewModel } from '../multi-chart.view-model';
export declare const saveXScaleEffect: import("../../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartId", string>, import("rxjs").Observable<void | {
    start: number;
    end: number;
}>>;
