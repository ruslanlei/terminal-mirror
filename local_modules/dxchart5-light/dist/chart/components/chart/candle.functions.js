/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{finite as i}from"../../utils/math.utils";export const prepareCandle=e=>{const o=i(e.close,e.open,e.hi,e.lo);if(!isFinite(o))throw new Error("Received candle without any price");const t=i(e.hi,Math.max(e.open,e.close),o),p=i(e.lo,Math.min(e.open,e.close),o),r=i(e.open,e.lo,o),s=i(e.close,e.hi,o);return{hi:t,lo:p,open:r,close:s,timestamp:e.timestamp,volume:e.volume,expansion:e.expansion,idx:e.idx,impVolatility:e.impVolatility}},reindexCandles=e=>{for(let o=0;o<e.length;++o)e[o].idx=o},deleteCandlesIndex=e=>{e.forEach(o=>{o.idx=void 0})};
