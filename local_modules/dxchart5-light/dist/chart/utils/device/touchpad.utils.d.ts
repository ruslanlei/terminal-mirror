/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../chart.config';
export declare const isFirefox: boolean;
/**
 * this function determines whether the event was triggered with the mouse or the touchpad
 *
 * This works because wheelDeltaY measures the physical distance that the actual hardware mouse wheel has travelled,
 * while deltaY measures the amount of scrolling produced on screen.
 * A conventional mouse typically has a much lower "scroll resolution" than a trackpad.
 * The wheelDeltaY is exactly 3x the deltaY value(in most browsers)
 * This function consist a lot of empiric if statements for some cases in different browsers and systems
 * @param {WheelEvent} e
 * @returns {boolean}
 *
 * @doc-tags chart-components, utility,
 */
export declare const touchpadDetector: (e: WheelEvent) => boolean;
/**
 * this function returns different ящщь sensitivity for the percent axis and the others
 * @param config
 * @param isTouchpad
 * @returns {number}
 *
 * @doc-tags chart-components, zoom
 */
export declare const getTouchpadSensitivity: (config: FullChartConfig) => number;
