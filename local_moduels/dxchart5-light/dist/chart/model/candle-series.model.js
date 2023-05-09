/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{Subject as P}from"rxjs";import{getDefaultConfig as C}from"../chart.config";import{defaultCandleTransformer as f}from"../components/chart/candle-transformer.functions";import{calculateCandleWidth as v}from"../components/chart/candle-width-calculator.functions";import{merge as g}from"../utils/merge.utils";import{lastOf as w}from"../utils/utils-index";import{BASIC_CANDLE_WIDTH as D,nameDirection as y}from"./candle.model";import{calculateCandlesHighLow as L,createCandleSeriesHighLowProvider as M}from"./candle-series-high-low.provider";import{DataSeriesModel as S}from"./data-series.model";import{getDefaultHighLowWithIndex as V}from"./scale.model";import{PriceIncrementsUtils as x}from"../utils/priceIncrements.utils";const I=C().colors;export class CandleSeriesModel extends S{get dataPoints(){return super.dataPoints}set dataPoints(e){super.dataPoints=e,this.applyPriceMovement()}get instrument(){return this._instrument}set instrument(e){var t;this._instrument=e,this.pricePrecisions=x.computePrecisions((t=e.priceIncrements)!==null&&t!==void 0?t:[.01])}constructor(e,t,i,a,s,r,n,o=I){super(e,t),this.eventBus=i,this.candlesTransformersByChartType=r,this.candleWidthByChartType=n,this.colors=o,this.zippedHighLow=V(),this.lastPriceMovement="none",this.lastVisualCandleChangedSubject=new P,this.meanCandleWidth=D,this._instrument=s,this.instrument=s,this.highLowProvider=M(this),this.scaleModel=a,this.name=s.symbol}recalculateDataViewportIndexes(e=this.scaleModel.xStart,t=this.scaleModel.xEnd){super.recalculateDataViewportIndexes(e,t),this.recalculateZippedHighLow(),this.eventBus.fireDraw()}applyPriceMovement(){const e=w(this.dataPoints);e&&(this.lastPriceMovement=y(e.open,e.close))}recalculateVisualPoints(){super.recalculateVisualPoints(),this.recalculateMeanCandleWidth(this.visualPoints)}recalculateZippedHighLow(){return this.zippedHighLow=L(this.visualPoints.slice(this.dataIdxStart,this.dataIdxEnd))}updateCurrentPrice(e){this.previousPrice=this.currentPrice||e,this.currentPrice=e,this.currentPrice!==this.previousPrice&&(this.lastPriceMovement=this.currentPrice>this.previousPrice?"up":"down")}updateCandleSeriesColors(e){this.colors=g(e,this.colors),this.recalculateVisualPoints()}observeLastVisualCandleChanged(){return this.lastVisualCandleChangedSubject.asObservable()}doDeactivate(){super.doDeactivate()}toVisualPoints(e,t=0){var i,a;if(e.length===0)return[];const s=this.config.type,r=[];let n=t;const o=(i=this.candleWidthByChartType[s])!==null&&i!==void 0?i:v;for(let l=0;l<e.length;l++){const d=e[l],u=e[l-1],c=o(d),p=n+c/2,m=(a=this.candlesTransformersByChartType[s])!==null&&a!==void 0?a:f;r.push(m(d,{x:p,width:c,prevCandle:u,activeCandle:this.activeCandle})),n+=c}return r}recalculateMeanCandleWidth(e){this.meanCandleWidth=e.reduce((t,i)=>t+i.width,0)/e.length}setActiveCandle(e){this.activeCandle=e,this.recalculateVisualPoints()}clearData(){this.dataPoints=[],this.clearVisualCandles(),this.clearPrices()}clearPrices(){this.previousPrice=void 0,this.currentPrice=void 0,this.lastPriceMovement="none"}clearVisualCandles(){this.visualPoints=[]}}export function isLinked(h){switch(h){case"line":case"area":return!0;default:return!1}}
