/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { NumericAxisLabel } from '../labels_generator/numeric-axis-labels.generator';
import { BoundsProvider } from '../../model/bounds.model';
import { FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../model/canvas.model';
import { Drawer } from '../../drawers/drawing-manager';
import { Unit, ViewportModel } from '../../model/scaling/viewport.model';
export interface GridLine {
    readonly pos?: number;
    readonly pixels: number;
}
/**
 * Draws grid lines on chart.
 */
export declare class GridDrawer implements Drawer {
    private canvasModel;
    private viewportModel;
    private config;
    private xBoundsProvider;
    private yBoundsProvider;
    private xLabelsProvider;
    private yLabelsProvider;
    private drawPredicate;
    private getBaseLine?;
    constructor(canvasModel: CanvasModel, viewportModel: ViewportModel, config: FullChartConfig, xBoundsProvider: BoundsProvider, yBoundsProvider: BoundsProvider, xLabelsProvider: () => NumericAxisLabel[], yLabelsProvider: () => NumericAxisLabel[], drawPredicate?: () => boolean, getBaseLine?: (() => Unit) | undefined);
    /**
     * Draws the chart on the canvas if the drawPredicate is true.
     * @returns {void}
     */
    draw(): void;
    /**
     * Draws a zero line on the y-axis if the chart is a percentage chart and the zeroPercentLine option is enabled.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas element.
     */
    drawZeroLine(ctx: CanvasRenderingContext2D): void;
    /**
     * Draws vertical grid lines on the canvas context provided.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @returns {void}
     */
    drawVertical(ctx: CanvasRenderingContext2D): void;
    /**
     * This function is responsible for drawing horizontal grid lines on the chart. It takes a CanvasRenderingContext2D object as a parameter. It first retrieves the y-axis labels using the yLabelsProvider method. If there are any labels and the horizontal grid is enabled in the configuration, it sets the line width, color, and dash style. It then retrieves the y-bounds using the yBoundsProvider method. For each label, it calculates the y-coordinate using the toY method of the viewportModel object. It also calculates the label's y-offset using the getLabelYOffset method. If the y-coordinate is within the bounds of the chart, it draws a horizontal line using the beginPath, moveTo, lineTo, and stroke methods of the CanvasRenderingContext2D object.
     */
    drawHorizontal(ctx: CanvasRenderingContext2D): void;
    /**
     * Returns an array of strings containing the ID of the canvas model.
     * @returns {Array<string>} An array of strings containing the ID of the canvas model.
     */
    getCanvasIds(): Array<string>;
}
