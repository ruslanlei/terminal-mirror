/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartConfigComponentsChart } from '../../chart.config';
import { ChartDrawerConfig, SeriesDrawer } from '../data-series.drawer';
import { DataSeriesModel, VisualSeriesPoint } from '../../model/data-series.model';
export declare class LineDrawer implements SeriesDrawer {
    private config;
    constructor(config: ChartConfigComponentsChart);
    draw(ctx: CanvasRenderingContext2D, points: VisualSeriesPoint[][], candleSeries: DataSeriesModel, drawerConfig: ChartDrawerConfig): void;
}
