/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{getDPR as d}from"../utils/device-pixel-ratio.utils";export class BackgroundDrawer{constructor(a,o){this.canvasModel=a,this.config=o}draw(){this.canvasModel.clear();const a=this.canvasModel.ctx;if(this.config.colors.chartAreaTheme.backgroundMode==="gradient"){const o=a.createLinearGradient(0,0,this.canvasModel.width,this.canvasModel.height);o.addColorStop(0,this.config.colors.chartAreaTheme.backgroundGradientTopColor),o.addColorStop(1,this.config.colors.chartAreaTheme.backgroundGradientBottomColor),a.fillStyle=o}else a.fillStyle=this.config.colors.chartAreaTheme.backgroundColor;a.fill(),a.fillRect(0,0,this.canvasModel.width,this.canvasModel.height)}getCanvasIds(){return[this.canvasModel.canvasId]}}export const redrawBackgroundArea=(r,a,o,c,s,n)=>{const t=d(),e=[o*t,c*t,s*t,n*t],i=r.getImageData(...e);a.putImageData(i,e[0],e[1])};
