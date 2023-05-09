/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds, BoundsProvider } from '../../../common/common-types';
import { ChartConfigComponentsChart } from '../../chart.config';
import VisualCandle from '../visual-candle';
import { ViewportModelState } from './viewport.model';
/**
 * Return constraited state that handled zooming and moving chart near first/last candles
 * this and other constraits that works with state should mutate and return state
 * @param initialState
 * @param state
 * @param visualCandlesCoordinates
 * @param candleLimit
 * @param bounds
 * @returns
 * @doc-tags viewport,zoom,scaling
 */
export declare const candleEdgesConstrait: (state: ViewportModelState, visualCandlesCoordinates: VisualCandle[], candleLimit: number, bounds: Bounds) => {
    xStart: number;
    xEnd: number;
    yStart: number;
    yEnd: number;
    zoomX: number;
    zoomY: number;
    inverseY: boolean;
};
/**
 * This function limits minimum and maximum chart viewport dependening on visible x-units
 * @returns
 * @doc-tags viewport,zoom,scaling
 */
export declare const zoomConstraint: (initialState: ViewportModelState, state: ViewportModelState, chartConfig: ChartConfigComponentsChart, boundsProvider: BoundsProvider) => {
    xStart: number;
    xEnd: number;
    yStart: number;
    yEnd: number;
    zoomX: number;
    zoomY: number;
    inverseY: boolean;
};
