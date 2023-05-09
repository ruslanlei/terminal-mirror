/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds } from '../../common/common-types';
import { CanvasBoundsContainer, HitBoundsTest } from '../canvas/canvas-bounds-container';
import { CursorHandler } from '../canvas/cursor.handler';
import { FullChartConfig } from '../chart.config';
import { ChartBaseElement } from '../chart-base-element';
import { ChartModel } from '../components/chart/chart.model';
import { ChartPanComponent } from '../components/pan/chart-pan.component';
import { CanvasModel } from '../drawers/canvas.model';
import { CanvasInputListenerComponent } from '../inputlisteners/canvas-input-listener.component';
export declare const BASELINE_RESIZER_UUID = "BASELINE_RESIZER";
/**
 * Baseline separator for baseline chart
 * Used to resize baseline area on chart.
 */
export declare class BaselineModel extends ChartBaseElement {
    private chartModel;
    private canvasModel;
    private canvasInputListener;
    private config;
    private canvasBoundContainer;
    private cursorHandler;
    readonly resizerBounds: Bounds;
    baselineYPercents: number;
    ht: HitBoundsTest;
    constructor(chartModel: ChartModel, chartPanComponent: ChartPanComponent, canvasModel: CanvasModel, canvasInputListener: CanvasInputListenerComponent, config: FullChartConfig, canvasBoundContainer: CanvasBoundsContainer, cursorHandler: CursorHandler);
    protected doActivate(): void;
    private dragTickCb;
    /**
     * Recalculates the bounds of the baseline resizer based on the current chart and y-axis bounds.
     * @private
     * @function
     * @name recalculateBounds
     * @memberof ClassName
     * @returns {void}
     */
    private recalculateBounds;
    /**
     * Moves the baseline of the chart to the specified y coordinate.
     * @param {number} y - The y coordinate to move the baseline to.
     * @returns {void}
     */
    moveBaseLine(y: number): void;
    /**
     * This method is called when the component is being deactivated.
     * It calls the doDeactivate method of the parent class.
     * @protected
     */
    protected doDeactivate(): void;
}
