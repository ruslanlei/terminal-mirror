/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { VisualCandleCalculator } from './chart.model';
import { Candle } from '../../model/candle.model';
export declare const defaultCandleTransformer: VisualCandleCalculator;
export declare const hollowCandleTransformer: VisualCandleCalculator;
export declare const trendCandleTransformer: VisualCandleCalculator;
export declare const getCandleIsActive: (candle: Candle, activeCandle?: Candle) => boolean;
