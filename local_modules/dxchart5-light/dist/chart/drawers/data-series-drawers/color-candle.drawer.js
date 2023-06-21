/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{unitToPixels as b}from"../../model/scaling/viewport.model";import{floorToDPR as l}from"../../utils/device/device-pixel-ratio.utils";import{round as v}from"../../utils/math.utils";export class ColorCandleDrawer{constructor(t){this.chartModel=t}draw(t,d,s,i){d.forEach((r,h)=>{var e;const f=s.getPaintConfig(h);t.fillStyle=(e=i.singleColor)!==null&&e!==void 0?e:f.color,r.forEach(n=>{const o=this.chartModel.getVisualCandle(v(n.centerUnit)),g=n.close;if(o&&g===1){const M=this.chartModel.scaleModel.zoomX,c=l(b(o.width,M)),m=l(o.bodyHeight(this.chartModel.scaleModel)),p=o.xCenter(this.chartModel.scaleModel)-c/2,u=o.yBodyStart(this.chartModel.scaleModel),C=this.chartModel.config.components.chart.candlePaddingPercent,a=l(c*C/2),y=p+a,P=c-a*2;t.fillRect(y,u,P,m)}})})}}
