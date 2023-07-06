/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartDataViewModel } from '../view-models/chart-data.view-model';
import { CompareChartViewModel } from '../view-models/compare-chart.view-model';
export declare const CompareChartSelectorContainer: import("../../context/context2").Context<Omit<Record<"localInstrumentStore", import("../stores/instrument.store").LocalInstrumentStore> & Record<"symbolSuggestProvider", import("../../providers/symbol-suggest-provider").SymbolSuggestProvider> & Record<"chartId", string>, "chartId"> & Record<"compareChartViewModel", CompareChartViewModel> & Record<"chartDataViewModel", ChartDataViewModel>, import("react").FC<Record<string, any>>>;
