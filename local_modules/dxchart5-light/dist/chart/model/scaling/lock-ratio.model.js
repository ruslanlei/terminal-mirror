/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const ratioFromZoomXY=(o,n)=>o/n,zoomXToZoomY=(o,n)=>o/n,zoomYToZoomX=(o,n)=>o*n,lockedYEndViewportCalculator=(o,n)=>{const Y=o.zoomY;o.zoomY=zoomXToZoomY(o.zoomX,n);const c=o.zoomY/Y,m=o.yEnd-o.yStart,r=m*c-m;o.yEnd=o.yEnd+r};
