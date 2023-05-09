/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export function merge(r,e,f=DEFAULT_MERGE_OPTIONS){function l(n,t){for(const i in t)i in n?typeof n[i]=="object"&&n[i]!==null&&!Array.isArray(n[i])?l(n[i],t[i]):f!=null&&f.overrideExisting&&(n[i]=t[i]):f!=null&&f.addIfMissing&&(n[i]=t[i]);return n}return l(r,e)}export function mergeArray(r,e,f,l=!1){!r||!e||e.length===0||e.forEach(n=>{const t=f(n),i=r.findIndex(u=>f(u)===t);i===-1?r.push(n):l?merge(r[i],n,{overrideExisting:!0,addIfMissing:!0}):r.splice(i,1,n)})}export const DEFAULT_MERGE_OPTIONS={overrideExisting:!1,addIfMissing:!0};
