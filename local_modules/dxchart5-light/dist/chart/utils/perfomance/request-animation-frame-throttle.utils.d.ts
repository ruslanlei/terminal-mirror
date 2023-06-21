/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export declare let animationFrameId: number;
export declare const animationFrameThrottled: (name: string, action: () => void) => void;
export declare const cancelThrottledAnimationFrame: (name: string) => void;
/**
 * Prior actions will be called before regular actions
 * An example of regular action - draw event
 * @param name
 * @param action
 */
export declare const animationFrameThrottledPrior: (name: string, action: () => void) => void;
