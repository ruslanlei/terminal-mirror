/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawer } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import DrawingsModel from '../model/DrawingsModel';
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { DrawingModel } from '../model/DrawingModel';
import Canvases from '../canvases';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel, ViewPoint } from '../model/DrawingViewModel';
import { HitTestCanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/hit-test-canvas.model';
import { ExtendedKeyPointStyle, FullChartConfigDrawings } from '../DrawingsConfig';
/**
 * Draws the drawings!
 */
export declare class DrawingsDrawer implements Drawer {
    private drawingsModel;
    private canvases;
    private config;
    private chartModel;
    private hitTestCanvasModel;
    constructor(drawingsModel: DrawingsModel, canvases: Canvases, config: FullChartConfigDrawings, chartModel: ChartModel, hitTestCanvasModel: HitTestCanvasModel);
    draw(): void;
    redrawStaticCanvas(): void;
    redrawDynamicCanvas(): void;
    redrawHitTestCanvas(): void;
    drawDrawing(model: DrawingModel<any>, context: ExtendedContext): void;
    clearCanvases(): void;
    clearStaticCanvas(): void;
    clearDynamicCanvas(): void;
    clearHitTestCanvas(): void;
    getCanvasIds(): Array<string>;
}
/**
 * Draws the actual drawing figure.
 * @param vm - drawing's VM
 * @param ctx
 * @param drawings
 * @doc-tage canvas,drawings
 */
export declare function drawShape(vm: DrawingViewModel, ctx: ExtendedContext, drawings: DrawingsModel): void;
/**
 * @param ctx {ExtendedContext}
 * @param center {Vector}
 * @param styles {Object}
 */
export declare function drawPoint(ctx: ExtendedContext, center: ViewPoint, styles: {
    shape?: string;
    radius?: number;
    side?: number;
    radiusExtension?: number;
}): void;
/**
 * Draws action points of selected drawing.
 * @param vm - the drawing's VM
 * @param ctx
 * @param chartConfig
 * @param drawings
 * @param hoverPointIndex
 * @param radiusExtension
 */
export declare function drawPoints(vm: DrawingViewModel, ctx: ExtendedContext, chartConfig: FullChartConfigDrawings, drawings: DrawingsModel, radiusExtension?: number): void;
export declare const getKeyPointStyleForDrawing: (chartConfig: FullChartConfigDrawings, vm: DrawingViewModel) => ExtendedKeyPointStyle;
