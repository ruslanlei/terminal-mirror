/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export function autoDetectPeriod(i){if(i.length>1){const f=i.reduce((t,e,o)=>{if(o!==i.length-1){const n=i[o+1].timestamp-e.timestamp;t[n]?t[n]++:t[n]=1}return t},{});let p=0,r;for(const t of Object.keys(f)){const e=parseInt(t,10),o=f[e];o>p&&e>0&&(p=o,r=e)}if(r)return r}}
