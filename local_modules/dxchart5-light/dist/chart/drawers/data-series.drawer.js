/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const transformToTwoDimension=r=>Array.isArray(r[0])?r:[r];export class DataSeriesDrawer{constructor(e,t,a){this.paneManager=e,this.canvasModel=t,this.seriesDrawers=a}draw(){const e=this.canvasModel.ctx;Object.values(this.paneManager.paneComponents).forEach(t=>{e.save(),clipToBounds(e,t.getBounds()),t.dataSeries.forEach(a=>this.drawSeries(e,a)),e.restore()})}drawSeries(e,t){if(t.config.visible){const a=t.config.type,s=this.seriesDrawers[a];if(s){const i=t.getSeriesInViewport(t.scaleModel.xStart-1,t.scaleModel.xEnd+1);i&&i.length>=1&&s.draw(e,i,t,{})}else console.error(`Data series drawer with type ${a} isn't registered!`)}}getCanvasIds(){return[this.canvasModel.canvasId]}}export const clipToBounds=(r,e)=>{r.beginPath(),r.rect(e.x,e.y,e.width,e.height),r.clip(),r.closePath()},setLineWidth=(r,e,t,a,s=e)=>{a.forceBold?r.lineWidth=a.forceBold:t.hovered?r.lineWidth=s:r.lineWidth=e};
