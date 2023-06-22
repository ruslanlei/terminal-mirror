/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig, DateTimeFormatConfig } from '../chart.config';
export interface TimeFormatterConfig {
    shortDays?: string[];
    shortMonths?: string[];
}
export interface DateTimeFormatter {
    (date: Date | number): string;
}
export type DateTimeFormatterFactory = (format: string) => DateTimeFormatter;
export declare const defaultDateTimeFormatter: () => (date: Date | number) => string;
/**
 * Default chart-components time formatter.
 * @param config
 * @param offsetFunction
 * @doc-tags chart-components,default-config,date-formatter
 */
export declare const dateTimeFormatterFactory: (config: FullChartConfig, offsetFunction: (timezone: string) => (time: number) => Date) => DateTimeFormatterFactory;
export declare const recalculateXFormatter: (xAxisLabelFormat: string | Array<DateTimeFormatConfig>, period: number, formatterFactory: (format: string) => (timestamp: number | Date) => string) => DateTimeFormatter;
