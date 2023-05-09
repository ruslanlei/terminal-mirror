/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ScaleModel } from '../../model/scale.model';
import VisualCandle from '../../model/visual-candle';
import { Timestamp } from '../../model/scaling/viewport.model';
import { ChartModel } from './chart.model';
/**
 * Calculates the initial viewport.
 * @param scaleModel
 * @doc-tags scaling,viewport
 */
export declare const createBasicScaleViewportTransformer: (scaleModel: ScaleModel) => (visualCandleSource: VisualCandle[]) => void;
/**
 * Moves the viewport between 2 timestamps.
 * @param scaleModel
 * @param chartModel
 * @param canvasAnimationContainer
 */
export declare const createTimeFrameViewportTransformer: (scaleModel: ScaleModel, chartModel: ChartModel) => (timeframe: [Timestamp, Timestamp], zoomIn?: boolean | null) => void;
