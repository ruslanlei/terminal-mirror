/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ViewportModelState, Zoom } from './viewport.model';
export type ZoomXToZoomYRatio = number;
export declare const ratioFromZoomXY: (zoomX: Zoom, zoomY: Zoom) => ZoomXToZoomYRatio;
export declare const zoomXToZoomY: (zoomX: Zoom, ratio: ZoomXToZoomYRatio) => Zoom;
export declare const zoomYToZoomX: (zoomY: Zoom, ratio: ZoomXToZoomYRatio) => Zoom;
/**
 * Locks the zoomY with zoomX and moves yEnd according to ratio changes.
 * @param state
 * @param zoomXYRatio
 */
export declare const lockedYEndViewportCalculator: (state: ViewportModelState, zoomXYRatio: ZoomXToZoomYRatio) => void;
