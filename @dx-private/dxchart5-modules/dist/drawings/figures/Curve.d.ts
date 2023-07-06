/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties, FigureStyleExtendProperties } from './model/Figure';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { Vector } from '../model/Vector';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel, ViewPoint } from '../model/DrawingViewModel';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/DrawingTypes';
export declare const calculateRectangleKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
export interface CurveProperties extends CommonFigureProps {
    style: FigureStyleExtendProperties;
    background: FigureBackgroundProperties;
}
export declare class Curve extends AbstractFigure<CurveProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    hidden?: {
        readonly height: number;
    };
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: CurveProperties, chartBootstrap: ChartBootstrap): void;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    getXAxisLabels: (chartInstance: import("../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: import("../DrawingsConfig").ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
