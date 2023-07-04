/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../../canvas/canvas-bounds-container';
import { FullChartConfig } from '../../../chart.config';
import { Point } from '../../../inputlisteners/canvas-input-listener.component';
import { ChartModel } from '../../chart/chart.model';
import { PaneManager } from '../../pane/pane-manager.component';
import { CrossToolTypeDrawer } from '../cross-tool.drawer';
import { CrossToolHover } from '../cross-tool.model';
export declare class CrossAndLabelsDrawerType implements CrossToolTypeDrawer {
    private config;
    private canvasBoundsContainer;
    private chartModel;
    private paneManager;
    private crossDrawPredicate;
    constructor(config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer, chartModel: ChartModel, paneManager: PaneManager, crossDrawPredicate?: () => boolean);
    /**
     * Draws a cross tool on a canvas context and its labels if the crossDrawPredicate is true.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {CrossToolHover} hover - The hover object containing information about the cross tool's position.
     */
    draw(ctx: CanvasRenderingContext2D, hover: CrossToolHover): void;
    /**
     * This is a protected method called `drawCrossTool` that takes two parameters: `ctx` of type `CanvasRenderingContext2D` and `hover` of type `CrossToolHover`.
     * The method draws a cross tool on the canvas using the provided context. It first gets the bounds of all panes and the hit test bounds of all panes. It then gets the top padding of the x-axis from the configuration and the left padding of the y-axis from the configuration based on the type of y-label.
     * If the hit test bounds of all panes contain the hover coordinates, it draws a horizontal line and a vertical line using the provided coordinates and the bounds of all panes. It sets the stroke style to the line color from the configuration and sets the line dash to the line dash from the configuration. It then begins a new path, moves to the start of the horizontal line, draws a line to the end of the horizontal line, moves to the start of the vertical line, and draws a line to the end of the vertical line. Finally, it strokes the path.
     */
    protected drawCrossTool(ctx: CanvasRenderingContext2D, hover: CrossToolHover): void;
    /**
     * Draws the X axis label for the cross tool on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context for the canvas.
     * @param {CrossToolHover} hover - The hover object containing the x and y coordinates of the cross tool.
     * @returns {void}
     */
    protected drawXLabel(ctx: CanvasRenderingContext2D, hover: CrossToolHover): void;
    /**
     * Draws the Y-axis label on the canvas context at the given point.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {Point} point - The point where the label should be drawn.
     * @returns {void}
     */
    protected drawYLabel(ctx: CanvasRenderingContext2D, point: Point): void;
    /**
     * Returns the pane component that contains the given point.
     * @param {Point} point - The point to check.
     * @returns {PaneComponent | undefined} - The pane component that contains the point or undefined if no pane contains it.
     */
    private getPaneIfHit;
}
