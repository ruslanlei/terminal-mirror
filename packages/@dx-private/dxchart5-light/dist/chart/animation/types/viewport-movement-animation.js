/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{Animation as e}from"./animation";import{easeExpOut as h}from"../../utils/math.utils";import{uuid as m}from"../../utils/uuid.utils";export class ViewportMovementAnimation extends e{constructor(t,i,o){var n;super(i,o),this.viewportModel=t,this.animationConfig=i,this.id=m(),this.xStart=t.xStart,this.xEnd=t.xEnd,this.yStart=t.yStart,this.yEnd=t.yEnd,this.zoomX=t.zoomX,this.zoomY=t.zoomY,this.easingFn=(n=i.easingFn)!==null&&n!==void 0?n:h}tick(){if(super.tick(),this.animationInProgress){const t=this.easingFn(this.getProgress()),i=this.xStart+(this.animationConfig.targetXStart-this.xStart)*t,o=this.xEnd+(this.animationConfig.targetXEnd-this.xEnd)*t,n=this.yStart+(this.animationConfig.targetYStart-this.yStart)*t,s=this.yEnd+(this.animationConfig.targetYEnd-this.yEnd)*t,a=this.zoomX+(this.animationConfig.targetZoomX-this.zoomX)*t,r=this.zoomY+(this.animationConfig.targetZoomY-this.zoomY)*t;this.viewportModel.apply({xStart:i,xEnd:o,yStart:n,yEnd:s,zoomX:a,zoomY:r,inverseY:this.viewportModel.inverseY})}}finishAnimation(){super.finishAnimation(),this.viewportModel.apply({xStart:this.animationConfig.targetXStart,xEnd:this.animationConfig.targetXEnd,yStart:this.animationConfig.targetYStart,yEnd:this.animationConfig.targetYEnd,zoomX:this.animationConfig.targetZoomX,zoomY:this.animationConfig.targetZoomY,inverseY:this.viewportModel.inverseY})}}
