/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartBaseElement } from '../chart-base-element';
import { CanvasInputListenerComponent } from '../inputlisteners/canvas-input-listener.component';
import { ScaleModel } from '../model/scale.model';
/**
 * Handles chart touch events.
 */
export declare class MainCanvasTouchHandler extends ChartBaseElement {
    private scaleModel;
    private canvasInputListeners;
    private mainCanvasParent;
    private touchedCandleIndexes;
    constructor(scaleModel: ScaleModel, canvasInputListeners: CanvasInputListenerComponent, mainCanvasParent: Element);
    /**
     * Activates canvas input listeners for touch start and touch move events.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Handles the touch start event.
     * @param {TouchEvent} e - The touch event.
     * @returns {void}
     */
    private handleTouchStartEvent;
    /**
     * Handles touch move event
     * @param {TouchEvent} e - The touch event object
     * @returns {void}
     
    private handleTouchMoveEvent(e: TouchEvent): void {
        if (e.touches.length === 2) {
            this.pinchHandler(this.touchedCandleIndexes, this.getXPositions(e));
        }
    }*/
    private handleTouchMoveEvent;
    /**
     * Gets candle positions touched by user in pixels.
     * @param e - touch event with "touches" array
     * @return Array<number> - X coordinates of touches on the canvas
     */
    private getXPositions;
    /**
     * Handles the pinch gesture on the chart.
     * @param {Array<number>} candleIndexes - An array of two numbers representing the indexes of the first and last visible candles on the chart.
     * @param {number[]} touchPositions - An array of two numbers representing the touch positions on the screen.
     * @returns {void}
     */
    pinchHandler(candleIndexes: Array<number>, touchPositions: number[]): void;
}
