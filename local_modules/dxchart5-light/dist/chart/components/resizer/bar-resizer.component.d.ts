/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subject } from 'rxjs';
import { CanvasAnimation } from '../../animation/canvas-animation';
import { CanvasBoundsContainer, HitBoundsTest } from '../../canvas/canvas-bounds-container';
import { FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../model/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import { ChartBaseElement } from '../../model/chart-base-element';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { ChartPanComponent } from '../pan/chart-pan.component';
import { BoundsProvider } from '../../model/bounds.model';
/**
 * Bar separator between panes.
 * Used to resize the areas height or just draw a fixed line.
 * Supports hover animation.
 *
 * @doc-tags chart-components,resizer
 */
export declare class BarResizerComponent extends ChartBaseElement {
    private id;
    private boundsProvider;
    private hitTest;
    private dragTickCb;
    private chartPanComponent;
    private canvasModel;
    private drawingManager;
    private canvasInputListener;
    private canvasAnimation;
    private config;
    private canvasBoundsContainer;
    animationId: string;
    initialY: number;
    resizeEvent$: Subject<void>;
    constructor(id: string, boundsProvider: BoundsProvider, hitTest: HitBoundsTest, dragTickCb: (yDelta: number) => void, chartPanComponent: ChartPanComponent, canvasModel: CanvasModel, drawingManager: DrawingManager, canvasInputListener: CanvasInputListenerComponent, canvasAnimation: CanvasAnimation, config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer);
    /**
     * This method activates the pane resizer component.
     * It calls the parent class's doActivate method and then checks if the fixedMode property is set to false in the config object.
     * If it is false, it creates a new DragNDropYComponent and adds it to the component list.
     * It also adds a subscription to the canvasInputListener to observe mouse enter events and
     * handle hover animations if the animation is enabled in the config object.
     * Finally, it creates a new BarResizerDrawer and adds it to the drawing manager as a DynamicDrawerType.paneResizer with the current id.
     * It also adds a subscription to remove the drawer when the component is deactivated.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    private onYDragStart;
    private onYDragEnd;
    private onYDragTick;
    /**
     * This method is called when the component is being deactivated.
     * It calls the parent method doDeactivate() and then completes the resizeEvent$ observable.
     * @protected
     * @returns {void}
     */
    protected doDeactivate(): void;
    /**
     * This function handles the hover animation of a pane resizer. It takes a type parameter which can be either 'fading' or 'appearing'.
     * If the background mode is enabled, it gets the color alpha animation from the canvasAnimation and starts the color alpha animation
     * with the given animationId and the color and type provided in the parameter. If the background mode is not enabled, it gets the color transition
     * animation from the canvasAnimation and starts the color transition animation with the given animationId, startColor, endColor and type
     * provided in the parameter and the duration from the config. If there is an animation in progress, it reverts it.
     *
     * @param {string} type - The type of animation, can be either 'fading' or 'appearing'.
     * @returns {void}
     */
    handleHoverAnimation(type: 'fading' | 'appearing'): void;
}
