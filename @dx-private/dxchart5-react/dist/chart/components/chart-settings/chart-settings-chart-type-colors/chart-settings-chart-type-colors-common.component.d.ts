/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Localization } from '../../../../config/localization/localization';
import { ChartCoreSettings, ChartSettings } from '../../../model/chart.model';
import { ChartSettingsChartTypeColorsListProps } from './chart-settings-chart-type-colors-list';
import { Lens } from 'monocle-ts';
interface ChartSettingsChartTypeColorsCommonProps extends Omit<ChartSettingsChartTypeColorsListProps, 'colorsData'> {
    readonly settings: ChartCoreSettings;
    readonly localization: Localization;
    readonly onColorChange: (lens: Lens<ChartSettings, any>, value: any) => void;
}
export declare const ChartSettingsChartTypeColorsCommon: React.NamedExoticComponent<ChartSettingsChartTypeColorsCommonProps>;
export {};
