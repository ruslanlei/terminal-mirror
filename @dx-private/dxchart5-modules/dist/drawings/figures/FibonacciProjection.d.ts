/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, FibonacciPart, CommonFigureProps, FigureLabelsPriceProperties, FigureLabelsCoefProperties, FigureLabelsPlacementProperties, FigureStyleExtendProperties, FigureBackgroundProperties } from './model/Figure';
import { ChartWithDrawings, LineProperties } from '../DrawingsConfig';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { Vector } from '../model/Vector';
import { DrawingType } from '../model/DrawingTypes';
import { TextLabels } from './Text/Text';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
type FibonacciProjectionLabelsProperties = FigureLabelsPriceProperties & FigureLabelsCoefProperties & FigureLabelsPlacementProperties;
export interface FibonacciProjectionProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    zones: FibonacciPart[];
    labels: FibonacciProjectionLabelsProperties;
    style: FigureStyleExtendProperties;
    background: FigureBackgroundProperties;
    text?: TextLabels;
}
export declare class FibonacciProjection extends AbstractFigure<FibonacciProjectionProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: FibonacciProjectionProperties, chartBootstrap: ChartWithDrawings): void;
    getXAxisLabels: (chartInstance: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
export declare const drawMainLine: (ctx: ExtendedContext, props: LineProperties, start: Vector, end: Vector) => void;
export {};
