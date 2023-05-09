/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export class PointsDrawer{constructor(){}draw(o,a,i,l){a.forEach((e,s)=>{var n;const t=i.getPaintConfig(s),c=t.lineWidth;o.fillStyle=(n=l.singleColor)!==null&&n!==void 0?n:t.color,o.lineWidth=1,e.forEach(r=>{o.beginPath();const f=i.view.toX(r.centerUnit),h=i.view.toY(r.close);o.arc(f,h,c,0,Math.PI*2),o.fill()})})}}
