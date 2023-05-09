/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Index, Unit, ViewportModel, ViewportModelState } from './viewport.model';
/**
 * Provides the high and low values. Used for series in auto-scale calculation.
 */
export interface HighLowProvider {
    isHighLowActive: () => boolean;
    /**
     * Calculates the Y high and low.
     * @param state - (optional) used to calculate over some state in future
     */
    calculateHighLow: (state?: ViewportModelState) => HighLow;
}
export interface HighLow {
    high: Unit;
    low: Unit;
    highIdx?: Index;
    lowIdx?: Index;
}
type HighLowPostProcessor = (highLow: HighLow) => HighLow;
/**
 * Auxiliary sub-model to apply X,Y auto-scaling feature.
 * Transforms the original ViewportModel.
 * @doc-tags auto-scale,viewport,scaling
 */
export declare class AutoScaleViewportSubModel {
    private delegate;
    auto: boolean;
    highLowProviders: Record<string, HighLowProvider>;
    highLowPostPorcessor: Record<string, HighLowPostProcessor>;
    constructor(delegate: ViewportModel, highLowProviders?: Record<string, HighLowProvider>);
    /**
     * Sets a HighLowProvider for a given name.
     * @param {string} name - The name of the HighLowProvider.
     * @param {HighLowProvider} provider - The HighLowProvider to be set.
     */
    setHighLowProvider(name: string, provider: HighLowProvider): void;
    /**
     * Deletes a high-low provider from the list of high-low providers.
     * @param {string} name - The name of the high-low provider to be deleted.
     */
    deleteHighLowProvider(name: string): void;
    /**
     * Sets a HighLowPostProcessor for a given name.
     *
     * @param {string} name - The name of the HighLowPostProcessor.
     * @param {HighLowPostProcessor} processor - The HighLowPostProcessor to be set.
     * @returns {void}
     */
    setHighLowPostProcessor(name: string, processor: HighLowPostProcessor): void;
    /**
     * Sets the auto and recalculates the state of the viewport model.
     * @param {ViewportModelState} state - The state of the viewport model.
     * @param {boolean} auto - The auto value to set.
     * @returns {void}
     */
    setAutoAndRecalculateState(state: ViewportModelState, auto: boolean): void;
}
/**
 * Y auto-scale viewport transformer. Calculates highLow for all chart visuals and recalculates the Y scale.
 * @param vm
 * @param state
 * @param highLowProviders
 * @param highLowPostProcessors
 */
export declare const autoScaleYViewportTransformer: (vm: ViewportModel, state: ViewportModelState, highLowProviders: HighLowProvider[], highLowPostProcessors: HighLowPostProcessor[]) => void;
/**
 * Merges an array of HighLow objects into a single HighLow object.
 * @param {HighLow[]} input - The array of HighLow objects to be merged.
 * @returns {HighLow} - The merged HighLow object.
 
*/
export declare function mergeHighLow(input: HighLow[]): HighLow;
export declare const getDefaultHighLow: () => HighLow;
export {};
