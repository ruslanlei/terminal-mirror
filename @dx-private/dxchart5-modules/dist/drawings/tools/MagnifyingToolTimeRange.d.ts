/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { LineProperties } from '../DrawingsConfig';
import DrawingsModel from '../model/DrawingsModel';
import { DrawingType } from '../model/DrawingTypes';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { AbstractFigure, FigureXYAxisLabelsProperties } from '../figures/model/Figure';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { Vector } from '../model/Vector';
export interface MagnifyingToolTimeRangeProperties extends FigureXYAxisLabelsProperties {
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
export declare class MagnifyingToolTimeRange extends AbstractFigure<MagnifyingToolTimeRangeProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: MagnifyingToolTimeRangeProperties, chartBootstrap: ChartBootstrap): void;
    getXAxisLabels: (chartInstance: import("../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: import("../figures/model/Figure").CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    beforeCommit: (drawingViewModel: DrawingViewModel, drawings?: DrawingsModel) => boolean;
}
