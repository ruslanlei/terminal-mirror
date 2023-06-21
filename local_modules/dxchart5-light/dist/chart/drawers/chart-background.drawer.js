/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{getDPR as d}from"../utils/device/device-pixel-ratio.utils";import{deepEqual as n}from"../utils/object.utils";export class BackgroundDrawer{constructor(t,e){this.canvasModel=t,this.config=e,this.prevState={},this.prevWidth=0,this.prevHeight=0}draw(){if(n(this.config.colors.chartAreaTheme,this.prevState)&&this.prevHeight===this.canvasModel.height&&this.prevWidth===this.canvasModel.width)return;this.canvasModel.clear();const t=this.canvasModel.ctx;if(this.config.colors.chartAreaTheme.backgroundMode==="gradient"){const e=t.createLinearGradient(0,0,this.canvasModel.width,this.canvasModel.height);e.addColorStop(0,this.config.colors.chartAreaTheme.backgroundGradientTopColor),e.addColorStop(1,this.config.colors.chartAreaTheme.backgroundGradientBottomColor),t.fillStyle=e}else t.fillStyle=this.config.colors.chartAreaTheme.backgroundColor;t.fillRect(0,0,this.canvasModel.width,this.canvasModel.height),this.prevState=Object.assign({},this.config.colors.chartAreaTheme),this.prevWidth=this.canvasModel.width,this.prevHeight=this.canvasModel.height}getCanvasIds(){return[this.canvasModel.canvasId]}}export const redrawBackgroundArea=(r,t,e,i,s,h)=>{const a=d(),o=[e*a,i*a,s*a,h*a],c=r.getImageData(...o);t.putImageData(c,o[0],o[1])};
