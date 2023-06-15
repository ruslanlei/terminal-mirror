/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CHART_UUID as w,CanvasElement as f}from"../../canvas/canvas-bounds-container";import{ChartBaseElement as d}from"../../chart-base-element";import{merge as n}from"../../utils/merge.utils";import{WaterMarkDrawer as k}from"./water-mark.drawer";export class WaterMarkComponent extends d{constructor(t,e,c,h,a,i,o){super(),this.paneManager=t,this.chartModel=e,this.eventBus=c,this.config=h,this.canvasModel=i,this.waterMarkConfig=this.config.components.waterMark,this.waterMarkData=this.getWaterMarkData(),this.waterMarkDrawer=new k(this.config,a,i,()=>this.waterMarkConfig,()=>this.waterMarkData),this.addRxSubscription(n(a.observeBoundsChanged(f.PANE_UUID(w)),this.paneManager.panesChangedSubject).subscribe(r=>{this.waterMarkConfig=this.recalculateTextSize(r.width,r.height)})),this.addRxSubscription(this.chartModel.candlesSetSubject.subscribe(()=>{this.waterMarkData=this.getWaterMarkData()})),o.addDrawerAfter(this.waterMarkDrawer,"WATERMARK","DRAWINGS")}setWaterMarkVisible(t){this.config.components&&this.config.components.waterMark&&(this.config.components.waterMark.visible=t,this.canvasModel.fireDraw())}setWaterMarkData(t){this.waterMarkData=t,this.canvasModel.fireDraw()}getWaterMarkData(){return this.waterMarkData||{}}setWaterMarkConfig(t){if(!(!t||!this.config.components)){if(!this.config.components.waterMark)this.config.components.waterMark=JSON.parse(JSON.stringify(t));else{const e={};n(e,t),n(e,this.config.components.waterMark),this.config.components.waterMark=e}this.canvasModel.fireDraw()}}setLogoImage(t){this.waterMarkDrawer.setLogoImage(t)}recalculateTextSize(t,e){const a=g=>.15*Math.log(g)/Math.log(1.5)+1,i=a(t/1920),o=a(e/1080),r=Math.min(i,o),s=r>=0?r:0,M={firstRowFontSize:Math.round(this.config.components.waterMark.firstRowFontSize*s),secondRowFontSize:Math.round(this.config.components.waterMark.secondRowFontSize*s),thirdRowFontSize:Math.round(this.config.components.waterMark.thirdRowFontSize*s)};return Object.assign(Object.assign({},this.config.components.waterMark),M)}}
