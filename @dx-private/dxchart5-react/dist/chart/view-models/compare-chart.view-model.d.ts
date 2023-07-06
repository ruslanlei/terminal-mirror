/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DataSeriesType } from '@dx-private/dxchart5-light/dist/chart/model/data-series.config';
import { Observable } from 'rxjs';
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { CompareInstrument } from '../model/chart.model';
import { ChartDataViewModel } from './chart-data.view-model';
import { InstrumentSelectorViewModel } from './instrument-selector.view-model';
import { MultiChartViewModel } from './multi-chart.view-model';
export interface CompareInstrumentConfig {
    symbol: string;
    id: number;
    chartType: DataSeriesType;
    color: string;
}
export type CompareInstrumentsConfig = Record<string, CompareInstrumentConfig>;
/**
 * Holds state of selected instruments for comparison, excluding main instrument.
 */
export interface CompareChartViewModel {
    compareInstrumentsConfig: Property<CompareInstrumentsConfig>;
    updateCompareInstrumentConfig(config: CompareInstrumentConfig): void;
    isDisabled: Observable<boolean>;
}
export declare const createCompareChartViewModel: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"initialCompareInstruments", CompareInstrument[]> & Record<"instrumentSelectorViewModel", InstrumentSelectorViewModel> & Record<"chartId", string>, Sink<CompareChartViewModel>>;
