/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable } from 'rxjs';
import { DateFormatter, FullChartConfig } from '../chart.config';
import { DateTimeFormatterFactory } from './date-time.formatter';
export interface TimeZone {
    readonly timeZone: string;
    readonly name: string;
    readonly utcOffset: string;
}
export declare class TimeZoneModel {
    private config;
    private timeZoneChangedSubject;
    private dateTimeFormatterFactory;
    currentTzOffset: number;
    constructor(config: FullChartConfig);
    /**
     * Sets the timezone for the configuration and updates the current timezone offset.
     * @param {string} timeZone - The timezone to set.
     * @returns {void}
     */
    setTimeZone(timeZone: string): void;
    /**
     * Returns an Observable that emits a string value when the time zone is changed.
     * The Observable is created from the timeZoneChangedSubject Subject.
     * @returns {Observable<string>} An Observable that emits a string value when the time zone is changed.
     */
    observeTimeZoneChanged(): Observable<string>;
    /**
     * Initializes a DateTimeFormatterFactory object.
     * @param {DateFormatter} [dateFormatter] - Optional DateFormatter object.
     * @returns {DateTimeFormatterFactory} - Returns a DateTimeFormatterFactory object.
     * If a plain function is provided as the dateFormatter parameter, it will be used as a date formatter without applying UTC datetime override for candles more than 1d period.
     * If a custom date formatter exists, it will be used for datetime formatting applying optionally UTC datetime override for candles more than 1d period.
     * If no dateFormatter is provided, a default DateTimeFormatterFactory object will be returned.
     */
    initFormatterFactory(dateFormatter?: DateFormatter): DateTimeFormatterFactory;
    /**
     * Returns the DateTimeFormatterFactory instance used by this class.
     *
     * @returns {DateTimeFormatterFactory} The DateTimeFormatterFactory instance used by this class.
     */
    getFormatterFactory(): DateTimeFormatterFactory;
    /**
     * Calculates the offset of a given timezone from the local timezone.
     * @private
     * @param {string} timezone - The timezone to calculate the offset for.
     * @returns {number} - The offset of the timezone in milliseconds.
     */
    private getOffset;
    /**
     * Gets the timezone offset value in milliseconds
     * @param {string} timezone name
     * @returns {function(time:Number|Date):Date}
     */
    tzOffset(timezone: string): (time: number) => Date;
}
