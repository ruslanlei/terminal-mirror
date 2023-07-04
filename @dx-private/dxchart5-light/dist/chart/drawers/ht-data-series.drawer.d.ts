/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { PaneManager } from '../components/pane/pane-manager.component';
import { DataSeriesModel } from '../model/data-series.model';
import { HitTestCanvasModel } from '../model/hit-test-canvas.model';
import { SeriesDrawer } from './data-series.drawer';
import { Drawer } from './drawing-manager';
/***
 * HitTest Chart drawer. It's used to draw hit test for chart types on the hit-test canvas.
 */
export declare class HTDataSeriesDrawer implements Drawer {
    private readonly seriesDrawers;
    private canvasModel;
    private paneManager;
    constructor(seriesDrawers: Record<string, SeriesDrawer>, canvasModel: HitTestCanvasModel, paneManager: PaneManager);
    draw(): void;
    drawSeries(ctx: CanvasRenderingContext2D, series: DataSeriesModel): void;
    getCanvasIds(): Array<string>;
}
