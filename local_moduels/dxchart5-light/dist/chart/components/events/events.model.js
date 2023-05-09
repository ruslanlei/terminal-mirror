/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{BehaviorSubject as r}from"rxjs";import{ChartBaseElement as o}from"../../chart-base-element";import{HIT_TEST_ID_RANGE as i}from"../../model/hit-test-canvas.model";export class EventsModel extends o{constructor(t){super(),this.canvasModel=t,this.events=[],this.hoveredEvent=new r(null)}setEvents(t){this.events=this.indexEvents(t)}indexEvents(t){const e=this.getIdRange()[0];return t.map((s,n)=>Object.assign(Object.assign({},s),{id:n+e})).sort((s,n)=>s.timestamp-n.timestamp)}getIdRange(){return i.EVENTS}lookup(t){return this.events.filter(e=>e.id===t)[0]}onHover(t,e){this.hoveredEvent.getValue()!==t&&(t&&(t.point=e),this.hoveredEvent.next(t||null),this.canvasModel.fireDraw())}onTouchStart(t,e){this.onHover(t,e)}}
