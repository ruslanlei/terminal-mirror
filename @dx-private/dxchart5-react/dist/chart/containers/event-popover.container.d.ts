/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export declare const EventPopoverContainer: import("../../context/context2").Context<Record<"eventsDataProvider", import("../../providers/events-data-provider").EventsDataProvider> & Record<"chartInstance", ChartWithModules> & Record<"chartConfiguratorViewModel", import("../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartDataViewModel", import("../view-models/chart-data.view-model").ChartDataViewModel> & Record<"localization", import("../../config/localization/localization").Localization> & Record<"chartReactConfig", import("../../config/chart-react-config").ChartReactConfig>, import("react").FC<Record<string, any>>>;
