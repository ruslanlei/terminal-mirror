/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Candle } from '../model/candle.model';
export declare function identity<T>(x: T): T;
export declare function notEmpty<T>(value: T | null | undefined): value is T;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */
export declare function is(x: any, y: any): boolean;
export declare const hasOwnProperty: (v: PropertyKey) => boolean;
/**
 * Deeply compares two objects
 * @param {*} objA
 * @param {*} objB
 * @returns {Boolean}
 */
export declare function deepEqual(objA: object, objB: object): boolean;
export declare function keys<K extends string>(r: Partial<Record<K, unknown>>): Array<K>;
export declare function nonNullableTypeGuard<T>(x: T | undefined | null): x is T;
export declare const constVoid: () => void;
export declare function getLabelTextColorByBackgroundColor(bgColor: string, textColor: string, invertedTextColor: string): string;
export declare function join(array: unknown[]): string;
export declare function firstOf<T>(arr?: ArrayLike<T>): T | undefined;
export declare function lastOf<T>(arr?: ArrayLike<T>): T | undefined;
export declare function arrayRemove<T>(this: Array<T>, element: T): T[];
export declare function arrayRemove2<A>(array: Array<A>, element: A): void;
export interface BinarySearchResult {
    index: number;
    exact: boolean;
}
export declare const searchCandleIndex: (timestamp: number, shouldExtrapolate: boolean, candles: Candle[], periodMs?: number) => BinarySearchResult;
/**
 * Performs binary search over numbers array.
 * Works very fast - tested.
 * @param array
 * @param what
 * @doc-tags tricky,math,utility
 */
export declare function binarySearch(array: Array<number>, what: number): BinarySearchResult;
export declare function binarySearch<Item>(array: Array<Item>, what: number, transform: (item: Item) => number): BinarySearchResult;
export declare function isIE(): boolean;
export declare function isEdge(): boolean;
export declare const findKeyFromValue: <K, V>(map: Map<K, V>, mapValue: V) => K | undefined;
export declare const at: <T>(idx: number, arr: T[]) => T;
