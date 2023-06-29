/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { DataSeriesPoint } from '../model/data-series.model';
/**
 * Automatically detect period of candle source.
 * Cannot just take first-second candles distance because of non-trading hours.
 * Naive approach:
 *  1. get all time distances between candles
 *  2. the most frequent distance = period
 * @param candles
 * @doc-tags tricky,period
 */
export declare function autoDetectPeriod(candles: Array<DataSeriesPoint>): number | undefined;
