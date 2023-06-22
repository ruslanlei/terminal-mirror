/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable } from 'rxjs';
import { CanvasBoundsContainer } from '../canvas/canvas-bounds-container';
import { CursorType, FullChartConfig } from '../chart.config';
import { CanvasModel } from './canvas.model';
import { DrawingManager } from '../drawers/drawing-manager';
import EventBus from '../events/event-bus';
import { CanvasInputListenerComponent, Point } from '../inputlisteners/canvas-input-listener.component';
export type HitTestEvents = 'mousedown' | 'hover' | 'touchstart' | 'dblclick' | 'contextmenu' | 'zoom';
type HitTestType = 'DRAWINGS' | 'DATA_SERIES' | 'EVENTS' | 'NEWS';
export declare const HIT_TEST_ID_RANGE: Record<HitTestType, [number, number]>;
/** HitTestCanvasModel
 * Canvas layer for testing mouse events over the models such as Charts, Drawings, Volumes and etc.
 * !!! always add new drawers to hit-test drawingManager BEFORE the DrawerType.HIT_TEST_DRAWINGS to save the hierarchy
 *
 * @doc-tags chart-components,hit-test
 */
export declare class HitTestCanvasModel extends CanvasModel {
    private canvasInputListener;
    private canvasBoundsContainer;
    private hitTestSubscribers;
    private eventsSubscriptions;
    private hoverSubject;
    private touchStartSubject;
    private dblClickSubject;
    private rightClickSubject;
    constructor(eventBus: EventBus, canvas: HTMLCanvasElement, canvasInputListener: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager, chartConfig: FullChartConfig, canvasModels: CanvasModel[], resizer?: HTMLElement);
    /**
     * Enables HitTestCanvasModel events listeners.
     */
    enableUserControls(): void;
    /**
     * Disables HitTestCanvasModel events listeners.
     */
    disableUserControls(): void;
    /**
     * Adds a new subscriber to the list of hit test subscribers.
     * @param {HitTestSubscriber<unknown>} subscriber - The subscriber to be added.
     * @returns {void}
     */
    addSubscriber(subscriber: HitTestSubscriber<unknown>): void;
    /**
     * Removes a subscriber from the list of hit test subscribers.
     *
     * @param {HitTestSubscriber<unknown>} subscriber - The subscriber to be removed.
     * @returns {void}
     */
    removeSubscriber(subscriber: HitTestSubscriber<unknown>): void;
    /**
     * Converts a number to a hexadecimal color code.
     * @param {number} id - The number to be converted.
     * @returns {string} - The hexadecimal color code.
     */
    idToColor(id: number): string;
    /**
     * This function takes a number representing a color and returns the corresponding ID by dividing it by a big prime number.
     *
     * @param {number} color - The number representing the color.
     * @returns {number} - The ID corresponding to the color.
     */
    colorToId(color: number): number;
    /**
     * Observes hovered on element event, provides hovered element model when move in.
     */
    observeHoverOnElement(): Observable<HitTestEvent>;
    /**
     * Observes touch start on element event, provides element model.
     */
    observeTouchStartOnElement(): Observable<HitTestEvent>;
    /**
     * Observes dblclicked on element event, provides dblclicked element model.
     */
    observeDblClickOnElement(): Observable<HitTestEvent>;
    /**
     * Observes rightclicked on element event, provides rightclicked element model.
     */
    observeRightClickOnElement(): Observable<HitTestEvent>;
    private curImgData;
    private prevAnimationFrameId;
    /**
     * Retrieves the pixel data at the specified coordinates.
     *
     * @private
     * @param {number} x - The x-coordinate of the pixel.
     * @param {number} y - The y-coordinate of the pixel.
     * @returns {Uint8ClampedArray} - The pixel data at the specified coordinates.
     */
    private getPixel;
    /**
     * Resolves cursor type based on the provided point
     * @param point - The point for which to resolve cursor type
     * @returns - The resolved cursor type, if any
     */
    resolveCursor(point: Point): CursorType | undefined;
    /**
     * Private method that handles hit test events.
     * @param {Point} point - The point where the event occurred.
     * @param {HitTestEvents} event - The type of event that occurred.
     * @returns {void}
     */
    private eventHandler;
}
export interface HitTestSubscriber<T extends unknown = unknown> {
    getIdRange(): [number, number];
    lookup(id: number): T | undefined;
    onMouseDown?(model: T | null, point?: Point): void;
    onHover?(model: T | null, point?: Point): void;
    onTouchStart?(model: T | null, point?: Point): void;
    onDblClick?(model: T, point?: Point): void;
    onRightClick?(model: T, point?: Point): void;
    onZoom?(model: T, point?: Point): void;
    resolveCursor?(point: Point, model?: T): CursorType | undefined;
}
export interface HitTestEvent<T = unknown> {
    readonly point: Point;
    readonly model: T;
}
export {};
