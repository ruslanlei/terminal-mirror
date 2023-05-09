/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartInstrument } from '../components/chart/chart.component';
export declare class PriceIncrementsUtils {
    static DEFAULT_INCREMENT: number;
    static DEFAULT_PRECISION: number;
    static RELATIVE_EPS: number;
    static MAXIMUM_PRECISION: number;
    /**
     * Automatically detects increment of provided value range.
     * Naive algorithm takes 1st mantissa number's :
     * range=124.14 	=> increment=1
     * range=6300.02931	=> increment=10
     * range=0.0018		=> increment=0.00001
     *
     * @param valueRange
     * @doc-tags tricky,y-axis
     */
    static autoDetectIncrementOfValueRange(valueRange: number): number;
    /**
     * Gets number of digits in number.
     * 20 => 2
     * 100 => 3
     * 7 => 1
     * 1.123 => 1
     * -200 => 3
     * -1234567.00031 => 7
     * 0.0001 = > -4
     * @param x - any number
     */
    private static getDigitsInNumber;
    static getPriceIncrement(price: number, instrument: ChartInstrument): number;
    static getPricePrecision(price: number, precisions: number[]): number;
    static roundPriceToIncrement(price: number, instrument: ChartInstrument, incrementReferencePrice: number): number;
    static computePrecisions(increments: number[]): number[];
    static calculatePrecision(value: number): number;
    /**
     * checks if the received from feed increments/precisions data is valid to display
     * examples of wrong data: [], [0], not an array
     */
    static validatePriceIncrementsOrPrecisions(data: number[]): boolean;
}
