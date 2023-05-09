/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{MathUtils as D}from"./math.utils";class n{static bondFractions(e){if(e>.5)return n.EMPTY_BOND_FRACTIONS;const o=D.roundDecimal(1/e);return n.NDDP_MAP.has(o)?o:n.EMPTY_BOND_FRACTIONS}static formatBondPrice(e,o,i="'"){const t=n.bondFractions(o);if(t===n.EMPTY_BOND_FRACTIONS)return"";const c=n.NDDP_MAP.get(t);return c===void 0?"":n.formatBondPriceInner(e,32,c,i)}static formatBondPriceInner(e,o,i,f){if(!isFinite(e))return"";let t="";const c=Math.abs(e);e<0&&(t+="-");const s=Math.trunc(c);t+=s,t+=f;const M=t.length,P=(c-s)*o;P<10&&(t+="0");const a=D.roundDecimal(P).toString();for(let r=0;r<a.length;r++){const h=a.charAt(r);h>="0"&&h<="9"&&(t+=a.charAt(r))}const u=t.length-M;for(let r=u;r<i;r++)t+="0";for(let r=i;r<u;r++)t=t.slice(0,-1);return t}}n.EMPTY_BOND_FRACTIONS=0,n.NDDP_MAP=new Map([[32,2],[64,3],[128,3],[256,3]]);export{n as BondUtils};
