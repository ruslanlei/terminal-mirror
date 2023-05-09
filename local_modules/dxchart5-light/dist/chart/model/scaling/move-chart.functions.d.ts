/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Unit, ViewportModelState } from './viewport.model';
/**
 * Moves both xStart and xEnd without changing the viewport width (zoomX).
 * @param state
 * @param xStart - left starting point in units
 * @doc-tags scaling,viewport
 */
export declare const moveXStart: (state: ViewportModelState, xStart: Unit) => void;
/**
 * Moves both yStart and yEnd without changing the viewport height (zoomY).
 * @param state
 * @param yStart - starting point in units
 * @doc-tags scaling,viewport
 */
export declare const moveYStart: (state: ViewportModelState, yStart: Unit) => void;
