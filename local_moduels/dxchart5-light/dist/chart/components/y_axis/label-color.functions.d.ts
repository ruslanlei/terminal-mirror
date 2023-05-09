/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { PriceMovement } from '../../model/candle-series.model';
import { FullChartColors, YAxisLabelsColors } from '../../chart.config';
export declare const DEFAULT_LABEL_COLOR = "#FF00FF";
export declare const getPrimaryLabelTextColor: (lastPriceMovement: PriceMovement, colors: YAxisLabelsColors) => string;
export declare const resolveColorForBar: (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare const resolveColorForLine: (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare const resolveColorForCandle: (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare const resolveColorForArea: (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare const resolveColorForScatterPlot: (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare const resolveColorForHistogram: (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare const resolveColorForBaseLine: (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare const resolveColorForTrendAndHollow: (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare const resolveDefaultColorForLabel: () => string;
