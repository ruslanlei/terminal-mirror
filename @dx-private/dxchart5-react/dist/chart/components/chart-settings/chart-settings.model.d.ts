/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartSettings } from '../../model/chart.model';
export interface TabDefaultConfig {
    readonly id: string;
    readonly defaultConfig: ChartSettings;
}
export interface TabTypeWithIcon {
    readonly id: string;
    readonly label: string;
    readonly content: () => React.ElementType;
    readonly icon: JSX.Element;
    readonly testId?: string;
}
export interface ChartSettingsPopoverMeasurements {
    width: number;
    height: number;
}
