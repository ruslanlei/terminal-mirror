/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { XAxisLabelWeighted } from '../x-axis-labels.generator';
import { ParsedTimeFormat } from './parser/time-formats.model';
/**
 * Generates `weight` based on the {@link ParsedTimeFormat}
 * @example
 * const timeFormat: ParsedTimeFormat = {
 *  key: 'day',
 *  value: 15,
 *  exact: false
 * }
 * const weight = getWeightFromTimeFormat(timeFormat); // 415
 */
export declare const getWeightFromTimeFormat: (format: ParsedTimeFormat) => number;
/**
 * Group {@link XAxisLabelWeighted} by `weight` in a `Record<number, XAxisLabelWeighted[]>`
 * @example
 * const groupedLabels = {
 *		601: Array(359),
 *		415: Array(1685),
 *		...
 * 	}
 */
export declare const groupLabelsByWeight: (weightedLabels: XAxisLabelWeighted[]) => Record<number, XAxisLabelWeighted[]>;
/**
 * FilterMap grouped {@link XAxisLabelWeighted} labels by `coverUpLevel` value
 *
 * @see
 * `coverUpLevel` - is a ratio, which tells us how much more space the widest label
 * will take relative to the candle width
 * @example
 * const maxLabelWidthPx = 10;
 * const meanCandleWidthPx = 5;
 * const coverUpLevel = Math.round(10 / 5); // 2
 *
 * // `coverUpLebel = 2` means that label for a candle take `2x` more width
 * // than the candle on the screen for that label.
 * // That kind of fact give us a hint, that we can't draw labels for `i - 1` and `i + 1` candles,
 * // because it wouldn't be enough space (`i` candle label will take all the place).
 * // But we can draw labels for `i - 2` and `i + 2` candles.
 * @see
 * That algorightm do exactly that - it filters out labels (taking in mind its weight, weight is a priority) that couldn't be drawn
 * because there's not enough space for them.
 */
export declare const filterMapGroupedLabelsByCoverUpLevel: (labelsGroupedByWeight: Record<number, XAxisLabelWeighted[]>, coverUpLevel: number) => XAxisLabelWeighted[];
