/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { BoundsProvider } from '../../../common/common-types';
import { BarType, FullChartConfig } from '../../chart.config';
import { DataSeriesModel, VisualSeriesPoint } from '../../model/data-series.model';
import { ChartDrawerConfig, SeriesDrawer } from '../data-series.drawer';
export declare const candleTypesList: BarType[];
/**
 * A decorator for drawers, that draw something depending on visual candles
 */
export declare class CandleSeriesWrapper implements SeriesDrawer {
    private drawer;
    private config;
    private chartBounds;
    constructor(drawer: SeriesDrawer, config: FullChartConfig, chartBounds: BoundsProvider);
    draw(ctx: CanvasRenderingContext2D, allPoints: VisualSeriesPoint[][], model: DataSeriesModel, config: ChartDrawerConfig): void;
    private beforeDraw;
    private isChartTypeAllowed;
    private afterDraw;
}
