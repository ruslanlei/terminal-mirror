/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ColorValue } from '../../../containers/chart-settings/chart-settings-colors/chart-type-colors.config';
interface ChartSettingsChartTypeColorsItemProps {
    readonly id: string;
    readonly values: ColorValue[];
    readonly label: string;
    readonly palette: string[];
    readonly popoverContainer?: HTMLDivElement;
}
export declare const ChartSettingsChartTypeColorsItem: React.NamedExoticComponent<ChartSettingsChartTypeColorsItemProps>;
export {};
