/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{BehaviorSubject as o,merge as i}from"rxjs";import{ChartBaseElement as s}from"../../model/chart-base-element";import{firstOf as l,maxMin as r}from"../../utils/array.utils";const h=r(t=>t.candle.volume);export class VolumesModel extends s{constructor(e,a){super(),this.chartComponent=e,this.scaleModel=a,this.volumeMax=new o(0),this.highLowProvider={calculateHighLow:()=>({high:this.volumeMax.getValue(),low:0}),isHighLowActive:()=>!0}}doActivate(){super.doActivate(),this.addRxSubscription(i(this.chartComponent.chartModel.observeCandlesChanged(),this.scaleModel.xChanged).subscribe(()=>this.updateVolumeMax())),this.addRxSubscription(this.chartComponent.chartModel.mainCandleSeries.observeLastVisualCandleChanged().subscribe(()=>this.recalculateLastVisualVolume()))}recalculateLastVisualVolume(){}updateVolumeMax(){var e;this.volumeMax.next((e=l(h(this.chartComponent.chartModel.mainCandleSeries.getSeriesInViewport().flat())))!==null&&e!==void 0?e:0)}}