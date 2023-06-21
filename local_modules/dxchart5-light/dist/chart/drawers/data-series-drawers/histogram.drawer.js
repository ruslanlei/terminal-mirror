/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{floor as a}from"../../utils/math.utils";import{setLineWidth as g}from"../data-series.drawer";export class HistogramDrawer{constructor(){}draw(o,c,r,e){const h=r.view.toY(0);c.forEach((l,v)=>{var t;const i=r.getPaintConfig(v);g(o,i.lineWidth,r,e,i.hoveredLineWidth),o.strokeStyle=(t=e.singleColor)!==null&&t!==void 0?t:i.color,o.beginPath(),l.forEach(n=>{const s=r.view.toX(n.centerUnit),f=r.view.toY(n.close);o.moveTo(s,a(h)),o.lineTo(s,a(f))}),o.stroke()})}}
