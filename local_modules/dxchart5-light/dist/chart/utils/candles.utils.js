/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{binarySearch as c,firstOf as d,lastOf as s}from"./array.utils";import{floor as v}from"./math.utils";export const searchCandleIndex=(e,o,r,u=1e3)=>{var t,i,n,l;const f=(i=(t=d(r))===null||t===void 0?void 0:t.timestamp)!==null&&i!==void 0?i:0,x=(l=(n=s(r))===null||n===void 0?void 0:n.timestamp)!==null&&l!==void 0?l:0;return e>x?o?{index:r.length-1+Math.ceil((e-x)/u),exact:!0}:{index:r.length-1,exact:!0}:e<f?o?{index:v((e-f)/u),exact:!0}:{index:-1,exact:!0}:c(r,e,a=>a.timestamp)};
