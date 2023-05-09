/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import VisualCandle from '../../../model/visual-candle';
import { TimeFormatMatcher } from './parser/time-formats-matchers.functions';
import { TimeFormatWithDuration } from './parser/time-formats.model';
export interface WeightedPoint {
    weight: number | null;
}
/**
 * Transforms {@link VisualCandle} to {@link WeightedPoint}
 */
export declare function mapCandlesToWeightedPoints(visualCandles: VisualCandle[], weightToTimeFormatMatcherDict: Record<number, TimeFormatMatcher>, tzOffset: (time: number) => Date): WeightedPoint[];
/**
 * Generates two maps for a given config.
 * 1st map is { [weight]: [format] } to control which format should be used for a given weight;
 * 2nd map is { [weight]: [Matcher] } to test a date for a match for a given weight;
 *
 * @example
 * const config: Record<TimeFormatWithDuration, string> = {
 *  'day_15': 'dd.MM',
 *  'month_7!': 'MMM'
 * }
 * const { map1, map2 } = generateWeightsMapForConfig(config);
 * // map1 = { 415: 'dd.MM', 607: 'MMM' };
 * // map2 = { 415: DayMatcher, 607: MonthMatcher }
 */
export declare const generateWeightsMapForConfig: (config: Record<TimeFormatWithDuration, string>) => {
    weightToTimeFormatsDict: Record<number, string>;
    weightToTimeFormatMatcherDict: Record<number, TimeFormatMatcher>;
};
