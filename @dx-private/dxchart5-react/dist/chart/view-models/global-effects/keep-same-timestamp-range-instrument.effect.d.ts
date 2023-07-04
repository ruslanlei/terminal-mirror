/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { ChartDataViewModel } from '../chart-data.view-model';
import { TimeframePresetsViewModel } from '../timeframe-presets.view-model';
import { TimeFrameViewModel } from '../timeframe.view-model';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
export declare const keepSameTimestampRangeOnInstrumentEffect: import("../../../context/context2").Context<Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartInstance", ChartWithModules> & Record<"timeFrameViewModel", TimeFrameViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"timeframePresetsViewModel", TimeframePresetsViewModel>, import("rxjs").Observable<import("../../model/timeframe-presets.model").TimeframePreset | null>>;
