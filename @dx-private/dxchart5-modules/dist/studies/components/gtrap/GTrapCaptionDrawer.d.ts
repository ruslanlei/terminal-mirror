/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawer } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { StudiesModel } from '../../model/StudiesModel';
import { ChartBaseElement } from '@dx-private/dxchart5-light/dist/chart/model/chart-base-element';
import { FullChartConfigStudies } from '../../StudiesConfig';
export declare class GTrapCaptionDrawer extends ChartBaseElement implements Drawer {
    private config;
    private canvasBoundsContainer;
    private canvasModel;
    private chartModel;
    private studiesModel;
    private static readonly GTRAP_STUDY_ID;
    private context;
    constructor(config: FullChartConfigStudies, canvasBoundsContainer: CanvasBoundsContainer, canvasModel: CanvasModel, chartModel: ChartModel, studiesModel: StudiesModel);
    draw(): void;
    private drawGTrapCaption;
    private drawGTrapLabel;
    /**
     * Calculates viewport-based GTrap zone begin (candle index based amount of visible candles)
     * @param zoneBeginCandleIdx index of first real GTrap candle
     */
    private calcBeginZoneIdx;
    /**
     * Calculates viewport-based GTrap zone end (candle index based amount of visible candles)
     * @param zoneEndCandleIdx index of last real GTrap candle
     */
    private calcEndZoneIdx;
    /**
     * Calculates whether GTrap zone is visible in the viewport
     * @param zoneBeginCandleIdx index of first real GTrap candle
     * @param zoneEndCandleIdx index of last real GTrap candle
     */
    private isGTrapOutOfView;
    private resolveLabelShift;
    private getGTrapCenter;
    private prepareGTrapText;
    private getShift;
    private drawTextInRoundedLabel;
    private drawRoundedLine;
    getCanvasIds(): Array<string>;
}
