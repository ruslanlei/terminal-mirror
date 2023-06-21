/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasModel } from '../../model/canvas.model';
import { Drawer } from '../../drawers/drawing-manager';
import { CrossToolHover, CrossToolModel, CrossToolType } from './cross-tool.model';
export interface CrossToolTypeDrawer {
    draw: (ctx: CanvasRenderingContext2D, hover: CrossToolHover) => void;
}
export declare class CrossToolDrawer implements Drawer {
    private model;
    private crossToolCanvasModel;
    private readonly crossToolTypeDrawers;
    constructor(model: CrossToolModel, crossToolCanvasModel: CanvasModel, crossToolTypeDrawers: Record<CrossToolType, CrossToolTypeDrawer>);
    /**
     * Draws the cross tool on the canvas.
     * @function
     * @name draw
     * @memberof CrossToolCanvasView
     * @instance
     * @returns {void}
     */
    draw(): void;
    /**
     * Returns an array of string containing the canvas ID of the crossToolCanvasModel.
     *
     * @returns {Array<string>} An array of string containing the canvas ID of the crossToolCanvasModel.
     */
    getCanvasIds(): Array<string>;
}
