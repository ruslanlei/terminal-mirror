/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties } from './model/Figure';
import { ChartWithDrawings, LineProperties } from '../DrawingsConfig';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { Vector } from '../model/Vector';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { FigureMeasureBoxProperties } from './components/MeasureBox';
import { DrawingType } from '../model/DrawingTypes';
import { PaneComponent } from '@dx-private/dxchart5-light/dist/chart/components/pane/pane.component';
interface DatePriceRangeBorderProperties {
    visible?: boolean;
    all?: LineProperties;
    left?: LineProperties;
    right?: LineProperties;
    top?: LineProperties;
    bottom?: LineProperties;
}
export interface DatePriceRangeProperties extends CommonFigureProps {
    borders: DatePriceRangeBorderProperties;
    background: FigureBackgroundProperties;
    measureBoxFigure: FigureMeasureBoxProperties;
}
export type RangeType = 'date' | 'price' | 'both';
export declare class DatePriceRange extends AbstractFigure<DatePriceRangeProperties> {
    private formatterProvider;
    private rangeType;
    points: number;
    readonly type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter, rangeType?: RangeType);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: DatePriceRangeProperties, chartBootstrap: ChartWithDrawings, paneComponent: PaneComponent): void;
    getXAxisLabels: (chartInstance: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
export {};
