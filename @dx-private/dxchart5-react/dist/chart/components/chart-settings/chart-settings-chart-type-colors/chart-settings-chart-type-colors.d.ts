/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lens } from 'monocle-ts';
import React from 'react';
import { Localization } from '../../../../config/localization/localization';
import { ChartCoreSettings, ChartSettings } from '../../../model/chart.model';
import { Lazy } from 'fp-ts/function';
import { ThemeType } from '../../../model/theme.model';
interface ColorSettingsComponentProps {
    readonly popoverContainer?: HTMLDivElement;
}
interface ChartSettingsChartTypeColorsProps {
    readonly localization: Localization;
    readonly setTheme: (theme: ThemeType) => void;
    readonly activeTheme: ThemeType;
    readonly onColorChange: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly palette: string[];
    readonly ColorSettingsComponent: React.ComponentType<ColorSettingsComponentProps>;
    readonly settings: ChartCoreSettings;
    readonly popoverContainer?: HTMLDivElement;
    readonly showRestoreToDefault?: boolean;
    readonly onRestoreDefaultRequest: Lazy<void>;
}
export declare const ChartSettingsChartTypeColors: React.NamedExoticComponent<ChartSettingsChartTypeColorsProps>;
export {};
