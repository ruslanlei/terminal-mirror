/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{avoidAntialiasing as r}from"../../utils/canvas-drawing-functions.utils";import{DEFAULT_PRICE_LABEL_PADDING as c,getLabelYOffset as g}from"../y_axis/y-axis-labels.drawer";import{floor as h}from"../../utils";export class GridDrawer{constructor(o,e,i,n,t,s,a,d=()=>!0,l){this.canvasModel=o,this.viewportModel=e,this.config=i,this.xBoundsProvider=n,this.yBoundsProvider=t,this.xLabelsProvider=s,this.yLabelsProvider=a,this.drawPredicate=d,this.getBaseLine=l}draw(){if(this.drawPredicate()){const o=this.canvasModel.ctx;r(o,()=>this.drawVertical(o)),r(o,()=>this.drawHorizontal(o)),r(o,()=>this.drawZeroLine(o))}}drawZeroLine(o){if(this.getBaseLine&&this.config.components.yAxis.type==="percent"&&this.config.components.yAxis.zeroPercentLine){const e=this.xBoundsProvider(),i=h(this.getBaseLine());o.beginPath(),o.strokeStyle=this.config.colors.yAxis.zeroPercentLine,o.setLineDash([]),o.moveTo(e.x,i),o.lineTo(e.x+e.width,i),o.stroke(),o.closePath()}}drawVertical(o){const e=this.xLabelsProvider();if(e.length&&this.config.components.grid.vertical){o.lineWidth=this.config.components.grid.width,o.strokeStyle=this.config.colors.chartAreaTheme.gridColor,o.setLineDash(this.config.components.grid.dash||[]);const i=this.xBoundsProvider(),n=i.x+i.width;for(const t of e){const s=h(this.viewportModel.toX(t.value));s>i.x&&s<n&&(o.beginPath(),o.moveTo(s,i.y),o.lineTo(s,i.y+i.height),o.stroke())}}}drawHorizontal(o){const e=this.yLabelsProvider();if(e.length&&this.config.components.grid.horizontal){o.lineWidth=this.config.components.grid.width,o.strokeStyle=this.config.colors.chartAreaTheme.gridColor,o.setLineDash(this.config.components.grid.dash||[]);const i=this.yBoundsProvider();for(const n of e){const t=h(this.viewportModel.toY(n.value)),s=g(n.text,o,c);t>i.y+s&&t<i.y+i.height-s&&(o.beginPath(),o.moveTo(i.x,t),o.lineTo(i.x+i.width,t),o.stroke())}}}getCanvasIds(){return[this.canvasModel.canvasId]}}
