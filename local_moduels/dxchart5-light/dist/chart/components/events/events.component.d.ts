/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable } from 'rxjs';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CursorHandler } from '../../canvas/cursor.handler';
import { FullChartConfig } from '../../chart.config';
import { ChartBaseElement } from '../../chart-base-element';
import { CanvasModel } from '../../drawers/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import { HitTestCanvasModel } from '../../model/hit-test-canvas.model';
import { DateTimeFormatterFactory } from '../../time.formatter';
import { ChartModel } from '../chart/chart.model';
import { Event, EventsModel, EventType, EventWithId } from './events.model';
export declare class EventsComponent extends ChartBaseElement {
    private config;
    private canvasModel;
    private canvasBoundsContainer;
    private drawingManager;
    private formatterFactory;
    eventsModel: EventsModel;
    private eventsXAxisLabelFormatterProvider;
    constructor(config: FullChartConfig, canvasModel: CanvasModel, hitTestCanvasModel: HitTestCanvasModel, chartModel: ChartModel, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager, formatterFactory: DateTimeFormatterFactory, cursorHandler: CursorHandler, backgroundCanvasModel: CanvasModel);
    /**
     * Sets the new event list.
     * @param events
     */
    setEvents(events: Event[]): void;
    /**
     * Changes the component visibility.
     * @param visible
     */
    setVisible(visible: boolean): void;
    /**
     * Changes visibility for the specific event type.
     * For example, to turn off dividends visibility you can call this method with { dividends: false } argument
     */
    setEventTypeVisible(eventsVisibility: Partial<Record<EventType, boolean>>): void;
    /**
     * Observes hovered event when mouse moves in, and provides null when mouse moves out.
     */
    observeEventHovered(): Observable<EventWithId | null>;
}
