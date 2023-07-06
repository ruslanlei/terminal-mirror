/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{arrayIntersect as h,eqeqeq as w,reorderArray as o}from"../utils/array.utils";import{EVENT_DRAW as c}from"../events/events";import{uuid as a}from"../utils/uuid.utils";import{debounce as E}from"../utils/perfomance/debounce.utils";import{animationFrameThrottled as O}from"../utils/perfomance/request-animation-frame-throttle.utils";import{MIN_SUPPORTED_CANVAS_SIZE as d}from"../model/canvas.model";export const HIT_TEST_PREFIX="HIT_TEST_";const T=["MAIN_BACKGROUND","MAIN_CLEAR","HIT_TEST_CLEAR","YAXIS_CLEAR","SERIES_CLEAR","OVER_SERIES_CLEAR","HIT_TEST_DRAWINGS","GRID","VOLUMES","UNDERLAY_VOLUMES_AREA","X_AXIS","Y_AXIS","HIGH_LOW","DRAWINGS","DATA_SERIES","N_MAP_CHART","PL_CHART","WATERMARK","EMPTY_CHART","OFFLINE_CHART","LABELS","EVENTS","HIT_TEST_EVENTS","ZERO_LINE","PL_ZERO_LINE_BACKGROUND","CROSS_TOOL"];export class DrawingManager{constructor(i,r){this.chartResizeHandler=r,this.drawingOrder=[],this.drawersMap={},this.canvasIdsList=[],this.animFrameId=`draw_${a()}`,i.on(c,e=>{r.wasResized()&&(this.canvasIdsList&&(e&&e.length!==0?this.canvasIdsList=this.canvasIdsList.concat(e):this.canvasIdsList=void 0),O(this.animFrameId,()=>{this.forceDraw(this.canvasIdsList),this.canvasIdsList=[]}))}),this.drawHitTestCanvas=E(()=>{this.drawingOrder.forEach(e=>{e.indexOf(HIT_TEST_PREFIX)!==-1&&this.drawersMap[e].draw()})},20)}redrawCanvasesImmediate(){this.chartResizeHandler.fireUpdates(),this.forceDraw()}drawLastBar(){this.drawingOrder.forEach(i=>{if(i.indexOf(HIT_TEST_PREFIX)===-1){const r=this.drawersMap[i];r.drawLastBar&&r.drawLastBar()}})}forceDraw(i){this.isDrawable()&&this.drawingOrder.forEach(r=>{if(r.indexOf(HIT_TEST_PREFIX)===-1){const e=this.drawersMap[r];if(!i||i.length===0){e.draw();return}h(i,e.getCanvasIds(),w).length!==0&&e.draw()}})}isDrawable(){var i,r,e,s;return((r=(i=this.chartResizeHandler.previousBCR)===null||i===void 0?void 0:i.height)!==null&&r!==void 0?r:0)>d.width&&((s=(e=this.chartResizeHandler.previousBCR)===null||e===void 0?void 0:e.width)!==null&&s!==void 0?s:0)>d.height}drawHitTestOnly(){this.drawHitTestCanvas()}addDrawer(i,r=a()){this.drawingOrder.indexOf(r)===-1&&this.drawingOrder.push(r),this.drawersMap[r]=i}addDrawerAfter(i,r,e){this.addDrawer(i,r);const s=this.drawingOrder.indexOf(r);this.drawingOrder.splice(s,1);const t=this.drawingOrder.indexOf(e);this.drawingOrder.splice(t+1,0,r),this.reorderDrawers(this.drawingOrder)}addDrawerBefore(i,r,e){this.addDrawer(i,r);const s=this.drawingOrder.indexOf(e);if(s!==-1){const t=this.drawingOrder.indexOf(r);return this.drawingOrder.splice(t,1),this.drawingOrder.splice(s,0,r),this.reorderDrawers(this.drawingOrder),!0}return!1}getDrawerByName(i){return this.drawersMap[i]}getNameByDrawer(i){for(const r in this.drawersMap)if(this.drawersMap[r]===i)return r}removeDrawerByName(i){const r=this.drawersMap[i];this.removeDrawer(r)}removeDrawer(i){Object.keys(this.drawersMap).forEach(r=>{if(this.drawersMap[r]===i){delete this.drawersMap[r];const e=this.drawingOrder.indexOf(r);e!==-1&&this.drawingOrder.splice(e,1)}})}reorderDrawers(i){this.drawingOrder=o(this.drawingOrder,i)}}export class DynamicDrawerType{static paneResizer(i){return`PANE_RESIZER_${i}`}}
