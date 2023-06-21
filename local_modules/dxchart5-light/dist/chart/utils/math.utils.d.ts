/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export declare const MAX_DECIMAL_DIGITS = 14;
export type NumberFormatLabels = 'K' | 'M' | 'B';
export declare class MathUtils {
    static roundToNearest(value: number, precision: number): number;
    static roundUpToNearest(value: number, precision: number): number;
    static roundDecimal(x: number): number;
    static makeDecimal(value: number, precision: number, decimal?: string): string;
    static compare(a: number, b: number, eps: number): number;
    static isZero(a: number): boolean;
    static cutNumber(value: number, amountToCut: NumberFormatLabels, zeros?: number): string;
}
/**
 * Checks if first and second number are differs by specified times
 * @param first {number}
 * @param second {number}
 * @param times {number}
 * @doc-tags utility,math
 */
export declare function isDiffersBy(first: number, second: number, times: number): boolean;
export declare function clamp(value: number, min: number, max: number): number;
export declare function easeExpOut(value: number): number;
/**
 * Returns the first finite number in a list of numbers. If no finite number is found,
 * returns NaN.
 * @param {...number} args - A list of numbers to search for a finite value.
 * @returns {number} The first finite number in the list, or NaN if no finite number is found.
 */
export declare function finite(...args: number[]): number;
/**
 * These functions can be used only for chart coordinates because they all are working in positive coordinates!!!
 */
export declare const floor: (value: number) => number;
export declare const ceil: (value: number) => number;
export declare const round: (value: number) => number;
export declare const shiftRight: (value: number, shift: number) => number;
