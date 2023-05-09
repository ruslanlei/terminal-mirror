/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../chart.config';
import { ChartBaseElement } from '../../chart-base-element';
import EventBus from '../../event-bus';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CursorHandler } from '../../canvas/cursor.handler';
import { CanvasModel } from '../../drawers/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { DateTimeFormatterFactory } from '../../time.formatter';
import { ChartModel } from '../chart/chart.model';
import { ChartPanComponent } from '../pan/chart-pan.component';
import { NavigationMapMoveHandler } from './navigation-map-move.handler';
/**
 * Navigation map component for chart.
 * Controls navigation map in the bottom.
 */
export declare class NavigationMapComponent extends ChartBaseElement {
    protected eventBus: EventBus;
    private chartModel;
    private canvasModel;
    private config;
    private canvasInputListeners;
    private canvasBoundsContainer;
    private chartPanComponent;
    private visualCandles;
    navigationMapMoveHandler: NavigationMapMoveHandler;
    constructor(eventBus: EventBus, chartModel: ChartModel, canvasModel: CanvasModel, config: FullChartConfig, canvasInputListeners: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager, formatterFactory: DateTimeFormatterFactory, chartPanComponent: ChartPanComponent, cursorHandler: CursorHandler);
    /**
     * Method to activate the chart. It subscribes to the observables of the chartModel and canvasBoundsContainer.
     * It also subscribes to the xChanged observable of the chartModel's scaleModel and filters the values to check
     * if the previous viewport had no-candles area and current viewport contains only candles or if the current viewport
     * has no-candles area. If the navigationMap component is visible, it makes visual candles and fires the draw event
     * of the canvasModel.
     */
    protected doActivate(): void;
    /**
     * This function generates an array of visual candles based on the data provided by the chartModel.
     * It calculates the maximum and minimum values of the candles and maps them to the canvas bounds.
     * @returns {Array<[number, number]>} An array of tuples containing the x and y coordinates of each visual candle.
     */
    private makeVisualCandles;
    /**
     * Sets the visibility of the navigation map component.
     * @param {boolean} visible - Whether the navigation map component should be visible or not. Default is true.
     */
    setVisible(visible?: boolean): void;
}
