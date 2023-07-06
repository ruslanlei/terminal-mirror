/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { Devices } from '@dx-private/dxchart5-light/dist/chart/utils/device/device-detector.utils';
import { Localization } from '../../../config/localization/localization';
export interface MultiChartComponentContextProps {
    keyboardModeEnabled: boolean;
    localization: Localization;
    device: Devices;
}
export declare const DEFAULT_MULTICHART_COMPONENT_CONTEXT: {
    keyboardModeEnabled: boolean;
    localization: Localization;
    device: "other";
};
export declare const MultiChartComponentContext: import("react").Context<MultiChartComponentContextProps>;
