/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CanvasElement as n}from"../canvas/canvas-bounds-container";import{EVENT_DRAW as i,EVENT_HOVER as o,EVENT_RESIZED as u,EVENT_CLOSE_HOVER as c}from"./events";export class ChartEvents{constructor(t){this.chart=t}addMouseHoverListener(t){return this.chart.bus.on(o,t)}addMouseCloseHoverListener(t){return this.chart.bus.on(c,t)}addRedrawListener(t){return this.chart.bus.on(i,t)}addResizeListener(t){return this.chart.bus.on(u,t)}addYAxisContextMenuClickListener(t){const s=this.chart.canvasBoundsContainer.getBoundsHitTest(n.ALL_Y_AXIS),e=this.chart.canvasInputListener.observeContextMenu(s).subscribe(r=>t(r));return()=>e.unsubscribe()}addYAxisDoubleClickListener(t){const s=this.chart.canvasBoundsContainer.getBoundsHitTest(n.Y_AXIS),e=this.chart.canvasInputListener.observeDbClick(s).subscribe(()=>t());return()=>e.unsubscribe()}}
