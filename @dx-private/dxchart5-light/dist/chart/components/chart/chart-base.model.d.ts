/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Candle } from '../../model/candle.model';
import { DataSeriesPoint, VisualSeriesPoint } from '../../model/data-series.model';
import { Index, Timestamp } from '../../model/scaling/viewport.model';
import VisualCandle from '../../model/visual-candle';
export type BaseType = 'candle' | 'point';
type DataPoint<T extends BaseType> = T extends 'candle' ? Candle : DataSeriesPoint;
type VisualPoint<T extends BaseType> = T extends 'candle' ? VisualCandle : VisualSeriesPoint;
/**
 * This model is an abstraction which describes manipulations tied to the main data series.
 * For example, all x-scale is based on the main data series. If we add a new data series, we need to match its coordinates to the main data series.
 */
export declare class ChartBaseModel<T extends BaseType = 'point'> {
    type: T;
    mainDataPoints: DataPoint<T>[];
    mainVisualPoints: VisualPoint<T>[];
    /**
     * Mean data point width in abstract units.
     */
    meanDataWidth: number;
    /**
     * Candles aggregation period in ms. Required for future candles calculation.
     */
    period: number;
    constructor(type: T);
    /**
     * For given timestamp finds the closest candle in dataset.
     * @param timestamp
     */
    dataFromTimestamp(timestamp: Timestamp, shouldExtrapolate?: boolean): VisualPoint<T>;
    /**
     * Recalculates the period of the main candle series based on the data points.
     * If a period is detected, it is set as the new period.
     */
    recalculatePeriod(): void;
    /**
     * For given index returns the closest visual candle, or fake candle with correct X coordinate.
     * @param idx - index of candle
     */
    dataFromIdx(idx: Index): VisualPoint<T>;
}
export {};
