/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{merge as a}from"rxjs";import{filter as r,map as o,tap as h}from"rxjs/operators";import{CanvasElement as n}from"../../canvas/canvas-bounds-container";import{ChartBaseElement as d}from"../../chart-base-element";import{isDiffersBy as l,uuid as m}from"../../utils";import{animationFrameThrottledPrior as p}from"../../utils/request-animation-frame-throttle.utils";export class YAxisBaseLabelsModel extends d{constructor(e,i,s,t){super(),this.scaleModel=e,this.yAxisLabelsGenerator=i,this.canvasBoundsContainer=s,this.updateYAxisWidth=t,this.labels=[],this.prevYAxisHeight=0,this.animFrameId=`anim_cache_${m()}`}doActivate(){super.doActivate(),this.addRxSubscription(a(this.scaleModel.yChanged,this.canvasBoundsContainer.observeBoundsChanged(n.Y_AXIS).pipe(o(e=>e.height),r(e=>l(e,this.prevYAxisHeight,1.5)),h(e=>{this.yAxisLabelsGenerator.labelsCache.invalidate(),this.prevYAxisHeight=e}))).subscribe(()=>this.updateLabels()))}updateLabels(){this.labels=this.yAxisLabelsGenerator.generateNumericLabels(),p(this.animFrameId,()=>this.updateYAxisWidth())}}
