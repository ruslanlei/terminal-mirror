/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ViewportModel, ViewportModelState } from './viewport.model';
import { ViewportPercent } from '../scale.model';
/**
 * Zooms to percentage of viewport proportionally.
 * @param vm
 * @param state
 * @param viewportPercent
 * @param zoomStrength - 0..1 number, 1=max strength
 * @param zoomIn
 * @doc-tags viewport,zoom,scaling
 */
export declare const zoomXToPercentViewportCalculator: (vm: ViewportModel, state: ViewportModelState, viewportPercent: ViewportPercent, zoomStrength: number, zoomIn: boolean) => ViewportModelState;
/**
 * Zooms to viewports end.
 * @param vm
 * @param state
 * @param zoomStrength - 0..1 number, 1=max strength
 * @param zoomIn
 * @doc-tags viewport,zoom,scaling
 */
export declare const zoomXToEndViewportCalculator: (vm: ViewportModel, state: ViewportModelState, zoomStrength: number, zoomIn: boolean) => ViewportModelState;
