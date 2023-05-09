/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CanvasElement as h}from"../../canvas/canvas-bounds-container";import{calculateTextWidth as x}from"../../utils/canvas-font-measure-tool.utils";export class XAxisTimeLabelsDrawer{constructor(t,o,n,e,i,a=()=>!0){this.config=t,this.canvasModel=o,this.viewportModel=n,this.canvasBoundsContainer=e,this.labelsProvider=i,this.drawPredicate=a}draw(){var t;if(this.drawPredicate()){const o=this.canvasModel.ctx,n=this.config.colors.xAxis,e=this.config.components.xAxis.fontFamily,i=XAxisTimeLabelsDrawer.getFontFromConfig(this.config),a=this.config.components.xAxis.fontSize,r=(t=this.config.components.xAxis.padding.top)!==null&&t!==void 0?t:0;o.save(),o.font=i,o.fillStyle=n.backgroundColor;const s=this.canvasBoundsContainer.getBounds(h.X_AXIS);o.fillRect(s.x,s.y,s.width,s.height);const c=this.config.colors.chartAreaTheme.axisColor,l=this.labelsProvider();this.drawLabels(o,l,s,c,a,e,r),o.restore()}}drawLabels(t,o,n,e,i,a,r){const s=`${i}px ${a}`;t.fillStyle=e;for(const c of o){const l=this.viewportModel.toX(c.value)-x(c.text,t,s)/2;if(l<0||l>n.width)continue;const f=n.y+i-1+r,d=c.text;t.font=s,t.fillText(d,l,f)}}static getFontFromConfig(t){return`${t.components.xAxis.fontStyle}  ${t.components.xAxis.fontSize}px ${t.components.xAxis.fontFamily}`}getCanvasIds(){return[this.canvasModel.canvasId]}}
