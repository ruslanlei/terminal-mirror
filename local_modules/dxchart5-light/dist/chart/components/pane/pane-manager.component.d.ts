/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subject } from 'rxjs';
import { CanvasAnimation } from '../../animation/canvas-animation';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CursorHandler } from '../../canvas/cursor.handler';
import { ChartBaseElement, ChartEntity } from '../../model/chart-base-element';
import { FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../model/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import EventBus from '../../events/event-bus';
import { CrossEventProducerComponent } from '../../inputhandlers/cross-event-producer.component';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { ScaleModel } from '../../model/scale.model';
import { AtLeastOne } from '../../utils/object.utils';
import { ChartPanComponent } from '../pan/chart-pan.component';
import { BarResizerComponent } from '../resizer/bar-resizer.component';
import { PaneHitTestController } from './pane-hit-test.controller';
import { PaneComponent, PaneFormatters } from './pane.component';
import { ChartBaseModel } from '../chart/chart-base.model';
interface PaneCreationOptions {
    scaleModel: ScaleModel;
    order: number;
    useDefaultHighLow: boolean;
    cursor: string;
    paneFormatters: PaneFormatters;
    increment: number | null;
}
export declare class PaneManager extends ChartBaseElement {
    private chartBaseModel;
    private userInputListenerComponents;
    private eventBus;
    private mainScaleModel;
    private canvasBoundsContainer;
    private config;
    private canvasAnimation;
    private canvasInputListener;
    private drawingManager;
    private dataSeriesCanvasModel;
    private cursorHandler;
    private crossEventProducer;
    chartPanComponent: ChartPanComponent;
    private mainCanvasModel;
    paneComponents: Record<string, PaneComponent>;
    panesChangedSubject: Subject<Record<string, PaneComponent>>;
    hitTestController: PaneHitTestController;
    /**
     * Returns order of panes in the chart from top to bottom.
     */
    get panesOrder(): string[];
    constructor(chartBaseModel: ChartBaseModel<'candle'>, userInputListenerComponents: ChartEntity[], eventBus: EventBus, mainScaleModel: ScaleModel, canvasBoundsContainer: CanvasBoundsContainer, config: FullChartConfig, canvasAnimation: CanvasAnimation, canvasInputListener: CanvasInputListenerComponent, drawingManager: DrawingManager, dataSeriesCanvasModel: CanvasModel, cursorHandler: CursorHandler, crossEventProducer: CrossEventProducerComponent, chartPanComponent: ChartPanComponent, mainCanvasModel: CanvasModel);
    /**
     * Adds a resizer to the canvas bounds container for the given uuid.
     * @param {string} uuid - The uuid of the pane to which the resizer is to be added.
     * @returns {BarResizerComponent} - The BarResizerComponent instance that was added to the userInputListenerComponents array.
     */
    addResizer(uuid: string): BarResizerComponent;
    /**
     * Creates sub-plot on the chart with y-axis
     * @param uuid
     * @returns
     */
    createPane(uuid?: string, options?: AtLeastOne<PaneCreationOptions>): PaneComponent;
    /**
     * Removes pane from the chart and all related components
     * @param uuid
     */
    removePane(uuid: string): void;
    /**
     * Creates a Y-axis component for the chart.
     * @private
     * @param {string} uuid - The unique identifier of the chart pane.
     * @param {ScaleModel} scaleModel - The scale model for the chart.
     * @param {(value: number) => string} formatter - The function to format the Y-axis labels.
     * @param {Unsubscriber[]} subs - The array of unsubscriber functions.
     * @param {number | null} increment - The increment value for the Y-axis labels.
     * @returns {[NumericYAxisLabelsGenerator, YAxisDrawer, YAxisScaleHandler]} - An array containing the Y-axis labels generator, Y-axis drawer, and Y-axis scale handler.
     */
    private createYAxisComponent;
    /**
     * Creates a handler for Y-axis panning of the chart.
     * @private
     * @param {string} uuid - The unique identifier of the chart pane.
     * @param {ScaleModel} scaleModel - The scale model of the chart.
     * @param {Unsubscriber[]} subs - An array of unsubscriber functions.
     * @returns {void}
     */
    private createYPanHandler;
    /**
     * Creates a new GridComponent instance with the provided parameters.
     * @param {string} uuid - The unique identifier of the pane.
     * @param {ScaleModel} scaleModel - The scale model used to calculate the scale of the grid.
     * @param {NumericYAxisLabelsGenerator} yAxisLabelsGenerator - The generator used to create the labels for the y-axis.
     * @returns {GridComponent} - The newly created GridComponent instance.
     */
    private createGridComponent;
    /**
     * Adds cursors to the chart elements based on the provided uuid and cursor type.
     * @private
     * @param {string} uuid - The unique identifier for the chart element.
     * @param {string} [cursor=this.config.components.chart.cursor] - The type of cursor to be added to the chart element.
     * @returns {void}
     */
    private addCursors;
    /**
     * Removes cursors for a given uuid
     * @private
     * @param {string} uuid - The uuid of the canvas element
     * @returns {void}
     */
    private removeCursors;
    /**
     * Recalculates the zoom Y of all pane components and fires a draw event on the event bus.
     * @function
     * @name recalculateState
     * @memberof PaneManager
     * @returns {void}
     */
    recalculateState(): void;
}
export {};
