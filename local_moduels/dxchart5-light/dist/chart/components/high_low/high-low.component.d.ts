/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartBaseElement } from '../../chart-base-element';
import { DrawingManager } from '../../drawers/drawing-manager';
import { FullChartConfig } from '../../chart.config';
import { ChartModel } from '../chart/chart.model';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CanvasModel } from '../../drawers/canvas.model';
/**
 * Shows the highest and lowest prices labels over all candles in chart (not only in viewport).
 */
export declare class HighLowComponent extends ChartBaseElement {
    constructor(config: FullChartConfig, canvasModel: CanvasModel, chartModel: ChartModel, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager);
}
