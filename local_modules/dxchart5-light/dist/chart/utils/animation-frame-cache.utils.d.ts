/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/**
 * Use this as a wrapper to cache calculation results during single animation frame cycle.
 * It is useful if
 * - you have multiple invocations of same code in same animation frame
 * - you're sure that result will always be the same
 */
export declare class AnimationFrameCache<T> {
    private dataProvider;
    private dataUpdatedPredicate;
    calculatedInThisFrame: boolean;
    cache?: T;
    private animFrameId;
    constructor(dataProvider: () => T, dataUpdatedPredicate?: () => boolean);
    /**
     * Calculates or retrieves a cached value.
     * If the value has not been calculated in the current frame, it calculates it by calling the dataProvider function.
     * If the data has been updated, it sets the calculatedInThisFrame flag to true.
     * It also sets a throttled animation frame to reset the calculatedInThisFrame flag to false.
     * If the cache is not null, it returns the cached value, otherwise it calls the dataProvider function and returns its result.
     * @returns {T} The cached or calculated value.
     */
    calculateOrGet(): T;
    /**
     * Invalidates the current state and returns the result of the calculateOrGet() method.
     * @returns {T} The result of the calculateOrGet() method.
     */
    forceCalculateOrGet(): T;
    /**
     * Returns the last cached value or undefined if there is no cached value.
     * @returns {T | undefined} The last cached value or undefined.
     */
    getLastCachedValue(): T | undefined;
    /**
     * Updates the cache value with the provided value.
     * @param {T} value - The new value to be set in the cache.
     * @returns {void}
     */
    updateCacheValue(value: T): void;
    /**
     * Invalidates the cache and sets the calculatedInThisFrame flag to false.
     * @function
     * @name invalidate
     * @memberof ClassName
     * @instance
     * @returns {void}
     */
    invalidate(): void;
}
