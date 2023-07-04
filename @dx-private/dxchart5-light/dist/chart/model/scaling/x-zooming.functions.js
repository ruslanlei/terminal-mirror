/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const zoomXToPercentViewportCalculator=(n,o,r,x,E)=>{const d=(o.xEnd-o.xStart)*x,l=d*r,c=d*(1-r);return E?(o.xStart=o.xStart+l,o.xEnd=o.xEnd-c):(o.xStart=o.xStart-l,o.xEnd=o.xEnd+c),o.zoomX=n.calculateZoomX(o.xStart,o.xEnd),o},zoomXToEndViewportCalculator=(n,o,r,x)=>zoomXToPercentViewportCalculator(n,o,1,r,x);
