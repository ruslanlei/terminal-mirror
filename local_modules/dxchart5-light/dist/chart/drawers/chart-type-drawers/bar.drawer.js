/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CandleSeriesModel as b}from"../../model/candle-series.model";import{avoidAntialiasing as p}from"../../utils/canvas-drawing-functions.utils";import{floorToDPR as s}from"../../utils/device-pixel-ratio.utils";import{setLineWidth as Y}from"../data-series.drawer";export class BarDrawer{constructor(o){this.config=o}setFillStyle(o,n,i,l){if(n.singleColor)o.strokeStyle=n.singleColor;else{const r=i.colors.barTheme;r&&(o.strokeStyle=r[`${l.name}Color`])}}draw(o,n,i,l){if(i instanceof b){const r=n.flat();Y(o,this.config.barLineWidth,i,l),p(o,()=>{for(const t of r){this.setFillStyle(o,l,i,t),o.beginPath();const e=s(i.view.toX(t.centerUnit)),a=s(i.view.toX(t.startUnit)),[v,y,h,w]=t.yBodyKeyPoints(i.view),T=s(i.view.xPixels(t.width)/2),m=s(i.view.toY(t.close)),f=s(i.view.toY(t.open));this.config.showWicks?(o.moveTo(e,v),o.lineTo(e,w)):(o.moveTo(e,y),o.lineTo(e,h)),o.moveTo(e,m),o.lineTo(e+T,m),o.moveTo(a,f),o.lineTo(e,f),o.stroke()}})}}}
