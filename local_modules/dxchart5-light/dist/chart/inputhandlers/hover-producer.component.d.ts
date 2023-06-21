/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../canvas/canvas-bounds-container';
import { FullChartConfig } from '../chart.config';
import { ChartBaseElement } from '../model/chart-base-element';
import { ChartModel } from '../components/chart/chart.model';
import { PaneManager } from '../components/pane/pane-manager.component';
import EventBus from '../events/event-bus';
import { CanvasInputListenerComponent } from '../inputlisteners/canvas-input-listener.component';
import { CandleHover, CandleHoverProducerPart } from '../model/candle-hover';
import { CompareSeriesHover, CompareSeriesHoverProducerPart } from '../model/compare-series-hover';
import { ScaleModel } from '../model/scale.model';
import VisualCandle from '../model/visual-candle';
import { DateTimeFormatter } from '../model/date-time.formatter';
import { CrossEvent, CrossEventProducerComponent } from './cross-event-producer.component';
export interface BaseHover {
    readonly x: number;
    readonly y: number;
    readonly timestamp: number;
    readonly timeFormatted: string;
}
export interface HoverParts {
    readonly candleHover: CandleHover | undefined;
    readonly compareSeriesHover: CompareSeriesHover[];
    [key: string]: unknown;
}
export interface Hover extends BaseHover, HoverParts {
}
export interface HoverProducerPart<T = unknown> {
    getData(hover: BaseHover): T;
}
export interface HoverProducerParts {
    candleHover: CandleHoverProducerPart;
    compareSeriesHover: CompareSeriesHoverProducerPart;
    [key: string]: HoverProducerPart;
}
/**
 * Produces the Hover event.
 * Hover is used for cross tool and any other mouse over functionality.
 */
export declare class HoverProducerComponent extends ChartBaseElement {
    private crossEventProducer;
    private bus;
    private scaleModel;
    private config;
    private chartModel;
    private canvasInputListener;
    private timeFormatterProvider;
    private canvasBoundsContainer;
    private paneManager;
    lastHover?: Hover;
    private lastCross?;
    private longTouchActivated;
    private hoverProducerParts;
    constructor(crossEventProducer: CrossEventProducerComponent, bus: EventBus, scaleModel: ScaleModel, config: FullChartConfig, chartModel: ChartModel, canvasInputListener: CanvasInputListenerComponent, timeFormatterProvider: () => DateTimeFormatter, canvasBoundsContainer: CanvasBoundsContainer, paneManager: PaneManager);
    /**
     * This method is responsible for activating the chart hover functionality. It subscribes to several observables to
     * update the hover when the chart is updated or when the user interacts with it. It also handles special behavior
     * for mobile devices, such as disabling panning and showing the cross tool on long touch.
     *
     * @protected
     * @memberof ChartHover
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Creates a hover object from a VisualCandle object.
     * @param {VisualCandle} candle - The VisualCandle object to create the hover from.
     * @returns {Hover | undefined} - The created hover object or undefined if the input is invalid.
     */
    private createHoverFromCandle;
    /**
     * Creates a hover object based on the provided x and y coordinates.
     * @param {number} x - The x coordinate of the hover.
     * @param {number} y - The y coordinate of the hover.
     * @returns {Hover | undefined} - The hover object or undefined if there are no candles in the chart model.
     * @todo Check if uuid is still useful here.
     */
    private createHover;
    /**
     * Creates a hover from a VisualCandle object and fires it.
     * @param {VisualCandle} candle - The VisualCandle object to create the hover from.
     * @param {boolean} [showCrossTool=true] - Optional parameter to show the cross tool in the hover.
     */
    createAndFireHoverFromCandle(candle: VisualCandle, showCrossTool?: boolean): void;
    /**
     * Update current hover using a VisualCandle and fires it.
     * @param {VisualCandle} candle - The VisualCandle object to create the hover from.
     */
    updateHover(candle: VisualCandle): void;
    /**
     * Creates a hover element at the specified coordinates and fires it with the option to show the cross tool
     * @param {CrossEvent} [x,y] - The coordinates where the hover element will be created
     * @param {boolean} [showCrossTool=true] - Whether to show the cross tool or not
     * @returns {void}
     */
    createAndFireHover([x, y]: CrossEvent, showCrossTool?: boolean): void;
    /**
     * Private method that handles the hover event. If a hover event is provided, it sets the last hover to the provided hover.
     * If the device is mobile and the cross tool type is not 'none', it sets the active candle to the hovered candle only when a long tap is detected.
     * The showCrossToolOverride is set to true only when a long tap is detected on mobile devices, otherwise it is set to the value of showCrossTool parameter.
     * Finally, it fires the EVENT_HOVER event with the provided hover and showCrossToolOverride.
     * If no hover event is provided, it fires the EVENT_CLOSE_HOVER event.
     *
     * @param {Hover} [hover] - The hover event to handle.
     * @param {boolean} [showCrossTool=true] - A boolean value indicating whether to show the cross tool or not.
     * @returns {void}
     */
    private fireHover;
    /**
     * Fires the last hover update if there is a last cross.
     * @param {boolean} showCrossTool - Whether to show the cross tool or not. Default is true.
     */
    fireLastCross(showCrossTool?: boolean): void;
    /**
     * Registers a hover producer part with the given id.
     *
     * @param {string} id - The id of the hover producer part.
     * @param {HoverProducerPart} hoverProducerPart - The hover producer part to register.
     * @returns {void}
     */
    registerHoverProducerPart(id: string, hoverProducerPart: HoverProducerPart): void;
    /**
     * Removes a hover producer part from the hoverProducerParts object.
     * @param {string} id - The id of the hover producer part to be removed.
     * @returns {void}
     */
    unregisterHoverProducerPart(id: string): void;
}
