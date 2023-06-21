/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Drawer } from '../../drawers/drawing-manager';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { FullChartConfig } from '../../chart.config';
import { ChartModel } from '../chart/chart.model';
import { CanvasModel } from '../../model/canvas.model';
export declare class HighLowDrawer implements Drawer {
    private canvasModel;
    private chartModel;
    private config;
    private canvasBoundsContainer;
    constructor(canvasModel: CanvasModel, chartModel: ChartModel, config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer);
    /**
     * This function is responsible for drawing the high and low markers on the chart canvas. It checks if the highLow component is visible and if the chartModel is ready. If so, it retrieves the high, low, highIdx, and lowIdx from the chartModel's mainCandleSeries zippedHighLow property.
     * The function then calculates the global indexes of the high and low candles by adding the viewportStartCandleGlobalIdx to the highIdx and lowIdx respectively. It then saves the canvas context and sets the font to the highLow font specified in the config.
     * Finally, it calls the drawMarkerLabel function twice, passing in the canvas context, the final global index of the high or low candle, the high or low value, and a string indicating whether it is a high or low marker. After both markers have been drawn, the canvas context is restored.
     */
    draw(): void;
    /**
     * Draws a marker label on the canvas context at a specific position.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {number} candleIdx - The index of the candle.
     * @param {number} yValue - The y value of the marker.
     * @param {MarkerType} type - The type of the marker.
     * @returns {void}
     */
    private drawMarkerLabel;
    /**
     * Returns a string that represents a marker text for a given yValue and type.
     *
     * @private
     * @param {number} yValue - The yValue to format.
     * @param {MarkerType} type - The type of the marker ('high' or 'low').
     * @returns {string} - The formatted marker text.
     */
    private getMarkerText;
    /**
     * Returns the y-coordinate of a marker on the chart.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     * @param {number} yValue - The y-value of the marker.
     * @param {boolean} [offset=false] - Whether to add an offset to the y-coordinate.
     * @returns {number} The y-coordinate of the marker.
     */
    private getMarkerY;
    /**
     * Checks if the given Y coordinate is within the bounds of the chart.
     * @param {number} y - The Y coordinate to check.
     * @returns {boolean} - Returns true if the Y coordinate is within the bounds of the chart, otherwise returns false.
     */
    private checkMarkerInBounds;
    /**
     * Calculates the x position of the marker for a given candle index and text
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
     * @param {number} candleIdx - The index of the candle
     * @param {string} text - The text to be displayed
     * @returns {number} - The x position of the marker
     */
    private getMarkerX;
    /**
     * Returns an array of canvas IDs.
     *
     * @returns {Array<string>} An array containing the ID of the canvas model.
     */
    getCanvasIds(): Array<string>;
}
