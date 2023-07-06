/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartBaseElement } from './chart-base-element';
import { PaneComponent } from '../components/pane/pane.component';
import { YAxisLabelsProvider } from '../components/y_axis/price_labels/y-axis-labels.model';
import { AtLeastOne } from '../utils/object.utils';
import { DataSeriesView } from './data-series-view';
import { HighLowWithIndex, ScaleModel } from './scale.model';
import { DataSeriesConfig, DataSeriesPaintConfig, DataSeriesType } from './data-series.config';
import { HighLowProvider } from './scaling/auto-scale.model';
import { Index, Unit, Viewable } from './scaling/viewport.model';
/**
 * Properties are named in order to match VisualCandle interface
 */
export declare class VisualSeriesPoint {
    centerUnit: Unit;
    close: Unit;
    constructor(centerUnit: Unit, close: Unit);
    /**
     * returns y coordinate in pixels
     */
    y(viewable: Viewable): Unit;
    /**
     * returns x coordinate in pixels
     */
    x(viewable: Viewable): Unit;
    clone(): VisualSeriesPoint;
}
export interface DataSeriesPoint {
    timestamp: number;
    close: Unit;
}
export interface DataSeriesViewportIndexes {
    dataIdxStart: Index;
    dataIdxEnd: Index;
}
/**
 * DataSeriesModel represents single time series chart.
 * Usually data source is presented as a one-dimension array, but here it can be presented as two-dimension array
 * If the data is presented as two-dim array when every data array will be drawn as a separate time-series
 * For example, linear chart type will be drawn with gaps on the chart
 */
export declare class DataSeriesModel<D extends DataSeriesPoint = DataSeriesPoint, V extends VisualSeriesPoint = VisualSeriesPoint> extends ChartBaseElement {
    readonly paneComponent: PaneComponent;
    id: number;
    name: string;
    hovered: boolean;
    yAxisLabelProvider: YAxisLabelsProvider;
    readonly config: DataSeriesConfig;
    scaleModel: ScaleModel;
    view: DataSeriesView;
    protected _dataPoints: D[][];
    pricePrecisions: number[];
    /**
     * Should be used for paint tools like rectrangular drawing or diff cloud
     */
    linkedDataSeriesModels: DataSeriesModel<D, V>[];
    highLowProvider: HighLowProvider;
    get dataPoints2D(): D[][];
    get dataPoints(): D[];
    protected _dataPointsFlat: D[];
    set dataPoints(points: D[][] | D[]);
    protected _visualPoints: V[][];
    protected _visualPointsFlat: V[];
    dataIdxStart: Index;
    dataIdxEnd: Index;
    get visualPoints(): V[];
    get visualPoints2D(): V[][];
    set visualPoints(points: V[][] | V[]);
    constructor(paneComponent: PaneComponent, id: number, _config?: AtLeastOne<DataSeriesConfig>);
    /**
     * Returns the paint configuration object for a specific series part, or the default paint configuration object
     * if the specified series part is not defined in the current DataSeriesView configuration.
     *
     * @param {number} seriesPart - The index of the series part to get the paint configuration for.
     * @returns {DataSeriesPaintConfig} The paint configuration object for the specified series part, or the default paint configuration object.
     */
    getPaintConfig: (seriesPart: number) => DataSeriesPaintConfig;
    protected _toVisualPoints(data: D[][]): V[][];
    /**
     * Transforms the given array of data points of type D into an array of visual points of type V.
     * Each visual point object contains a centerUnit property with the index of the point in the input array,
     * and a close property with the close value of the point.
     *
     * @param {D[]} data - The array of data points to transform into visual points.
     * @returns {V[]} An array of visual points, each with a centerUnit and close property.
     */
    toVisualPoints(data: D[]): V[];
    setType(type: DataSeriesType): void;
    /**
     * Recalculates the visual points of the DataSeriesView based on the current data points.
     * The visual points are stored in the visualPoints property of the DataSeriesView.
     * Should be called 1 time when data are set / updated to chart.
     */
    recalculateVisualPoints(): void;
    /**
     * Recalculates the indexes of the start and end points of the data viewport,
     * based on the current xStart and xEnd values of the scale model, or on the given xStart and xEnd parameters.
     *
     * @param {number} [xStart=this.scaleModel.xStart] - The start value of the viewport on the x-axis. Defaults to the current xStart value of the scale model.
     * @param {number} [xEnd=this.scaleModel.xEnd] - The end value of the viewport on the x-axis. Defaults to the current xEnd value of the scale model.
     */
    recalculateDataViewportIndexes(xStart?: number, xEnd?: number): void;
    /**
     * Calculates and returns the indexes of the start and end points of the data viewport,
     * based on the given start and end units on the x-axis.
     *
     * @param {Unit} xStart - The start value of the viewport on the x-axis.
     * @param {Unit} xEnd - The end value of the viewport on the x-axis.
     * @returns {DataSeriesViewportIndexes} An object containing the calculated start and end indexes of the data viewport.
     */
    calculateDataViewportIndexes(xStart: Unit, xEnd: Unit): DataSeriesViewportIndexes;
    /**
     * Formats the given numerical value using the default value formatter.
     *
     * @param {number} value - The numerical value to be formatted.
     * @returns {string} The formatted value as a string.
     */
    valueFormatter(value: number): string;
    /**
     * Returns the close value of the visual point at the given index, or 1 if the visual point is not defined.
     * The index defaults to the data index start of the DataSeriesView.
     *
     * @param {number} [idx=this.dataIdxStart] - The index of the visual point to retrieve the close value for.
     * @returns {Unit} The close value of the visual point at the given index, or 1 if the visual point is not defined.
     */
    getBaseLine: (idx?: number) => Unit;
    /**
     * Returns the string representation of the close value of the given visual point.
     *
     * @param {VisualSeriesPoint} point - The visual point to get the string representation of the close value for.
     * @returns {string} The string representation of the close value of the given visual point.
     */
    getTextForPoint: (point: VisualSeriesPoint) => string;
    /**
     * Returns a two-dimensional array of the visual points in the viewport of the DataSeriesView.
     * The viewport range can be customized by providing start and end units on the x-axis.
     * If start or end units are not provided, the current viewport range of the DataSeriesView is used.
     *
     * @param {number} [xStart] - The start value of the viewport range on the x-axis.
     * @param {number} [xEnd] - The end value of the viewport range on the x-axis.
     * @returns {V[][]} A two-dimensional array of the visual points in the viewport of the DataSeriesView.
     */
    getSeriesInViewport(xStart?: number, xEnd?: number): V[][];
    /**
     * Returns last visible on the screen data series value
     * @param seriesIndex
     */
    getLastVisualSeriesPoint: () => V | undefined;
    /**
     * Return last overall data series value (even if not visible)
     * @param seriesIndex
     */
    getLastDataSeriesPoint: () => V | undefined;
}
export declare const calculateDataSeriesHighLow: (visualCandles: VisualSeriesPoint[]) => HighLowWithIndex;
export declare const defaultValueFormatter: (value: number) => string;
