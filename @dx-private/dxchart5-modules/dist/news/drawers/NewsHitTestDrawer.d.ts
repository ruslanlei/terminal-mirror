/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { NewsComponent } from '../NewsComponent';
import { FullChartConfigNews } from '../NewsConfig';
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { Drawer } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import { HitTestCanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/hit-test-canvas.model';
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
export declare class NewsHitTestDrawer implements Drawer {
    private canvasModel;
    private newsComponent;
    private chartModel;
    private config;
    private canvasBoundsContainer;
    constructor(canvasModel: HitTestCanvasModel, newsComponent: NewsComponent, chartModel: ChartModel, config: FullChartConfigNews, canvasBoundsContainer: CanvasBoundsContainer);
    draw(): void;
    getCanvasIds(): Array<string>;
}
