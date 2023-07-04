/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{clipToBounds as a}from"../data-series.drawer";export const candleTypesList=["candle","bar","line","area","scatterPlot","hollow","histogram","baseline","trend"];export class CandleSeriesWrapper{constructor(e,r,s){this.drawer=e,this.config=r,this.chartBounds=s}draw(e,r,s,t){this.isChartTypeAllowed()&&(this.beforeDraw(e),this.drawer.draw(e,r,s,t),this.afterDraw(e,s))}beforeDraw(e){e.restore(),e.save(),a(e,this.chartBounds())}isChartTypeAllowed(){return candleTypesList.includes(this.config.components.chart.type)}afterDraw(e,r){e.restore(),e.save(),a(e,r.scaleModel.getBounds())}}
