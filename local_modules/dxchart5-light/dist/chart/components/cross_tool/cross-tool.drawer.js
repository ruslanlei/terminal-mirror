/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export class CrossToolDrawer{constructor(o,s,r){this.model=o,this.crossToolCanvasModel=s,this.crossToolTypeDrawers=r}draw(){const o=this.crossToolTypeDrawers[this.model.type];o?this.model.currentHover&&o.draw(this.crossToolCanvasModel.ctx,this.model.currentHover):console.error(`No cross tool drawer type registered for drawer type ${this.model.type}`)}getCanvasIds(){return[this.crossToolCanvasModel.canvasId]}}
