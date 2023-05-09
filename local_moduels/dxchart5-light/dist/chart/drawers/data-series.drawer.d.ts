/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds } from '../../common/common-types';
import { PaneManager } from '../components/pane/pane-manager.component';
import { DataSeriesModel, VisualSeriesPoint } from '../model/data-series.model';
import { CanvasModel } from './canvas.model';
import { Drawer } from './drawing-manager';
export interface ChartDrawerConfig {
    singleColor?: string;
    forceBold?: number;
}
export interface SeriesDrawer {
    draw: (ctx: CanvasRenderingContext2D, 
    /**
     * You can pass two-dimension array to divide series into multiple parts
     */
    points: VisualSeriesPoint[][], model: DataSeriesModel, drawerConfig: ChartDrawerConfig) => void;
}
export declare const transformToTwoDimension: (points: VisualSeriesPoint[] | VisualSeriesPoint[][]) => VisualSeriesPoint[][];
/**
 * Basic data series drawer.
 * Have multiple paint tools: linear, histogram, points, text above/below candle and others.
 *
 * (may support multiple layers in future)
 */
export declare class DataSeriesDrawer implements Drawer {
    private paneManager;
    private canvasModel;
    private readonly seriesDrawers;
    constructor(paneManager: PaneManager, canvasModel: CanvasModel, seriesDrawers: Record<string, SeriesDrawer>);
    draw(): void;
    drawSeries(ctx: CanvasRenderingContext2D, series: DataSeriesModel): void;
    getCanvasIds(): Array<string>;
}
export declare const clipToBounds: (ctx: CanvasRenderingContext2D, bounds: Bounds) => void;
export declare const setLineWidth: (ctx: CanvasRenderingContext2D, lineWidth: number, dataSeries: DataSeriesModel, drawerConfig: ChartDrawerConfig, seriesSelectedWidth?: number) => void;
