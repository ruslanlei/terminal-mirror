/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartModel } from '../chart/chart.model';
import { NumericAxisLabelsGenerator, PriceAxisType } from '../../../common/numeric-axis-labels.generator';
import { ViewportModel } from '../../model/scaling/viewport.model';
/**
 * Y axis labels generator for prices. Respects price increment from instrument.
 */
export declare class NumericYAxisLabelsGenerator extends NumericAxisLabelsGenerator {
    private chartModel;
    constructor(increment: number | null, chartModel: ChartModel | undefined, viewportModel: ViewportModel, valueFormatter: (value: number) => string, axisTypeProvider?: () => PriceAxisType, baseLineProvider?: () => number);
    /**
     * Calculates the increment to be used on the chart axis based on the length of the value and the instrument's price increments.
     * @param {number} valueLength - The length of the value.
     * @returns {number} - The calculated increment.
     */
    protected calculateIncrement(valueLength: number): number;
}
