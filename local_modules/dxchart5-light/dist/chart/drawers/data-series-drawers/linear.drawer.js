/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{setLineWidth as s}from"../data-series.drawer";import{buildLinePath as l}from"./data-series-drawers.utils";export class LinearDrawer{constructor(){}draw(i,e,r,n){e.forEach((a,h)=>{var o;const t=r.getPaintConfig(h);s(i,t.lineWidth,r,n,t.hoveredLineWidth),i.strokeStyle=(o=n.singleColor)!==null&&o!==void 0?o:t.color,this.drawLinePath(i,a,r.view)})}drawLinePath(i,e,r){i.beginPath(),l(e,i,r),i.stroke()}}
