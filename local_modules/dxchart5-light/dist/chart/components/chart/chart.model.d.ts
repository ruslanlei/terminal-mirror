/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable, Subject } from 'rxjs';
import { PriceAxisType } from '../../../common/numeric-axis-labels.generator';
import { ChartBaseElement } from '../../chart-base-element';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { BarType, ChartConfigComponentsOffsets, FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../drawers/canvas.model';
import EventBus from '../../event-bus';
import { ChartResizeHandler } from '../../inputhandlers/chart-resize.handler';
import { CandleSeriesColors, CandleSeriesModel, PartialCandleSeriesColors } from '../../model/candle-series.model';
import { Candle } from '../../model/candle.model';
import { DataSeriesType } from '../../model/data-series.config';
import { ScaleModel } from '../../model/scale.model';
import { Index, Pixel, Price, Timestamp, Unit } from '../../model/scaling/viewport.model';
import VisualCandle from '../../model/visual-candle';
import { PaneManager } from '../pane/pane-manager.component';
import { PaneComponent } from '../pane/pane.component';
import { LabelGroup } from '../y_axis/price_labels/y-axis-labels.model';
import { CandleSeries, ChartInstrument } from './chart.component';
import { SecondaryChartColorsPool } from './secondary-chart-colors-pool';
export type VisualCandleCalculator = (candle: Candle, options: {
    width: Unit;
    x: Unit;
    prevCandle?: Candle;
    activeCandle?: Candle;
}) => VisualCandle;
export type LastCandleLabelHandler = (labels: LabelGroup, candleSeries: CandleSeriesModel) => void;
export type CandleWidthCalculator = (candle: Candle) => Unit;
export declare class ChartModel extends ChartBaseElement {
    private paneManager;
    bus: EventBus;
    private canvasModel;
    config: FullChartConfig;
    scaleModel: ScaleModel;
    formatterFactory: (format: string) => (timestamp: number) => string;
    mainCanvasParent: Element;
    private canvasBoundsContainer;
    chartResizeHandler: ChartResizeHandler;
    private prevChartWidth;
    private prevYWidth;
    /**
     * Candles aggregation period in ms. Required for future candles calculation.
     */
    private period;
    candleSeries: Array<CandleSeriesModel>;
    get mainCandleSeries(): CandleSeriesModel;
    get secondaryCandleSeries(): Array<CandleSeriesModel>;
    readonly candlesUpdatedSubject: Subject<void>;
    readonly candlesSetSubject: Subject<void>;
    readonly candlesPrependSubject: Subject<number>;
    readonly nextCandleTimeStampSubject: Subject<void>;
    readonly axisTypeSetSubject: Subject<PriceAxisType>;
    readonly chartTypeChanged: Subject<BarType>;
    readonly mainInstrumentChangedSubject: Subject<ChartInstrument>;
    readonly scaleInversedSubject: Subject<void>;
    readonly offsetsChanged: Subject<void>;
    private candlesTransformersByChartType;
    lastCandleLabelsByChartType: Partial<Record<BarType, LastCandleLabelHandler>>;
    private candleWidthByChartType;
    secondaryChartColors: SecondaryChartColorsPool;
    lastTimeFrame: TimeFrameRange;
    basicScaleViewportTransformer: (visualCandleSource: VisualCandle[]) => void;
    timeFrameViewportTransformer: (timeframe: [number, number], zoomIn?: boolean | null) => void;
    private FAKE_CANDLES_DEFAULT;
    readonly pane: PaneComponent;
    constructor(paneManager: PaneManager, bus: EventBus, canvasModel: CanvasModel, config: FullChartConfig, scaleModel: ScaleModel, formatterFactory: (format: string) => (timestamp: number) => string, mainCanvasParent: Element, canvasBoundsContainer: CanvasBoundsContainer, chartResizeHandler: ChartResizeHandler);
    /**
     * Method that activates the canvas bounds container and subscribes to its bounds changes and bar resizer changes.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * This method keeps the same candle width on chart canvas resize, so chart candles aren't squeezed when canvas becomes smaller
     * If chart width was changed after Yaxis width changed, scale will be adjusted to right/left, and visually nothing will be changed
     * @private
     * @param nextCB - Next chart bounds
     */
    private handleChartResize;
    /**
     * This method recalculates the zoom level for the Y-axis of the viewport model and triggers a redraw of the chart on the canvas.
     */
    recalculateViewportModelZoomY(): void;
    /**
     * Sets the main candle series with the provided candles and instrument.
     * @param {Array<Candle>} candles - The array of candles to set as the main candle series.
     * @param {ChartInstrument} instrument - The instrument to set for the main candle series.
     * @returns {void}
     */
    setMainCandleSeries(candles: Array<Candle>, instrument: ChartInstrument): void;
    /**
     * Sets a secondary candle series based on the provided candles array and instrument.
     * @param {Array<Candle>} candles - An array of candles to set as the secondary candle series.
     * @param {ChartInstrument} instrument - The instrument to set as the secondary candle series. Defaults to the main candle series instrument.
     * @param {boolean} recalculateAndUpdate - A boolean indicating whether to recalculate and update the candle series. Defaults to true.
     * @returns {CandleSeriesModel | undefined} - The newly created secondary candle series model or undefined if it could not be created.
     */
    setSecondaryCandleSeries(candles: Array<Candle>, instrument?: ChartInstrument, recalculateAndUpdate?: boolean): CandleSeriesModel | undefined;
    /**
     * Shouldn't be called outside chart-core, use ChartComponent#setAllSeries instead
     * @param mainSeries
     * @param secondarySeries
     */
    setAllSeries(mainSeries: CandleSeries, secondarySeries: CandleSeries[]): void;
    /**
     * Recalculates the period of the main candle series based on the data points.
     * If a period is detected, it is set as the new period.
     */
    recalculatePeriod(): void;
    /**
     * This function checks if the autoScaleOnCandles state is true. If it is, it calls the doBasicScale() function and then calls the autoScale() function with a true parameter.
     * @function
     * @name autoScaleOnCandles
     * @memberof ClassName
     * @returns {void}
     */
    autoScaleOnCandles(): void;
    /**
     * Applies the basic scale viewport transformer to the visual points of the main candle series and fires a draw event.
     */
    doBasicScale(): void;
    /**
     * Changes the time frame scale to the previous one and redraws the chart.
     * @param {boolean | null} zoomIn - If true, zooms in the chart, if false, zooms out the chart, if null, does not zoom.
     * @returns {void}
     */
    doPreviousTimeFrameScale(zoomIn?: boolean | null): void;
    /**
     * Saves the current timeframe by getting the start and end timestamps of the visual candles in the main candle series.
     * If there are no visual candles, the last timeframe is not updated.
     */
    rememberCurrentTimeframe(): void;
    /**
     * Shouldn't be called outside chart-core, use ChartComponent#updateAllSeries instead
     * @param mainSeries
     * @param secondarySeries
     */
    updateAllSeries(mainSeries: CandleSeries, secondarySeries: CandleSeries[]): void;
    /**
     * Creates a secondary candle series model for a given instrument.
     * @param {ChartInstrument} instrument - The instrument for which the secondary candle series model is created.
     * @returns {CandleSeriesModel | undefined} - The created secondary candle series model or undefined if it cannot be created.
     */
    createSecondaryCandleSeriesModel(instrument: ChartInstrument): CandleSeriesModel | undefined;
    /**
     * Creates a new CandleSeriesModel object and adds it to the chart.
     * @param {ChartInstrument} instrument - The instrument to be displayed in the chart.
     * @param {CandleSeriesColors} [colors] - Optional colors for the candle series.
     * @returns {CandleSeriesModel} - The newly created CandleSeriesModel object.
     */
    private createCandleSeriesModel;
    /**
     * Removes a secondary candle series from the chart and returns its colors.
     * @param {CandleSeriesModel} series - The candle series to be removed.
     * @returns {CandleSeriesColors | undefined} - The colors of the removed series or undefined if the series was not found.
     */
    removeSecondaryCandleSeries(series: CandleSeriesModel): CandleSeriesColors | undefined;
    /**
     * Adjusts secondary series to present them nicely with main series:
     * - fill gaps in secondarySeries with fake candles OHLC of same price (=close price)
     * - do not add any candles which are not in main series
     * @param mainSeries - main series
     * @param secondarySeries - secondarySeries to adjust
     */
    private secondarySeriesAdjustments;
    /**
     * Updates the configuration of the secondary candle series with the provided colors and instrument symbol.
     * @param {PartialCandleSeriesColors} config - The partial configuration object containing the colors to update.
     * @param {string} instrumentSymbol - The symbol of the instrument to update the colors for.
     * @param {DataSeriesType} chartType - The type of chart to update the series to.
     * @returns {void}
     */
    updateSecondaryCandleSeriesConfig(config: PartialCandleSeriesColors, instrumentSymbol: string, chartType: DataSeriesType): void;
    /**
     * Sets the autoScale property of the scaleModel object.
     * @param {boolean} auto - The value to be set for the autoScale property.
     * @returns {void}
     */
    setAutoScale(auto: boolean): void;
    /**
     * Returns the effective width of the Y axis.
     *
     * @function
     * @name getEffectiveYAxisWidth
     * @returns {number} The effective width of the Y axis.
     */
    getEffectiveYAxisWidth(): number;
    /**
     * Returns the effective width of the chart.
     *
     * @function
     * @returns {number} The effective width of the chart.
     */
    getEffectiveChartWidth(): number;
    /**
     * Returns the effective height of the chart.
     *
     * @returns {number} The effective height of the chart.
     */
    getEffectiveChartHeight(): number;
    /**
     * Updates the offsets of the chart components and redraws the chart.
     * @param {Partial<ChartConfigComponentsOffsets>} offsets - The new offsets to be applied to the chart components.
     * @returns {void}
     */
    setOffsets(offsets: Partial<ChartConfigComponentsOffsets>): void;
    /**
     * Returns the offsets of the chart components.
     * @returns {ChartConfigComponentsOffsets} The offsets of the chart components.
     */
    getOffsets(): ChartConfigComponentsOffsets;
    /**
     * Converts "y" in pixels to: price / percent / other value.
     * @param y - source value in pixels
     */
    fromY(y: Pixel): Unit;
    /**
     * Converts "y" in pixels to price
     * @param y - source value in pixels
     * @param candleSeriesModel - (optional) candle series
     */
    priceFromY(y: Pixel, candleSeriesModel?: CandleSeriesModel): Price;
    toY: (value: Price) => Pixel;
    /**
     * Converts index to pixel.
     * @param idx - index of candle
     */
    toX(idx: Index): Pixel;
    /**
     * Returns the baseline of the main candle series.
     * @returns {Unit} The baseline of the main candle series.
     */
    getBaseLine(): Unit;
    /**
     * Transforms X coordinate (relative to canvas element) to Candle object.
     * If extrapolate = false, then it takes leftmost/rightmost existing candle
     */
    candleFromX(x: Pixel, extrapolate?: boolean, selectedCandleSeries?: CandleSeriesModel): Candle;
    /**
     * Returns a candle object based on the provided unit, which is searched for in the visualPoints array of the selectedCandleSeries.
     * If extrapolate is true and the unit is outside the visualPoints array, a fake candle is returned.
     * If extrapolate is false and the unit is outside the visualPoints array, null is returned.
     * If the unit is within the visualPoints array, the corresponding candle object is returned.
     *
     * @param {Unit} unit - The unit to search for in the visualPoints array.
     * @param {boolean} extrapolate - Whether to extrapolate a fake candle if the unit is outside the visualPoints array.
     * @param {CandleSeriesModel} selectedCandleSeries - The candle series to search in. Defaults to the mainCandleSeries.
     * @returns {Candle} - The corresponding candle object, or null if extrapolate is false and the unit is outside the visualPoints array.
     */
    candleFromUnit(unit: Unit, extrapolate?: boolean, selectedCandleSeries?: CandleSeriesModel): Candle;
    /**
     * For given timestamp finds the closest candle in dataset.
     * @param timestamp
     */
    candleFromTimestamp(timestamp: Timestamp, shouldExtrapolate?: boolean): VisualCandle;
    /**
     * For given index returns the closest visual candle, or fake candle with correct X coordinate.
     * @param idx - index of candle
     */
    candleFromIdx(idx: Index): VisualCandle;
    getPeriod: () => number;
    /**
     * Check whether model is ready for drawing.
     */
    isReady(): boolean;
    /**
     * You can use this method to determine logic of visual candle transformation for specified chart type.
     * @param chartType
     * @param calculator
     */
    registerCandlesTransformer(chartType: BarType, calculator: VisualCandleCalculator): void;
    /**
     * You can use this method to determine chart width calculation for specified chart type.
     * @param chartType
     * @param calculator
     */
    registerCandlesWidthCalculator(chartType: BarType, calculator: CandleWidthCalculator): void;
    /**
     * You can use this method to modify labels for last candle.
     * @param chartType
     * @param handler
     */
    registerLastCandleLabelHandler(chartType: BarType, handler: LastCandleLabelHandler): void;
    /**
     * Checks if the main candle series has visual points.
     * @returns {boolean} Returns true if the main candle series has visual points, otherwise false.
     */
    hasCandles(): boolean;
    /**
     * Returns a visual candle object from the main candle series based on the provided index.
     * @param {Index} idx - The index of the visual candle to retrieve.
     * @returns {VisualCandle|undefined} - The visual candle object or undefined if it doesn't exist.
     */
    getVisualCandle(idx: Index): VisualCandle | undefined;
    /**
     * Returns the index of the first data point in the main candle series.
     *
     * @returns {number} The index of the first data point in the main candle series.
     */
    getFirstIdx(): number;
    /**
     * Returns the last index of the data in the mainCandleSeries.
     *
     * @returns {number} - The last index of the data in the mainCandleSeries.
     */
    getLastIdx(): number;
    /**
     * Returns the timestamp of the first candle in the viewport dataset
     * @param dataBased - if false will return timestamp which matches first viewport point even if candle is not available
     * @returns {Timestamp} The timestamp of the first candle
     */
    getFirstTimestamp(dataBased?: boolean): Timestamp;
    /**
     * Returns the timestamp of the last candle in the viewport candle array
     * @param dataBased - if false will return timestamp which matches first viewport point even if candle is not available
     * @returns {Timestamp} The timestamp of the last candle
     */
    getLastTimestamp(dataBased?: boolean): Timestamp;
    /**
     * Sets the timestamp range of the chart by setting the x-axis scale.
     * @param {Timestamp} start - The start timestamp of the range.
     * @param {Timestamp} end - The end timestamp of the range.
     * @returns {void}
     */
    setTimestampRange(start: Timestamp, end: Timestamp): void;
    /**
     * Returns the last candle of the main candle series.
     * @returns {Candle | undefined} The last candle of the main candle series or undefined if the series is empty.
     */
    getLastCandle(): Candle | undefined;
    /**
     * Returns the last visual candle of the main candle series.
     * @returns {VisualCandle | undefined} The last visual candle of the main candle series or undefined if the series is empty.
      
    */
    getLastVisualCandle(): VisualCandle | undefined;
    /**
     * Calculates the maximum number of candles that can fit in the chart width based on the minimum candle width
     * @returns {number} - The maximum number of candles that can fit in the chart width
     */
    getMaxCandlesFitLength(): number;
    /**
     * Returns an array of CandleSeriesModel objects representing the secondary candle series.
     * @returns {Array<CandleSeriesModel>} An array of CandleSeriesModel objects representing the secondary candle series.
     */
    getSecondarySeries(): Array<CandleSeriesModel>;
    /**
     * Checks if a given symbol matches the symbol of a given CandleSeriesModel's instrument.
     * @param {CandleSeriesModel} series - The CandleSeriesModel to check.
     * @param {ChartInstrument['symbol']} symbol - The symbol to compare with the instrument's symbol.
     * @returns {boolean} - Returns true if the symbol matches the instrument's symbol, false otherwise.
     */
    private isSeriesInstrument;
    /**
     * Returns an array of CandleSeriesModel objects that match the provided symbol.
     *
     * @param {string} symbol - The symbol to search for.
     * @returns {CandleSeriesModel[]} - An array of CandleSeriesModel objects that match the provided symbol.
     */
    findSeriesBySymbol(symbol: ChartInstrument['symbol']): CandleSeriesModel[];
    /**
     * Finds a secondary candle series by symbol
     *
     * @param {string} symbol - The symbol of the chart instrument
     * @returns {CandleSeriesModel | undefined} - The secondary candle series or undefined if not found
     */
    findSecondarySeriesBySymbol(symbol: ChartInstrument['symbol']): CandleSeriesModel | undefined;
    /**
     * Reindexes candles based on a given series.
     * @private
     * @param {Array<Candle>} baseSeries - The base series to search for candles.
     * @param {Array<Candle>} series - The series to reindex.
     * @returns {Array<Candle>} - The reindexed series.
     */
    private reindexCandlesBasedOnSeries;
    /**
     * Checks if a given candle is within the viewport.
     * @param {number} idx - The index of the candle to check.
     * @returns {boolean} - True if the candle is within the viewport, false otherwise.
     */
    isCandleInViewport(idx: number): boolean;
    /**
     * Updates candles in series. Default is main series.
     * Any number of candles may be provided - they would be matched by their index and updated.
     * @param candles - any list of new (updated) candles
     * @param instrument - name of instrument to update
     */
    updateCandles(candles: Array<Candle>, instrumentSymbol?: string): void;
    /**
     * Triggers when candles set or updated
     */
    observeCandlesChanged(): Observable<void>;
    /**
     * Returns an array of Candle objects representing the data points of the main candle series.
     * @returns {Array<Candle>} An array of Candle objects.
     */
    getCandles(): Array<Candle>;
    /***
     * Returns candles array which consists of real candles and fake candles if from and to can't be satisfied with real ones.
     * @param from - if not specified set to first candle timestamp
     * @param to - if not specified set to last candle timestamp + right offset
     */
    getCandlesWithFake(from?: number, to?: number): Candle[];
    /**
     * Returns the number of candles in the main candle series.
     *
     * @returns {number} The number of candles in the main candle series.
     */
    getCandlesCount(): number;
    /**
     * Returns the number of candles with the right offset.
     * @returns {number} - The number of candles with the right offset.
     */
    getCandlesCountWithRightOffset(): number;
    /**
     * Clears the data of all candle series in the chart.
     */
    clearData(): void;
    /**
     * Adds new candles array to the existing one at the start, mostly used in lazy loading
     * @param target - initial candles array
     * @param prependUpdate - additional candles array, which will be added to the target array
     */
    prependCandles(target: Candle[], prependUpdate: Candle[]): UpdateCandlesResult;
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
}
export interface UpdateCandlesResult {
    prepended: number;
    appended?: number;
    candles: Candle[];
}
export type TimeFrameRange = [number, number];
