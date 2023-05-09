/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const a=30;export const startViewportModelAnimation=(n,o,t)=>{const r=n.startViewportMovementAnimation(o,{duration:30,targetXStart:t.xStart,targetXEnd:t.xEnd,targetYStart:t.yStart,targetYEnd:t.yEnd,targetZoomX:t.zoomX,targetZoomY:t.zoomY});o.currentAnimation=r};
