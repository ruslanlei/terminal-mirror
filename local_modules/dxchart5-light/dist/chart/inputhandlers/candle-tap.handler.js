/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ChartBaseElement as i}from"../chart-base-element";import{map as l,distinctUntilChanged as r}from"rxjs/operators";export class CandleTapHandler extends i{constructor(t,c,e,n){super(),e.observeTouchStart().pipe(l(o=>n.components.chart.highlightActiveCandle?o:void 0),r()).subscribe(o=>{o&&this.setCandleAsActive(o,t,c)})}setCandleAsActive(t,c,e){if(t.touches.length===1){const n=t.touches.item(0);if(n!==null){const o=this.getTouchXPosition(n,c),s=e.candleFromX(o);s&&e.mainCandleSeries.setActiveCandle(s)}}}getTouchXPosition(t,c){const e=c.getBoundingClientRect(),n=document.body.scrollLeft||document.documentElement.scrollLeft;return t.pageX-e.left-n}}
