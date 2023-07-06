/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const createCandleSeriesHighLowProvider=i=>({isHighLowActive:()=>!0,calculateHighLow:t=>{const o=t?t.xStart:i.scaleModel.xStart,n=t?t.xEnd:i.scaleModel.xEnd,{dataIdxStart:a,dataIdxEnd:r}=i.calculateDataViewportIndexes(o,n),x=i.visualPoints.slice(a,r+1),h=calculateCandlesHighLow(x),c=()=>{var s,l;return(l=(s=i.visualPoints[a])===null||s===void 0?void 0:s.close)!==null&&l!==void 0?l:1};return Object.assign(Object.assign({},h),{low:i.view.toAxisUnits(h.low,c),high:i.view.toAxisUnits(h.high,c)})}}),calculateCandlesHighLow=i=>{const t={high:Number.NEGATIVE_INFINITY,low:Number.POSITIVE_INFINITY,highIdx:0,lowIdx:0};for(let o=0;o<i.length;o++){const n=i[o];n.high>t.high&&(t.high=n.high,t.highIdx=o),n.low<t.low&&(t.low=n.low,t.lowIdx=o)}return t};
