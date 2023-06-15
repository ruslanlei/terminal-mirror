/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { ChartBaseElement } from '../../chart-base-element';
import { FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../drawers/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import EventBus from '../../event-bus';
import { ChartModel } from '../chart/chart.model';
import { PaneManager } from '../pane/pane-manager.component';
export interface WaterMarkConfig {
    isVisible?: boolean;
    fontFamily?: string;
    firstRowFontSize?: number;
    firstRowBottomPadding?: number;
    secondRowFontSize?: number;
    secondRowBottomPadding?: number;
    thirdRowFontSize?: number;
}
export interface WaterMarkData {
    firstRow?: string;
    secondRow?: string;
    thirdRow?: string;
}
export declare class WaterMarkComponent extends ChartBaseElement {
    private paneManager;
    private chartModel;
    eventBus: EventBus;
    private config;
    canvasModel: CanvasModel;
    private waterMarkDrawer;
    private waterMarkConfig;
    private waterMarkData;
    constructor(paneManager: PaneManager, chartModel: ChartModel, eventBus: EventBus, config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer, canvasModel: CanvasModel, drawingManager: DrawingManager);
    /**
     * Sets the visibility of the watermark component.
     *
     * @param {boolean} visible - A boolean indicating whether the watermark should be visible or not.
     * @returns {void}
     */
    setWaterMarkVisible(visible: boolean): void;
    /**
     * Sets the watermark data to be used in the canvas.
     * @param {WaterMarkData} watermarkData - The data to be used as watermark.
     * @returns {void}
     */
    setWaterMarkData(watermarkData: WaterMarkData): void;
    /**
     * Returns the water mark data object if it exists, otherwise returns an empty object.
     * @returns {WaterMarkData} The water mark data object.
     */
    private getWaterMarkData;
    /**
     * Sets the watermark configuration for the chart.
     * @param {WaterMarkConfig} watermarkConfig - The configuration object for the watermark.
     * @returns {void}
     
    */
    setWaterMarkConfig(watermarkConfig: WaterMarkConfig): void;
    /**
     * Sets the logo image to be used as a watermark.
     * @param {CanvasImageSource} img - The image to be used as a watermark.
     */
    setLogoImage(img: CanvasImageSource): void;
    /**
     * Recalculates the watermark text size based on the chart's width and height.
     * @param {number} chartWidth - The width of the chart.
     * @param {number} chartHeight - The height of the chart.
     * @returns {Object} - An object containing the updated watermark font sizes.
     */
    private recalculateTextSize;
}
