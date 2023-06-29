/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Drawer } from '../../drawers/drawing-manager';
import { HitTestCanvasModel } from '../../model/hit-test-canvas.model';
import { ChartModel } from '../chart/chart.model';
import { FullChartConfig } from '../../chart.config';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { EventsModel } from './events.model';
export declare class EventsHitTestDrawer implements Drawer {
    private hitTestCanvasModel;
    private chartModel;
    private config;
    private canvasBoundsContainer;
    private model;
    constructor(hitTestCanvasModel: HitTestCanvasModel, chartModel: ChartModel, config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer, model: EventsModel);
    /**
     * Draws events on the hit test canvas.
     * @function
     * @name draw
     * @memberof CanvasElement.EVENTS
     * @instance
     * @returns {void}
      
    */
    draw(): void;
    /**
     * Returns an array of string containing the canvas ID of the hitTestCanvasModel.
     * @returns {Array<string>} An array of string containing the canvas ID of the hitTestCanvasModel.
     */
    getCanvasIds(): Array<string>;
}
