/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ParsedTimeFormat, TimeFormatWithDuration } from './time-formats.model';
/**
 * Parses the {@link TimeFormatWithDuration}
 * and returns {@link ParsedTimeFormat} for a successfil parsing and `null`
 * if the {@link TimeFormatWithDuration} couldn't be parsed.
 * @example
 * const timeFormat = 'day_14!';
 * const parsedTimeFormat = parseTimeFormatsFromKey(timeFormat); // { key: 'day', value: 14, exact: true }
 *
 * @example
 * const timeFormat = 'week-weekday_3_5';
 * const parsedTimeFormat = parseTimeFormatsFromKey(timeFormat); // { key: 'week-weekday', week: 3, weekday: 5 }
 *
 * @example
 * const timeFormat = 'bla-bla_1234';
 * const parsedTimeFormat = parseTimeFormatsFromKey(timeFormat); // null
 */
export declare const parseTimeFormatsFromKey: (format: TimeFormatWithDuration) => ParsedTimeFormat | null;
