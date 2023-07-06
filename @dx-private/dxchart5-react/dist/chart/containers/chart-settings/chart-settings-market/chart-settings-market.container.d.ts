/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartReactConfig } from '../../../../config/chart-react-config';
import { ChartWithModules } from '../../../components/canvas-chart-renderer/chart-with-modules';
import { ChartConfiguratorViewModel } from '../../../view-models/chart-configurator.view-model';
export declare const ChartSettingsMarketContainer: import("../../../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartInstance", ChartWithModules> & Record<"chartReactConfig", ChartReactConfig>, import("react").FC<Record<string, any>>>;
