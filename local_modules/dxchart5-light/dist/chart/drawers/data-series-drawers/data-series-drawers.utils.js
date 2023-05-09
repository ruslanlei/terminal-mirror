/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const buildLinePath=(o,e,t)=>{o.length!==0&&o.forEach((l,s)=>{const{centerUnit:i,close:f}=l,n=t.toX(i),c=t.toY(f);s===0?e.moveTo(n,c):e.lineTo(n,c)})};
