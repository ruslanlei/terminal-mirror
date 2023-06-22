/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { EVENT_CLOSE_HOVER, EVENT_CROSS, EVENT_DRAW, EVENT_HOVER, EVENT_RESIZED } from './events';
import { Observable } from 'rxjs';
import { Hover } from '../inputhandlers/hover-producer.component';
export interface EventBusFireAsync {
    (type: typeof EVENT_RESIZED, event?: ClientRect | DOMRect): number | void;
    (type: string, event?: string): number | void;
    (type: string, event?: string): number | void;
}
export interface EventBusFire {
    (type: typeof EVENT_RESIZED, event?: ClientRect | DOMRect): number | void;
    (type: typeof EVENT_HOVER, fn: (hover: Hover) => void): void;
    (type: string, ...args: unknown[]): void;
}
export interface EventBusOn {
    (type: typeof EVENT_RESIZED, fn: (bcr?: DOMRect) => void): () => void;
    (type: typeof EVENT_HOVER, fn: (hover: Hover, showCrossTool: boolean) => void): () => void;
    (type: typeof EVENT_CLOSE_HOVER, fn: () => void): () => void;
    (type: typeof EVENT_DRAW, fn: (canvasIds: Array<string>) => void): () => void;
    (type: typeof EVENT_CROSS, fn: (data: [number, number]) => void): () => void;
    (type: string, fn: (...args: unknown[]) => void): () => void;
}
/**
 * Event bus for chart.
 * @doc-tags components-components
 */
export default class EventBus {
    private UNKNOWN_ARR;
    /** Registered event handlers. */
    private handlers;
    /** State which can enable / disable events processing. */
    private muted;
    constructor();
    /**
     * Triggers the draw event for the specified canvas IDs.
     * @param {Array<string>} canvasIds - An optional array of canvas IDs to trigger the draw event for.
     */
    fireDraw(canvasIds?: Array<string>): void;
    unsub: (type: string, fn: (...args: any[]) => void) => void;
    add: (method: (...args: unknown[]) => void, type: string, fn: (...args: any[]) => void) => () => void;
    on: EventBusOn;
    observe: (type: string) => Observable<any>;
    onPrior: (type: string, fn: (...args: any[]) => void) => () => void;
    off: (type: string, fn: (...args: any[]) => void) => void;
    fire: EventBusFire;
    fireAsync: EventBusFireAsync;
    setMuted: (val: boolean) => void;
    types: {
        CROSS: "cross";
        /**
         * event telling that the cursor in specific position on this axis
         *
         * @event HOVER
         * @param {Object}
         * @property {Number} x, position in pixels
         * @property {Number}  y position in pixels
         * @property {Number}  xValue - candle.timestamp
         * @property {Number}  yValue - ChartModel.fromY y price value
         * @property {Candle}  candle
         * @property {ChartModel} model
         *
         */
        HOVER: "event_hover";
        /**
         * hover is closed
         * @event CLOSE_HOVER
         */
        CLOSE_HOVER: "closeHover";
        /**
         * fired when chart has been resized and resize process is finished
         * @event RESIZED
         * */
        RESIZED: "resized_local";
        CHART_DOUBLE_CLICK: "chart_double_click";
    };
    clear: () => void;
}
