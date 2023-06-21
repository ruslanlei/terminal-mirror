/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ChartBaseElement as r}from"../../model/chart-base-element";import{ChartAreaPanHandler as o}from"../chart/chart-area-pan.handler";export class ChartPanComponent extends r{constructor(a,t,n,s,e,i,h){super(),this.eventBus=a,this.mainScaleModel=t,this.canvasBoundsContainer=n,this.config=s,this.canvasAnimation=e,this.canvasInputListener=i,this.mainCanvasParent=h,this.chartPanComponents=[],this.chartAreaPanHandler=new o(this.eventBus,this.config,this.mainScaleModel,this.mainCanvasParent,this.canvasInputListener,this.canvasBoundsContainer,this.canvasAnimation,this),this.chartPanComponents.push(this.chartAreaPanHandler)}doActivate(){this.activateChartPanHandlers()}doDeactivate(){this.deactivatePanHandlers()}activateChartPanHandlers(){this.chartPanComponents.forEach(a=>a.activate())}deactivatePanHandlers(){this.chartPanComponents.forEach(a=>a.deactivate())}}
