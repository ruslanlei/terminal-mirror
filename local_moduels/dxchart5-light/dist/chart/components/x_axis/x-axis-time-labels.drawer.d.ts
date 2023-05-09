/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { NumericAxisLabel } from '../../../common/numeric-axis-labels.generator';
import { Bounds } from '../../../common/common-types';
import { FullChartConfig } from '../../chart.config';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CanvasModel } from '../../drawers/canvas.model';
import { Drawer } from '../../drawers/drawing-manager';
import { ViewportModel } from '../../model/scaling/viewport.model';
/**
 * This Drawer draws regular time labels for X Axis.
 */
export declare class XAxisTimeLabelsDrawer implements Drawer {
    private config;
    private canvasModel;
    private viewportModel;
    private canvasBoundsContainer;
    private labelsProvider;
    private drawPredicate;
    constructor(config: FullChartConfig, canvasModel: CanvasModel, viewportModel: ViewportModel, canvasBoundsContainer: CanvasBoundsContainer, labelsProvider: () => NumericAxisLabel[], drawPredicate?: () => boolean);
    /**
     * Draws the X-axis labels on the canvas.
     * If the drawPredicate is true, it will draw the labels.
     * @returns {void}
     */
    draw(): void;
    /**
     * Draws labels on a canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {NumericAxisLabel[]} labels - An array of NumericAxisLabel objects containing the value and text of each label.
     * @param {Bounds} bounds - The bounds of the viewport.
     * @param {string} color - The color of the labels.
     * @param {number} fontHeight - The height of the font in pixels.
     * @param {string} fontFamily - The font family to use for the labels.
     * @param {number} offsetTop - The offset from the top of the viewport to draw the labels.
     * @returns {void}
     */
    drawLabels(ctx: CanvasRenderingContext2D, labels: NumericAxisLabel[], bounds: Bounds, color: string, fontHeight: number, fontFamily: string, offsetTop: number): void;
    /**
     * Returns a font string based on the provided FullChartConfig object.
     * @param {FullChartConfig} config - The FullChartConfig object containing the font style, size and family.
     * @returns {string} - The font string in the format of "fontStyle fontSize fontFamily".
     */
    static getFontFromConfig(config: FullChartConfig): string;
    /**
     * Returns an array of canvas IDs.
     *
     * @returns {Array<string>} An array containing the ID of the canvas.
     */
    getCanvasIds(): Array<string>;
}
