/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { TimeZoneViewModel } from '../view-models/time-zone.view-model';
import { ChartReactConfig } from '../../config/chart-react-config';
export declare const TimeZoneContainer: import("../../context/context2").Context<Record<"timeZoneViewModel", TimeZoneViewModel> & Record<"chartReactConfig", ChartReactConfig>, import("react").FunctionComponent<{}> | (() => import("react").FunctionComponentElement<{
    children?: import("react").ReactNode;
}>)>;
