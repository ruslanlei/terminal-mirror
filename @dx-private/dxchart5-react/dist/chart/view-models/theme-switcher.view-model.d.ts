/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../context/sink2';
import { MultiChartViewModel } from './multi-chart.view-model';
import { UserDataViewModel } from './user-data.view-model';
import { Lens } from 'monocle-ts';
import { ChartSettings } from '../model/chart.model';
import { Property } from '../../utils/property.utils';
import { ChartAppPalette } from '../../config/theme/chart-palette';
import { LayoutViewModel } from './layout.view-model';
import { ThemeType } from '../model/theme.model';
import { UnsubscribeCallback } from './api/chart-react-api.view-model';
export interface ThemeSwitcherViewModel {
    readonly setTheme: (theme: ThemeType) => void;
    readonly activeTheme: Property<ThemeType>;
    readonly onRestoreDefaultTheme: () => void;
    readonly onThemeChanged: (cb: ThemeChangedCB) => UnsubscribeCallback;
}
/**
 * Takes palette from chart color variables library.
 * Overrides the palette.css in <head>. Disabled the default one.
 * @param palette
 * @doc-tags styling,chart-react,design-system
 */
export declare function processPaletteCss(palette: ChartAppPalette): void;
export type ThemeChangedCB = (theme: ThemeType) => void;
export declare const chartSettingsColors: Lens<ChartSettings, {
    candleTheme: {
        upColor: string;
        downColor: string;
        noneColor: string;
        upWickColor: string;
        downWickColor: string;
    };
    barTheme: {
        upColor: string;
        downColor: string;
        noneColor: string;
    };
    lineTheme: {
        upColor: string;
        downColor: string;
        noneColor: string;
    };
    equivolumeTheme: {
        upColor: string;
        downColor: string;
        noneColor: string;
    };
    chartAreaTheme: {
        backgroundMode: "regular" | "gradient";
        backgroundColor: string;
        backgroundGradientTopColor: string;
        backgroundGradientBottomColor: string;
        gridColor: string;
    };
    scatterPlot: {
        mainColor: string;
    };
    areaTheme: {
        lineColor: string;
        startColor?: string | undefined;
        stopColor?: string | undefined;
    };
    baseLineTheme: {
        lowerSectionStrokeColor: string;
        upperSectionStrokeColor: string;
        lowerSectionFillColor: string;
        upperSectionFillColor: string;
        baselineColor: string;
    };
    histogram: {
        upCap: string;
        upBottom: string;
        upBright: string;
        downCap: string;
        downBottom: string;
        downBright: string;
        noneCap: string;
        noneBottom: string;
        noneBright: string;
    };
    crossTool: {
        lineColor: string;
        labelBoxColor: string;
        labelTextColor: string;
    };
    waterMarkTheme: {
        firstRowColor: string;
        secondRowColor: string;
        thirdRowColor: string;
    };
    newsTheme: {
        backgroundColor: string;
    };
    xAxis: {
        labelTextColor: string;
    };
    yAxis: {
        labelTextColor: string;
    };
}>;
export declare const createThemeSwitcherViewModel: import("../../context/context2").Context<Record<"multiChartViewModel", MultiChartViewModel> & Record<"userDataViewModel", UserDataViewModel> & Record<"palette", ChartAppPalette> & Record<"layoutViewModel", LayoutViewModel>, Sink<ThemeSwitcherViewModel>>;
