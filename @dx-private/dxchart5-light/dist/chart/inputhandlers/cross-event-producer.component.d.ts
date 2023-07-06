/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subscription, Subject } from 'rxjs';
import { CanvasBoundsContainer, HitBoundsTest, HitBoundsTestOptionsPartial } from '../canvas/canvas-bounds-container';
import EventBus from '../events/event-bus';
import { ChartBaseElement } from '../model/chart-base-element';
import { CanvasInputListenerComponent } from '../inputlisteners/canvas-input-listener.component';
export type CrossEvent = [number, number, string];
export declare class CrossEventProducerComponent extends ChartBaseElement {
    private eventBus;
    private canvasInputListener;
    private canvasBoundsContainer;
    panesSubscriptions: Partial<Record<string, Subscription>>;
    cross: Subject<CrossEvent | null>;
    constructor(eventBus: EventBus, canvasInputListener: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer);
    protected doActivate(): void;
    /**
     * Unsubscribes from the mouse over event for a specific pane.
     * @param {string} uuid - The unique identifier of the pane.
     * @returns {void}
     */
    unsubscribeMouseOver(uuid: string): void;
    /**
     * Subscribes to mouse over event on canvas elements.
     * @param {string} uuid - Unique identifier for the subscription.
     * @param {string[]} canvasElementNames - Array of canvas element names to subscribe to.
     * @param {HitBoundsTestOptionsPartial} [options] - Optional hit bounds test options.
     * @returns {Subscription} - Returns a subscription object.
     */
    subscribeMouseOver(uuid: string, canvasElementNames: string[], options?: HitBoundsTestOptionsPartial): Subscription;
    /**
     * Subscribes to mouse over event on a hit test area identified by uuid.
     * @param {string} uuid - The unique identifier of the hit test area.
     * @param {HitBoundsTest} hitTest - The hit test area.
     * @returns {Subscription} - The subscription object.
     */
    subscribeMouseOverHT(uuid: string, hitTest: HitBoundsTest): Subscription;
}
