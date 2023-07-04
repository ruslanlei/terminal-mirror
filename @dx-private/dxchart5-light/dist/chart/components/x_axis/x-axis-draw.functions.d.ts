/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { FullChartConfig } from '../../chart.config';
import { XAxisLabel } from './x-axis-labels.model';
export type LabelAlign = 'start' | 'end' | 'middle';
/**
 * Draws the label on X axis.
 * @param ctx
 * @param canvasBoundsContainer
 * @param config
 * @param label
 */
export declare function drawXAxisLabel(backgroundCtx: CanvasRenderingContext2D, ctx: CanvasRenderingContext2D, canvasBoundsContainer: CanvasBoundsContainer, config: FullChartConfig, label: XAxisLabel): void;
