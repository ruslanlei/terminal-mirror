/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Drawer } from '../../drawers/drawing-manager';
import { ChartConfigComponentsWaterMark, FullChartConfig } from '../../chart.config';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CanvasModel } from '../../drawers/canvas.model';
import { WaterMarkData } from './water-mark.component';
export type WaterMarkPositionType = 'center' | 'left-top' | 'left-bottom';
export declare class WaterMarkDrawer implements Drawer {
    private config;
    private canvasBoundsContainer;
    private canvasModel;
    private waterMarkConfigProvider;
    private watermarkDataProvider;
    private logoImage?;
    constructor(config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer, canvasModel: CanvasModel, waterMarkConfigProvider: () => ChartConfigComponentsWaterMark, watermarkDataProvider: () => WaterMarkData);
    /**
     * Draws a watermark on the canvas if the watermark is visible and the colors are provided in the configuration.
     * The watermark consists of three rows of text and an optional logo image.
     * The height of each row is calculated based on the font size and the actual text height.
     * The total height of the watermark is calculated by adding the heights of all rows and the logo image.
     * The watermark is drawn using the drawWaterMark() method and the configuration is provided by the getConfig() method.
     * The font size and color of each row are provided in the waterMarkConfig object.
     * The logo image is drawn using the drawImage() method and its dimensions are provided in the waterMarkConfig object.
     * @function
     */
    draw(): void;
    /**
     * Returns an array of canvas ids.
     *
     * @returns {Array<string>} An array of canvas ids.
     */
    getCanvasIds(): Array<string>;
    /**
     * Sets the logo image to be displayed.
     *
     * @param {CanvasImageSource} img - The image to be set as the logo.
     * @returns {void}
     */
    setLogoImage(img: CanvasImageSource): void;
    /**
     * Draws a watermark on the canvas.
     *
     * @private
     * @param {Object} config - The configuration object for the watermark.
     * @param {string} config.text - The text to be displayed as the watermark.
     * @param {string} config.font - The font to be used for the watermark.
     * @param {string} config.color - The color to be used for the watermark.
     * @param {number} config.x - The x-coordinate of the starting point of the watermark.
     * @param {number} config.y - The y-coordinate of the starting point of the watermark.
     * @returns {void}
     */
    private drawWaterMark;
    private getConfig;
    /**
     * A method that resets the state of an object to its initial values.
     *
     * @function
     * @name reset
     * @returns {void}
     */
    reset(): void;
}
export declare const reCountingSize: (config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer, fontSize: number, fontWidth: number) => string;
export declare const setFont: (config: FullChartConfig, fontSize: number) => string;
