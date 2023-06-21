/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{binarySearch as r,create2DArray as l,lastOf as c,slice2DArray as u}from"../utils/array.utils";import{ChartBaseElement as P}from"./chart-base-element";import{DataSeriesYAxisLabelsProvider as x}from"../components/y_axis/price_labels/data-series-y-axis-labels.provider";import{MathUtils as g}from"../utils/math.utils";import{merge as I}from"../utils/merge.utils";import{cloneUnsafe as v}from"../utils/object.utils";import{DataSeriesView as f}from"./data-series-view";import{DEFAULT_DATA_SERIES_CONFIG as h}from"./data-series.config";import{floorToDPR as d}from"../utils/device/device-pixel-ratio.utils";export class VisualSeriesPoint{constructor(t,i){this.centerUnit=t,this.close=i}y(t){return d(t.toY(this.close))}x(t){return d(t.toX(this.centerUnit))}clone(){return new VisualSeriesPoint(this.centerUnit,this.close)}}export class DataSeriesModel extends P{get dataPoints2D(){return this._dataPoints}get dataPoints(){return this._dataPointsFlat}set dataPoints(t){this._dataPoints=l(t),this._dataPointsFlat=this._dataPoints.flat(),this.visualPoints=this._toVisualPoints(this._dataPoints)}get visualPoints(){return this._visualPointsFlat}get visualPoints2D(){return this._visualPoints}set visualPoints(t){this._visualPoints=l(t),this._visualPointsFlat=this._visualPoints.flat()}constructor(t,i,a=v(h)){super(),this.paneComponent=t,this.id=i,this.name="",this.hovered=!1,this._dataPoints=[],this.pricePrecisions=[.01],this.linkedDataSeriesModels=[],this._dataPointsFlat=[],this._visualPoints=[],this._visualPointsFlat=[],this.dataIdxStart=0,this.dataIdxEnd=0,this.getPaintConfig=e=>{var s;return(s=this.config.paintConfig[e])!==null&&s!==void 0?s:this.config.paintConfig[0]},this.getBaseLine=(e=this.dataIdxStart)=>{var s,n;return(n=(s=this.visualPoints[e])===null||s===void 0?void 0:s.close)!==null&&n!==void 0?n:1},this.getTextForPoint=e=>`${e.close}`,this.getLastVisualSeriesPoint=()=>{const e=this.visualPoints,s=r(e,this.scaleModel.xEnd,n=>n.centerUnit).index;return e[s]},this.getLastDataSeriesPoint=()=>{const e=this.visualPoints;return c(e)},this.config=I(a,h),this.scaleModel=t.scaleModel,this.view=new f(this,this.scaleModel,()=>this.paneComponent.getAxisType(),this.getBaseLine),this.yAxisLabelProvider=new x(this,this.config,t.getYAxisBounds),this.highLowProvider=p(this),t.addDataSeries(this),this.addRxSubscription(this.scaleModel.xChanged.subscribe(()=>this.recalculateDataViewportIndexes())),this.addRxSubscription(this.scaleModel.scaleInversedSubject.subscribe(()=>this.recalculateVisualPoints()))}_toVisualPoints(t){return t.map(i=>this.toVisualPoints(i))}toVisualPoints(t){return t.map((i,a)=>({centerUnit:a,close:i.close}))}setType(t){this.config.type=t,this.paneComponent.dataSeriesCanvasModel.fireDraw()}recalculateVisualPoints(){this.visualPoints=this._toVisualPoints(this.dataPoints2D)}recalculateDataViewportIndexes(t=this.scaleModel.xStart,i=this.scaleModel.xEnd){const{dataIdxStart:a,dataIdxEnd:e}=this.calculateDataViewportIndexes(t,i);this.dataIdxStart=a,this.dataIdxEnd=e}calculateDataViewportIndexes(t,i){const a=r(this.visualPoints,t,s=>s.centerUnit).index,e=r(this.visualPoints,i,s=>s.centerUnit).index;return{dataIdxStart:a,dataIdxEnd:e}}valueFormatter(t){return defaultValueFormatter(t)}getSeriesInViewport(t,i){let a=this.dataIdxStart,e=this.dataIdxEnd;if(i!==void 0&&t!==void 0){const s=this.calculateDataViewportIndexes(t,i);a=s.dataIdxStart,e=s.dataIdxEnd}return u(this.visualPoints2D,a,e)}}export const calculateDataSeriesHighLow=o=>{const t={high:Number.NEGATIVE_INFINITY,low:Number.POSITIVE_INFINITY,highIdx:0,lowIdx:0};for(let i=0;i<o.length;i++){const a=o[i];a.close>t.high&&(t.high=a.close,t.highIdx=i),a.close<t.low&&(t.low=a.close,t.lowIdx=i)}return t};const p=o=>({isHighLowActive:()=>o.config.highLowActive,calculateHighLow:t=>{const i=calculateDataSeriesHighLow(o.getSeriesInViewport(t==null?void 0:t.xStart,t==null?void 0:t.xEnd).flat());return Object.assign(Object.assign({},i),{high:o.view.toAxisUnits(i.high),low:o.view.toAxisUnits(i.low)})}});export const defaultValueFormatter=o=>{const i=s=>Math.ceil(Math.log(Math.abs(s))*Math.LOG10E),e=((s,n=5)=>Math.max(0,n-Math.max(0,i(s))))(o);return g.makeDecimal(o,e)};
