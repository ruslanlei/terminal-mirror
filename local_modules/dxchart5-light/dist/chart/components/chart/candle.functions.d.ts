/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Candle } from '../../model/candle.model';
/**
 * In the early days of Futures contract there is no much trading,
 * so there is not enough information to build a candle: only Open/Close value available.
 * In this case Daily candle, which we receive, must be completed to full OHLC with equal values.
 */
export declare const prepareCandle: (candle: Candle) => Candle;
/**
 * Adds index to candles according to their array index.
 * @param candles
 */
export declare const reindexCandles: (candles: Array<Candle>) => void;
export declare const deleteCandlesIndex: (candles: Array<Candle>) => void;
