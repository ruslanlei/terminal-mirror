/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds } from '../../../common/common-types';
import { ChartConfigComponentsYAxis, FullChartColors } from '../../chart.config';
export interface YAxisLabelDrawProps {
    ctx: CanvasRenderingContext2D;
    bounds: Bounds;
    text: string;
    centralY: number;
    config: YAxisLabelDrawConfig;
    subGroupId?: number;
}
export interface YAxisLabelDrawConfig {
    textFont?: string;
    textColor?: string;
    bgColor: string;
    highlightColor?: string;
    descColor?: string;
    lineColor?: string;
    paddingTop?: number;
    paddingBottom?: number;
    paddingEnd?: number;
    paddingStart?: number;
    rounded?: boolean;
}
export declare const DEFAULT_PRICE_LABEL_PADDING = 4;
/**
 * Draws badge label on Y axis with provided parameters.
 * @param ctx - canvas 2D context to draw on
 * @param bounds - bounds of Y axis
 * @param text - text to draw
 * @param centralY - y
 * @param config - label styles config
 * @param align
 * @param yAxisState
 */
export declare function drawBadgeLabel(ctx: CanvasRenderingContext2D, bounds: Bounds, text: string, centralY: number, config: YAxisLabelDrawConfig, yAxisState: ChartConfigComponentsYAxis, yAxisColors: FullChartColors['yAxis']): void;
/**
 * Draws rectangle label on Y axis with provided parameters.
 * @param ctx - canvas 2D context to draw on
 * @param bounds - bounds of Y axis
 * @param text - text to draw
 * @param centralY - y
 * @param config - label styles config
 * @param align
 * @param yAxisState
 */
export declare function drawRectLabel(ctx: CanvasRenderingContext2D, bounds: Bounds, text: string, centralY: number, config: YAxisLabelDrawConfig, yAxisState: ChartConfigComponentsYAxis, yAxisColors: FullChartColors['yAxis'], fillStyle?: string): void;
/**
 * Draws rectangle label on Y axis with provided parameters but with transparent background.
 * @param ctx - canvas 2D context to draw on
 * @param bounds - bounds of Y axis
 * @param text - text to draw
 * @param centralY - y
 * @param config - label styles config
 * @param align
 * @param yAxisState
 */
export declare function drawPlainLabel(ctx: CanvasRenderingContext2D, bounds: Bounds, text: string, centralY: number, config: YAxisLabelDrawConfig, yAxisState: ChartConfigComponentsYAxis, yAxisColors: FullChartColors['yAxis']): void;
/**
 * Offset from the center of label to the top/bottom.
 *
 * @param font Label font
 * @param ctx Drawing context
 * @param paddingTop - extra padding from top
 */
export declare function getLabelYOffset(font: string, ctx: CanvasRenderingContext2D, paddingTop?: number): number;
