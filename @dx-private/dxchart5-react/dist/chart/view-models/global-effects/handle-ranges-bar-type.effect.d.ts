/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from '../aggregation-period.view-model';
import { ChartTypeViewModel } from '../chart-type.view-model';
export declare const handleRangesBarTypeEffect: import("../../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chartTypeViewModel", ChartTypeViewModel>, import("rxjs").Observable<void>>;
