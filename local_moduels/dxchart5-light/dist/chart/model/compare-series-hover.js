/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export class CompareSeriesHoverProducerPart{constructor(e){this.chartModel=e}getData(e){const{x:t}=e,c=this.chartModel.candleFromX(t).idx||0;return this.chartModel.candleSeries.map(r=>{const o=r.dataPoints[c],a=this.chartModel.pane.regularFormatter(o==null?void 0:o.close);return{instrument:r.instrument.symbol,price:a,id:r.id}})}}
