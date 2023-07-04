/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CandleSeriesModel as p}from"../../model/candle-series.model";import{floorToDPR as d}from"../../utils/device/device-pixel-ratio.utils";export class HistogramDrawer{constructor(o){this.config=o}draw(o,S,e,s){if(e instanceof p){const C=S.flat(),h=e.scaleModel.getBounds(),f=h.y+h.height;for(const t of C){o.beginPath();const c=t.name,i=this.config.barCapSize,n=e.colors.histogram;if(n===void 0)return;s.singleColor?o.fillStyle=s.singleColor:o.fillStyle=n[`${c}Bright`];const r=t.xStart(e.view),l=d(e.view.toY(t.close)),g=d(e.view.xPixels(t.width));o.fillRect(r,l,g,i);const a=o.createLinearGradient(0,l+i,0,f);s.singleColor?o.fillStyle=s.singleColor:(a.addColorStop(0,n[`${c}Cap`]),a.addColorStop(1,n[`${c}Bottom`]),o.fillStyle=a),g===0?(o.beginPath(),o.strokeStyle=a,o.moveTo(r,l+i),o.lineTo(r,f),o.stroke(),o.closePath()):o.fillRect(r,l+i,g,f-l-i)}}}}
