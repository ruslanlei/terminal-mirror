/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{timeFormatConfirugableGuard as m,timeFormatNoNConfirugableGuard as p,weekWeekdayGuard as u}from"./time-formats.model";const c=r=>{const e={"!":!1,$:!1};return r.includes("!")&&(e["!"]=!0),r.includes("$")&&(e.$=!0),e},o=r=>parseInt(r,10);export const parseTimeFormatsFromKey=r=>{const[e,...n]=r.split("_");if(m(e)){const[t]=n,s=c(t),a=o(t);return{key:e,value:a,exact:s["!"]}}else if(u(e)){const[t,s]=n,a=c(t),l=o(t),i=o(s);return{key:e,week:a.$?"$":l,weekday:i}}else return p(e)?{key:e}:(console.warn(`${r} is not fit, check the documentation to see available formats https://webdev.prosp.devexperts.com:8095/docs/chart/x-axis`),null)};
