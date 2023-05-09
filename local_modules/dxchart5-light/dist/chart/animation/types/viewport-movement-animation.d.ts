/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Animation } from './animation';
import { AnimationConfig } from '../canvas-animation';
import { Unit, ViewportModel, Zoom } from '../../model/scaling/viewport.model';
export type easingFn = (normalizedTime: number) => number;
export interface ViewportMovementAnimationConfig extends AnimationConfig {
    targetXStart: Unit;
    targetXEnd: Unit;
    targetYStart: Unit;
    targetYEnd: Unit;
    targetZoomX: Zoom;
    targetZoomY: Zoom;
    easingFn?: easingFn;
}
/**
 * Animates the viewport X movement. Uses d3-ease library for easing functions.
 * https://www.npmjs.com/package/d3-ease
 * @doc-tags animation,scaling
 */
export declare class ViewportMovementAnimation extends Animation {
    private viewportModel;
    readonly animationConfig: ViewportMovementAnimationConfig;
    readonly xStart: number;
    readonly xEnd: number;
    readonly yStart: number;
    readonly yEnd: number;
    readonly zoomX: number;
    readonly zoomY: number;
    readonly easingFn: easingFn;
    readonly id: string;
    constructor(viewportModel: ViewportModel, animationConfig: ViewportMovementAnimationConfig, onTickFunction?: () => void);
    /**
     * Updates the viewport model's properties based on the animation configuration and easing function. If an animation is in progress, the properties are updated based on the current progress of the animation. The updated properties include the start and end coordinates for the x and y axes, as well as the zoom level for both axes. The updated properties are then applied to the viewport model.
     */
    tick(): void;
    /**
     * This method finishes the animation and applies the target viewport model configuration. It calls the `finishAnimation()` method of the parent class and then applies the target configuration to the `viewportModel` object. The target configuration includes the `xStart`, `xEnd`, `yStart`, `yEnd`, `zoomX`, `zoomY`, and `inverseY` properties.
     */
    finishAnimation(): void;
}
