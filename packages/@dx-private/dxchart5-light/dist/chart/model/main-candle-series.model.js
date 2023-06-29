/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CandleSeriesModel as r}from"./candle-series.model";export class MainCandleSeriesModel extends r{constructor(e,s,a,t,i,n,o,l,d){super(s,a,t,i,n,o,l,d),this.baseModel=e}set visualPoints(e){super.visualPoints=e,this.baseModel.mainVisualPoints=super.visualPoints}get visualPoints(){return super.visualPoints}set dataPoints(e){super.dataPoints=e,this.baseModel.mainDataPoints=super.dataPoints}get dataPoints(){return super.dataPoints}recalculateMeanCandleWidth(e){super.recalculateMeanCandleWidth(e),this.baseModel.meanDataWidth=this.meanCandleWidth}}
