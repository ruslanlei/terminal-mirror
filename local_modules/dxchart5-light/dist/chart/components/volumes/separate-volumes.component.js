/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ChartBaseElement as n}from"../../chart-base-element";import{createCandlesOffsetProvider as d}from"../chart/data-series.high-low-provider";import{VolumesDrawer as h}from"./volumes.drawer";import{volumeFormatter as u}from"./volumes.formatter";class a extends n{constructor(o,e,t,s,r,i,l){super(),this.canvasModel=o,this.chartComponent=e,this.drawingManager=t,this.config=s,this.volumesModel=r,this.volumesColorByChartTypeMap=i,this.paneManager=l,s.components.volumes.showSeparately&&this.activateSeparateVolumes()}doActivate(){super.doActivate(),this.addRxSubscription(this.chartComponent.chartModel.candlesUpdatedSubject.subscribe(()=>{var o,e;return!(!((o=this.scaleModel)===null||o===void 0)&&o.isViewportValid())&&((e=this.scaleModel)===null||e===void 0?void 0:e.doAutoScale(!0))})),this.addRxSubscription(this.volumesModel.volumeMax.subscribe(()=>{var o;return(o=this.scaleModel)===null||o===void 0?void 0:o.doAutoScale()}))}activateSeparateVolumes(){if(this.paneManager.paneComponents[a.UUID]===void 0){const o=this.paneManager.createPane(a.UUID,{paneFormatters:{regular:u},useDefaultHighLow:!1,increment:1}),{scaleModel:e}=o,t=d(()=>({top:10,bottom:0,left:0,right:0,visible:!0}),this.volumesModel.highLowProvider);e.autoScaleModel.setHighLowProvider("volumes",t),e.doAutoScale(!0),this.scaleModel=e;const s=new h(this.canvasModel,this.config,this.volumesModel,this.chartComponent.chartModel,e,this.volumesColorByChartTypeMap,()=>this.config.components.volumes.showSeparately);this.drawingManager.addDrawer(s,"UNDERLAY_VOLUMES_AREA")}}deactiveSeparateVolumes(){this.paneManager.removePane(a.UUID),delete this.scaleModel,this.drawingManager.removeDrawerByName("UNDERLAY_VOLUMES_AREA")}fromY(o){var e,t;return(t=(e=this.scaleModel)===null||e===void 0?void 0:e.fromY(o))!==null&&t!==void 0?t:0}}a.UUID="volumes";export{a as SeparateVolumesComponent};
