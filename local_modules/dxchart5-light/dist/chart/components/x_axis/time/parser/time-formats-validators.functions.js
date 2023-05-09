/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const validateParsedTimeFormat=e=>{switch(e.key){case"second":case"minute":return a(e.value);case"hour":return o(e.value);case"day":return s(e.value);case"month":return u(e.value);case"year":return d(e.value);case"week-weekday":const r=c(e.week),n=i(e.weekday);return r&&n;case"lessThanSecond":return!0;default:return!1}};const a=e=>e>0&&e<=60,o=e=>e>0&&e<=24,s=e=>e>0&&e<=31,i=e=>t(e)?e>=1&&e<=7:!1,c=e=>e==="$"?!0:t(e)?e>=1&&e<=6:!1,u=e=>e>0&&e<=12,d=e=>e>0,t=e=>!isNaN(e)&&isFinite(e);
