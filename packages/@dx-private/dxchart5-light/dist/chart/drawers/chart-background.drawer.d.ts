/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Drawer } from './drawing-manager';
import { CanvasModel } from '../model/canvas.model';
import { FullChartConfig } from '../chart.config';
export declare class BackgroundDrawer implements Drawer {
    private canvasModel;
    private config;
    constructor(canvasModel: CanvasModel, config: FullChartConfig);
    private prevState;
    private prevWidth;
    private prevHeight;
    draw(): void;
    getCanvasIds(): Array<string>;
}
export declare const redrawBackgroundArea: (backgroundCtx: CanvasRenderingContext2D, ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => void;
