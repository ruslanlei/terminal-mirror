/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ParsedTimeFormat } from './time-formats.model';
/**
 * {@link TimeFormatMatcher} is a function that controls does passed {@link Date} match the {@link ParsedTimeFormat}
 * that matcher is responsible for.
 * Moreover {@link TimeFormatMatcher} compares dates to prevent including the same date
 * for a corresponding period twice.
 * @see
 * Basically you need to use {@link timeFormatMatcherFactory}, because it'll catch up the
 * matcher for the given {@link ParsedTimeFormat} automatically
 * @example
 * // In examples we will test the `currentDate`
 *
 * const currentDate = new Date('Fri Feb 10 2023 14:50:10 GMT+0500');
 * const prevDate = new Date('Fri Feb 09 2023 14:50:10 GMT+0500');
 * // that `timeFormat` means, that we want to get only dates
 * // that represents days that are divisible by 10 (10, 20, 30)
 * const timeFormat: ParsedTimeFormat = {
 * 	key: 'day',
 *     value: 10,
 *     exact: false
 * };
 * // `timeFormatMatcherFactory` will automatically get the matcher for a given `timeFormat`
 * const matcher = timeFormatMatcherFactory(timeFormat)
 *
 * // `true`, because `Feb 10' is divisible by 10,
 * // and the `previousDate` was not the same `day`
 * const applicable = matcher(currentDate)(prevDate); // true
 *
 * @example
 * const currentDate = new Date('Fri Feb 10 2023 14:50:10 GMT+0500');
 * const prevDate = new Date('Fri Feb 09 2023 14:50:10 GMT+0500');
 * // that `timeFormat` means, that we want to get only dates
 * // that represents months that are divisible by 3 (March, June etc.)
 * const timeFormat: ParsedTimeFormat = {
 * 	key: 'month',
 *     value: 3,
 *     exact: false
 * };
 * const matcher = timeFormatMatcherFactory(timeFormat)
 * // `false`, because `Feb 02' i.e 2
 * // is not divisible by 3, and the `previousDate` is `Feb` i.e the same `month`
 * const applicable = matcher(currentDate)(prevDate); // false
 */
export type TimeFormatMatcher = (currentDate: Date, prevDate: Date) => boolean;
/**
 * Factory that return a {@link TimeFormatMatcher} function for a given {@link ParsedTimeFormats}
 * @see
 * Detailed explanation you can find here {@link TimeFormatMatcher}
 */
export declare const timeFormatMatcherFactory: <T extends ParsedTimeFormat>(timeFormat: T) => TimeFormatMatcher;
