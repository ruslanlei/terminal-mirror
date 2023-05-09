/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../chart.config';
import { HighlightsModel } from './hightlights.model';
import { CanvasModel } from '../../drawers/canvas.model';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { Drawer } from '../../drawers/drawing-manager';
import { ChartModel } from '../chart/chart.model';
export declare class HighlightsDrawer implements Drawer {
    private highlightsModel;
    private chartModel;
    private canvasModel;
    private canvasBoundsContainer;
    private config;
    constructor(highlightsModel: HighlightsModel, chartModel: ChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, config: FullChartConfig);
    /**
     * Draws highlights on the chart canvas if they are visible.
     * @function
     * @name draw
     * @memberof ChartComponent.prototype
     *
     * @returns {void}
     *
     * @example
     * chartComponent.draw();
     */
    draw(): void;
    /**
     * Calculates the position of the highlight label based on the given parameters.
     * @param {HighlightTextPlacement} placement - The placement of the highlight text.
     * @param {Bounds} bounds - The bounds of the highlight.
     * @param {[number, number]} highlightFromTo - The start and end position of the highlight.
     * @param {number} labelWidth - The width of the label.
     * @returns {[number, number]} - The x and y position of the highlight label.
     */
    private resolveHighlightLabelPosition;
    /**
     * Draws borders on a canvas context for a given chart.
     * @param {HighlightBorder} border - The border to draw.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {number} fromX - The starting x-coordinate of the border.
     * @param {number} toX - The ending x-coordinate of the border.
     * @param {Bounds} chartBounds - The bounds of the chart to draw the border on.
     * @returns {void}
     */
    private drawBorders;
    /**
     * Returns an array of canvas IDs.
     *
     * @returns {Array<string>} An array containing the canvas ID.
     */
    getCanvasIds(): Array<string>;
}
