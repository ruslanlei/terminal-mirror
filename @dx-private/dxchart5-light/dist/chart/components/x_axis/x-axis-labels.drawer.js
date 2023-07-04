/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{drawXAxisLabel as i}from"./x-axis-draw.functions";import{CanvasElement as r}from"../../canvas/canvas-bounds-container";import*as d from"color";import{fillRect as l}from"../../utils/canvas/canvas-drawing-functions.utils";export class XAxisLabelsDrawer{constructor(a,e,n,o,s){this.backgroundCanvasModel=a,this.config=e,this.canvasModel=n,this.canvasBoundsContainer=o,this.xAxisLabelsModel=s}draw(){const a=this.canvasModel.ctx;this.drawHighlightedBackgroundBetweenLabels(),this.xAxisLabelsModel.labels.forEach(e=>{i(this.backgroundCanvasModel.ctx,a,this.canvasBoundsContainer,this.config,e)})}drawHighlightedBackgroundBetweenLabels(){const a=this.canvasModel.ctx,e={},n=this.xAxisLabelsModel.labels.reduce((o,s)=>{if(s.subGroupId!==void 0){let t=o[s.subGroupId];t||(t=[],o[s.subGroupId]=t),t.push(s)}return o},e);Object.keys(n).forEach(o=>{const s=n[o];if(s.length===2){const t=this.canvasBoundsContainer.getBounds(r.X_AXIS);a.fillStyle=d.rgb(s[0].color).alpha(.1).toString(),l(a,{x:s[0].x,y:t.y},{x:s[1].x,y:t.y+t.height})}})}getCanvasIds(){return[this.canvasModel.canvasId]}}
