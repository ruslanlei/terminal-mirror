/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{hollowDirection as p,nameDirection as m}from"../../model/candle.model";import u from"../../model/visual-candle";export const defaultCandleTransformer=(o,{x:s,width:r,activeCandle:e})=>new u(s,r,o.open,o.close,o.hi,o.lo,m(o.open,o.close),o,!0,getCandleIsActive(o,e)),hollowCandleTransformer=(o,{x:s,width:r,activeCandle:e,prevCandle:t})=>{var i;return new u(s,r,o.open,o.close,o.hi,o.lo,p((i=t==null?void 0:t.close)!==null&&i!==void 0?i:o.close,o.close),o,!0,getCandleIsActive(o,e),o.close>o.open)},trendCandleTransformer=(o,{x:s,width:r,activeCandle:e,prevCandle:t})=>{var i;return new u(s,r,o.open,o.close,o.hi,o.lo,m((i=t==null?void 0:t.close)!==null&&i!==void 0?i:o.close,o.close),o,!0,getCandleIsActive(o,e),o.close>o.open)},getCandleIsActive=(o,s)=>{const r=s&&s.idx===o.idx;return r!=null?r:!1};
