/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CursorType } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { FullChartConfigDrawings } from '../DrawingsConfig';
import { ExtendedContext, PropertiesForFill } from '../components/extended_context/ExtendedContext';
import { DrawingType } from '../model/DrawingTypes';
import { DrawingViewModel } from '../model/DrawingViewModel';
import DrawingsModel, { DragDrawingInfo } from '../model/DrawingsModel';
import { PointEvent } from '../model/PointEvent';
import { ViewPoint } from '../model/ViewPoint';
import { AbstractFigure, FigureBackgroundProperties } from './model/Figure';
export interface IconProperties {
    iconStyle: PropertiesForFill;
    background?: FigureBackgroundProperties;
    icon: IconItem;
}
export interface IconItem {
    name: string;
    svg: string;
    w: number;
    h: number;
}
export declare class Icon extends AbstractFigure<IconProperties> {
    readonly icon: IconItem;
    points: number;
    readonly type: DrawingType;
    private scaleFactor;
    private currentAngle;
    private committedAngle;
    constructor(icon: IconItem);
    get angle(): number;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    private calculateResizeViewPoints;
    private calculateRotateViewPoints;
    customEndMoveFigureAction: () => void;
    getCursor: (point: ViewPoint, viewModel: DrawingViewModel) => CursorType | undefined;
    resize: (viewModel: DrawingViewModel, movedPoint: PointEvent) => void;
    rotate: (viewModel: DrawingViewModel, movedPoint: PointEvent, match: DragDrawingInfo) => void;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: IconProperties): void;
    drawPoints(vm: DrawingViewModel, ctx: ExtendedContext, chartConfig: FullChartConfigDrawings, drawingsModel: DrawingsModel): void;
}
