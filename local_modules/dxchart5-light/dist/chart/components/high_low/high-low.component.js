/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ChartBaseElement as s}from"../../chart-base-element";import{HighLowDrawer as w}from"./high-low.drawer";export class HighLowComponent extends s{constructor(r,o,e,t,a){super();const n=new w(o,e,r,t);a.addDrawer(n,"HIGH_LOW")}}
