/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingType } from '../model/DrawingTypes';
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties, FigureLineArrowsProperties } from './model/Figure';
import { DrawingViewModel, ViewPoint } from '../model/DrawingViewModel';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { PointEvent } from '../model/PointEvent';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import DrawingsModel from '../model/DrawingsModel';
export interface BrushProperties extends CommonFigureProps {
    background: FigureBackgroundProperties;
    arrows: FigureLineArrowsProperties;
}
export declare class Brush extends AbstractFigure<BrushProperties> {
    private formatterProvider;
    points: number;
    readonly type: DrawingType;
    readonly disablePointDrag: boolean;
    constructor(formatterProvider?: () => DateTimeFormatter);
    downMoveHandler: (point: PointEvent, viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    customEndAddFigureAction: (viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: BrushProperties): void;
    getXAxisLabels: (chartInstance: import("../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/Vector").Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: import("../DrawingsConfig").ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
