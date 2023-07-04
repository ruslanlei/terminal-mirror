/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartReactConfig } from '../../config/chart-react-config';
import { Localization } from '../../config/localization/localization';
import { ChartLayersViewModel } from '../view-models/layers/chart-layers.view-model';
import { MultiChartViewModel } from '../view-models/multi-chart.view-model';
import { UserDataViewModel } from '../view-models/user-data.view-model';
export declare const ChartLayersPopoverContainer: import("../../context/context2").Context<Record<"chartLayersViewModel", ChartLayersViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"userDataViewModel", UserDataViewModel> & Record<"localization", Localization>, import("react").FunctionComponent<{}> | (() => import("react").FunctionComponentElement<{
    children?: import("react").ReactNode;
}>)>;
