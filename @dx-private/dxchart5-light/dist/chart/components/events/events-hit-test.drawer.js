/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CanvasElement as f}from"../../canvas/canvas-bounds-container";import{getEventSize as v}from"./events.drawer";const r=5;export class EventsHitTestDrawer{constructor(e,t,s,c,o){this.hitTestCanvasModel=e,this.chartModel=t,this.config=s,this.canvasBoundsContainer=c,this.model=o}draw(){const e=this.hitTestCanvasModel.ctx,t=this.canvasBoundsContainer.getBounds(f.EVENTS);e.save(),this.model.events.forEach((s,c)=>{const o=this.model.events[c-1],l=o&&this.chartModel.candleFromTimestamp(o.timestamp).xCenter(this.chartModel.scaleModel),i=this.chartModel.candleFromTimestamp(s.timestamp).xCenter(this.chartModel.scaleModel);if(i>t.x&&i<t.x+t.width){const h=this.config.colors.events[s.type].color;e.strokeStyle=h,e.fillStyle=h;const n=v(s);e.fillStyle=this.hitTestCanvasModel.idToColor(s.id);const a=(n+r)*2;if(l!==void 0){const d=v(o);if(l+d>i-a/2){const m=n*2+r;e.fillRect(l+d,t.y,m,t.height)}else e.fillRect(i-n-r,t.y,a,t.height)}else e.fillRect(i-n-r,t.y,a,t.height)}}),e.restore()}getCanvasIds(){return[this.hitTestCanvasModel.canvasId]}}
