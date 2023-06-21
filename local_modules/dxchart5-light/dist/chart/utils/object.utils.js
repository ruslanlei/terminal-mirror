/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const cloneUnsafe=e=>JSON.parse(JSON.stringify(e));export function typedEntries_UNSAFE(e){return Object.entries(e)}export const findKeyFromValue=(e,t)=>{for(const[r,s]of Array.from(e.entries()))if(s===t)return r};export function keys(e){return Object.keys(e)}export function deepEqual(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(let n=0,f=r.length;n<f;n++)if(!hasOwnProperty.call(t,r[n])||!deepEqual(e[r[n]],t[r[n]]))return!1;return!0}
