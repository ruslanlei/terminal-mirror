/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartReactConfig } from '../../config/chart-react-config';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from '../view-models/aggregation-period.view-model';
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
import { ChartDataViewModel } from '../view-models/chart-data.view-model';
import { ChartLegendViewModel } from '../view-models/chart-legend.view-model';
import { DxScriptEditViewModel } from '../view-models/dx-script-edit.view-model';
import { InitialLoaderVM } from '../view-models/loading/initial-loader.vm';
import { StudiesSettingsViewModel } from '../view-models/studies-settings.view-model';
export interface ChartLegendContainerProps {
    readonly id: string;
}
export declare const ChartLegendContainer: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"chartLegendVM", ChartLegendViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartTypeViewModel", import("../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"localization", import("../../config/localization/localization").Localization> & Record<"studiesSettingsViewModel", StudiesSettingsViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"colorPalette", string[]> & Record<"initialLoaderVM", InitialLoaderVM> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel>, import("react").FC<ChartLegendContainerProps>>;
