/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CandleSeriesModel as g}from"../../model/candle-series.model";import{setLineWidth as w}from"../data-series.drawer";export class LineDrawer{constructor(o){this.config=o}draw(o,r,t,i){if(t instanceof g){const n=r.flat();w(o,this.config.lineWidth,t,i,this.config.selectedWidth);const c=t.colors.lineTheme;for(let e=1;e<n.length;e++){const l=n[e-1],s=n[e],h=s.name;i.singleColor?o.strokeStyle=i.singleColor:o.strokeStyle=c[`${h}Color`];const v=t.view.toX(l.centerUnit),f=t.view.toY(l.close),m=t.view.toX(s.centerUnit),p=t.view.toY(s.close);o.beginPath(),o.moveTo(v,f),o.lineTo(m,p),o.stroke()}}}}
