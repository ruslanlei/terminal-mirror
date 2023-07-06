/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
interface Eq<A> {
    readonly equals: (x: A, y: A) => boolean;
}
export declare const MEMOIZE_CLEAR_FUNCTION: symbol;
/**
 * Memoizes function for passed arguments
 * @doc-tags utility
 */
export declare function memoize<F extends Function>(this: any, fn: F): F;
export declare const memoOnce: <A>(E: Eq<A>) => <Args extends A[], R>(f: (...args: Args) => R) => (...args: Args) => R;
/**
 * @param {Array.<*>} args
 * @returns {String}
 */
export declare function serialize(args: any[]): string;
export {};
