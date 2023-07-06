/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties, FigureLabelsCoefProperties } from './model/Figure';
import { Vector } from '../model/Vector';
import { ChartWithDrawings, LineProperties } from '../DrawingsConfig';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { TextLabels } from './Text/Text';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/DrawingTypes';
export interface GannFanProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    rays: GannFanRay[];
    labels: FigureLabelsCoefProperties;
    background: Pick<FigureBackgroundProperties, 'opacity'>;
    text?: TextLabels;
}
export interface GannFanRay {
    line: LineProperties;
    coefficient: number;
    visible: boolean;
}
export interface VisibleRayGannFan {
    rayEnd: Vector;
    propsPart: {
        line: LineProperties;
        coefficient: number;
        visible: boolean;
    };
    coef: number;
}
export declare const gannCooficients: string[];
export declare class GannFan extends AbstractFigure<GannFanProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    private fillBetweenRays;
    private drawRay;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: GannFanProperties, chartInstance: ChartWithDrawings): void;
    getXAxisLabels: (chartInstance: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
