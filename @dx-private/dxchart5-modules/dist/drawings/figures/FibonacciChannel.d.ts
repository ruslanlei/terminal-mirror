/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { ChartWithDrawings } from '../DrawingsConfig';
import { ExtendedContext, PropertiesForFill } from '../components/extended_context/ExtendedContext';
import { DrawingType } from '../model/DrawingTypes';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { Vector } from '../model/Vector';
import { TextLabels } from './Text/Text';
import { AbstractFigure, CommonFigureProps, FibonacciPart, FigureBackgroundProperties, FigureLabelsCoefProperties, FigureLabelsPaddingsProperties, FigureLabelsPlacementProperties, FigureLabelsPriceProperties, FigureStyleExtendProperties } from './model/Figure';
type FibonacciChannelLabelsProperties = FigureLabelsCoefProperties & FigureLabelsPriceProperties & FigureLabelsPlacementProperties & FigureLabelsPaddingsProperties;
export interface FibonacciChannelProperties extends CommonFigureProps {
    hitTestLineOffset?: number;
    zones: FibonacciPart[];
    labels: FibonacciChannelLabelsProperties;
    style: FigureStyleExtendProperties;
    background: FigureBackgroundProperties;
    text?: TextLabels;
}
export declare class FibonacciChannel extends AbstractFigure<FibonacciChannelProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: FibonacciChannelProperties, chartBootstrap: ChartWithDrawings): void;
    getXAxisLabels: (chartInstance: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
export declare const multiplyVector: (a: Vector, b: Vector, coef: number) => Vector;
export declare const fillLevelShade: (ctx: ExtendedContext, props: PropertiesForFill, first: Vector, second: Vector, calculated: Vector, third: Vector) => void;
export {};
