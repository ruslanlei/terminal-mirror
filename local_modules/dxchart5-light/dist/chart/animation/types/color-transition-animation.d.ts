/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { AnimationConfig } from '../canvas-animation';
import { Animation } from './animation';
import * as Color from 'color';
export interface ColorTransitionAnimationConfig {
    startColor: string;
    endColor: string;
    type: 'appearing' | 'fading';
}
interface ColorTransitionAnimationConfigInternal extends ColorTransitionAnimationConfig {
    rgbStartColor?: Color;
    rgbEndColor?: Color;
    currentAnimationColor?: Color;
}
/**
 * Color transition calculates color between start..end color for each tick.
 * Can be in 'appearing' and 'fading' state; 'fading' is just reverting the colors order.
 */
export declare class ColorTransitionAnimation extends Animation {
    private colorConfigs;
    constructor(animationConfig: AnimationConfig, colorConfigs: Array<ColorTransitionAnimationConfigInternal>, onTickFunction?: () => void);
    /**
     * Updates the current animation color for each color configuration based on the progress of the animation.
     * If an animation is in progress, it calculates the transition color for each configuration based on the start and end colors and the current progress of the animation.
     * If the configuration type is "fading", it transitions from the end color to the start color, and if the type is "appearing", it transitions from the start color to the end color.
     * @function
     * @returns {void}
     */
    tick(): void;
    /**
     * Returns the color of the current animation for a given index.
     * @param {number} index - The index of the color configuration to retrieve.
     * @returns {string} - The color of the current animation for the given index, or white if not found.
     */
    getColor(index: number): string;
    /**
     * Reverts the animation by changing the type of color configurations from 'fading' to 'appearing' and vice versa.
     * It also ensures that the animation does not halt in the middle by setting the animationTimeLeft to the maximum of (animationTime - animationTimeLeft) and 1.
     * @function
     * @returns {void}
     */
    revert(): void;
    /**
     * Moves animation state to one last tick - instant-finishing animation as result.
     */
    moveToLastTick(): void;
    /**
     * Calculates new color in between of 2 colors.
     * @param startColor - from color
     * @param endColor - to color
     * @param progress - number between 0..1
     */
    private calculateTransitionColor;
}
export {};
