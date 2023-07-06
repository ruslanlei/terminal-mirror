/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasAnimation } from './canvas-animation';
import { ViewportModel, ViewportModelState } from '../model/scaling/viewport.model';
/**
 * Starts the animation for chart viewport movement.
 * @param canvasAnimation
 * @param viewportModel
 * @param state
 * @doc-tags animation,viewport
 */
export declare const startViewportModelAnimation: (canvasAnimation: CanvasAnimation, viewportModel: ViewportModel, state: ViewportModelState) => void;
