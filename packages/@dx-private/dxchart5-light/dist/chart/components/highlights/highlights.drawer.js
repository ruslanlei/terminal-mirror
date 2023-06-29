/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{calculateTextWidth as A}from"../../utils/canvas/canvas-font-measure-tool.utils";import{HIGHLIGHTS_TYPES as F}from"./highlights.model";import{CanvasElement as x}from"../../canvas/canvas-bounds-container";import{unitToPixels as X}from"../../model/scaling/viewport.model";import{clipToBounds as G}from"../../drawers/data-series.drawer";const n=[20,10];export class HighlightsDrawer{constructor(e,o,s,l,i){this.highlightsModel=e,this.chartModel=o,this.canvasModel=s,this.canvasBoundsContainer=l,this.config=i}draw(){var e,o,s,l;if(this.config.components.highlights.visible){const i=this.chartModel.getCandles(),t=this.canvasModel.ctx,d=this.highlightsModel.getVisualHighlights();if(this.highlightsModel.getHighlights().length&&i.length!==0&&this.chartModel.scaleModel.isScaleReady()){const r=this.canvasBoundsContainer.getBounds(x.ALL_PANES);t.save(),G(t,r);const w=(e=this.config.components.highlights.border.width)!==null&&e!==void 0?e:1,E=(o=this.config.components.highlights.border.dash)!==null&&o!==void 0?o:[0,0],H=(s=this.config.components.highlights.fontSize)!==null&&s!==void 0?s:11,L=(l=this.config.components.highlights.fontFamily)!==null&&l!==void 0?l:"monospace",p=`${H}px ${L}, monospace`;t.font=p,t.lineWidth=w,t.setLineDash(E),F.forEach(y=>{var f,g;const S=d[y];if(S){const a=this.config.colors.highlights[y],k=(f=a==null?void 0:a.border)!==null&&f!==void 0?f:"#ffffff",B=(g=a==null?void 0:a.background)!==null&&g!==void 0?g:"#ffffff";t.save(),t.beginPath(),t.fillStyle=B,t.strokeStyle=k,S.forEach(h=>{var v,m,b;const P=this.chartModel.candleFromTimestamp(h.from),D=X(P.width,this.chartModel.scaleModel.zoomX),c=P.xStart(this.chartModel.scaleModel),_=this.chartModel.candleFromTimestamp(h.to),C=X(_.width,this.chartModel.scaleModel.zoomX),u=_.xStart(this.chartModel.scaleModel)+C;if(h.border&&this.drawBorders(h.border,t,c+D,u-C,r),t.fillRect(c,r.y,u-c,r.y+r.height),h.label){const T=(v=h.label.text)!==null&&v!==void 0?v:"",M=this.config.colors.highlights[h.type];t.save(),t.fillStyle=(m=M==null?void 0:M.label)!==null&&m!==void 0?m:"#ffffff";const I=A(T,t,p),[W,z]=this.resolveHighlightLabelPosition((b=h.label.placement)!==null&&b!==void 0?b:"left-left",r,[c,u],I);t.fillText(T,W,z),t.restore()}}),t.closePath(),t.restore()}}),t.restore()}}}resolveHighlightLabelPosition(e,o,s,l){const[i,t]=s;switch(e){case"right-left":return[t-n[1]-l,o.y+n[0]];case"left-left":return[i-n[1]-l,o.y+n[0]];case"right-right":return[t+n[1],o.y+n[0]];case"left-right":default:return[i+n[1],o.y+n[0]]}}drawBorders(e,o,s,l,i){const t=e.left,d=e.right;t&&(o.beginPath(),o.moveTo(s,i.y),o.lineTo(s,i.y+i.height),o.stroke(),o.closePath()),d&&(o.beginPath(),o.moveTo(l,i.y),o.lineTo(l,i.y+i.height),o.stroke(),o.closePath())}getCanvasIds(){return[this.canvasModel.canvasId]}}
