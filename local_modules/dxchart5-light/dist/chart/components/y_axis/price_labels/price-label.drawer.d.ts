/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds } from '../../../../common/common-types';
import { CanvasBoundsContainer } from '../../../canvas/canvas-bounds-container';
import { ChartConfigComponentsYAxis, FullChartColors, YAxisLabelAppearanceType } from '../../../chart.config';
import { drawBadgeLabel, drawPlainLabel, drawRectLabel } from '../y-axis-labels.drawer';
import { VisualYAxisLabel, YAxisVisualLabelType } from './y-axis-labels.model';
type LabelDrawer = typeof drawBadgeLabel | typeof drawRectLabel | typeof drawPlainLabel;
export declare const DEFAULT_LABEL_APPEARANCE_TYPE: YAxisLabelAppearanceType;
export declare const priceLabelDrawersMap: Record<YAxisVisualLabelType, LabelDrawer>;
/**
 * Draws label on Y axis with provided parameters.
 * @param ctx - canvas 2D context to draw on
 * @param bounds - bounds of Y axis
 * @param visualLabel
 * @param canvasBoundsContainer
 * @param config
 */
export declare function drawLabel(ctx: CanvasRenderingContext2D, bounds: Bounds, visualLabel: VisualYAxisLabel, canvasBoundsContainer: CanvasBoundsContainer, config: ChartConfigComponentsYAxis, colors: FullChartColors['yAxis']): void;
export {};
