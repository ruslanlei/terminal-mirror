/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { DataLoaderVM } from '../view-models/loading/data-loader.vm';
import { MultiChartViewModel } from '../view-models/multi-chart.view-model';
interface ChartContainerStyledProps {
    readonly isLoading: boolean;
}
export declare const ChartContainerStyled: import("styled-components").StyledComponent<"div", any, ChartContainerStyledProps, never>;
/**
 * Composes all containers for chart. Renders single chart and utility containers.
 * Requires view-models to function properly.
 */
export declare const ChartContainer: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"aggregationPeriodViewModel", import("../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartTypeViewModel", import("../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chartConfiguratorViewModel", import("../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"timeFrameViewModel", import("../view-models/timeframe.view-model").TimeFrameViewModel> & Record<"chartDataViewModel", import("../view-models/chart-data.view-model").ChartDataViewModel> & Record<"timeframePresetsViewModel", import("../view-models/timeframe-presets.view-model").TimeframePresetsViewModel> & Record<"notificationVM", import("../view-models/notification.view-model").NotificationViewModel> & Record<"drawingViewModel", import("../view-models/drawing.view-model").ChartDrawingViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartId", string> & Record<"chartReactConfig", import("../../config/chart-react-config").ChartReactConfig> & Record<"chartLegendVM", import("../view-models/chart-legend.view-model").ChartLegendViewModel> & Record<"dxScriptEditViewModel", import("../view-models/dx-script-edit.view-model").DxScriptEditViewModel> & Record<"localization", import("../../config/localization/localization").Localization> & Record<"studiesSettingsViewModel", import("../view-models/studies-settings.view-model").StudiesSettingsViewModel> & Record<"colorPalette", string[]> & Record<"initialLoaderVM", import("../view-models/loading/initial-loader.vm").InitialLoaderVM> & Record<"eventsDataProvider", import("../../providers/events-data-provider").EventsDataProvider> & Record<"orderEntryVM", import("../view-models/trading/order-entry.view-model").OrderEntryViewModel> & Record<"tradingVM", import("../view-models/trading/trading.view-model").TradingViewModel> & Record<"yAxisConfiguratorViewModel", import("../view-models/yaxis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"tradingCoreVM", import("../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"newsViewModel", import("../view-models/news/news.view-model").NewsViewModel> & Record<"chartPaneViewModel", import("../view-models/chart-pane.view-model").ChartPaneViewModel> & Record<"dataLoaderVM", DataLoaderVM>, React.FC<Record<string, any>>>;
export {};
