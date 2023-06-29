/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const c=5,_=1e-10,s=/\.?0+$/,E=/(\.[1-9]*)0+$/;export const volumeFormatter=t=>{const r=(I,e)=>{const o=Math.pow(10,5),n=Math.round(I*o)/o;return n<1&&n>=1e-10?n.toFixed(5).replace(s,"").replace(E,""):(n+"").replace(E,"")+(e||"")};return Math.abs(t)>999999999?(t=Math.round(t/1e6)*1e6,r(t/1e9,"B")):Math.abs(t)>999999?(t=1e3*Math.round(t/1e3),r(t/1e6,"M")):Math.abs(t)>9999?r(t/1e3,"K"):r(t)};
