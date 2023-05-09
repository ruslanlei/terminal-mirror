/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartConfigComponentsCrossTool } from '../../chart.config';
import { ChartBaseElement } from '../../chart-base-element';
import EventBus from '../../event-bus';
import { CanvasModel } from '../../drawers/canvas.model';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { TimeZoneModel } from '../../model/time-zone.model';
import { DateTimeFormatter } from '../../time.formatter';
import { ChartModel } from '../chart/chart.model';
export type CrossToolType = 'cross-and-labels' | 'only-labels' | 'none' | string;
export interface CrossToolHover {
    x: number;
    y: number;
    time: string;
}
export declare class CrossToolModel extends ChartBaseElement {
    private eventBus;
    private config;
    private crossToolCanvasModel;
    private canvasInputListener;
    private chartModel;
    private timeZoneModel;
    private formatterFactory;
    currentHover: CrossToolHover | null;
    type: CrossToolType;
    xFormatter: DateTimeFormatter;
    constructor(eventBus: EventBus, config: Required<ChartConfigComponentsCrossTool>, crossToolCanvasModel: CanvasModel, canvasInputListener: CanvasInputListenerComponent, chartModel: ChartModel, timeZoneModel: TimeZoneModel, formatterFactory: (format: string) => (timestamp: number | Date) => string);
    /**
     * Sets the type of the CrossTool object.
     *
     * @param {CrossToolType} type - The type of the CrossTool object.
     * @returns {void}
     */
    setType(type: CrossToolType): void;
    /**
     * Method to activate the cross tool.
     * It subscribes to the canvasInputListener's mouse move event and fires the draw event.
     * It also subscribes to the eventBus's hover and close hover events and updates the hover and fires the draw event accordingly.
     * It also subscribes to the chartModel's candlesSetSubject and timeZoneModel's observeTimeZoneChanged events and recalculates the cross tool X formatter.
     */
    protected doActivate(): void;
    /**
     * This method is used to fire the draw event of the crossToolCanvasModel if the type is not 'none'.
     * @private
     */
    private fireDraw;
    /**
     * Updates the current hover position with the provided hover object.
     * @param {Object} hover - The hover object containing the x and y coordinates and time formatted.
     * @param {number} hover.x - The x coordinate of the hover.
     * @param {number} hover.y - The y coordinate of the hover.
     * @param {string} hover.timeFormatted - The formatted time of the hover.
     * @param {Object} hover.candleHover - The candle hover object containing the open, close, high, low and closestOHLCY coordinates.
     * @param {number} hover.candleHover.openY - The y coordinate of the open price of the candle.
     * @param {number} hover.candleHover.closeY - The y coordinate of the close price of the candle.
     * @param {number} hover.candleHover.highY - The y coordinate of the high price of the candle.
     * @param {number} hover.candleHover.lowY - The y coordinate of the low price of the candle.
     * @param {number} hover.candleHover.closestOHLCY - The y coordinate of the closest OHLC price of the candle.
     * @returns {void}
     */
    private updateHover;
    /**
     * Recalculates the cross tool X formatter.
     * @function
     * @private
     * @returns {void}
     */
    private recalculateCrossToolXFormatter;
}
