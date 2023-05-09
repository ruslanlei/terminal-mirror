/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartConfigComponentsOffsets } from '../../chart.config';
import { HighLow, HighLowProvider } from '../../model/scaling/auto-scale.model';
/**
 * Constraint on top of high low provider - makes additional offset bounds.
 * @doc-tags viewport,scaling
 * @param offsetsProvider
 * @doc-tags viewport,scaling,offsets
 */
export declare const createHighLowOffsetCalculator: (offsetsProvider: () => ChartConfigComponentsOffsets) => (highLow: HighLow) => {
    low: number;
    high: number;
};
/**
 * Constraint on top of high low provider - makes additional offset bounds.
 * @doc-tags viewport,scaling
 * @param offsetsProvider
 * @param highLowProvider
 * @doc-tags viewport,scaling,offsets
 */
export declare const createCandlesOffsetProvider: (offsetsProvider: () => ChartConfigComponentsOffsets, highLowProvider: HighLowProvider) => HighLowProvider;
