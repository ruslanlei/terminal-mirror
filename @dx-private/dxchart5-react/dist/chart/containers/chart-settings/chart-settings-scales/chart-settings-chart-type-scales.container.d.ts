/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { Localization } from '../../../../config/localization/localization';
import { ChartConfiguratorViewModel } from '../../../view-models/chart-configurator.view-model';
import { YAxisConfiguratorViewModel } from '../../../view-models/yaxis-configurator.view-model';
import { FullChartConfigWithModules } from '../../../components/canvas-chart-renderer/chart-with-modules';
export declare const ChartSettingsChartTypeScalesContainer: import("../../../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"localization", Localization> & Record<"chartConfig", FullChartConfigWithModules>, import("react").FC<Record<string, any>>>;
