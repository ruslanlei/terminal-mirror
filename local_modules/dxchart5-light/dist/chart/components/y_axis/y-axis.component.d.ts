/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subject } from 'rxjs';
import { PriceAxisType } from '../labels_generator/numeric-axis-labels.generator';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CursorHandler } from '../../canvas/cursor.handler';
import { BarType, ChartConfigComponentsYAxis, FullChartColors, FullChartConfig, YAxisAlign, YAxisLabelAppearanceType, YAxisLabelMode, YAxisLabelType } from '../../chart.config';
import { ChartBaseElement } from '../../model/chart-base-element';
import { CanvasModel } from '../../model/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import EventBus from '../../events/event-bus';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { PriceMovement } from '../../model/candle-series.model';
import { DataSeriesType } from '../../model/data-series.config';
import { ScaleModel } from '../../model/scale.model';
import { ChartModel } from '../chart/chart.model';
import { ChartPanComponent } from '../pan/chart-pan.component';
import { PaneManager } from '../pane/pane-manager.component';
import { VisualYAxisLabel, YAxisLabelsProvider } from './price_labels/y-axis-labels.model';
import { YAxisModel, YAxisWidthContributor } from './y-axis.model';
import { YAxisScaleHandler } from './y-axis-scale.handler';
export type LabelColorResolver = (priceMovement: PriceMovement, colors: FullChartColors) => string;
/**
 * Y axis component. Contains all Y axis related logic.
 */
export declare class YAxisComponent extends ChartBaseElement {
    private eventBus;
    private config;
    private canvasModel;
    private yAxisLabelsCanvasModel;
    private chartModel;
    private scaleModel;
    private canvasBoundsContainer;
    yAxisScaleHandler: YAxisScaleHandler;
    yAxisModel: YAxisModel;
    axisTypeSetSubject: Subject<PriceAxisType>;
    readonly state: ChartConfigComponentsYAxis;
    private labelsColorByChartTypeMap;
    constructor(eventBus: EventBus, config: FullChartConfig, canvasModel: CanvasModel, yAxisLabelsCanvasModel: CanvasModel, chartModel: ChartModel, scaleModel: ScaleModel, canvasInputListeners: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager, chartPanComponent: ChartPanComponent, paneManager: PaneManager, cursorHandler: CursorHandler);
    /**
     * Updates labels visual appearance on canvas
     */
    updateOrderedLabels(adjustYAxisWidth?: boolean): void;
    /**
     * Calls the parent class's doActivate method
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Registers default label color resolvers for different chart types.
     * @private
     * @function
     * @name registerDefaultLabelColorResolver
     * @returns {void}
     */
    private registerDefaultLabelColorResolver;
    /**
     * You can add a custom labels provider for additional labels on YAxis (like for drawings, symbol last price, studies, etc..)
     * @param groupName - a group in which labels position recalculation algorithm will be applied, usually it's subchart name
     * @param provider
     * @param id
     */
    registerYAxisLabelsProvider(provider: YAxisLabelsProvider, groupName?: string, id?: string): string;
    /**
     * An easier way to manage custom y-axis labels, than y-axis labels providers.
     * However, overlapping avoidance is not supported
     * @param name
     * @param label
     */
    addSimpleYAxisLabel(name: string, label: VisualYAxisLabel): void;
    /**
     * @param name
     */
    deleteSimpleYAxisLabel(name: string): void;
    /**
     * Unregisters a Y axis labels provider from the specified group.
     * @param {string} groupName - The name of the group from which to unregister the provider. Defaults to LabelsGroups.MAIN.
     * @param {string} id - The ID of the provider to unregister.
     * @returns {string} - The ID of the unregistered provider.
     */
    unregisterYAxisLabelsProvider(groupName: string | undefined, id: string): string;
    /**
     * If custom pane has y-axis it has to register width contributor to correctly calculate overall y-axis width.
     * @param contributor
     */
    registerYAxisWidthContributor(contributor: YAxisWidthContributor): void;
    /**
     * Sets the type of axis: percent, regular or logarithmic.
     * @param type - the type of axis
     */
    setAxisType(type: PriceAxisType): void;
    /**
     * Change YAxis position to left or to right
     * @param align
     */
    setYAxisAlign(align: YAxisAlign): void;
    /**
     * Controls visibility of the y-axis
     */
    setVisible(isVisible: boolean): void;
    /**
     * If visible, when you can see the y-axis on the chart
     */
    isVisible(): boolean;
    /**
     * Controls lockPriceToBarRatio of the y-axis
     */
    setLockPriceToBarRatio(value?: boolean): void;
    /**
     * Changes the visual type of particular label.
     * @param type - label type
     * @param mode - visual mode
     */
    changeLabelMode(type: YAxisLabelType, mode: YAxisLabelMode): void;
    /**
     * Changes the visual type of particular label.
     * @param type - label type
     * @param mode - visual mode
     */
    changeLabelAppearance(type: YAxisLabelType, mode: YAxisLabelAppearanceType): void;
    /**
     * Sets the inverse price scale mode. Inverts Y axis vertically.
     * Inversion also works for candles, drawings and overlay studies.
     * @param inverse - true or false
     */
    togglePriceScaleInverse(inverse: boolean): void;
    /**
     * Changes the visibility of the labels' descriptions.
     * @param {boolean} descVisibility - A boolean value indicating whether the descriptions should be visible or not.
     * @returns {void}
     */
    changeLabelsDescriptionVisibility(descVisibility: boolean): void;
    /**
     * Registers a label color resolver for a specific chart type.
     *
     * @param {BarType} chartType - The type of chart for which the label color resolver is being registered.
     * @param {LabelColorResolver} resolver - The function that will be used to resolve the color of the labels for the specified chart type.
     * @returns {void}
     */
    registerLabelColorResolver(chartType: BarType, resolver: LabelColorResolver): void;
    /**
     * Returns a function that resolves the color for a label based on the type of data series.
     * @param {DataSeriesType} candlesType - The type of data series.
     * @returns {Function} - A function that resolves the color for a label.
     * If there is no color mapping for the given data series type, it returns the default color resolver function.
     */
    getLabelsColorResolver(candlesType: DataSeriesType): LabelColorResolver;
}
