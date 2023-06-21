/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{notEmpty as d}from"../../../utils/function.utils";export function calcLabelsYCoordinates(o,a){if(o.filter(t=>t!==null).length<=1)return o.map(t=>t.y);const e=a-2,l=o.map((t,s)=>f(t,s,e)).filter(d).sort(m),i=new Array(l.length);return l.forEach((t,s)=>{if(t===null)return;const n=l[s+1];if(n&&n.top<t.bottom){const b=n.labelWeight-t.labelWeight===1?2:0,r=t.bottom-n.top+b;n.top+=r,n.bottom+=r}i[t.actualIndex]=(t.top+t.bottom)/2}),i}const f=(o,a,e)=>o?{top:o.y-e/2,bottom:o.y+e/2,labelWeight:o.weight,actualIndex:a}:null,m=(o,a)=>{const e=o.top,l=a.top;return e>l?1:e<l||e===l&&o.labelWeight<a.labelWeight?-1:0};
