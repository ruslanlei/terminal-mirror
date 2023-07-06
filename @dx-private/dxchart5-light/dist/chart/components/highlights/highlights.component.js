/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{HighlightsModel as r}from"./highlights.model";import{HighlightsDrawer as l}from"./highlights.drawer";import{ChartBaseElement as o}from"../../model/chart-base-element";const d="HIGHLIGHTS_PLUGIN";export class HighlightsComponent extends o{constructor(h,i,t,s,e,g){super(),this.eventBus=h,this.config=i,this.highlightsModel=new r(t),this.addChildEntity(this.highlightsModel),this.highLightsDrawer=new l(this.highlightsModel,t,s,e,i),g.addDrawer(this.highLightsDrawer,d)}getHighlights(){return this.highlightsModel.getHighlights()}setHighlights(h){this.highlightsModel.setHighlights(h)}setHighlightsVisible(h=!0){this.config.components.highlights.visible=h,this.eventBus.fireDraw(this.highLightsDrawer.getCanvasIds())}observeHighlightsUpdated(){return this.highlightsModel.observeHighlightsUpdated()}}
