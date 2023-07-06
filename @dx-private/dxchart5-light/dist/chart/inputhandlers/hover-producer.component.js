/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{isMobile as d}from"../utils/device/browser.utils";import{CanvasElement as v}from"../canvas/canvas-bounds-container";import{ChartBaseElement as m}from"../model/chart-base-element";import c,{EVENT_HOVER as H}from"../events/events";import{CandleHoverProducerPart as b}from"../model/candle-hover";import{CompareSeriesHoverProducerPart as p}from"../model/compare-series-hover";export class HoverProducerComponent extends m{constructor(t,e,s,r,o,a,n,i,h){super(),this.crossEventProducer=t,this.bus=e,this.scaleModel=s,this.config=r,this.chartModel=o,this.canvasInputListener=a,this.timeFormatterProvider=n,this.canvasBoundsContainer=i,this.paneManager=h,this.longTouchActivated=!1;const l=new b(this.chartModel),u=new p(this.chartModel);this.hoverProducerParts={candleHover:l,compareSeriesHover:u}}doActivate(){super.doActivate(),this.addRxSubscription(this.chartModel.candlesSetSubject.subscribe(()=>{const e=this.chartModel.getLastVisualCandle();e&&this.createAndFireHoverFromCandle(e,!1)})),this.addRxSubscription(this.chartModel.candlesUpdatedSubject.subscribe(()=>{const e=this.chartModel.getLastVisualCandle();this.lastHover!==void 0&&e!==void 0&&e.candle.timestamp===this.lastHover.timestamp&&this.updateHover(e)})),this.addRxSubscription(this.crossEventProducer.cross.subscribe(e=>{e===null?(this.lastCross=void 0,this.lastHover=void 0,this.bus.fire(c.EVENT_CLOSE_HOVER)):(this.createAndFireHover(e),this.lastCross=e)})),this.addRxSubscription(this.scaleModel.xChanged.subscribe(()=>this.fireLastCross())),this.addRxSubscription(this.canvasInputListener.observeTouchStart().subscribe(e=>{const s=e.touches[0].clientX,r=e.touches[0].clientY-this.canvasBoundsContainer.canvasOnPageLocation.y;this.chartModel.candleFromX(s,!0)&&this.createAndFireHover([s,r,""])}));const t=this.canvasBoundsContainer.getBoundsHitTest(v.ALL_PANES);this.addRxSubscription(this.canvasInputListener.observeLongTouch(t).subscribe(e=>{this.paneManager.chartPanComponent.deactivatePanHandlers(),this.longTouchActivated=!0;const s=e.touches[0].clientX,r=e.touches[0].clientY-this.canvasBoundsContainer.canvasOnPageLocation.y;this.createAndFireHover([s,r,""])})),this.addRxSubscription(this.canvasInputListener.observeTouchEndDocument().subscribe(()=>{this.paneManager.chartPanComponent.activateChartPanHandlers(),this.longTouchActivated&&(this.longTouchActivated=!1,this.bus.fire(c.EVENT_CLOSE_HOVER))}))}createHoverFromCandle(t){const e=t.xCenter(this.chartModel.scaleModel),s=this.chartModel.scaleModel.toY(t.close);return this.createHover(e,s)}createHover(t,e){if(this.chartModel.getCandles().length===0)return;const r=this.chartModel.candleFromX(t).timestamp,o={x:t,y:e,timestamp:r,timeFormatted:this.timeFormatterProvider()(r)},a=Object.entries(this.hoverProducerParts).reduce((n,i)=>Object.assign(Object.assign({},n),{[i[0]]:i[1].getData(o)}),{});return Object.assign(Object.assign({},o),a)}createAndFireHoverFromCandle(t,e=!0){const s=this.createHoverFromCandle(t);this.fireHover(s,e)}updateHover(t){const e=this.createHoverFromCandle(t);if(this.lastHover&&e){const s=Object.assign(Object.assign({},e),{x:this.lastHover.x,y:this.lastHover.y});this.fireHover(s,!1)}}createAndFireHover([t,e],s=!0){const r=this.createHover(t,e);this.fireHover(r,s)}fireHover(t,e=!0){var s;if(t){if(this.lastHover=t,d()&&this.config.components.crossTool.type!=="none"){const o=(s=t.candleHover)===null||s===void 0?void 0:s.visualCandle.candle;o&&this.chartModel.mainCandleSeries.setActiveCandle(o)}const r=d()?this.longTouchActivated:e;this.bus.fire(H,t,r)}else this.bus.fire(c.EVENT_CLOSE_HOVER)}fireLastCross(t=!0){this.lastCross&&this.createAndFireHover(this.lastCross,t)}registerHoverProducerPart(t,e){this.hoverProducerParts=Object.assign(Object.assign({},this.hoverProducerParts),{[t]:e})}unregisterHoverProducerPart(t){delete this.hoverProducerParts[t]}}