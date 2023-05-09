/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasAnimation } from '../../animation/canvas-animation';
import { CanvasBoundsContainer, HitBoundsTest } from '../../canvas/canvas-bounds-container';
import { AutoScaleDisableOnDrag, FullChartConfig } from '../../chart.config';
import EventBus from '../../event-bus';
import { ChartBaseElement } from '../../chart-base-element';
import { CanvasInputListenerComponent, Point } from '../../inputlisteners/canvas-input-listener.component';
import { ScaleModel } from '../../model/scale.model';
import { DragNDropYComponent } from '../dran-n-drop_helper/drag-n-drop-y.component';
import { ChartPanComponent } from '../pan/chart-pan.component';
export interface ChartWheelEvent {
    readonly originalEvent: WheelEvent;
    readonly candleIdx: number;
}
/**
 * ChartAreaPanHandler is a class that handles the panning and zooming of the chart area.
 * It extends the ChartBaseElement class and has the following properties:
 * @property {MainCanvasTouchHandler} touchHandler - An instance of the MainCanvasTouchHandler class.
 * @property {Point} currentPoint - An object that represents the current point of the chart area.
 * @property {number} xDraggedCandlesDelta - A number that represents the number of candles delta changed during X dragging.
 * @property {number} lastXStart - A number that represents the last X start position.
 * @property {number} lastYStart - A number that represents the last Y start position.
 * @property {number} wheelTrottleTime - A number that represents the time in ms for the wheel throttle.
 * @constructor
 * @param {EventBus} bus - An instance of the EventBus class.
 * @param {FullChartConfig} config - An instance of the FullChartConfig class.
 * @param {ScaleModel} scaleModel - An instance of the ScaleModel class.
 * @param {Element} mainCanvasParent - The parent element of the main canvas.
 * @param {CanvasInputListenerComponent} canvasInputListener - An instance of the CanvasInputListenerComponent class.
 * @param {CanvasBoundsContainer} canvasBoundsContainer - An instance of the CanvasBoundsContainer class.
 * @param {CanvasAnimation} canvasAnimation - An instance of the CanvasAnimation class.
 * @param {ChartPanComponent} chartPanComponent - An instance of the ChartPanComponent class.
 
*/
export declare class ChartAreaPanHandler extends ChartBaseElement {
    private bus;
    private config;
    private scaleModel;
    private mainCanvasParent;
    private canvasInputListener;
    private canvasBoundsContainer;
    private canvasAnimation;
    private chartPanComponent;
    private readonly touchHandler;
    private currentPoint;
    xDraggedCandlesDelta: number;
    lastXStart: number;
    lastYStart: number;
    wheelTrottleTime: number;
    constructor(bus: EventBus, config: FullChartConfig, scaleModel: ScaleModel, mainCanvasParent: Element, canvasInputListener: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer, canvasAnimation: CanvasAnimation, chartPanComponent: ChartPanComponent);
    /**
     * This method is used to activate the zoom functionality of the canvas. It extends the doActivate method of the parent class.
     * It observes the wheel event on all panes of the canvas and throttles it to the specified time.
     * It then calculates the zoom sensitivity based on whether the event was triggered by a touchpad or not.
     * If the zoomToCursor configuration is set to true, it calculates the viewport percentage based on the zoomCanvasOffset and canvas width.
     * It then calls the zoomXToPercent method of the scaleModel to zoom in or out based on the zoomIn parameter.
     * If the zoomToCursor configuration is set to false, it calls the zoomXToEnd method of the scaleModel to zoom in or out based on the zoomIn parameter.
     * Finally, it fires the draw event of the bus to redraw the canvas.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Registers a handler for panning the chart along the Y-axis.
     * @param {ScaleModel} scaleModel - The scale model for the chart.
     * @param {HitBoundsTest} hitTest - The hit test for the chart.
     * @returns {DragNDropYComponent} - The drag and drop component for panning the chart along the Y-axis.
     */
    registerChartYPanHandler(scaleModel: ScaleModel, hitTest: HitBoundsTest): DragNDropYComponent;
    private onXDragStart;
    private onXDragTick;
}
/**
 * This function calculates angle between current point and point(0, 0), and compares the result with config values
 * @param point
 * @param config
 *
 * @doc-tags chart-core,auto-scale,y-axis
 */
export declare const shouldDisableAutoScale: (point: Point, config: Required<AutoScaleDisableOnDrag>) => boolean;
