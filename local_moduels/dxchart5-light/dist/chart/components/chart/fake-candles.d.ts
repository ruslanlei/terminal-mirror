/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Index } from '../../model/scaling/viewport.model';
import VisualCandle from '../../model/visual-candle';
import { Candle } from '../../model/candle.model';
import { CandleSeriesModel } from '../../model/candle-series.model';
/**
 * Generates fake candle for left and right "out of data range" zones.
 * Requires period to calculate the fake timestamp.
 * The timestamp won't take session breaks or holidays into account.
 */
export declare const fakeVisualCandle: (candleSeries: CandleSeriesModel, index: Index, period?: number) => VisualCandle;
export declare const fakeCandle: (candles: Candle[], index: Index, period?: number) => Candle;
