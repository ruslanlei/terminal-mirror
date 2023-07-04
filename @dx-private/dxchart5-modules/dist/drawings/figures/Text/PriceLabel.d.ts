/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, PointStyles } from '../model/Figure';
import { BubbleFigureProperties } from './common';
import { DrawingViewModel } from '../../model/DrawingViewModel';
import { ExtendedContext } from '../../components/extended_context/ExtendedContext';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { Vector } from '../../model/Vector';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { DrawingType } from '../../model/DrawingTypes';
export interface PriceLabelProperties extends BubbleFigureProperties, PointStyles {
    showPrice: boolean;
    showTime: boolean;
    isTransparent?: boolean;
    showBorder?: boolean;
}
export declare class PriceLabel extends AbstractFigure<PriceLabelProperties> {
    private formatterProvider;
    points: number;
    readonly type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: PriceLabelProperties, chartBootstrap: ChartBootstrap): void;
    getXAxisLabels: (chartInstance: import("../../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: import("../model/Figure").CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: import("../../DrawingsConfig").ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
