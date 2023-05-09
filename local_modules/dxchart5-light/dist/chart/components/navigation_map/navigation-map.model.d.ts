/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../chart.config';
import { DateTimeFormatterFactory } from '../../time.formatter';
/**
 * Calculates the bounds of a time label based on the provided timestamp, formatterFactory, and config.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} timestamp - The timestamp to be formatted.
 * @param {DateTimeFormatterFactory} formatterFactory - The factory used to create the formatter for the timestamp.
 * @param {FullChartConfig} config - The configuration object for the chart.
 * @returns {[number, number]} - An array containing the width and height of the time label, including padding.
 */
export declare function calcTimeLabelBounds(ctx: CanvasRenderingContext2D, timestamp: number, formatterFactory: DateTimeFormatterFactory, config: FullChartConfig): [number, number];
/**
 * Returns a formatted time label.
 *
 * @param {number} timestamp - The timestamp to format.
 * @param {string} format - The format to use for the timestamp.
 * @param {DateTimeFormatterFactory} formatterFactory - The factory function to create a formatter for the given format.
 * @returns {string} The formatted time label with line breaks instead of spaces.
 */
export declare function getFormattedTimeLabel(timestamp: number, format: string, formatterFactory: DateTimeFormatterFactory): string;
