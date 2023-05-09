/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { AnimationConfig } from '../canvas-animation';
interface AnimationAware {
    tick: () => void;
}
/**
 * Basic animation. Holds current state: inProgress, timeLeft.
 * Additional params are useful to pass data which helps animating.
 */
export declare class Animation implements AnimationAware {
    private onTickFunction?;
    animationTime: number;
    animationTimeLeft: number;
    animationInProgress: boolean;
    constructor(animationConfig: AnimationConfig, onTickFunction?: (() => void) | undefined);
    /**
     * Decrements the animation time left and executes the onTickFunction if it exists.
     * If the animation time left reaches zero, sets the animationInProgress flag to false.
     */
    tick(): void;
    /**
     * Calculates the normalized progress of an animation.
     * @returns {number} A value between 0 and 1 representing the progress of the animation.
     */
    getProgress(): number;
    /**
     * Sets the animationInProgress flag to false and resets the animationTimeLeft to 0.
     */
    finishAnimation(): void;
}
export {};
