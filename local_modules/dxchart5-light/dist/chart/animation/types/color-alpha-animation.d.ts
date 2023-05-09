/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { AnimationConfig } from '../canvas-animation';
import { Animation } from './animation';
import * as Color from 'color';
interface CustomColor extends Color {
    readonly valpha?: number;
}
export interface ColorAlphaAnimationConfig {
    color: string;
    type: 'appearing' | 'fading';
}
interface ColorAlphaAnimationConfigInternal extends ColorAlphaAnimationConfig {
    rgbColor?: CustomColor;
    currentAnimationColor?: Color;
    initialAlpha?: number;
}
/**
 * Color animation automatically updates alpha channel of provided colors on each tick.
 * Can be in 'appearing' and 'fading' state.
 */
export declare class ColorAlphaAnimation extends Animation {
    private colorConfigs;
    constructor(animationConfig: AnimationConfig, colorConfigs: Array<ColorAlphaAnimationConfigInternal>, onTickFunction?: () => void);
    /**
     * Updates the current animation color of each color configuration based on the animation type and time left. If an animation is in progress, it iterates over each color configuration and updates its current animation color. If the configuration has an initial alpha and RGB color, it calculates the new alpha value based on the animation time left and updates the current animation color accordingly. The animation type can be either 'fading' or 'appearing'.
     */
    tick(): void;
    /**
     * Returns the color of the current animation for a given index.
     * @param {number} index - The index of the color configuration to retrieve.
     * @returns {string} - The color of the current animation for the given index, or white if not found.
     */
    getColor(index: number): string;
    /**
     * This function reverts the animation by changing the type of color configurations from 'fading' to 'appearing' and vice versa. It also ensures that the animationTimeLeft is not zero to avoid getting stuck in the middle of the animation.
     */
    revert(): void;
}
export {};
