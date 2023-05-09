/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const createHighLowOffsetCalculator=s=>t=>{const{top:n,bottom:o}=s(),c=t.high-t.low,h=c*n/100,e=c*o/100,r=t.low-e,i=t.high+h;return{low:r,high:i}},createCandlesOffsetProvider=(s,t)=>({isHighLowActive:()=>!0,calculateHighLow:n=>{const o=t.calculateHighLow(n),{top:c,bottom:h}=s(),e=o.high-o.low,r=e*c/100,i=e*h/100,l=o.low-i,f=o.high+r;return{low:l,high:f}}});
