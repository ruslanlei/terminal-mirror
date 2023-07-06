/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { AbstractFigure, CommonFigureProps, FibonacciPart, FigureBackgroundProperties, FigureLabelsCoefProperties, FigureLabelsPaddingsProperties, FigureLabelsPlacementProperties, FigureLabelsPriceProperties } from './model/Figure';
import { TextLabels } from './Text/Text';
import { DrawingType } from '../model/DrawingTypes';
import { ChartWithDrawings } from '../DrawingsConfig';
type FibonacciTimeRatiosLabelsProperties = FigureLabelsPriceProperties & FigureLabelsCoefProperties & FigureLabelsPlacementProperties;
export interface FibonacciTimeRatiosProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    zones: FibonacciPart[];
    labels: FibonacciTimeRatiosLabelsProperties & FigureLabelsPaddingsProperties;
    background: FigureBackgroundProperties;
    text?: TextLabels;
}
export declare class FibonacciTimeRatios extends AbstractFigure<FibonacciTimeRatiosProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: FibonacciTimeRatiosProperties, chartBootstrap: ChartWithDrawings): void;
    getXAxisLabels: (chartInstance: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/Vector").Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
export {};
