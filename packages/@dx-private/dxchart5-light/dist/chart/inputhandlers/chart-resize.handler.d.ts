/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subject } from 'rxjs';
import { FullChartConfig } from '../chart.config';
import { CanvasModel } from '../model/canvas.model';
import EventBus from '../events/event-bus';
export type PickedDOMRect = Pick<DOMRect, 'x' | 'y' | 'width' | 'height'>;
/**
 * Tracks chart element size and emits events whenever it changes.
 */
export declare class ChartResizeHandler {
    private frameElement;
    private resizerElement;
    private bus;
    private canvasModels;
    private config?;
    private elementResizeDetector;
    previousBCR: PickedDOMRect | undefined;
    private animFrameId;
    canvasResized: Subject<PickedDOMRect>;
    constructor(frameElement: HTMLElement, resizerElement: HTMLElement, bus: EventBus, canvasModels: CanvasModel[], config?: FullChartConfig | undefined);
    /**
     * Subscribe to resize events
     * Use it to update chart animations.
     * TODO activate / deactivate cycle
     */
    subscribeResize(): void;
    /**
     * Handles the resize event by throttling the animation frame and firing updates.
     * @private
     * @function
     * @returns {void}
     */
    private handleResize;
    /**
     * Updates the canvas models and fires events if the bounding client rectangle of the resizer element has changed.
     * @function
     * @name fireUpdates
     * @memberof ClassName
     * @returns {void}
     */
    fireUpdates(): void;
    /**
     * Checks if the dimensions of two PickedDOMRect objects are different.
     * @param {PickedDOMRect} previousBCR - The previous bounding client rectangle.
     * @param {PickedDOMRect} newBCR - The new bounding client rectangle.
     * @returns {boolean} - Returns true if the dimensions are different, false otherwise.
     */
    private isBCRDimensionsDiffer;
    /**
     * Unsubscribes from the element resize detector to stop updating the chart animation.
     * @function
     * @name unsubscribeAnimationUpdate
     * @memberof ChartResizeHandler
     * @instance
     * @returns {void}
     */
    unsubscribeAnimationUpdate(): void;
    /**
     * Checks if the canvas has been resized by comparing the previous bounding client rect with the current one.
     * @returns {boolean} - Returns true if the canvas has been resized, false otherwise.
     */
    wasResized(): boolean;
}
