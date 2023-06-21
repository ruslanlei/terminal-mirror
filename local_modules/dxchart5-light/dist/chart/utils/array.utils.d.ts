/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/**
 * Intersects 2 arrays.
 * Example:
 *  source: [1, 2, 3, 1]
 *  target: [1, 2, 4, 5, 6]
 *  result: [1, 2]
 *  result (with duplicates): [1, 1, 2]
 * @param source
 * @param target
 * @param compareFn
 * @param removeDuplicates
 * @doc-tags fp,utility
 */
export declare const arrayIntersect: <T>(source: T[], target: T[], compareFn?: (a: T, b: T) => boolean, removeDuplicates?: boolean) => T[];
/**
 * Reorders source array according to newOrder.
 * Returns a reorder copy of the source array.
 * Example:
 * 	source: ['1', '2', '3']
 * 	newOrder: ['3', '1']
 * 	result: ['3', '2', '1']
 */
export declare const reorderArray: <T>(source: T[], newOrder: T[]) => T[];
export declare const eqeqeq: <T>(a: T, b: T) => boolean;
/**
 * Subtracts target from source array.
 * Example:
 *   source: [1, 2, 3, 4]
 *   target: [2, 4, 6]
 *   result: [1, 3]
 * @param source
 * @param target
 * @param compareFn
 */
export declare const arraySubtract: <T>(source: T[], target: T[], compareFn: (a: T, b: T) => boolean) => T[];
export declare function moveInArray<T>(arr: Array<T>, from: number, to: number): Array<T>;
export declare function moveInArrayMutable<T>(arr: Array<T>, _from: number, _to: number): Array<T>;
type ItemFinder<T> = (item: T) => boolean;
/**
 * Replaces item in array with another one.
 * @param arr
 * @param itemFinder - predicate to find item
 * @param replace - item to replace
 */
export declare function replaceInArray<T>(arr: Array<T>, itemFinder: ItemFinder<T>, replace: T): T[];
export declare const uniqueArray: <T extends string | number>(arr: T[]) => T[];
export declare const groupBy: <T, KT extends T[keyof T] extends string | number ? T[keyof T] : never>(array: T[], key: keyof T) => Record<KT, T[]>;
/**
 * Inserts *something* between every two elements in the source array
 * Example: interleave(['first', 'second', 'third'], 'bar') => ['first', 'bar', 'second', 'bar', 'third']
 * @param arr
 * @param something
 */
export declare const interleave: <T>(arr: T[], something: T) => T[];
export declare const isTwoDimArray: <T>(arr: T[] | T[][]) => boolean;
export declare const create2DArray: <T>(arr: T[] | T[][]) => T[][];
export declare const slice2DArray: <T>(arr: T[][], startIdx: number, endIdx: number) => T[][];
export declare const at: <T>(idx: number, arr: T[]) => T;
export interface BinarySearchResult {
    index: number;
    exact: boolean;
}
/**
 * Performs binary search over numbers array.
 * Works very fast - tested.
 * @param array
 * @param what
 * @doc-tags tricky,math,utility
 */
export declare function binarySearch(array: Array<number>, what: number): BinarySearchResult;
export declare function binarySearch<Item>(array: Array<Item>, what: number, transform: (item: Item) => number): BinarySearchResult;
export declare function lastOf<T>(arr?: ArrayLike<T>): T | undefined;
export declare function arrayRemove<T>(this: Array<T>, element: T): T[];
export declare function arrayRemove2<A>(array: Array<A>, element: A): void;
export declare function firstOf<T>(arr?: ArrayLike<T>): T | undefined;
/**
 @param {Function} gather - get the comparing value from the array
 */
export declare function maxMin<B>(gather: (b: B) => number | null | undefined): (arr: B[]) => [number, number];
/**
 * Finds and returns elements from the array in the given range
 * Uses modified version of binary search under the hood, so the complexity is log(N)
 *
 * @param {Item[]} array of the elements in a ASC ORDER
 * @param {number} leftBound left bound of the range
 * @param {number} rightBound right bounds of the range
 * @param {function(Item):number} transform function to transform the elements of the array if the array is not of a number type
 *
 * @returns {Item[]} array of items which fall within the range
 */
export declare function getElementsInRange(array: number[], leftBound: number, rightBound: number): number[];
export declare function getElementsInRange<Item>(array: Item[], leftBound: number, rightBound: number, transform: (item: Item) => number): Item[];
export {};
