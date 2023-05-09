/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable, Subject } from 'rxjs';
import { Bounds } from '../../common/common-types';
import { CursorType, FullChartConfig } from '../chart.config';
import { ChartBaseElement } from '../chart-base-element';
import { CanvasInputListenerComponent } from '../inputlisteners/canvas-input-listener.component';
import { CanvasBoundsContainer, HitBoundsTest } from './canvas-bounds-container';
import { HitTestCanvasModel } from '../model/hit-test-canvas.model';
interface HitTestCursor {
    cursor: CursorType;
    hitTest: HitBoundsTest;
}
/**
 * @doc-tags chart-core,cursor
 */
export declare class CursorHandler extends ChartBaseElement {
    private element;
    private canvasInputListener;
    private canvasBoundsContainer;
    private chartConfig;
    private hitTestCanvasModel;
    normalLayer: Map<string, HitTestCursor>;
    extensionLayer: Map<string, HitTestCursor>;
    cursorChangedSubject: Subject<string>;
    constructor(element: HTMLElement, canvasInputListener: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer, chartConfig: FullChartConfig, hitTestCanvasModel: HitTestCanvasModel);
    /**
     * This method is called when the user activates the canvas. It subscribes to the mouse move event and checks if the mouse pointer is over any of the elements in the normalLayer or extensionLayer. If the mouse pointer is over any of the elements, it updates the cursor to the corresponding cursor of the element.
     */
    protected doActivate(): void;
    /***
     * @param elId
     * @param bounds
     * @param cursorType
     * @param extension is an extra area beyond the borders of the bounds
     */
    setCursorTypeForBounds(elId: string, bounds: Bounds, cursorType: CursorType, extension?: number): void;
    /**
     * Adds a cursor for a canvas element
     * @param {string} canvasEl - The canvas element to add the cursor to
     * @param {CursorType} cursor - The type of cursor to add
     * @param {number} [extensionRadius] - The extension radius of the cursor
     */
    addCursorForCanvasEl(canvasEl: string, cursor: CursorType, extensionRadius?: number): void;
    /**
     * Removes the cursor for a given canvas element.
     *
     * @param {string} canvasEl - The canvas element to remove the cursor from.
     * @returns {void}
     */
    removeCursorForCanvasEl(canvasEl: string): void;
    /**
     * Returns an Observable that emits the latest CursorType value whenever the cursorChangedSubject emits a new value.
     * The emitted value is guaranteed to be distinct from the previous one.
     * @returns {Observable<CursorType>} An Observable that emits the latest CursorType value.
     */
    observeCursorChanged(): Observable<CursorType>;
    /**
     * Sets the cursor type for a given canvas element and optionally extends the hit test area.
     * @param {string} canvasElement - The ID of the canvas element to observe.
     * @param {CursorType} cursorType - The type of cursor to set.
     * @param {number} [extensionY] - Optional extension of the hit test area in the Y axis.
     * @returns {void}
     */
    private observeCursorType;
    /**
     * Updates the cursor type of an element based on the mouse enter or leave event.
     * @param {CursorType} cursorType - The type of cursor to be set on the element.
     * @returns {void}
     *
     * If enter is true, the cursor type is set to the provided cursorType.
     *
     * If enter is false, the cursor type is reset to the default cursor type of the chart if it matches the provided cursorType. The cursorChangedSubject is also updated with the new cursor type.
     */
    updateCursor(cursorType: CursorType): void;
    /**
     * Toggles the volumes mode.
     * @param {boolean} separate - If true, it observes the cursor type of the volumes element and the volumes resizer element. If false, it deletes the volumes element and the volumes resizer element.
     * @returns {void}
     */
    toggleVolumesMode(separate: boolean): void;
}
export {};
