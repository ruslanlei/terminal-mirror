/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { BehaviorSubject } from 'rxjs';
import { ChartBaseElement } from '../../model/chart-base-element';
import { CanvasModel } from '../../model/canvas.model';
import { Point } from '../../inputlisteners/canvas-input-listener.component';
import { HitTestSubscriber } from '../../model/hit-test-canvas.model';
export declare class EventsModel extends ChartBaseElement implements HitTestSubscriber {
    private canvasModel;
    events: EventWithId[];
    hoveredEvent: BehaviorSubject<EventWithId | null>;
    constructor(canvasModel: CanvasModel);
    /**
     * Sets the events array of the object to the provided array of events after indexing them.
     * @param {Event[]} events - An array of events to be set as the events array of the object.
     * @returns {void}
     */
    setEvents(events: Event[]): void;
    /**
     * Private method to index events with unique ids and sort them by timestamp
     * @param {Event[]} events - Array of events to be indexed
     * @returns {EventWithId[]} - Array of indexed events with unique ids
     */
    private indexEvents;
    /**
     * Returns an array of two numbers representing the range of IDs for event hit tests.
     * @returns {Array<number>} An array of two numbers representing the range of IDs for event hit tests.
     */
    getIdRange(): [number, number];
    /**
     * Returns the event with the specified id.
     * @param {number} id - The id of the event to look up.
     * @returns {EventWithId} - The event with the specified id.
     */
    lookup(id: number): EventWithId;
    /**
     * Function that handles the hover event on a canvas element.
     * @param {EventWithId} event - The event that is being hovered.
     * @param {Point} [point] - The point where the event is being hovered.
     * @returns {void}
     */
    onHover(event: EventWithId, point?: Point): void;
    /**
     * Handles the touch start event.
     *
     * @param {EventWithId} event - The touch start event.
     * @param {Point} [point] - The point where the touch started.
     * @returns {void}
     */
    onTouchStart(event: EventWithId, point?: Point): void;
}
export type EventType = 'earnings' | 'dividends' | 'splits' | 'conference-calls';
export type EventWithId = Event & {
    id: number;
    point?: Point;
};
export interface Event {
    type: EventType;
    timestamp: number;
    style: 'rhombus' | 'rhombus-small' | 'rhombus-large';
}
