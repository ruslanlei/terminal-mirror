/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{floorToDPR as s,roundToDPR as l}from"../utils/device-pixel-ratio.utils";import{VisualSeriesPoint as u}from"./data-series.model";export default class y extends u{constructor(t,o,h,i,n,r,e,d,a=!1,c=!1,Y=!1){super(t,i),this.startUnit=t-o/2,this.width=o,this.open=h,this.high=n,this.low=r,this.name=e,this.candle=d,this.hasBorder=a,this.isActive=c,this.isHollow=Y}bodyHeight(t){return s(Math.abs(t.toY(this.open)-t.toY(this.close)))}candleHeight(t){return s(Math.abs(t.toY(this.high)-t.toY(this.low)))}bodyAsVLine(t){if(this.width<2)return[this.centerUnit,this.yLineStart(t),this.width,this.candleHeight(t)]}bodyRect(t){return[this.startUnit,this.yBodyStart(t),this.width,this.bodyHeight(t)]}getCandle(){return this.candle}yBodyKeyPoints(t){const o=s(t.toY(this.high)),h=s(t.toY(this.low)),i=s(t.toY(this.open)),n=s(t.toY(this.close)),[r,e]=i>n?[n,i]:[i,n],[d,a]=o>h?[h,o]:[o,h];return[d,r,e,a]}yLineEnd(t){return s(Math.max(t.toY(this.high),t.toY(this.low)))}yLineStart(t){return s(Math.min(t.toY(this.high),t.toY(this.low)))}yBodyStart(t){return s(Math.min(t.toY(this.open),t.toY(this.close)))}yBodyEnd(t){return s(Math.max(t.toY(this.open),t.toY(this.close)))}xCenter(t){return this.x(t)}xStart(t){return l(t.toX(this.startUnit))}}
