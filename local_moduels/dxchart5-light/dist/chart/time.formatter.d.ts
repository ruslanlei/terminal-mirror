/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { XLabelFormats, TimeLabelConfig, DateTimeFormatConfig } from './config/labels.config';
import { FullChartConfig } from './chart.config';
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
 * Default chart-core time formatter.
 * @param config
 * @param offsetFunction
 * @doc-tags chart-core,default-config,date-formatter
 */
export declare const dateTimeFormatterFactory: (config: FullChartConfig, offsetFunction: (timezone: string) => (time: number) => Date) => DateTimeFormatterFactory;
/**
 * Returns a function that converts a date or timestamp to a date object with a fixed timezone.
 * @param {DateTimeFormatterFactory} formatter - A function that returns a DateTimeFormatter instance.
 * @returns {Function} - A function that takes a date or timestamp and returns a date object with a fixed timezone.
 
*/
export declare function makeFixedTimezoneConverter(formatter: DateTimeFormatterFactory): (date: Date | number) => Date;
export declare const recalculateXFormatter: (xAxisLabelFormat: string | Array<DateTimeFormatConfig>, period: number, formatterFactory: (format: string) => (timestamp: number | Date) => string) => DateTimeFormatter;
/**
 * Creates a DateTimeFormatter based on the provided TimeLabelConfig, XLabelFormats and DateTimeFormatterFactory.
 * @param {TimeLabelConfig} labelConfig - The configuration object for the time label.
 * @param {XLabelFormats} formats - The formats object for the x-axis labels.
 * @param {DateTimeFormatterFactory} formatterFactory - The factory function for creating DateTimeFormatter.
 * @returns {DateTimeFormatter} - The DateTimeFormatter created based on the provided parameters.
 * @throws {Error} - If the format is missing in xAxis.labels.formats for the provided label type.
 */
export declare function createTimeFormatter(labelConfig: TimeLabelConfig, formats: XLabelFormats, formatterFactory: DateTimeFormatterFactory): DateTimeFormatter;
