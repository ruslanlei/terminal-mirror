/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../chart.config';
import { DataSeriesModel, VisualSeriesPoint } from '../../model/data-series.model';
import { ChartDrawerConfig, SeriesDrawer } from '../data-series.drawer';
export declare class TextDrawer implements SeriesDrawer {
    private config;
    constructor(config: FullChartConfig);
    draw(ctx: CanvasRenderingContext2D, allPoints: VisualSeriesPoint[][], model: DataSeriesModel, drawerConfig: ChartDrawerConfig): void;
}
