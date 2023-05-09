/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{defaultDragComponentOptions as a,DragNDropComponent as o}from"./drag-n-drop.component";export class DragNDropXComponent extends o{constructor(t,s,r,e,i=a){super(t,s,r,e,i)}doActivate(){super.doActivate(),this.addRxSubscription(this.canvasInputListener.observeXDragStart(this.hitTest).subscribe(this.onDragStart)),this.addRxSubscription(this.canvasInputListener.observeXDrag().subscribe(this.onDragTick)),this.addRxSubscription(this.canvasInputListener.observeXDragEnd().subscribe(this.onDragEnd))}doDeactivate(){super.doDeactivate()}}
