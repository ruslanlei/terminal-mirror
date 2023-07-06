/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties } from './model/Figure';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { Vector } from '../model/Vector';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/DrawingTypes';
import { ViewPoint } from '../model/ViewPoint';
export interface RectangleProperties extends CommonFigureProps {
    background: FigureBackgroundProperties;
}
export declare const calculateRectangleKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
export declare const rectangleConstraint: (points: Vector[], changedIndex: number) => Vector[];
export declare class Rectangle extends AbstractFigure<RectangleProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: RectangleProperties): void;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    constraint: (points: Vector[], changedIndex: number) => Vector[];
    getXAxisLabels: (chartInstance: import("../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: import("../DrawingsConfig").ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
