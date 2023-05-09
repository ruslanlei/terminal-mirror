/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { NumericAxisLabel } from '../../../common/numeric-axis-labels.generator';
import { FullChartConfig } from '../../chart.config';
import EventBus from '../../event-bus';
import { ScaleModel } from '../../model/scale.model';
import { TimeZoneModel } from '../../model/time-zone.model';
import { Timestamp } from '../../model/scaling/viewport.model';
import { ChartModel } from '../chart/chart.model';
import { TimeFormatWithDuration } from './time/parser/time-formats.model';
export interface XAxisLabelsGenerator {
    /**
     * Generates x-axis labels from scratch. Heavy operation.
     */
    generateLabels(): void;
    /**
     * Updates current labels state (x-position). Lightweight operation.
     */
    recalculateLabels(): void;
    labels: NumericAxisLabel[];
}
/**
 * Model for base labels on X axis.
 * Generates and stored the time labels.
 */
export interface XAxisLabelWeighted extends NumericAxisLabel {
    time: Timestamp;
    weight: number;
    idx: number;
}
export declare class XAxisTimeLabelsGenerator implements XAxisLabelsGenerator {
    private eventBus;
    private config;
    private chartModel;
    private scaleModel;
    private timeZoneModel;
    private labelsGroupedByWeight;
    private weightedCache?;
    private levelsCache;
    get labels(): NumericAxisLabel[];
    private formatsByWeightMap;
    private weightToTimeFormatMatcherDict;
    private weightToTimeFormatsDict;
    private extendedLabelsFilterConfig;
    constructor(eventBus: EventBus, config: FullChartConfig, chartModel: ChartModel, scaleModel: ScaleModel, timeZoneModel: TimeZoneModel);
    /**
     * Make a prediction(750) about how many candles we need to fake to fill all X axis by labels
     */
    private getAllCandlesWithFake;
    /**
     * Maps an array of weighted points to an array of XAxisLabelWeighted objects.
     * @param {WeightedPoint[]} weghtedPoints - An array of weighted points to be mapped.
     * @param {VisualCandle[]} allCandlesWithFake - An array of visual candles to be used for formatting the labels.
     * @returns {XAxisLabelWeighted[]} An array of XAxisLabelWeighted objects.
     */
    private mapWeightedPointsToLabels;
    /**
     * Sets the formats for labels configuration.
     * @param {Record<TimeFormatWithDuration, string>} newFormatsByWeightMap - The new formats by weight map.
     * @returns {void}
     */
    setFormatsForLabelsConfig(newFormatsByWeightMap: Record<TimeFormatWithDuration, string>): void;
    /**
     * Generates weighted labels based on allCandlesWithFake, weightToTimeFormatMatcherDict and timeZoneModel.
     * @private
     * @function
     * @returns {void}
     */
    private generateWeightedLabels;
    /**
     * Retrieves the labels from the cache for a given coverUpLevel.
     * @param {number} coverUpLevel - The coverUpLevel to retrieve the labels from the cache.
     * @returns {Array<string>|undefined} - The labels for the given coverUpLevel if they exist in the cache, otherwise undefined.
     */
    private getLabelsFromCache;
    /**
     * Calls the method generateWeightedLabels to generate labels.
     * @returns {void}
     */
    generateLabels(): void;
    /**
     * Recalculates the labels by calling the method recalculateCachedLabels.
     * @returns {void}
     */
    recalculateLabels(): void;
    /**
     * Recalculates cached labels based on the current configuration and zoom level.
     * If there are no grouped labels, the cache is not set.
     * Calculates the maximum label width based on the font size and the maximum format length.
     * Calculates the cover up level based on the maximum label width and the mean candle width.
     * If the cover up level is negative, the cache is not updated.
     * If the cover up level has not changed, the cached labels are returned.
     * Otherwise, the labels are filtered by extended rules and grouped by cover up level.
     * The filtered labels are then cached and returned.
     */
    private recalculateCachedLabels;
    /**
     * Filters the labels by extended rules.
     * @private
     *
     * @param {Record<number, XAxisLabelWeighted[]>} labelsGroupedByWeight - Object containing the labels grouped by weight.
     * @param {number} coverUpLevel - The cover up level.
     *
     * @returns {Record<number, XAxisLabelWeighted[]>} - Object containing the filtered labels grouped by weight.
     */
    private filterLabelsByExtendedRules;
}
