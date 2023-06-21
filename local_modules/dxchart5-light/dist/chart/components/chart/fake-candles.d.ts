/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Candle } from '../../model/candle.model';
import { DataSeriesPoint, VisualSeriesPoint } from '../../model/data-series.model';
import { Index } from '../../model/scaling/viewport.model';
import VisualCandle from '../../model/visual-candle';
/**
 * Generates fake candle for left and right "out of data range" zones.
 * Requires period to calculate the fake timestamp.
 * The timestamp won't take session breaks or holidays into account.
 */
export declare const fakeVisualCandle: (dataPoints: Candle[], visualCandles: VisualCandle[], candleWidth: number, index: Index, period?: number) => VisualCandle;
export declare const fakeVisualPoint: (dataPoints: DataSeriesPoint[], visualPoints: VisualSeriesPoint[], meanDataWidth: number, index: Index, period?: number) => VisualSeriesPoint;
export declare const fakeCandle: (candles: Candle[], index: Index, period?: number) => Candle;
export declare const fakeDataPoint: (candles: DataSeriesPoint[], index: Index, period?: number) => DataSeriesPoint;
