/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { HighLowProvider } from './scaling/auto-scale.model';
import VisualCandle from './visual-candle';
import { HighLowWithIndex } from './scale.model';
import { CandleSeriesModel } from './candle-series.model';
/**
 * Candles high low provider.
 * @param candleSeriesModel
 * @doc-tags viewport,scaling
 */
export declare const createCandleSeriesHighLowProvider: (candleSeriesModel: CandleSeriesModel) => HighLowProvider;
/**
 * Calculates the high and low values for given candles array.
 * @param visualCandles
 */
export declare const calculateCandlesHighLow: (visualCandles: VisualCandle[]) => HighLowWithIndex;
