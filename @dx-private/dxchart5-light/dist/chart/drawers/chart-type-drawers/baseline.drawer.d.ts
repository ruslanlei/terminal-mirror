/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { BaselineModel } from '../../model/baseline.model';
import { DataSeriesModel, VisualSeriesPoint } from '../../model/data-series.model';
import { ChartDrawerConfig, SeriesDrawer } from '../data-series.drawer';
export declare class BaselineDrawer implements SeriesDrawer {
    private baseLineModel;
    private canvasBoundContainer;
    constructor(baseLineModel: BaselineModel, canvasBoundContainer: CanvasBoundsContainer);
    draw(ctx: CanvasRenderingContext2D, points: VisualSeriesPoint[][], model: DataSeriesModel, drawerConfig?: ChartDrawerConfig): void;
}
