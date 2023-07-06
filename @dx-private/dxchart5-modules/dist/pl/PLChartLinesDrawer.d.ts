/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawer } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import { PLChartModel } from './PLChartModel';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
import { FullPLChartConfig } from './PLChartConfig';
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
/**
 * Drawer for PL chart lines. Draws lines from model data.
 */
export declare class PLChartLinesDrawer implements Drawer {
    private config;
    private plChartModel;
    private canvasModel;
    private canvasBoundsContainer;
    constructor(config: FullPLChartConfig, plChartModel: PLChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer);
    draw(): void;
    getCanvasIds(): Array<string>;
}
