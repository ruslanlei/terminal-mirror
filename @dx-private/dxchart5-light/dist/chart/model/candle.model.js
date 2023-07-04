/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const BASIC_CANDLE_WIDTH=1;export function nameDirection(e,n){return n===e?"none":n>e?"up":"down"}export function hollowDirection(e,n){return n>e?"up":"down"}export function copyCandle(e,n,u=!1){const{expansion:p,impVolatility:c,vwap:f,volume:d,timestamp:x}=e;let o=e.hi,i=e.lo,r=e.open;const t=e.close;u&&(o=t,i=t,r=t);let l=e.idx;return n!==void 0&&(l=n),{hi:o,lo:i,open:r,close:t,timestamp:x,volume:d,expansion:p,idx:l,impVolatility:c,vwap:f}}
