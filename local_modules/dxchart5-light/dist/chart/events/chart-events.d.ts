/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import ChartContainer from '../chart-container';
import { Hover } from '../inputhandlers/hover-producer.component';
import { Unsubscriber } from '../utils/function.utils';
/**
 * List of public API events in chart-core.
 * @doc-tags api
 */
export declare class ChartEvents {
    private chart;
    constructor(chart: ChartContainer);
    /**
     * Hover event is triggered when moving mouse over candles.
     * @param listener
     */
    addMouseHoverListener(listener: (hover: Hover) => void): Unsubscriber;
    /**
     * When mouse leaves CHART bounds - this event is triggered.
     * @param listener
     */
    addMouseCloseHoverListener(listener: () => void): Unsubscriber;
    /**
     * On each DRAW event. Should be used very carefully, since there can be more DRAW events than animation frames.
     * @param listener
     */
    addRedrawListener(listener: () => void): Unsubscriber;
    /**
     * Fires when canvas is resized.
     * @param listener
     */
    addResizeListener(listener: () => void): Unsubscriber;
    /**
     * Fires when Y axis is right-clicked.
     * @param listener
     */
    addYAxisContextMenuClickListener(listener: (event: MouseEvent) => void): Unsubscriber;
    /**
     * Fires when Y axis is double-clicked.
     * @param listener
     */
    addYAxisDoubleClickListener(listener: () => void): Unsubscriber;
}
