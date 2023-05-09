/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CandleSeriesModel } from '../../model/candle-series.model';
import { ChartConfigComponentsChart } from '../../chart.config';
import VisualCandle from '../../model/visual-candle';
import { ChartDrawerConfig, SeriesDrawer } from '../data-series.drawer';
import { DataSeriesModel, VisualSeriesPoint } from '../../model/data-series.model';
export declare class CandleDrawer implements SeriesDrawer {
    private config;
    constructor(config: ChartConfigComponentsChart);
    private pixelLength;
    private lineWidthCU;
    private halfLineWidthCU;
    draw(ctx: CanvasRenderingContext2D, 
    /**
     * You can pass two-dimension array to divide series into multiple parts
     */
    points: VisualSeriesPoint[][], model: DataSeriesModel, drawerConfig: ChartDrawerConfig): void;
    drawCandle(ctx: CanvasRenderingContext2D, drawerConfig: ChartDrawerConfig, candleSeries: CandleSeriesModel, visualCandle: VisualCandle): void;
    private drawCandlesWicks;
    private drawCandleBorder;
}
