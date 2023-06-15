/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{PriceIncrementsUtils as i}from"../../utils/priceIncrements.utils";import{lastOf as a}from"../../utils/utils-index";import{NumericAxisLabelsGenerator as l}from"../../../common/numeric-axis-labels.generator";export class NumericYAxisLabelsGenerator extends l{constructor(n,r,e,t,s=()=>"regular",c=()=>1){super(n,()=>[e.yStart,e.yEnd],()=>e.getBounds().height,t,!1,s,c,void 0),this.chartModel=r}calculateIncrement(n){var r;const e=(r=this.chartModel)===null||r===void 0?void 0:r.mainCandleSeries.instrument;if(this.chartModel&&e&&Array.isArray(e.priceIncrements)){const t=a(this.chartModel.getCandles()),s=t&&t.close?t.close:0,c=i.getPriceIncrement(s,e.priceIncrements);return this.adjustIncrementOnAxisType(c)}return super.calculateIncrement(n)}}
