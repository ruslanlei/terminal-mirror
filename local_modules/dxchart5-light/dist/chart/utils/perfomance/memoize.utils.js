/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const MEMOIZE_CLEAR_FUNCTION=Symbol("MEMOIZE_CLEAR_FUNCTION");export function memoize(s){const r={},e=function(){const t=Array.prototype.slice.call(arguments),n=serialize(t);return typeof r[n]=="undefined"&&(r[n]=s.apply(this,t)),r[n]}.bind(this);return e[MEMOIZE_CLEAR_FUNCTION]=function(){const t=Array.prototype.slice.call(arguments),n=serialize(t);delete r[n]},e}export const memoOnce=s=>r=>{let e=!1,t,n=[];const l=o=>{t=r(...o),e=!0,n=o};return(...o)=>{const c=o.length;if(e&&c===0)return t;if(!e||n.length!==c)return l(o),t;for(let i=0;i<c;i++)if(!s.equals(n[i],o[i]))return l(o),t;return t}};export function serialize(s){if(!s.every(e=>typeof e=="number"||typeof e=="string"||typeof e=="boolean"))throw Error("Arguments to memoized function can only be strings or numbers");return JSON.stringify(s)}
