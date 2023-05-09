/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { StringTMap } from '../../common/common-types';
import EventBus from '../event-bus';
import { Animation } from './types/animation';
import { ColorAlphaAnimationConfig, ColorAlphaAnimation } from './types/color-alpha-animation';
import { ColorTransitionAnimationConfig, ColorTransitionAnimation } from './types/color-transition-animation';
import { ViewportMovementAnimationConfig, ViewportMovementAnimation } from './types/viewport-movement-animation';
import { ViewportModel } from '../model/scaling/viewport.model';
export interface AnimationConfig {
    duration: number;
    timeLeft?: number;
}
export declare const VIEWPORT_ANIMATION_ID = "VIEWPORT_ANIMATION";
/**
 * Singleton animation container for all chart animations.
 * Does the following things:
 *  - registers animations and updates their state
 *  - fires only 1 DRAW event for all animations at once
 *
 * Add specific animation here as well with typed API.
 * Like "color" animation which auto-updates color alpha channel.
 *
 * @doc-tags chart-core,animation
 */
export declare class CanvasAnimation {
    private eventBus;
    animationIntervalId?: number;
    animations: StringTMap<Animation>;
    constructor(eventBus: EventBus);
    /**
     * Starts a viewport movement animation with the given configuration and adds it to the list of animations.
     * @param {ViewportModel} viewportModel - The viewport model to animate.
     * @param {ViewportMovementAnimationConfig} config - The configuration for the animation.
     * @param {string} [uniqueAnimationId=VIEWPORT_ANIMATION_ID] - The unique ID for the animation.
     * @param {Function} [onTickFunction] - The function to be called on each tick of the animation.
     * @returns {ViewportMovementAnimation} The container for the created animation.
     */
    startViewportMovementAnimation(viewportModel: ViewportModel, config: ViewportMovementAnimationConfig, uniqueAnimationId?: string, onTickFunction?: () => void): ViewportMovementAnimation;
    /**
     * Starts a color alpha animation with the given configuration and adds it to the list of animations.
     * @param {string} uniqueAnimationId - A unique identifier for the animation.
     * @param {Array<ColorAlphaAnimationConfig>} colorConfigs - An array of color alpha animation configurations.
     * @param {() => void} [onTickFunction] - A function to be called on each animation tick.
     * @param {Partial<ACAnimationConfig>} [animationConfig] - An optional configuration for the animation.
     * @returns {ColorAlphaAnimation} - The created animation container.
     */
    startColorAlphaAnimation(uniqueAnimationId: string, colorConfigs: Array<ColorAlphaAnimationConfig>, onTickFunction?: () => void, animationConfig?: Partial<AnimationConfig>): ColorAlphaAnimation;
    /**
     * Starts a color transition animation with the given configurations and duration.
     * @param {string} uniqueAnimationId - A unique identifier for the animation.
     * @param {Array<ColorTransitionAnimationConfig>} colorConfigs - An array of color transition configurations.
     * @param {number} [duration=DEFAULT_ANIMATION_TIME] - The duration of the animation in milliseconds.
     * @param {Function} [onTickFunction] - A function to be called on each tick of the animation.
     * @returns {ColorTransitionAnimation} - The created animation container.
     */
    startColorTransitionAnimation(uniqueAnimationId: string, colorConfigs: Array<ColorTransitionAnimationConfig>, duration?: number, onTickFunction?: () => void): ColorTransitionAnimation;
    /**
     * This function takes an id as a string and returns an animation container object of type T. It retrieves the animation container object from the animations object using the provided id. The @ts-ignore comment is used to ignore any TypeScript errors that may occur due to the dynamic nature of the function.
     */
    getAnimation<T extends Animation>(id: string): T;
    /**
     * Returns a ColorAlphaAnimation object for the given animation ID.
     *
     * @param {string} id - The ID of the animation to retrieve.
     * @returns {ColorAlphaAnimation} - The ColorAlphaAnimation object for the given ID.
     */
    getColorAlphaAnimation(id: string): ColorAlphaAnimation;
    /**
     * Returns a ColorTransitionAnimation object for the given id.
     * @param {string} id - The id of the animation to retrieve.
     * @returns {ColorTransitionAnimation} - The ColorTransitionAnimation object for the given id.
     */
    getColorTransitionAnimation(id: string): ColorTransitionAnimation;
    /**
     * Stops the animation with the given ID.
     * @param {string} id - The ID of the animation to be stopped.
     * @returns {void}
     */
    forceStopAnimation(id: string): void;
    /**
     * This method ensures that the animation interval is started. If the animation interval ID is not set, it sets it to a new interval ID using `window.setInterval()` with a callback function of `this.tick()` and a delay of 20 milliseconds.
     */
    private ensureIntervalStarted;
    /**
     * This is a private method that iterates through all the animations in the container and calls their tick method. If any animation is still in progress, it sets the allCompleted flag to false. If all animations are completed, it stops the interval. If not, it fires the draw event.
     */
    private tick;
    /**
     * Stops the interval for the animation.
     */
    private stopInterval;
}
