/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{Subject as p}from"rxjs";import{CanvasElement as m}from"../../canvas/canvas-bounds-container";import{ChartBaseElement as E}from"../../model/chart-base-element";import{DragNDropYComponent as b}from"../dran-n-drop_helper/drag-n-drop-y.component";const d=10;export class YAxisScaleHandler extends E{constructor(i,t,Y,g,n,D,h,l){if(super(),this.bus=i,this.viewportModel=g,this.canvasBoundsContainer=D,this.autoScaleCallback=l,this.yAxisDragEndSubject=new p,this.lastYStart=0,this.lastYEnd=0,this.lastYHeight=0,this.lastYPxHeight=0,this.onYDragStart=()=>{this.lastYStart=this.viewportModel.yStart,this.lastYEnd=this.viewportModel.yEnd,this.lastYHeight=this.viewportModel.yEnd-this.viewportModel.yStart,this.lastYPxHeight=this.canvasBoundsContainer.getBounds(m.Y_AXIS).height},this.onYDragTick=s=>{const{delta:e}=s;let a;e<0?a=1/(1+-e/this.lastYPxHeight*(d-1)):a=1+e/this.lastYPxHeight*(d-1);const c=(this.lastYHeight*a-this.lastYHeight)/2,u=this.lastYStart-c,S=this.lastYEnd+c;this.autoScaleCallback(!1),this.viewportModel.setYScale(u,S),this.bus.fireDraw()},this.onYDragEnd=()=>{this.yAxisDragEndSubject.next()},t.customScale){const s=()=>t.type!=="percent",e=new b(h,{onDragTick:r(this.onYDragTick,s),onDragStart:r(this.onYDragStart,s),onDragEnd:r(this.onYDragEnd,s)},n,Y,{disableChartPanning:!1});this.addChildEntity(e),t.customScaleDblClick&&n.observeDbClick(h).subscribe(()=>{l(!0),this.bus.fireDraw()})}}}const r=(o,i)=>(...t)=>i()&&o(...t);
