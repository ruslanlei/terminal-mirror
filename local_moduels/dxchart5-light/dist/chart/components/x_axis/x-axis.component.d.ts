/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../drawers/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import EventBus from '../../event-bus';
import { ChartBaseElement } from '../../chart-base-element';
import { ChartResizeHandler } from '../../inputhandlers/chart-resize.handler';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { ScaleModel } from '../../model/scale.model';
import { TimeZoneModel } from '../../model/time-zone.model';
import { ChartComponent } from '../chart/chart.component';
import { ChartPanComponent } from '../pan/chart-pan.component';
import { XAxisLabelsDrawer } from './x-axis-labels.drawer';
import { XAxisLabelsGenerator } from './x-axis-labels.generator';
import { XAxisLabelsModel, XAxisLabelsProvider } from './x-axis-labels.model';
import { XAxisScaleHandler } from './x-axis-scale.handler';
import { XAxisTimeLabelsDrawer } from './x-axis-time-labels.drawer';
import { CursorHandler } from '../../canvas/cursor.handler';
import { TimeFormatWithDuration } from './time/parser/time-formats.model';
/**
 * X-axis component, contains all x-axis calculation and rendering logic.
 */
export declare class XAxisComponent extends ChartBaseElement {
    private eventBus;
    private config;
    canvasModel: CanvasModel;
    chartComponent: ChartComponent;
    private scaleModel;
    private chartResizeHandler;
    private timeZoneModel;
    xAxisDrawer: XAxisTimeLabelsDrawer;
    xAxisLabelsDrawer: XAxisLabelsDrawer;
    xAxisLabelsGenerator: XAxisLabelsGenerator;
    readonly xAxisLabelsModel: XAxisLabelsModel;
    xAxisScaleHandler: XAxisScaleHandler;
    constructor(eventBus: EventBus, config: FullChartConfig, canvasModel: CanvasModel, chartComponent: ChartComponent, scaleModel: ScaleModel, canvasBoundsContainer: CanvasBoundsContainer, canvasInputListener: CanvasInputListenerComponent, chartResizeHandler: ChartResizeHandler, drawingManager: DrawingManager, timeZoneModel: TimeZoneModel, chartPanComponent: ChartPanComponent, cursorHandler: CursorHandler, backgroundCanvasModel: CanvasModel);
    /**
     * This method is used to activate the chart and update the labels if there is a new data set or equivolume type.
     * It subscribes to the chart type change, candles set subject, candles updated subject, and time zone change to generate new labels.
     * It also subscribes to the x-axis scale change and canvas resize to recalculate the labels.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Returns the xAxisDrawer object.
     *
     * @returns {Object} The xAxisDrawer object.
     */
    getDrawer(): XAxisTimeLabelsDrawer;
    /**
     * You can add a custom labels provider for additional labels on XAxis (like for drawings)
     * @param provider
     */
    registerXAxisLabelsProvider(provider: XAxisLabelsProvider): void;
    /**
     * Controls visibility of the x-axis
     */
    setVisible(isVisible: boolean): void;
    /**
     * Set new config for x labels formatting
     */
    setFormatsForLabelsConfig(newFormatsByWeightMap: Record<TimeFormatWithDuration, string>): void;
    /**
     * If visible, when you can see the x-axis on the chart
     */
    isVisible(): boolean;
}
