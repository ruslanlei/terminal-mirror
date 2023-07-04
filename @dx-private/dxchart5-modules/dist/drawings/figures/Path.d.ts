/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureLineArrowsProperties } from './model/Figure';
import { DrawingType } from '../model/DrawingTypes';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { PointEvent } from '../model/PointEvent';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
export interface PathProperties extends CommonFigureProps {
    arrows: Pick<FigureLineArrowsProperties, 'start' | 'end'>;
}
export declare class Path extends AbstractFigure<PathProperties> {
    private formatterProvider;
    points: number;
    readonly type: DrawingType;
    readonly commitOnEnter: boolean;
    constructor(formatterProvider?: () => DateTimeFormatter);
    beforeCommit: (drawingViewModel: DrawingViewModel) => boolean;
    pointConstraint: (point: PointEvent, model: DrawingViewModel) => boolean;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: PathProperties): void;
    getXAxisLabels: (chartInstance: import("../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/Vector").Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: import("../DrawingsConfig").ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
