/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable } from 'rxjs';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CursorHandler } from '../../canvas/cursor.handler';
import { ChartBaseElement } from '../../model/chart-base-element';
import { BarType, ChartConfigComponentsOffsets, FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../model/canvas.model';
import { SeriesDrawer } from '../../drawers/data-series.drawer';
import { DrawingManager } from '../../drawers/drawing-manager';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { BaselineModel } from '../../model/baseline.model';
import { CandleSeriesModel } from '../../model/candle-series.model';
import { Candle } from '../../model/candle.model';
import { DataSeriesType } from '../../model/data-series.config';
import { HitTestCanvasModel } from '../../model/hit-test-canvas.model';
import { ScaleModel } from '../../model/scale.model';
import { Timestamp, Unit } from '../../model/scaling/viewport.model';
import { ChartPanComponent } from '../pan/chart-pan.component';
import { PaneManager } from '../pane/pane-manager.component';
import { CandleWidthCalculator, ChartModel, LastCandleLabelHandler, VisualCandleCalculator } from './chart.model';
/**
 * Represents a financial instrument to be displayed on a chart
 * @class
 * @property {string} symbol - The symbol of the instrument
 * @property {string} [description] - The description of the instrument
 * @property {Array<number>} [priceIncrements=[0.01]] - An array of possible price step values on the price axis
 * @property {boolean} [bondFraction] - A flag indicating whether the instrument is a bond fraction or not
 */
export declare class ChartInstrument {
    symbol: string;
    description?: string;
    /**
     * defines possible price step values on price axis
     */
    priceIncrements?: Array<number>;
    /**
     * TODO research
     */
    bondFraction?: boolean;
}
export interface CandleSeries {
    candles: Candle[];
    instrument?: ChartInstrument;
}
export declare class ChartComponent extends ChartBaseElement {
    readonly chartModel: ChartModel;
    canvasModel: CanvasModel;
    private config;
    private scaleModel;
    private canvasBoundsContainer;
    private drawingManager;
    private hitTestCanvasModel;
    private canvasInputListener;
    readonly baselineModel: BaselineModel;
    private readonly backgroundDrawer;
    private readonly dataSeriesDrawers;
    private readonly dataSeriesDrawer;
    constructor(chartModel: ChartModel, canvasModel: CanvasModel, config: FullChartConfig, scaleModel: ScaleModel, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager, hitTestCanvasModel: HitTestCanvasModel, canvasInputListener: CanvasInputListenerComponent, backgroundCanvasModel: CanvasModel, chartPanComponent: ChartPanComponent, paneManager: PaneManager, cursorHandler: CursorHandler);
    /**
     * This method overrides the doActivate method of the parent class and calls it.
     * It does not take any parameters and does not return anything.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Registers default candle transformers.
     * @private
     * @function
     * @returns {void}
     */
    private registerDefaultCandlesTransformers;
    get barTypeValues(): Array<BarType>;
    strToBarType: (str: string) => BarType;
    /**
     * You can use this method to determine logic of visual candle transformation for specified chart type.
     * @param chartType
     * @param transformer
     */
    registerCandlesTransformer(chartType: BarType, transformer: VisualCandleCalculator): void;
    /**
     * You can use this method to modify labels for last candle.
     * @param chartType
     * @param handler
     */
    registerLastCandleLabelHandler(chartType: BarType, handler: LastCandleLabelHandler): void;
    /**
     * You can use this method to determine chart width calculation for specified chart type.
     * @param chartType
     * @param calculator
     */
    registerCandlesWidthCalculator(chartType: BarType, calculator: CandleWidthCalculator): void;
    /**
     * In future this drawers should have same type as main series
     */
    private registerDefaultDataSeriesDrawers;
    /**
     * Sets the chart type of main candle series.
     * @param type - new type
     */
    setChartType(type: BarType): void;
    /**
     * Resets chart scale to default according to config.components.chart.defaultZoomCandleWidth.
     */
    resetChartScale(): void;
    /**
     * Sets the timestamp range of the chart by setting the x-axis scale.
     * @param {Timestamp} start - The start timestamp of the range.
     * @param {Timestamp} end - The end timestamp of the range.
     * @returns {void}
     */
    setTimestampRange(start: Timestamp, end: Timestamp): void;
    /**
     * Moves the viewport to exactly xStart..xEnd place.
     * @param xStart - viewport start in units
     * @param xEnd - viewport end in units
     */
    setXScale(xStart: Unit, xEnd: Unit): void;
    /**
     * Sets the visibility of the wicks in the chart.
     * @param {boolean} isShow - A boolean value indicating whether to show or hide the wicks.
     * @returns {void}
     */
    setShowWicks(isShow: boolean): void;
    /**
     * Used to set the main series to chart.
     * @param series
     */
    setMainSeries(series: CandleSeries): void;
    /**
     * Adds new secondary chart series.
     * @param series
     */
    setSecondarySeries(series: CandleSeries): CandleSeriesModel | undefined;
    /**
     * Sets the main and secondary series in one bulk operation.
     * Reindexing and visual rerender happens at the same time.
     * @param mainSeries
     * @param secondarySeries
     */
    setAllSeries(mainSeries: CandleSeries, secondarySeries?: CandleSeries[]): void;
    /**
     * Converts candle index to chart x coordinate
     */
    toXFromCandleIndex(idx: number): number;
    /**
     * Converts timestamp to chart x coordinate
     */
    toXFromTimestamp(timestamp: number): number;
    /**
     * Converts price to chart y coordinate
     */
    toY(price: number): number;
    /**
     * Updates the main and secondary series in one bulk operation.
     * Reindexing and visual rerender happens at the same time.
     * @param mainSeries {CandleSeries}
     * @param secondarySeries {CandleSeries[]}
     */
    updateAllSeries(mainSeries: CandleSeries, secondarySeries: CandleSeries[]): void;
    /**
     * Removes all data points from the main candle series that are newer than the given timestamp.
     * Can be useful for data replay.
     * @param startTimestamp
     */
    removeDataFrom(timestamp: Timestamp): void;
    /**
     * Removes chart candles series.
     * @param instrument
     */
    removeSecondarySeries(series: CandleSeriesModel): void;
    /**
     * Adds new candles array to the existing one at the start, mostly used in lazy loading
     * @param target - initial candles array
     * @param prependUpdate - additional candles array, which will be added to the target array
     */
    prependCandles(target: Candle[], prependUpdate: Candle[]): void;
    /**
     * Adds new candle to the chart
     * @param candle - new candle
     * @param instrument - name of the instrument to update
     */
    addLastCandle(candle: Candle, instrumentSymbol?: string): void;
    /**
     * Updates last candle value
     * @param candle - updated candle
     * @param instrument - name of the instrument to update
     */
    updateLastCandle(candle: Candle, instrumentSymbol?: string): void;
    /**
     * Updates candle series for instrument. By default takes main instrument.
     * @param candles
     * @param instrument
     */
    updateCandles(candles: Array<Candle>, instrumentSymbol?: string): void;
    /**
     * Sets offsets to viewport.
     * @param offsets - new offsets
     */
    setOffsets(offsets: Partial<ChartConfigComponentsOffsets>): void;
    /**
     * Returns a SeriesDrawer object based on the provided drawerType.
     * @param {BarType} drawerType - The type of the drawer to be returned.
     * @returns {SeriesDrawer | undefined} - The SeriesDrawer object corresponding to the provided drawerType or undefined if not found.
     */
    getDataSeriesDrawer(drawerType: BarType): SeriesDrawer | undefined;
    /**
     * Registers a new chart type drawer or overrides default drawer if drawerType is {BarType}.
     * @param drawerType {string} - a unique name for the drawer, could be {BarType} - in this case will override default drawer for the type
     * @param drawer {ChartTypeDrawer} - an implementation of the drawer
     */
    registerDataSeriesTypeDrawer(drawerType: DataSeriesType, drawer: SeriesDrawer): void;
    /**
     * Updates the price increments of a given instrument if they are not valid or not defined.
     * If the price increments are not valid or not defined, it will set them to a default value.
     * @param {ChartInstrument} instrument - The instrument to update the price increments for.
     */
    private updatePriceIncrementsIfNeeded;
    /**
     * Returns an Observable that emits a void value whenever the offsetsChanged event is triggered.
     * @returns {Observable<void>} An Observable that emits a void value whenever the offsetsChanged event is triggered.
     */
    observeOffsetsChanged(): Observable<void>;
    /**
     * Returns an Observable that emits the BarType whenever the chart type is changed.
     * @returns {Observable<BarType>} An Observable that emits the BarType whenever the chart type is changed.
     */
    observeChartTypeChanged(): Observable<BarType>;
    /**
     * Returns an Observable that emits a void value when the candles in the chart model change.
     * The Observable is obtained by calling the observeCandlesChanged method of the chartModel object.
     * @returns {Observable<void>} An Observable that emits a void value when the candles in the chart model change.
     */
    observeCandlesChanged(): Observable<void>;
    /**
     * Returns an Observable that emits a void value when the candles are updated in the chart model.
     * The Observable is obtained from the candlesUpdatedSubject of the chartModel.
     * @returns {Observable<void>} Observable that emits a void value when the candles are updated.
     */
    observeCandlesUpdated(): Observable<void>;
}
