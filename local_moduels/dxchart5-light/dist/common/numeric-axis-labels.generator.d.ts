/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable, Subject } from 'rxjs';
import { Unit } from '../chart/model/scaling/viewport.model';
import { AnimationFrameCache } from '../chart/utils/animation-frame-cache.utils';
export type PriceAxisType = 'regular' | 'percent' | 'logarithmic';
export interface LabelsGenerator {
    readonly observeLabelsChanged: () => Observable<NumericAxisLabel[]>;
}
/**
 * Generator of axes labels.
 */
export declare class NumericAxisLabelsGenerator implements LabelsGenerator {
    private increment;
    private startEndProvider;
    private lengthProvider;
    valueFormatter: (value: number) => string;
    private withZero;
    protected axisTypeProvider: () => PriceAxisType;
    private baseLineProvider;
    private labelFilter;
    /**
     *    Multipliers which are using for price increments to
     *    calculate horizontal grid and price lines step.
     */
    private gridDistanceMultipliers;
    labelsCache: AnimationFrameCache<Array<NumericAxisLabel>>;
    lastSingleLabelHeightValue: number;
    distanceBetweenLabelsChangeSubject: Subject<NumericAxisLabel[][]>;
    newGeneratedLabelsSubject: Subject<NumericAxisLabel[]>;
    private lastStart;
    private lastEnd;
    constructor(increment: number | null, startEndProvider: () => [Unit, Unit], lengthProvider: () => Unit, valueFormatter: (value: number) => string, withZero: boolean, axisTypeProvider: () => PriceAxisType, baseLineProvider: () => number, labelFilter?: (labels: NumericAxisLabel[]) => NumericAxisLabel[]);
    private generateRegularLabels;
    private generatePercentLabels;
    private generateLogarithmLabels;
    doGenerateLabels(): NumericAxisLabel[];
    private calculateMinMax;
    private getAxisStep;
    observeDistanceBetweenLabelsChanged(): Observable<NumericAxisLabel[][]>;
    observeLabelsChanged(): Observable<NumericAxisLabel[]>;
    protected calculateIncrement(valueLength: number): Unit;
    protected adjustIncrementOnAxisType(increment: number): number;
    generateNumericLabels(): Array<NumericAxisLabel>;
    private static getLabelBounds;
    /**
     * Calculates the distance between two axis labels as:
     *  - Take increment (0.01 for price or 1 for natural number);
     *  - Take step which was calculated as (chart height / max lines count provided by config (or default 10));
     *  - Multiplying increment with gridDistanceMultipliers until it will greater then step
     * @param step
     * @param increment
     */
    private calculateAxisStep;
}
export interface NumericAxisLabel {
    text: string;
    value: Unit;
}
