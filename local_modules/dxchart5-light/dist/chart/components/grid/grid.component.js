/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ChartBaseElement as m}from"../../chart-base-element";import{GridDrawer as c}from"./grid.drawer";export class GridComponent extends m{constructor(r,e,a,t,i,d,s,o,n,w,h){super(),this.drawerName=t,this.drawingManager=i,this.drawer=new c(r,e,a,d,s,o,n,h,w)}doDeactivate(){super.doDeactivate(),this.drawingManager.removeDrawer(this.drawer)}doActivate(){super.doActivate(),this.drawingManager.addDrawer(this.drawer,this.drawerName)}}
