/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{calculateSymbolHeight as x,calculateTextWidth as f}from"../../utils/canvas-font-measure-tool.utils";import{getFontFromConfig as u}from"./y-axis.model";import{clipToBounds as m}from"../../drawers/data-series.drawer";export class YAxisDrawer{constructor(e,o,t,s,i,r=()=>!0,l){this.fullConfig=e,this.yAxisState=o,this.canvasModel=t,this.labelsProvider=s,this.axisBounds=i,this.drawPredicate=r,this.toY=l}draw(){if(this.drawPredicate()){const e=this.labelsProvider(),o=this.axisBounds(),t=this.canvasModel.ctx;t.fillStyle=this.getBackgroundColor(),t.fillRect(o.x,o.y,o.width,o.height);const s=u(this.yAxisState),i=x(s,t),r=this.getLabelTextColor();t.save(),m(t,o),this.drawLabels(t,e,o,i,s,r),t.restore()}}drawLabels(e,o,t,s,i,r){e.fillStyle=r,e.font=i;const l=e.measureText("00.0"),a=l.actualBoundingBoxAscent+l.actualBoundingBoxDescent,d=t.y+a,g=t.y+t.height-a;o.forEach(h=>{const c=this.toY(h.value);c>d&&c<g&&y(e,t,h.text,c,s,i,this.yAxisState.labelBoxMargin.end,this.yAxisState.align)})}getCanvasIds(){return[this.canvasModel.canvasId]}getBackgroundColor(){return this.fullConfig.colors.yAxis.backgroundColor}getLabelTextColor(){return this.fullConfig.colors.chartAreaTheme.axisColor}}const y=(n,e,o,t,s,i,r,l)=>{const a=l==="right"?e.x+e.width-f(o,n,i)-r:e.x+r;n.fillText(o,a,t+s/2-1)};
