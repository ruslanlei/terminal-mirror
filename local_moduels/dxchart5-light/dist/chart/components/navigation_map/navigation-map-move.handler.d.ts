/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import EventBus from '../../event-bus';
import { ChartBaseElement } from '../../chart-base-element';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { ScaleModel } from '../../model/scale.model';
import { ChartModel } from '../chart/chart.model';
import { ChartPanComponent } from '../pan/chart-pan.component';
export declare class NavigationMapMoveHandler extends ChartBaseElement {
    private bus;
    private chartModel;
    private scaleModel;
    private canvasInputListeners;
    private canvasBoundsContainer;
    private chartPanComponent;
    private leftKnotDragStartXRelative;
    private rightKnotDragStartXRelative;
    private lastMousePosition;
    constructor(bus: EventBus, chartModel: ChartModel, scaleModel: ScaleModel, canvasInputListeners: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer, chartPanComponent: ChartPanComponent);
    /**
     * Method that activates the navigation map buttons and subscribes to their click and touch events.
     * It also subscribes to the xChanged event of the scaleModel and updates the canvasBoundsContainer accordingly.
     * @returns {void}
     */
    protected doActivate(): void;
    private leftKnotDragStart;
    private leftKnotDragTick;
    private rightKnotDragStart;
    private rightKnotDragTick;
    private sliderDragStart;
    private sliderDragTick;
}
