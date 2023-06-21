/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import EventBus from '../events/event-bus';
import { Observable, Subject } from 'rxjs';
import { ChartBaseElement } from '../model/chart-base-element';
import { HitBoundsTest } from '../canvas/canvas-bounds-container';
import { Bounds } from '../model/bounds.model';
type CustomMouseEvent = MouseEvent | TouchEvent;
/**
 * Gathers user input on canvas element:
 * Chart update order should be following:
 * 1. update currentPoints
 * 2. fire drag, so chart scale is updated if dragged
 * 3. fire cross - it should have updated chart coordinates
 * - mouse drag X / Y
 * - zooming (wheel event)
 * - touch start and move
 */
export declare class CanvasInputListenerComponent extends ChartBaseElement {
    private eventBus;
    private element;
    static DRAG_START_EVENTS: readonly ["mousedown", "touchstart"];
    static DRAG_EVENTS: readonly ["mousemove", "touchmove"];
    static DRAG_END_EVENTS: string[];
    private xDragStartSubject;
    private xDragSubject;
    private xDragTickSubject;
    private xDragEndSubject;
    private yDragStartSubject;
    private yDragSubject;
    private yDragTickSubject;
    private yDragEndSubject;
    private mouseMoveSubject;
    private mouseMoveDocumentSubject;
    private clickSubject;
    private clickDocumentSubject;
    private dbClickSubject;
    private mouseDownSubject;
    private mouseUpSubject;
    private mouseUpDocumentSubject;
    private wheelSubject;
    private touchStartSubject;
    private touchMoveSubject;
    private touchEndSubject;
    private touchCancelSubject;
    private contextMenuSubject;
    private longTouchSubject;
    private pinchSubject;
    private scrollGestureSubject;
    mouseLeavesCanvasSubject: Subject<boolean>;
    dragStartPoint: Point;
    prevDragPoint: Point;
    currentPoint: Point;
    currentPointDocument: Point;
    dragging: boolean;
    dragStartEvent?: CustomMouseEvent;
    canvasBounds: Bounds;
    constructor(eventBus: EventBus, element: HTMLElement);
    private documentDragListeners;
    private dragProcessListener;
    private dragStartListener;
    /**
     * This methods allows change scale, only if dragging using primary mouse button or touch.
     * @param e
     */
    private isDraggable;
    /**
     * This methods allows you to start dragging programmatically
     * @param e
     */
    startDragging(e: CustomMouseEvent): void;
    /**
     * This methods allows you to move mouse pointer programmatically
     * @param e
     */
    movePointer(e: CustomMouseEvent): void;
    /**
     * This methods allows you to stop dragging programmatically
     */
    stopDragging(): void;
    private dragListener;
    private updateElementOffsetListener;
    private dragEndListener;
    private clickHandler;
    /**
     * Prevents text selection inside chart-core canvas. TODO Do we need it?
     */
    private fixTextSelection;
    doActivate(): void;
    /**
     * Returns the current mouse point.
     *
     * @returns {Point} The current mouse point.
     */
    getCurrentMousePoint(): Point;
    /**
     * Private method that tracks the mouse position by adding event listeners for drag events on the document.
     * The event listeners are added on the capture phase to ensure that every other listener gets an actual state for current points.
     * The method also adds a subscription to remove the event listeners when they are no longer needed.
     */
    private trackMousePosition;
    private updateCurrentPoints;
    /**
     * Updates the current point of the document based on the provided event.
     * @param {CustomMouseEvent} e - The event that triggered the update.
     * @returns {void}
     */
    private updateCurrentDocumentPoint;
    /**
     * Updates the current mouse point based on the provided CustomMouseEvent.
     * @param {CustomMouseEvent} e - The CustomMouseEvent object containing the mouse/touch coordinates.
     * @returns {void}
     * @private
     */
    private updateCurrentMousePoint;
    /**
     * Creates a new object with the same properties as the provided Point object.
     * @param {Point} point - The Point object to be copied.
     * @returns {Object} - A new object with the same properties as the provided Point object.
     * @private
     * @static
     */
    private static copyPoint;
    /**
     * This method allows to observe mouse move events only in specific areas.
     * @param {HitBoundsTest} hitBoundsTest - A function that takes x and y coordinates as arguments and returns a boolean value indicating whether the event should be observed or not.
     * @returns {Observable<Point>} - An observable that emits a Point object whenever a mouse move event occurs within the specified area.
     */
    observeMouseMove(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an Observable that emits the mouse move events only if the user is not dragging.
     * @returns {Observable<Point>} An Observable that emits the mouse move events.
     */
    observeMouseMoveNoDrag(): Observable<Point>;
    /**
     * Observes any element hover in all document not only <canvas>
     * @param hitBoundsTest
     * @return point position in chart
     */
    observeMouseMoveDocument(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Observes any element hover in all document not only <canvas>
     * @param hitBoundsTest
     * @return absolute point position in document
     */
    observeMouseMoveDocumentAnyElement(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an Observable that emits an Event object whenever a click event occurs on the document.
     * The Observable is created from a Subject that emits the click event.
     * @returns {Observable<Event>} An Observable that emits an Event object whenever a click event occurs on the document.
     */
    observeClickOnDocument(): Observable<Event>;
    /**
     * Returns observable which contains point position relative to chart canvas. (not document point!)
     * @param hitBoundsTest {HitBoundsTest}
     */
    observeXDragStart(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an Observable that emits the xDragSubject value if the hitBoundsTest function returns true for the currentPoint.
     * @param {HitBoundsTest} hitBoundsTest - A function that takes the currentPoint's x and y coordinates as arguments and returns a boolean value.
     * @returns {Observable<number>} - An Observable that emits the xDragSubject value if the hitBoundsTest function returns true for the currentPoint.
     */
    observeXDrag(hitBoundsTest?: HitBoundsTest): Observable<number>;
    /**
     * Returns an Observable that emits when the xDragEndSubject emits and the hitBoundsTest function returns true for the currentPoint.
     * @param {HitBoundsTest} [hitBoundsTest=() => true] - A function that takes the currentPoint's x and y coordinates as arguments and returns a boolean indicating whether the point is within the desired bounds.
     * @returns {Observable<void>} - An Observable that emits when the xDragEndSubject emits and the hitBoundsTest function returns true for the currentPoint.
     */
    observeXDragEnd(hitBoundsTest?: HitBoundsTest): Observable<void>;
    /**
     * Returns an Observable that emits a number every time a drag tick event occurs on the X axis.
     * The number emitted represents the current position of the drag on the X axis.
     * The Observable is created from a Subject that emits the drag tick events.
     * @returns {Observable<number>} An Observable that emits a number every time a drag tick event occurs on the X axis.
     */
    observeXDragTick(): Observable<number>;
    /**
     * Returns observable which contains point position relative to chart canvas. (not document point!)
     * @param hitBoundsTest {HitBoundsTest}
     */
    observeYDragStart(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an observable that emits the y-drag subject and filters it based on the hitBoundsTest function.
     * @param {HitBoundsTest} hitBoundsTest - A function that returns a boolean indicating whether the current point is within the bounds.
     * @returns {Observable<number>} - An observable that emits the y-drag subject.
     */
    observeYDrag(hitBoundsTest?: HitBoundsTest): Observable<number>;
    /**
     * Returns an Observable that emits when the yDragEndSubject emits and the hitBoundsTest function returns true for the currentPoint.
     * @param {HitBoundsTest} hitBoundsTest - A function that takes in the x and y coordinates of the currentPoint and returns a boolean indicating whether the point is within the bounds.
     * @returns {Observable<void>} - An Observable that emits when the yDragEndSubject emits and the hitBoundsTest function returns true for the currentPoint.
     */
    observeYDragEnd(hitBoundsTest?: HitBoundsTest): Observable<void>;
    /**
     * Returns an Observable that emits a number every time the yDragTickSubject emits a value.
     * The emitted value is the value emitted by the yDragTickSubject.
     * @returns {Observable<number>} An Observable that emits a number every time the yDragTickSubject emits a value.
     */
    observeYDragTick(): Observable<number>;
    /**
     * Returns an Observable that emits a boolean value when the mouse enters the canvas.
     * @param {HitBoundsTest} hitBoundsTest - A function that tests whether the mouse pointer is within the bounds of the canvas.
     * @param {boolean} skipWhenDragging - A flag that determines whether to skip the mouse enter event when the user is dragging.
     * @returns {Observable<boolean>} - An Observable that emits a boolean value when the mouse enters or leaves the canvas.
     */
    observeMouseEnter(hitBoundsTest?: HitBoundsTest, skipWhenDragging?: boolean): Observable<boolean>;
    /**
     * Returns an observable that emits a value when the mouse leaves the canvas.
     * @returns {Observable} An observable that emits a value when the mouse leaves the canvas.
     */
    observeMouseLeavesCanvas(): Observable<boolean>;
    /**
     * Returns an Observable that emits a Point object when the element is clicked within the bounds specified by the hitBoundsTest function.
     * @param {HitBoundsTest} hitBoundsTest - A function that takes the x and y coordinates of the click event and returns a boolean indicating whether the click is within the desired bounds.
     * @returns {Observable<Point>} - An Observable that emits a Point object when the element is clicked within the specified bounds.
     */
    observeClick(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an Observable that emits a Point object when a double click event occurs within the bounds of the current point.
     * @param {HitBoundsTest} [hitBoundsTest=() => true] - A function that tests if the double click event occurred within the bounds of the current point.
     * @returns {Observable<Point>} An Observable that emits a Point object when a double click event occurs within the bounds of the current point.
     */
    observeDbClick(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an Observable that emits WheelEvent objects when the wheelSubject emits a new value.
     * The emitted events are filtered by the hitBoundsTest function, which is passed as an optional parameter.
     * If the hitBoundsTest function is not provided, it defaults to a function that always returns true.
     * @param {HitBoundsTest} [hitBoundsTest=() => true] - A function that takes the currentPoint's x and y coordinates as arguments and returns a boolean value.
     * @returns {Observable<WheelEvent>} - An Observable that emits WheelEvent objects.
     */
    observeWheel(hitBoundsTest?: HitBoundsTest): Observable<WheelEvent>;
    /**
     * Returns an Observable that emits WheelEvent when a pinch event occurs and the hitBoundsTest function returns true for the current point.
     * @param {HitBoundsTest} hitBoundsTest - A function that takes the current point's x and y coordinates as arguments and returns a boolean indicating whether the point is within the desired bounds.
     * @returns {Observable<WheelEvent>} - An Observable that emits WheelEvent when a pinch event occurs and the hitBoundsTest function returns true for the current point.
     */
    observePinch(hitBoundsTest?: HitBoundsTest): Observable<WheelEvent>;
    /**
     * Returns an Observable that emits a WheelEvent whenever a scroll gesture is detected.
     * The Observable is created from a Subject that is subscribed to by the component's template.
     * @returns {Observable<WheelEvent>} An Observable that emits a WheelEvent whenever a scroll gesture is detected.
     */
    observeScrollGesture(): Observable<WheelEvent>;
    /**
     * Returns an Observable that emits TouchEvent when a touchstart event occurs within the bounds of the current point.
     * @param {HitBoundsTest} [hitBoundsTest=() => true] - A function that tests if the touch event occurred within the bounds of the current point.
     * @returns {Observable<TouchEvent>} - An Observable that emits TouchEvent when a touchstart event occurs within the bounds of the current point.
     */
    observeTouchStart(hitBoundsTest?: HitBoundsTest): Observable<TouchEvent>;
    /**
     * Returns an Observable that emits TouchEvent objects when the user moves their finger on the screen.
     * @param {HitBoundsTest} hitBoundsTest - A function that takes the x and y coordinates of the current touch point and returns a boolean indicating whether the touch is within the desired bounds.
     * @returns {Observable<TouchEvent>} - An Observable that emits TouchEvent objects when the user moves their finger on the screen within the specified bounds.
     */
    observeTouchMove(hitBoundsTest?: HitBoundsTest): Observable<TouchEvent>;
    /**
     * Returns an Observable that emits a TouchEvent when the touch end event occurs on the document.
     * The Observable is created from a Subject that is subscribed to the touchEndSubject.
     * @returns {Observable<TouchEvent>} An Observable that emits a TouchEvent when the touch end event occurs on the document.
     */
    observeTouchEndDocument(): Observable<TouchEvent>;
    /**
     * Returns an Observable that emits a TouchEvent when the touchcancel event is triggered on the document.
     * @return {Observable<TouchEvent>} An Observable that emits a TouchEvent when the touchcancel event is triggered on the document.
     */
    observeTouchCancelDocument(): Observable<TouchEvent>;
    /**
     * Returns an Observable that emits the Point object when the mouse button is pressed down within the bounds of the current point.
     * @param {HitBoundsTest} [hitBoundsTest=() => true] - A function that tests whether the mouse click is within the bounds of the current point.
     * @returns {Observable<Point>} - An Observable that emits the Point object when the mouse button is pressed down within the bounds of the current point.
     */
    observeMouseDown(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an Observable that emits the Point where the mouse button is released,
     * filtered by the hitBoundsTest function that determines if the currentPoint is within the bounds.
     * @param {HitBoundsTest} hitBoundsTest - A function that takes the x and y coordinates of the currentPoint and returns a boolean indicating if it is within the bounds.
     * @returns {Observable<Point>} - An Observable that emits the Point where the mouse button is released, filtered by the hitBoundsTest function.
     */
    observeMouseUp(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an Observable that emits the Point where the mouse button is released on the document.
     * @param {HitBoundsTest} hitBoundsTest - A function that returns a boolean indicating whether the mouseup event occurred within the bounds of the element.
     * @returns {Observable<Point>} - An Observable that emits the Point where the mouse button is released on the document.
     */
    observeMouseUpDocument(hitBoundsTest?: HitBoundsTest): Observable<Point>;
    /**
     * Returns an Observable that emits a MouseEvent when a context menu event is triggered and the mouse pointer is within the bounds of the element.
     * @param {HitBoundsTest} [hitBoundsTest=() => true] - A function that returns a boolean indicating whether the mouse pointer is within the bounds of the element.
     * @returns {Observable<MouseEvent>} - An Observable that emits a MouseEvent when a context menu event is triggered and the mouse pointer is within the bounds of the element.
     */
    observeContextMenu(hitBoundsTest?: HitBoundsTest): Observable<MouseEvent>;
    /**
     * Returns an Observable that emits a TouchEvent when a long touch is detected on the current element.
     * @param {HitBoundsTest} [hitBoundsTest=() => true] - A function that returns a boolean indicating whether the touch event occurred within the bounds of the current element.
     * @returns {Observable<TouchEvent>} - An Observable that emits a TouchEvent when a long touch is detected on the current element.
     */
    observeLongTouch(hitBoundsTest?: HitBoundsTest): Observable<TouchEvent>;
    /**
     * Returns the current point of the object.
     * @returns {Point} The current point of the object.
     */
    getCurrentPoint(): Point;
}
export interface Point {
    x: number;
    y: number;
}
export {};
