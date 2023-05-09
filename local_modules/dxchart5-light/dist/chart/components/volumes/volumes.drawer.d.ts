/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { BarType, FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../drawers/canvas.model';
import { Drawer } from '../../drawers/drawing-manager';
import { ViewportModel } from '../../model/scaling/viewport.model';
import { ChartModel } from '../chart/chart.model';
import { VolumeColorResolver } from './volumes.component';
import { VolumesModel } from './volumes.model';
export declare class VolumesDrawer implements Drawer {
    private canvasModel;
    private config;
    private volumesModel;
    private chartModel;
    private viewportModel;
    private volumesColorByChartTypeMap;
    private drawPredicate;
    private readonly volumeBarColors;
    constructor(canvasModel: CanvasModel, config: FullChartConfig, volumesModel: VolumesModel, chartModel: ChartModel, viewportModel: ViewportModel, volumesColorByChartTypeMap: Partial<Record<BarType, VolumeColorResolver>>, drawPredicate: () => boolean);
    /**
     * This function is used to calculate the colors for each volume bar. It is an optimization to avoid calculating the color for each volume, which can be expensive.
     * @param {BarType} barType - The type of bar to calculate the color for.
     * @returns {void}
     */
    private calculateColors;
    /**
     * Draws the volumes on the chart canvas if the volumes are visible and the drawPredicate is true.
     * Calculates the colors based on the chart type and saves the canvas context.
     * Clips the canvas to the viewport bounds and draws the volumes.
     * Restores the canvas context.
     * @returns {void}
     */
    draw(): void;
    /**
     * Draws the last bar of the chart if the volumes component is visible.
     * TODO: Rework the function.
     *
     * @returns {void}
     */
    drawLastBar(): void;
    /**
     * Draws volumes on the chart based on the data provided by the volumesModel and chartModel.
     * If the volumeMax is 0, the function will return without drawing anything.
     * The function loops through all the candles in the viewport and calculates the x, y, width and height of each volume bar.
     * If the config.components.volumes.showSeparately is true, the function will draw each volume bar separately.
     * Otherwise, it will calculate the zoomY based on the volumeMax and the fullVHeight, and draw all the volume bars together.
     * @private
     */
    private drawVolumes;
    /**
     * Draws a volume bar on the canvas.
     *
     * @private
     * @param {VisualCandle} vCandle - The visual candle object.
     * @param {Pixel} x - The x coordinate of the top-left corner of the volume bar.
     * @param {Pixel} y - The y coordinate of the top-left corner of the volume bar.
     * @param {Pixel} width - The width of the volume bar.
     * @param {Pixel} height - The height of the volume bar.
     * @returns {void}
     */
    private drawVolume;
    /**
     * Returns an array of canvas ids.
     *
     * @returns {Array<string>} An array containing the canvas id.
     */
    getCanvasIds(): Array<string>;
}
