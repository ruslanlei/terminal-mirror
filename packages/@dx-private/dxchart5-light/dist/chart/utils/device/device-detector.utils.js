/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const deviceDetector=()=>{const e=/Mac|iPod|iPhone|iPad/i.test(navigator.userAgent),i=[/Android/i,/webOS/i,/BlackBerry/i,/Windows Phone/i].some(o=>navigator.userAgent.match(o));return e?"apple":i?"mobile":"other"},multiplyZoomByDevice=(e,t)=>e==="apple"||e==="mobile"?3:t;
