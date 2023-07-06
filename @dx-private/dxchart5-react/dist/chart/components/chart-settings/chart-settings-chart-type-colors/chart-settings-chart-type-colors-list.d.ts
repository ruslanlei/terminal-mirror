/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ColorsData } from '../../../containers/chart-settings/chart-settings-colors/chart-type-colors.config';
export interface ChartSettingsChartTypeColorsListProps {
    readonly colorsData: ColorsData[];
    readonly palette: string[];
    readonly popoverContainer?: HTMLDivElement;
}
export declare const ChartSettingsChartTypeColorsList: React.NamedExoticComponent<ChartSettingsChartTypeColorsListProps>;
