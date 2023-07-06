/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
import { Drawer } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import { Point } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import { FullPLChartConfig } from './PLChartConfig';
import { PLCurrentPriceDotComponent } from './PLCurrentPriceDotComponent';
export declare class PLCurrentPriceDotDrawer implements Drawer {
    private config;
    private component;
    private bounds;
    private canvasModel;
    constructor(config: FullPLChartConfig, component: PLCurrentPriceDotComponent, bounds: CanvasBoundsContainer, canvasModel: CanvasModel);
    draw(): void;
    drawPoint(point: Point, ctx: CanvasRenderingContext2D): void;
    drawLineToY(point: Point, ctx: CanvasRenderingContext2D): void;
    getCanvasIds(): Array<string>;
}
