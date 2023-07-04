/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureStyleExtendProperties, FigureLineArrowsProperties, FigureLabelsCoefProperties, FigureLabelsPriceProperties, FigureLabelsPlacementProperties } from './model/Figure';
import { ChartWithDrawings, LineProperties } from '../DrawingsConfig';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { TextLabels } from './Text/Text';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { MeasureBoxProperties } from './components/MeasureBox';
import { DrawingType } from '../model/DrawingTypes';
import { PaneComponent } from '@dx-private/dxchart5-light/dist/chart/components/pane/pane.component';
export interface LineFigureProperties extends CommonFigureProps {
    arrows: LineProperties & FigureLineArrowsProperties;
    labels: FigureLabelsCoefProperties & FigureLabelsPriceProperties & Omit<FigureLabelsPlacementProperties, 'placementToTheLine'>;
    style: FigureStyleExtendProperties;
    text?: TextLabels;
    measureBox: MeasureBoxProperties;
}
export declare class LineFigure extends AbstractFigure<LineFigureProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: LineFigureProperties, chartBootstrap: ChartWithDrawings, paneComponent: PaneComponent): void;
    getXAxisLabels: (chartInstance: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/Vector").Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
