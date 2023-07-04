/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { LineProperties } from '../DrawingsConfig';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { AbstractFigure, CommonFigureProps } from './model/Figure';
import VisualCandle from '@dx-private/dxchart5-light/dist/chart/model/visual-candle';
import { Vector } from '../model/Vector';
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { Candle } from '@dx-private/dxchart5-light/dist/chart/model/candle.model';
import { Pixel, Price } from '@dx-private/dxchart5-light/dist/chart/model/scaling/viewport.model';
import { DrawingType } from '../model/DrawingTypes';
import DrawingsModel from '../model/DrawingsModel';
import { ViewPoint } from '../model/ViewPoint';
export type RegressionTrendSectionType = 'up' | 'base' | 'down';
export interface RegressionTrendProperties extends CommonFigureProps {
    deviation: DeviationSettings;
    sections: RegressionTrendSectionSettings[];
    extendLines: boolean;
    pearsonR: boolean;
}
export interface DeviationSettings {
    useUpperDeviation: boolean;
    useLowerDeviation: boolean;
    source: DeviationSource;
}
export interface RegressionTrendSectionSettings {
    visible: boolean;
    backgroundColor: string;
    type: RegressionTrendSectionType;
    line: LineProperties;
    deviationCoef: number;
}
export declare const deviationSources: readonly ["Open", "Close", "High", "Low", "(H + L)/2", "(H + L + C)/3", "(O + H + L + C)/4"];
export type DeviationSource = (typeof deviationSources)[number];
export declare class RegressionTrend extends AbstractFigure<RegressionTrendProperties> {
    private formatterProvider;
    readonly points: number;
    type: DrawingType;
    regressionPoints: ViewPoint[];
    constructor(formatterProvider?: () => DateTimeFormatter);
    calculatePoints: (viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    customEndMoveFigureAction: (viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    customEndAddFigureAction: (viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    calcRegressionPoints: (points: ViewPoint[], chartModel: ChartModel, properties: RegressionTrendProperties) => [ViewPoint, ViewPoint, Pixel[]];
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: RegressionTrendProperties, chartBootstrap: ChartBootstrap): void;
    customMoveFigureAction: () => () => undefined;
    getXAxisLabels: (chartInstance: import("../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: import("../DrawingsConfig").ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
    private drawTrendLine;
}
export declare const calculateSectionPoints: (section: RegressionTrendSectionSettings, firstPoint: ViewPoint, lastPoint: ViewPoint, properties: RegressionTrendProperties, candles: Candle[], chartModel: ChartModel, regressionPoints: number[]) => {
    first: number;
    second: number;
    deviation: number;
} | {
    first: number;
    second: number;
    deviation?: undefined;
};
export declare const getCandlePrice: (visualCandle: VisualCandle, sourceType: DeviationSource) => Price;
export declare const drawSectionLine: (ctx: ExtendedContext, props: LineProperties, v1: Vector, v2: Vector) => void;
export declare const fillSection: (ctx: ExtendedContext, props: RegressionTrendSectionSettings, v1: Vector, v2: Vector, v3: Vector, v4: Vector) => void;
