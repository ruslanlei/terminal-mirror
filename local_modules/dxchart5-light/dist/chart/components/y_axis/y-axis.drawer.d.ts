/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartConfigComponentsYAxis, FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../model/canvas.model';
import { NumericAxisLabel } from '../labels_generator/numeric-axis-labels.generator';
import { Drawer } from '../../drawers/drawing-manager';
import { Unit, ViewportModel } from '../../model/scaling/viewport.model';
import { Bounds, BoundsProvider } from '../../model/bounds.model';
export interface YAxisLabel {
    readonly text: string;
    readonly value: Unit;
}
export interface YAxisAnimationParameters {
    readonly removed: YAxisLabel[];
    readonly added: YAxisLabel[];
    readonly stay: YAxisLabel[];
}
/**
 * Draws the Y_AXIS rectangle + it's base labels.
 */
export declare class YAxisDrawer implements Drawer {
    private fullConfig;
    private yAxisState;
    private canvasModel;
    private labelsProvider;
    private axisBounds;
    private drawPredicate;
    private toY;
    constructor(fullConfig: FullChartConfig, yAxisState: ChartConfigComponentsYAxis, canvasModel: CanvasModel, labelsProvider: () => Array<NumericAxisLabel>, axisBounds: BoundsProvider, drawPredicate: () => boolean, toY: ViewportModel['toY']);
    /**
     * Draws the axis on the canvas if the drawPredicate is true.
     * It gets the labels from the labelsProvider and the bounds from the axisBounds.
     * It sets the background color of the axis and fills the background rectangle.
     * It gets the font from the yAxisState and calculates the font height.
     * It saves the context, clips it to the bounds and draws the labels with the given font and text color.
     * @function
     */
    draw(): void;
    /**
     * Draws labels on the Y-axis of a canvas chart.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     * @param {YAxisLabel[]} labels - An array of objects containing the value and text of each label.
     * @param {Bounds} axisBounds - An object containing the x, y, width, and height of the Y-axis.
     * @param {number} fontHeight - The height of the font used for the labels.
     * @param {string} font - The font used for the labels.
     * @param {string} labelTextColor - The color of the label text.
     */
    drawLabels(ctx: CanvasRenderingContext2D, labels: YAxisLabel[], axisBounds: Bounds, fontHeight: number, font: string, labelTextColor: string): void;
    /**
     * Returns an array of canvas IDs.
     *
     * @returns {Array<string>} An array containing the canvas ID.
     */
    getCanvasIds(): Array<string>;
    /**
     * Returns the background color of the Y-axis.
     *
     * @protected
     * @returns {string} The background color of the Y-axis.
     */
    protected getBackgroundColor(): string;
    /**
     * Returns the color of the label text for the chart area axis.
     *
     * @protected
     * @returns {string} The color of the label text.
     */
    protected getLabelTextColor(): string;
}
