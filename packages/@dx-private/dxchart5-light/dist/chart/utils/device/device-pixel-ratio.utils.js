/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ceil as t,floor as n,round as d}from"../math.utils";export let dpr=window.devicePixelRatio;let o=window.matchMedia(`screen and (resolution: ${window.devicePixelRatio}dppx)`);const i=()=>{o.removeEventListener("change",i),dpr=window.devicePixelRatio,o=window.matchMedia(`screen and (resolution: ${window.devicePixelRatio}dppx)`),o.addEventListener("change",i)};o.addEventListener("change",i);export const getDPR=()=>dpr,roundToDPR=e=>d(dpr*e)/dpr,floorToDPR=e=>n(dpr*e)/dpr,ceilToDPR=e=>t(dpr*e)/dpr;
