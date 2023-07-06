/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{floorToDPR as i}from"../../utils/device/device-pixel-ratio.utils";const c=1.5;export class ScatterPlotDrawer{constructor(o){this.config=o}draw(o,n,l,e){var t;o.fillStyle=(t=e.singleColor)!==null&&t!==void 0?t:this.config.mainColor;for(const r of n.flat()){o.beginPath();const a=i(l.view.toX(r.centerUnit)),s=i(l.view.toY(r.close));o.arc(a,s,c,0,Math.PI*2,!0),o.fill()}}}
