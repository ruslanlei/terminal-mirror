/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartDrawingViewModel } from '../view-models/drawing.view-model';
import { MultiChartViewModel } from '../view-models/multi-chart.view-model';
import { ChartReactConfig } from '../../config/chart-react-config';
import { UserDataViewModel } from '../view-models/user-data.view-model';
export declare const DrawingsSidebarContainer: import("../../context/context2").Context<Record<"drawingViewModel", ChartDrawingViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"userDataViewModel", UserDataViewModel> & Record<"chartReactConfig", ChartReactConfig>, import("react").FunctionComponent<{}> | (() => import("react").FunctionComponentElement<{
    children?: import("react").ReactNode;
}>)>;
