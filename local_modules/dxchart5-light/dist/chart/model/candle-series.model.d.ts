/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable, Subject } from 'rxjs';
import { BarType, FullChartColors } from '../chart.config';
import { ChartInstrument } from '../components/chart/chart.component';
import { CandleWidthCalculator, VisualCandleCalculator } from '../components/chart/chart.model';
import { PaneComponent } from '../components/pane/pane.component';
import EventBus from '../event-bus';
import { DeepPartial } from '../utils';
import { Candle } from './candle.model';
import { DataSeriesModel } from './data-series.model';
import { HighLowWithIndex, ScaleModel } from './scale.model';
import { Unit } from './scaling/viewport.model';
import VisualCandle from './visual-candle';
import { DataSeriesType } from './data-series.config';
export type PriceMovement = 'up' | 'down' | 'none';
export declare class CandleSeriesModel extends DataSeriesModel<Candle, VisualCandle> {
    private eventBus;
    private readonly candlesTransformersByChartType;
    private readonly candleWidthByChartType;
    colors: CandleSeriesColors;
    zippedHighLow: HighLowWithIndex;
    activeCandle?: Candle;
    currentPrice: number | undefined;
    previousPrice: number | undefined;
    lastPriceMovement: PriceMovement;
    lastVisualCandleChangedSubject: Subject<void>;
    get dataPoints(): Candle[];
    set dataPoints(points: Candle[] | Candle[][]);
    private _instrument;
    get instrument(): ChartInstrument;
    set instrument(instrument: ChartInstrument);
    meanCandleWidth: Unit;
    constructor(paneComponent: PaneComponent, id: number, eventBus: EventBus, scaleModel: ScaleModel, instrument: ChartInstrument, candlesTransformersByChartType: Partial<Record<DataSeriesType, VisualCandleCalculator>>, candleWidthByChartType: Partial<Record<DataSeriesType, CandleWidthCalculator>>, colors?: CandleSeriesColors);
    /**
     * Recalculates data viewport indexes based on xStart and xEnd parameters or values from scaleModel.
     * Calls superclass method for calculation, recalculates zipped high/low data points, and fires draw event.
     *
     * @param {number} [xStart=this.scaleModel.xStart] - Start index of visible data range.
     * @param {number} [xEnd=this.scaleModel.xEnd] - End index of visible data range.
     * @returns {void}
     */
    recalculateDataViewportIndexes(xStart?: number, xEnd?: number): void;
    /**
     * Calculates the price movement of the last candle by comparing the open and close prices.
     * Sets the lastPriceMovement property of the instance with the name of the direction of the price movement.
     *
     * @returns {void}
     */
    private applyPriceMovement;
    /**
     * Should be called 1 time when candles are set / updated to chart.
     */
    recalculateVisualPoints(): void;
    /**
     * Used for optimization when we have to update only the last candle
     * @doc-tags tricky
     */
    /**
     * Recalculates and returns the zipped high-low values for the visible data range.
     * Uses the visualPoints, dataIdxStart, and dataIdxEnd properties of the instance to calculate high-low values.
     *
     * @returns {HighLowWithIndex} - An object containing the high-low values along with their corresponding indexes.
     */
    recalculateZippedHighLow(): HighLowWithIndex;
    /**
     * Updates the current price and the last price movement.
     * Compares the current price with the previous price, and sets the lastPriceMovement property accordingly.
     *
     * @param {number} currentPrice - The current price of the asset.
     * @returns {void}
     */
    updateCurrentPrice(currentPrice: number): void;
    /**
     * Updates the colors used to render the candlestick series and recalculates the visual points.
     * Merges the newConfig object with the existing colors object of the instance.
     * Calls the recalculateVisualPoints method of the instance to update the visual points using the new color configuration.
     *
     * @param {PartialCandleSeriesColors} newConfig - The new color configuration to be merged with the existing colors object.
     * @returns {void}
     */
    updateCandleSeriesColors(newConfig: PartialCandleSeriesColors): void;
    /**
     * Returns an observable that emits an event when the last visual candle changes.
     * Returns the observable associated with the lastVisualCandleChangedSubject of the instance.
     *
     * @returns {Observable<void>} - An observable that emits an event when the last visual candle changes.
     */
    observeLastVisualCandleChanged(): Observable<void>;
    doDeactivate(): void;
    /**
     * Transforms candles list into visual candles.
     * NOTE: should be used only on FULL candles array, no single transformations, since candle coordinates depend on each other.
     * OR provide startX :)
     * @param candles
     * @param startX
     */
    toVisualPoints(candles: Array<Candle>, startX?: number): Array<VisualCandle>;
    /**
     * Recalculates the mean candle width using the given array of visual candles.
     * Calculates the sum of widths of all visual candles and divides it by the total number of candles to get the mean candle width.
     * Sets the meanCandleWidth property of the instance with the calculated value.
     *
     * @param {VisualCandle[]} visualCandles - An array of visual candles to be used for mean candle width calculation.
     * @returns {void}
     */
    recalculateMeanCandleWidth(visualCandles: VisualCandle[]): void;
    /**
     * Sets the active candle for the chart and recalculates the visual points.
     * Sets the activeCandle property of the instance with the provided candle parameter.
     * Calls the recalculateVisualPoints method of the instance to recalculate the visual points using the new active candle.
     *
     * @param {Candle} candle - The candle to be set as active candle.
     * @returns {void}
     */
    setActiveCandle(candle: Candle): void;
    /**
     * Clears all the data and visual elements from the chart.
     * Sets the dataPoints property of the instance to an empty array.
     * Calls the clearVisualCandles and clearPrices methods of the instance to clear the visual elements from the chart.
     *
     * @returns {void}
     */
    clearData(): void;
    /**
     * Clears the price-related properties of the instance.
     * Sets the previousPrice, currentPrice and lastPriceMovement properties of the instance to undefined, undefined, and 'none' respectively.
     *
     * @returns {void}
     */
    clearPrices(): void;
    /**
     * Clears the visualPoints property of the instance.
     * Sets the visualPoints property of the instance to an empty array.
     *
     * @returns {void}
     */
    clearVisualCandles(): void;
}
/**
 * Checks if the provided chart type is linked.
 * @param {BarType} chartType - The type of chart to check.
 * @returns {boolean} - Returns true if the chart type is linked, false otherwise.
 */
export declare function isLinked(chartType: BarType): boolean;
export type CandleSeriesColors = FullChartColors;
export type PartialCandleSeriesColors = DeepPartial<CandleSeriesColors>;
