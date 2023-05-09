/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { DateTimeFormatter } from '../time.formatter';
export type LabelType = 'minute' | 'hour' | 'day' | 'weekday' | 'month' | 'year' | 'number' | 'percent';
export type XLabelFormats = {
    [K in LabelType]?: string | Formatter;
};
export interface DateTimeFormatConfig {
    format: string;
    showWhen?: {
        periodLessThen?: number;
        periodMoreThen?: number;
    };
    customFormatter?: DateTimeFormatter;
}
export interface LabelConfig {
    type: LabelType;
    step?: number;
    round?: boolean;
    showWhen?: LabelShowPredicates;
    level?: number;
}
export type Formatter = (value: unknown) => string;
export interface TimeLabelConfig extends LabelConfig {
    showWhen?: TimeLabelShowPredicates;
}
export interface LabelShowPredicates {
    totalRangeMoreThen?: number;
    totalRangeLessThen?: number;
    viewRangeMoreThen?: number;
    viewRangeLessThen?: number;
}
export interface TimeLabelShowPredicates extends LabelShowPredicates {
    periodLessThen?: number;
    periodMoreThen?: number;
    thisWeek?: boolean;
}
