/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureLabelsCoefProperties, FigureBackgroundProperties, FibonacciCircle } from './model/Figure';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { Vector } from '../model/Vector';
import { TextLabels } from './Text/Text';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/DrawingTypes';
import { ChartWithDrawings } from '../DrawingsConfig';
export interface FibonacciArkProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    circles: FibonacciCircle[];
    labels: FigureLabelsCoefProperties;
    background: FigureBackgroundProperties;
    halfMode?: boolean;
    text?: TextLabels;
}
export declare class FibonacciArk extends AbstractFigure<FibonacciArkProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: FibonacciArkProperties, chartInstance: ChartWithDrawings): void;
    getXAxisLabels: (chartInstance: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
