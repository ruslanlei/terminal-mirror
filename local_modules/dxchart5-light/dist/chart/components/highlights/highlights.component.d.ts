/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../chart.config';
import { Highlight } from './hightlights.model';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CanvasModel } from '../../drawers/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import { ChartBaseElement } from '../../chart-base-element';
import { ChartModel } from '../chart/chart.model';
import EventBus from '../../event-bus';
export declare class HighlightsComponent extends ChartBaseElement {
    private eventBus;
    private config;
    private readonly highlightsModel;
    private highLightsDrawer;
    constructor(eventBus: EventBus, config: FullChartConfig, chartModel: ChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager);
    /**
     * Returns the highlights from the highlightsModel
     * @returns {Array} An array of highlights
     */
    getHighlights(): Highlight[];
    /**
     * Sets the highlights of the highlights model.
     * @param {Highlight[]} highlights - An array of Highlight objects to be set as the highlights of the model.
     * @returns {void}
     */
    setHighlights(highlights: Highlight[]): void;
    /**
     * Sets the visibility of the highlights component.
     * @param {boolean} visible - A boolean value indicating whether the highlights should be visible or not. Default value is true.
     * @returns {void}
     */
    setHighlightsVisible(visible?: boolean): void;
    /**
     * Returns an observable that emits when the highlights are updated.
     * @returns {Observable} An observable that emits when the highlights are updated.
     */
    observeHighlightsUpdated(): import("rxjs").Observable<Highlight[]>;
}
