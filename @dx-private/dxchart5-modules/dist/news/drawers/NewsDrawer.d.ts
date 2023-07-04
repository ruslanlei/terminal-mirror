/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
import { Drawer } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import { NewsComponent } from '../NewsComponent';
import { FullChartConfigNews } from '../NewsConfig';
export declare class NewsDrawer implements Drawer {
    private canvasModel;
    private newsComponent;
    private chartModel;
    private config;
    private canvasBoundsContainer;
    constructor(canvasModel: CanvasModel, newsComponent: NewsComponent, chartModel: ChartModel, config: FullChartConfigNews, canvasBoundsContainer: CanvasBoundsContainer);
    draw(): void;
    getCanvasIds(): Array<string>;
}
