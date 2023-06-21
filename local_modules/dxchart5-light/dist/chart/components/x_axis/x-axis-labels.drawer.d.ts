/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { XAxisLabelsModel } from './x-axis-labels.model';
import { CanvasModel } from '../../model/canvas.model';
import { Drawer } from '../../drawers/drawing-manager';
import { FullChartConfig } from '../../chart.config';
/**
 * This drawer draws custom labels for X Axis, using labels from XAxisLabelModel.
 * By default labels for drawings are drawn by this drawer.
 */
export declare class XAxisLabelsDrawer implements Drawer {
    private backgroundCanvasModel;
    private config;
    private canvasModel;
    private canvasBoundsContainer;
    private xAxisLabelsModel;
    constructor(backgroundCanvasModel: CanvasModel, config: FullChartConfig, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, xAxisLabelsModel: XAxisLabelsModel);
    /**
     * Draws the X axis labels on the canvas.
     * @function
     * @name draw
     * @memberof XAxisLabelsDrawer
     * @returns {void}
     */
    draw(): void;
    /**
     * Draws a highlighted background between two labels with the same "subGroupId".
     *
     * @returns {void}
     */
    drawHighlightedBackgroundBetweenLabels(): void;
    /**
     * Returns an array with the ID of the canvas model.
     *
     * @returns {Array} An array with the ID of the canvas model.
     */
    getCanvasIds(): string[];
}
