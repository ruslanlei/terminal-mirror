/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{floor as s}from"../utils";import{MathUtils as h}from"./math.utils";class a{static autoDetectIncrementOfValueRange(t){const e=this.getDigitsInNumber(t);return t===0?.01:Math.pow(10,e-3)}static getDigitsInNumber(t){const e=n=>s(Math.log10((n^n>>31)-(n>>31)))+1;let r=e(t);return r===1&&t<1&&(r=e(t*1e9)-9),r}static getPriceIncrement(t,e){var r;const n=(r=e.priceIncrements)!==null&&r!==void 0?r:[];if(!this.validatePriceIncrementsOrPrecisions(n))return this.DEFAULT_INCREMENT;if(isNaN(t))return Math.round(n[0]);t=Math.abs(t);let i=1;const o=1e-6;for(;i<n.length&&t>n[i]+Math.min(n[i-1],n[i+1])*o;)i+=2;return i>=n.length||t<n[i]-Math.min(n[i-1],n[i+1])*o?n[i-1]:Math.min(n[i-1],n[i+1])}static getPricePrecision(t,e){if(!this.validatePriceIncrementsOrPrecisions(e))return 0;if(isNaN(t))return Math.round(e[0]);t=Math.abs(t);let r=1;for(;r<e.length&&t>e[r];)r+=2;return Math.round(e[r-1])}static roundPriceToIncrement(t,e,r){const n=a.getPriceIncrement(r||t,e);return h.roundToNearest(t,n)}static computePrecisions(t){const e=[...t];for(let r=0;r<t.length;r+=2)e[r]=a.calculatePrecision(t[r]);for(let r=1;r<t.length;r+=2)e[r]=t[r]+Math.min(t[r-1],t[r+1])*a.RELATIVE_EPS;return e}static calculatePrecision(t){let e=t>1?Math.abs(Math.floor(t)-t):t;for(let r=0;r<a.MAXIMUM_PRECISION;r++){const n=Math.floor(e+.5),i=Math.abs(e*a.RELATIVE_EPS);if(n>=e-i&&n<=e+i)return r;e*=10}return a.MAXIMUM_PRECISION}static validatePriceIncrementsOrPrecisions(t){return!(t.length===0||!Array.isArray(t)||t.findIndex(e=>e!==0)===-1)}}a.DEFAULT_INCREMENT=.01,a.DEFAULT_PRECISION=2,a.RELATIVE_EPS=1e-8,a.MAXIMUM_PRECISION=10;export{a as PriceIncrementsUtils};
