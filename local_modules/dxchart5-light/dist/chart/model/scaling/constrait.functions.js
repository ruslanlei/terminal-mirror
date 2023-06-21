/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{at as S}from"../../utils/array.utils";import{calculateZoom as E,pixelsToUnits as w}from"./viewport.model";export const candleEdgesConstrait=(d,s,r,l)=>{var t,o,i,a;const n=Object.assign({},d),e=(o=(t=s[r])===null||t===void 0?void 0:t.startUnit)!==null&&o!==void 0?o:0,c=(a=(i=S(-r,s))===null||i===void 0?void 0:i.startUnit)!==null&&a!==void 0?a:0;let m=d.xStart,x=d.xEnd;return n.xStart>=c&&(m=c,x=x-(n.xStart-c)),n.xEnd<e&&(m=e-w(l.width,n.zoomX),x=e),n.xStart=m,n.xEnd=x,n},zoomConstraint=(d,s,r,l)=>{const t=Object.assign({},s),o=l(),i=t.xEnd-t.xStart,a=i<r.minCandles,n=o.width/r.minWidth,e=i>n;if(o.width>0){if(e)return t.xStart=t.xEnd-n,t.zoomX=E(t.xEnd-t.xStart,o.width),t;if(a)return t.xEnd=d.xEnd,t.xStart=t.xEnd-r.minCandles,t.zoomX=E(t.xEnd-t.xStart,o.width),t}return t};
