/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { Localization } from '../../config/localization/localization';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export declare const ZoomingToolContainer: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"chartConfiguratorViewModel", import("../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"localization", Localization>, import("react").FC<Record<string, any>>>;
