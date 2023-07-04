/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const c=/^(#)([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,o=/^\s*(rgba?)\s*[(]\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*[\d.]+\s*)?[)]\s*$/i;function i(n){const t=c.exec(n)||o.exec(n);let s=[];return t&&(s=t.slice(2,5),t[1]==="#")?s.map(function(e){return parseInt(e,16)}):s}const r={};export function toRGBA(n,t){let s=r[n+t];if(!s){const e=i(n);s=e&&"rgba("+e.join(",")+","+t+")",r[n+t]=s}return s}
