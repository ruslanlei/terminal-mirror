/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { YAxisConfiguratorViewModel } from '../yaxis-configurator.view-model';
import { ChartDataViewModel } from '../chart-data.view-model';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
export declare const createPrevDayCloseProvider: import("../../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartInstance", ChartWithModules>, void>;
