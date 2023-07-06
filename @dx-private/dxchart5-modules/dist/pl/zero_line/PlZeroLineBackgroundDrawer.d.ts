/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
import { Drawer } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import { FullPLChartConfig } from '../PLChartConfig';
import { PLChartModel } from '../PLChartModel';
export declare class PlZeroLineBackgroundDrawer implements Drawer {
    private config;
    private plChartModel;
    private canvasModel;
    private canvasBoundsContainer;
    constructor(config: FullPLChartConfig, plChartModel: PLChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer);
    draw(): void;
    private drawZeroLineBackground;
    getCanvasIds(): Array<string>;
}
