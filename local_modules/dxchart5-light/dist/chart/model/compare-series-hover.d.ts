/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartModel } from '../components/chart/chart.model';
import { BaseHover, HoverProducerPart } from '../inputhandlers/hover-producer.component';
export interface CompareSeriesHover {
    instrument: string;
    price: string;
    id: number;
}
export declare class CompareSeriesHoverProducerPart implements HoverProducerPart<CompareSeriesHover[]> {
    private chartModel;
    constructor(chartModel: ChartModel);
    /**
     * Returns an array of objects containing information about the series of candles at a specific x-coordinate.
     * @param {BaseHover} hover - The hover object containing the x-coordinate.
     * @returns {CompareSeriesHover[]} An array of objects containing the instrument symbol, price and id of each series of candles.
     */
    getData(hover: BaseHover): CompareSeriesHover[];
}
