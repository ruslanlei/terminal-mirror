/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LabelGroup, YAxisLabelsProvider } from '@dx-private/dxchart5-light/dist/chart/components/y_axis/price_labels/y-axis-labels.model';
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import DrawingsModel from '../../model/DrawingsModel';
import Canvases from '../../canvases';
import { ChartWithDrawings } from '../../DrawingsConfig';
export declare class DrawingsYAxisLabelsProvider implements YAxisLabelsProvider {
    private drawingsModel;
    private canvases;
    private canvasBoundsContainer;
    private chartBootstrap;
    constructor(drawingsModel: DrawingsModel, canvases: Canvases, canvasBoundsContainer: CanvasBoundsContainer, chartBootstrap: ChartWithDrawings);
    getUnorderedLabels(): LabelGroup[];
}
