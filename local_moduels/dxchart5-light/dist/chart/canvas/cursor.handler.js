/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{Subject as a}from"rxjs";import{distinctUntilChanged as h}from"rxjs/operators";import{ChartBaseElement as u}from"../chart-base-element";import{SeparateVolumesComponent as i}from"../components/volumes/separate-volumes.component";import{CanvasBoundsContainer as c,CanvasElement as n}from"./canvas-bounds-container";export class CursorHandler extends u{constructor(e,r,s,t,o){super(),this.element=e,this.canvasInputListener=r,this.canvasBoundsContainer=s,this.chartConfig=t,this.hitTestCanvasModel=o,this.normalLayer=new Map,this.extensionLayer=new Map,this.cursorChangedSubject=new a}doActivate(){super.doActivate(),this.canvasInputListener.observeMouseMoveNoDrag().subscribe(e=>{const r=this.hitTestCanvasModel.resolveCursor(e);if(r!==void 0){this.updateCursor(r);return}e&&(this.normalLayer.forEach(s=>{s.hitTest(e.x,e.y)&&this.updateCursor(s.cursor)}),this.extensionLayer.forEach(s=>{s.hitTest(e.x,e.y)&&this.updateCursor(s.cursor)}))})}setCursorTypeForBounds(e,r,s,t=0){const o=c.hitTestOf(r,{extensionY:t});t?this.extensionLayer.set(e,{cursor:s,hitTest:o}):this.normalLayer.set(e,{cursor:s,hitTest:o})}addCursorForCanvasEl(e,r,s){this.observeCursorType(e,r,s)}removeCursorForCanvasEl(e){this.normalLayer.delete(e),this.extensionLayer.delete(e)}observeCursorChanged(){return this.cursorChangedSubject.pipe(h())}observeCursorType(e,r,s){const t=s?this.canvasBoundsContainer.getBoundsHitTest(e,{extensionY:s}):this.canvasBoundsContainer.getBoundsHitTest(e);s?this.extensionLayer.set(e,{cursor:r,hitTest:t}):this.normalLayer.set(e,{cursor:r,hitTest:t})}updateCursor(e){this.element.style.cursor!==e&&(this.element.style.cursor=e,this.cursorChangedSubject.next(e))}toggleVolumesMode(e){const r=n.PANE_UUID(i.UUID),s=n.PANE_UUID_RESIZER(i.UUID);e?(this.observeCursorType(r,this.chartConfig.components.chart.cursor),this.observeCursorType(s,this.chartConfig.components.paneResizer.cursor,this.chartConfig.components.paneResizer.dragZone)):(this.normalLayer.delete(r),this.extensionLayer.delete(s))}}
