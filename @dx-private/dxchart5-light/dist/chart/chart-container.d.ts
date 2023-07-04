/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import EventBus from './events/event-bus';
import { FullChartConfig } from './chart.config';
import { ChartEvents } from './events/chart-events';
import { CanvasInputListenerComponent } from './inputlisteners/canvas-input-listener.component';
import { CanvasBoundsContainer } from './canvas/canvas-bounds-container';
/**
 * Abstraction over ChartBootstrap and PL chart.
 */
export default interface ChartContainer {
    bus: EventBus;
    events: ChartEvents;
    config: FullChartConfig;
    canvasInputListener: CanvasInputListenerComponent;
    canvasBoundsContainer: CanvasBoundsContainer;
}
