/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{clipToBounds as s}from"./data-series.drawer";export class HTDataSeriesDrawer{constructor(e,a,o){this.seriesDrawers=e,this.canvasModel=a,this.paneManager=o}draw(){const e=this.canvasModel.ctx;Object.values(this.paneManager.paneComponents).forEach(a=>{e.save(),s(e,a.getBounds()),a.dataSeries.forEach(o=>this.drawSeries(e,o)),e.restore()})}drawSeries(e,a){if(a.config.visible){const o=a.config.type,t=this.seriesDrawers[o];if(t){const r={singleColor:this.canvasModel.idToColor(a.id),forceBold:7};t.draw(e,a.getSeriesInViewport(a.scaleModel.xStart-1,a.scaleModel.xEnd+1),a,r)}}}getCanvasIds(){return[this.canvasModel.canvasId]}}
