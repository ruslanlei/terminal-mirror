/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds, Unsubscriber } from '../../../common/common-types';
import { PriceAxisType } from '../../../common/numeric-axis-labels.generator';
import { CanvasBoundsContainer, HitBoundsTest } from '../../canvas/canvas-bounds-container';
import { FullChartConfig } from '../../chart.config';
import { ChartBaseElement } from '../../chart-base-element';
import EventBus from '../../event-bus';
import { DataSeriesModel, DataSeriesPoint } from '../../model/data-series.model';
import { ScaleModel } from '../../model/scale.model';
import { HighLowProvider } from '../../model/scaling/auto-scale.model';
import { Unit } from '../../model/scaling/viewport.model';
import { NumericYAxisLabelsGenerator } from '../y_axis/numeric-y-axis-labels.generator';
import { YAxisDrawer } from '../y_axis/y-axis.drawer';
import { YAxisScaleHandler } from '../y_axis/y-axis-scale.handler';
import { PaneHitTestController } from './pane-hit-test.controller';
export declare class PaneComponent extends ChartBaseElement {
    private config;
    private eventBus;
    private canvasBoundsContainer;
    readonly uuid: string;
    readonly scaleModel: ScaleModel;
    readonly yAxisLabelsGenerator: NumericYAxisLabelsGenerator;
    readonly yAxisDrawer: YAxisDrawer;
    readonly yAxisScaleHandler: YAxisScaleHandler;
    private hitTestController;
    readonly subs: Unsubscriber[];
    dataSeries: Set<DataSeriesModel>;
    private formatters;
    private _paneOrder;
    /**
     * Pane hit test (without Y-Axis and resizer)
     */
    ht: HitBoundsTest;
    private mainDataSeries?;
    constructor(config: FullChartConfig, eventBus: EventBus, canvasBoundsContainer: CanvasBoundsContainer, uuid: string, scaleModel: ScaleModel, yAxisLabelsGenerator: NumericYAxisLabelsGenerator, yAxisDrawer: YAxisDrawer, yAxisScaleHandler: YAxisScaleHandler, hitTestController: PaneHitTestController, subs?: Unsubscriber[], dataSeries?: Set<DataSeriesModel>, formatters?: PaneFormatters);
    /**
     * Method that activates the canvas bounds container and recalculates the zoom Y of the scale model.
     * @protected
     * @function
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Sets the data points for a given DataSeriesModel.
     * @param {DataSeriesModel} model - The DataSeriesModel to set the data points for.
     * @param {DataSeriesPoint[][] | DataSeriesPoint[]} points - The data points to set for the model. Can be an array of arrays or a single array.
     * @returns {void}
     */
    setDataPoints(model: DataSeriesModel, points: DataSeriesPoint[][] | DataSeriesPoint[]): void;
    /**
     * This method updates the view by calling the doAutoScale method of the scaleModel and firing the Draw event using the eventBus.
     * @private
     */
    private updateView;
    getYAxisBounds: () => Bounds;
    /**
     * Returns the bounds of the scale model.
     * @returns {Bounds} The bounds of the scale model.
     */
    getBounds(): Bounds;
    /**
     * Hides the pane by removing its bounds from the canvasBoundsContainer and firing a draw event.
     * @function
     * @name hide
     * @memberof PaneComponent
     * @returns {void}
     */
    hide(): void;
    /**
     * Adds the bounds of the pane to the canvas bounds container and fires a draw event.
     * @function
     * @name show
     * @memberof PaneComponent
     * @returns {void}
     */
    show(): void;
    /**
     * Creates a new DataSeriesModel object.
     * @returns {DataSeriesModel} - The newly created DataSeriesModel object.
     */
    createDataSeries(): DataSeriesModel;
    /**
     * Adds a new data series to the chart.
     * @param {DataSeriesModel} series - The data series to be added.
     * @returns {void}
     */
    addDataSeries(series: DataSeriesModel): void;
    /**
     * Removes a data series from the chart.
     *
     * @param {DataSeriesModel} series - The data series to be removed.
     * @returns {void}
     */
    removeDataSeries(series: DataSeriesModel): void;
    /**
     * Returns the type of the y-axis component for the current pane.
     *
     * @returns {PriceAxisType} The 'regular' type of the y-axis component for the current pane.
     *
     */
    getAxisType(): PriceAxisType;
    /**
     * Moves the canvas bounds container up by calling the movePaneUp method with the uuid of the current object.
     * @returns {void}
     */
    moveUp(): void;
    /**
     * Moves the canvas bounds container down by calling the movePaneDown method with the uuid of the current object.
     * @returns {void}
     */
    moveDown(): void;
    /**
     * Checks if the current pane can move up.
     * @returns {boolean} - Returns true if the current pane can move up, otherwise false.
     */
    canMoveUp(): boolean;
    /**
     * Checks if the current pane can move down.
     *
     * @returns {boolean} - Returns true if the current pane is not the last one in the canvasBoundsContainer, otherwise returns false.
     */
    canMoveDown(): boolean;
    valueFormatter: (value: Unit, dataSeries?: DataSeriesModel) => string;
    get regularFormatter(): (value: number) => string;
    /**
     * Sets the pane value formatters for the current instance.
     * @param {PaneFormatters} formatters - The pane value formatters to be set.
     */
    setPaneValueFormatters(formatters: PaneFormatters): void;
    /**
     * Returns the regular value from Y coordinate.
     * @param {number} y - The Y coordinate.
     * @returns {number} - The regular value.
     */
    regularValueFromY(y: number): number;
}
export declare const createDefaultPaneHighLowProvider: (pane: PaneComponent) => HighLowProvider;
export interface PaneFormatters {
    regular: (value: number) => string;
    percent?: (value: number, dataSeries?: DataSeriesModel) => string;
    logarithmic?: (value: number) => string;
}
