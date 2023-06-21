/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{findKeyFromValue as t}from"../utils/object.utils";export class CompositeDrawer{constructor(r){this.drawers=r!=null?r:new Map}draw(){this.drawers.forEach(r=>r.draw())}addDrawer(r,e){const s=e!=null?e:"drawer"+this.drawers.size;this.drawers.set(s,r)}drawLastBar(){this.drawers.forEach(r=>r.drawLastBar&&r.drawLastBar())}removeDrawer(r){const e=t(this.drawers,r);e?this.drawers.delete(e):console.warn("Couldn't find drawer type")}removeDrawerByName(r){this.drawers.delete(r)}getDrawer(r){return this.drawers.get(r)}moveTop(r){const e=t(this.drawers,r);e?this.moveTopByName(e):console.warn("Couldn't find drawer type")}moveTopByName(r){if(this.drawers.size===1)return;const e=this.drawers.get(r);this.drawers.delete(r),e&&this.drawers.set(r,e)}getSize(){return this.drawers.size}getAll(){return this.drawers}getCanvasIds(){const r=Array.from(this.drawers).map(([,s])=>s.getCanvasIds()).flat(3),e=new Set([...r]);return Array.from(e)}}
