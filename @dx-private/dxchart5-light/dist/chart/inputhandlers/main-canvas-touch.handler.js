/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ChartBaseElement as c}from"../model/chart-base-element";export class MainCanvasTouchHandler extends c{constructor(t,e,s){super(),this.scaleModel=t,this.canvasInputListeners=e,this.mainCanvasParent=s,this.touchedCandleIndexes=[0,0]}doActivate(){this.addRxSubscription(this.canvasInputListeners.observeTouchStart().subscribe(t=>this.handleTouchStartEvent(t))),this.addRxSubscription(this.canvasInputListeners.observeTouchMove().subscribe(t=>this.handleTouchMoveEvent(t)))}handleTouchStartEvent(t){t.touches.length===2&&(this.touchedCandleIndexes=this.getXPositions(t).map(e=>this.scaleModel.fromX(e)))}handleTouchMoveEvent(t){t.touches.length===2&&this.pinchHandler(this.touchedCandleIndexes,this.getXPositions(t))}getXPositions(t){const e=this.mainCanvasParent.getBoundingClientRect(),s=[0,0],a=document.body.scrollLeft||document.documentElement.scrollLeft;for(let n=0,h=t.touches.length;n<h;n++){const o=t.touches[n];s[n]=o.pageX-e.left-a}return s}pinchHandler(t,e){const s=(e[0]*t[1]-e[1]*t[0])/(e[0]-e[1]),a=s+(t[0]-t[1])/(e[0]-e[1])*this.scaleModel.getBounds().width;this.scaleModel.setXScale(s,a)}}