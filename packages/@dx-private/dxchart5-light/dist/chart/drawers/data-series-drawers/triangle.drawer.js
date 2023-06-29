/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export class TriangleDrawer{constructor(){}draw(o,e,n,l){e.forEach((s,c)=>{var i;const r=n.getPaintConfig(c);o.fillStyle=(i=l.singleColor)!==null&&i!==void 0?i:r.color,s.forEach(a=>{const t=n.view.toX(a.centerUnit),f=n.view.toY(a.close);this.drawCandleTriangle(o,t,f,r.lineWidth)})})}drawCandleTriangle(o,e,n,l){o.beginPath(),o.moveTo(e-l/2,n),o.lineTo(e,n-l),o.lineTo(e+l/2,n),o.fill()}}
