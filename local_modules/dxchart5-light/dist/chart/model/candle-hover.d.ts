/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import VisualCandle from './visual-candle';
import { BaseHover, HoverProducerPart } from '../inputhandlers/hover-producer.component';
import { ChartModel } from '../components/chart/chart.model';
export interface CandleHover {
    readonly visualCandle: VisualCandle;
    readonly high: number;
    readonly low: number;
    readonly open: number;
    readonly close: number;
    readonly volume: number;
    readonly highY: number;
    readonly lowY: number;
    readonly openY: number;
    readonly closeY: number;
    readonly closestOHLCY: number;
    readonly highFormatted: string;
    readonly lowFormatted: string;
    readonly openFormatted: string;
    readonly closeFormatted: string;
}
export declare class CandleHoverProducerPart implements HoverProducerPart<CandleHover | undefined> {
    private chartModel;
    constructor(chartModel: ChartModel);
    /**
     * Returns a CandleHover object or undefined based on the provided BaseHover object.
     * @param {BaseHover} hover - The BaseHover object containing the x and y coordinates.
     * @returns {CandleHover | undefined} - The CandleHover object or undefined if mainSeriesCandle is falsy.
     */
    getData(hover: BaseHover): CandleHover | undefined;
}
