/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps } from './model/Figure';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/DrawingTypes';
export interface HorizontalRayProperties extends CommonFigureProps {
}
export declare class HorizontalRay extends AbstractFigure<HorizontalRayProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: HorizontalRayProperties): void;
    getXAxisLabels: (chartInstance: import("../DrawingsConfig").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/Vector").Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: import("../DrawingsConfig").ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
