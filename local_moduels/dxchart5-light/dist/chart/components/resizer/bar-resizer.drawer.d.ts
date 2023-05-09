/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds } from '../../../common/common-types';
import { CanvasAnimation } from '../../animation/canvas-animation';
import { CanvasModel } from '../../drawers/canvas.model';
import { Drawer } from '../../drawers/drawing-manager';
import { FullChartConfig } from '../../chart.config';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
export declare class BarResizerDrawer implements Drawer {
    private config;
    private boundsProvider;
    private canvasModel;
    private canvasAnimation;
    private animationId;
    private canvasBoundsContainer;
    constructor(config: FullChartConfig, boundsProvider: () => Bounds, canvasModel: CanvasModel, canvasAnimation: CanvasAnimation, animationId: string, canvasBoundsContainer: CanvasBoundsContainer);
    /**
     * Draws the pane resizer on the canvas if it is visible.
     * The resizer is drawn with a fixed mode or with an animation.
     * The resizer's position and size are determined by the bounds provider.
     * The yAxisWidth is calculated based on the canvas bounds container.
     * The resizerXOffset and resizerWidthOffset are calculated based on the yAxis alignment.
     * The resizer is filled with a color based on the animation or the config colors.
     * If the bgMode is true, the resizer is filled without the drag zone, otherwise it is filled with the drag zone.
     */
    draw(): void;
    /**
     * Returns an array of canvas IDs.
     *
     * @returns {Array<string>} An array containing the ID of the canvas model.
     */
    getCanvasIds(): Array<string>;
}
