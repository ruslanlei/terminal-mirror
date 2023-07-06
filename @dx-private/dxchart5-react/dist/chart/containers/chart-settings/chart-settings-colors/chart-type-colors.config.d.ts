/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartSettings, ChartType } from '../../../model/chart.model';
export interface ColorValue {
    readonly onValueChange: (value: string) => void;
    readonly value: string;
}
export interface ColorsData {
    readonly values: ColorValue[];
    readonly id: string;
    readonly label: string;
}
export declare const getChartTypeColorsDefaultConfig: (type: ChartType, settings: ChartSettings, defaultConfig: ChartSettings) => any;
