/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const u={};export function calculateSymbolHeight(r,e){let t=u[r];return t!==void 0||(e.save(),e.font=r,t=e.measureText("M").width,u[r]=t,e.restore()),t}const a=new Map;export function calculateTextWidth(r,e,t){const n=t+r;let s=a.get(n);return s||(e.save(),e.font=t,s=e.measureText(r).width,a.set(n,s),e.restore()),s}
