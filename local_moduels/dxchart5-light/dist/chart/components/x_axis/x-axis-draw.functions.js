/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CanvasElement as A}from"../../canvas/canvas-bounds-container";import{redrawBackgroundArea as u}from"../../drawers/chart-background.drawer";const f={x:4,y:4};export function drawXAxisLabel(m,o,y,h,e){var i,r;const d=(i=e.alignType)!==null&&i!==void 0?i:"middle",{fontSize:l,fontFamily:p,padding:x}=h.components.xAxis,T=(r=x.top)!==null&&r!==void 0?r:0,t=y.getBounds(A.X_AXIS);o.save(),o.font=`bold ${l}px ${p}`;const a=o.measureText(e.text).width+f.x*2;let n=0;const s=e.x;switch(d){case"start":n=s-a;break;case"end":n=s;break;case"middle":default:n=s-a/2;break}u(m,o,n,t.y,a,t.height-1),d!=="middle"&&(o.strokeStyle=e.color,o.beginPath(),o.moveTo(s,t.y),o.lineTo(s,t.y+t.height),o.stroke()),o.fillStyle=e.color;const c=n+f.x,g=t.y+T+l;o.fillText(e.text,c,g),o.restore()}
