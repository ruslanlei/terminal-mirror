/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { NumericAxisLabel, NumericAxisLabelsGenerator } from '../../../common/numeric-axis-labels.generator';
import { ViewportModel } from '../../model/scaling/viewport.model';
import { XAxisLabelsGenerator } from './x-axis-labels.generator';
/**
 * Y axis labels generator for prices. Respects price increment from instrument.
 */
export declare class NumericXAxisLabelsGenerator extends NumericAxisLabelsGenerator implements XAxisLabelsGenerator {
    constructor(viewportModel: ViewportModel, valueFormatter?: (value: number, precision?: number) => string);
    get labels(): NumericAxisLabel[];
    /**
     * Recalculates the labels of the chart.
     * Calls the generateNumericLabels method to generate new numeric labels.
     */
    recalculateLabels(): void;
    /**
     * Invalidates the labels cache and generates numeric labels.
     * @returns {void}
     */
    generateLabels(): void;
}
