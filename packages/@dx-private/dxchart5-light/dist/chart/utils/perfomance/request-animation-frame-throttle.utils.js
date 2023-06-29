/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
let a=!1;export let animationFrameId=0;const o=new Map,n=new Map,r=()=>{a||(a=!0,animationFrameId=requestAnimationFrame(()=>{n.forEach((e,t)=>{e(),n.delete(t)}),o.forEach((e,t)=>{e(),o.delete(t)}),a=!1}))};export const animationFrameThrottled=(e,t)=>{o.set(e,t),r()},cancelThrottledAnimationFrame=e=>{o.delete(e)},animationFrameThrottledPrior=(e,t)=>{n.set(e,t),r()};
