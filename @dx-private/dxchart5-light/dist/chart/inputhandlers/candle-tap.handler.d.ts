/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartModel } from '../components/chart/chart.model';
import { CanvasInputListenerComponent } from '../inputlisteners/canvas-input-listener.component';
import { ChartBaseElement } from '../model/chart-base-element';
import { FullChartConfig } from '../chart.config';
export declare class CandleTapHandler extends ChartBaseElement {
    constructor(mainCanvasParent: Element, chartModel: ChartModel, canvasInputListeners: CanvasInputListenerComponent, config: FullChartConfig);
    /**
     * Sets the candle as active when a touch event occurs on the chart.
     * @param {TouchEvent} e - The touch event that occurred on the chart.
     * @param {Element} mainCanvasParent - The parent element of the main canvas.
     * @param {ChartModel} chartModel - The chart model object.
     */
    private setCandleAsActive;
    /**
     * Calculates the X position of a touch event relative to the main canvas parent element.
     * @param {Touch} touch - The touch event object.
     * @param {Element} mainCanvasParent - The parent element of the main canvas.
     * @returns {number} - The X position of the touch event relative to the main canvas parent element.
     * @todo Check if this body calculations can potentially work incorrectly in the widget.
     */
    private getTouchXPosition;
}
