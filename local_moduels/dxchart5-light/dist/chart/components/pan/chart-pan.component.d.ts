/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasAnimation } from '../../animation/canvas-animation';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { FullChartConfig } from '../../chart.config';
import EventBus from '../../event-bus';
import { ChartBaseElement, ChartEnity } from '../../chart-base-element';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { ScaleModel } from '../../model/scale.model';
import { ChartAreaPanHandler } from '../chart/chart-area-pan.handler';
export declare class ChartPanComponent extends ChartBaseElement {
    private eventBus;
    private mainScaleModel;
    private canvasBoundsContainer;
    private config;
    private canvasAnimation;
    private canvasInputListener;
    private mainCanvasParent;
    chartPanComponents: Array<ChartEnity>;
    chartAreaPanHandler: ChartAreaPanHandler;
    constructor(eventBus: EventBus, mainScaleModel: ScaleModel, canvasBoundsContainer: CanvasBoundsContainer, config: FullChartConfig, canvasAnimation: CanvasAnimation, canvasInputListener: CanvasInputListenerComponent, mainCanvasParent: Element);
    /**
     * Activates the chart pan handlers.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * This method is used to deactivate the pan handlers.
     * @returns {void}
     * @protected
     */
    protected doDeactivate(): void;
    /**
     * Activates user mouse handlers on main chart view.
     * @function
     * @name activateChartPanHandlers
     * @memberof [object Object]
     * @instance
     * @returns {void}
     */
    activateChartPanHandlers(): void;
    /**
     * Deactivates all the pan handlers of the chart.
     */
    deactivatePanHandlers(): void;
}
