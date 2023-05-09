/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { tobject } from '../utils';
/**
 * Merges 2 js objects recursively with all properties.
 * - does not modify base object
 * - can override or only add missing ones
 *
 * @param base - base object to merge data into
 * @param override - object with new data which should be merged
 * @param options - merge options
 * @doc-tags tricky,utility
 */
export declare function merge(base: tobject, override: tobject, options?: MergeOptions): any;
export declare function mergeArray<A extends tobject>(base: Array<A>, override: Array<A>, hashFn: (a: A) => string, mergeObjects?: boolean): void;
export declare const DEFAULT_MERGE_OPTIONS: {
    overrideExisting: boolean;
    addIfMissing: boolean;
};
export interface MergeOptions {
    /** whether we need to override value if it's already presented in config. Note for arrays: if this flag is true, arrays replaced entirely */
    overrideExisting: boolean;
    /** whether we need to add a property to config, if this property was absent */
    addIfMissing: boolean;
}
