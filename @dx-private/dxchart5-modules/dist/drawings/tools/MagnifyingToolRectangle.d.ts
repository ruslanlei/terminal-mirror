/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, FigureXYAxisLabelsProperties } from '../figures/model/Figure';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { LineProperties } from '../DrawingsConfig';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { Vector } from '../model/Vector';
import DrawingsModel from '../model/DrawingsModel';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/DrawingTypes';
export interface MagnifyingToolRectangleProperties extends FigureXYAxisLabelsProperties {
    line: LineProperties;
    background: {
        fillStyle: string;
    };
    projection: LineProperties;
    text: {
        textSize: string;
        textBg: string;
        backgroundOffsetWidth: number;
        backgroundOffsetHeight: number;
    };
}
export declare class MagnifyingToolRectangle extends AbstractFigure<MagnifyingToolRectangleProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: MagnifyingToolRectangleProperties, chartBootstrap: ChartBootstrap): void;
    getXAxisLabels: (chartInstance: import("../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: import("../figures/model/Figure").CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: import("../DrawingsConfig").ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
    beforeCommit: (drawingViewModel: DrawingViewModel, drawings?: DrawingsModel) => boolean;
}
