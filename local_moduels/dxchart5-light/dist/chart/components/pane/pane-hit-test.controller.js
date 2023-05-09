/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{HIT_TEST_ID_RANGE as r}from"../../model/hit-test-canvas.model";export class PaneHitTestController{constructor(e,t){this.paneComponents=e,this.canvasModel=t,this.dataSeriesIdCounter=r.DATA_SERIES[0],this.getNewDataSeriesHitTestId=()=>this.dataSeriesIdCounter++}getIdRange(){return r.DATA_SERIES}get allDataSeries(){return Object.values(this.paneComponents).flatMap(e=>Array.from(e.dataSeries))}lookup(e){return this.allDataSeries.find(a=>a.id===e)}onHover(e){this.allDataSeries.forEach(t=>t.hovered=t.id===(e==null?void 0:e.id)),this.canvasModel.fireDraw()}}
