/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{combineLatest as a,Subject as v,filter as b}from"rxjs";import{EVENT_CLOSE_HOVER as p,EVENT_CROSS as h}from"../events";import{ChartBaseElement as m}from"../chart-base-element";export class CrossEventProducerComponent extends m{constructor(e,s,o){super(),this.eventBus=e,this.canvasInputListener=s,this.canvasBoundsContainer=o,this.panesSubscriptions={},this.cross=new v}doActivate(){super.doActivate()}unsubscribeMouseOver(e){var s;(s=this.panesSubscriptions[e])===null||s===void 0||s.unsubscribe()}subscribeMouseOver(e,s,o){const i=s.map(r=>this.canvasBoundsContainer.getBoundsHitTest(r,o)),t=(r,n)=>i.some(u=>u(r,n));return this.subscribeMouseOverHT(e,t)}subscribeMouseOverHT(e,s){const o=this.canvasInputListener.observeMouseMoveDocument(),i=this.canvasInputListener.observeMouseEnter(s);let t=!1;const r=a([o,i]).pipe(b(([,n])=>!t||t&&n)).subscribe(([n,u])=>{if(u){const c=[n.x,n.y,e];this.eventBus.fire(h,c),this.cross.next(c),t=!1}else this.eventBus.fire(p),this.cross.next(null),t=!0});return this.panesSubscriptions[e]=r,r}}
