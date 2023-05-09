/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const y={lessThanSecond:0,second:100,minute:200,hour:300,day:400,"week-weekday":500,month:600,year:1e4};export const getWeightFromTimeFormat=e=>{switch(e.key){case"second":case"minute":case"hour":case"day":case"month":case"year":return y[e.key]+e.value;case"lessThanSecond":return y[e.key];case"week-weekday":return y[e.key]+(e.week==="$"?9:e.week)+e.weekday*10}},groupLabelsByWeight=e=>{const s={};return e.forEach(n=>{const t=s[n.weight];t===void 0?s[n.weight]=[Object.assign({},n)]:s[n.weight]=[...t,Object.assign({},n)]}),s},filterMapGroupedLabelsByCoverUpLevel=(e,s)=>{const n=Object.keys(e).map(c=>parseInt(c,10)).sort((c,o)=>o-c);let t=[];for(const c of n){const o=e[c];if(!o)continue;const a=[...t];t=[];const k=a.length,w=o.length;let i=0,h=1/0,l=-1/0;for(let u=0;u<w;u++){const p=o[u],r=p.idx;for(;i<k;){const d=a[i],g=d.idx;if(r>g)i++,t.push(d),l=g,h=1/0;else{h=g;break}}h-r>=s&&r-l>=s&&(t.push(p),l=r)}for(;i<k;)t.push(a[i]),i++}return t};
