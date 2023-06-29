/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ChartBaseElement as h}from"../../model/chart-base-element";export class SnapshotComponent extends h{constructor(n,t){super(),this.elements=n,this.canvasModel=t}doActivate(){super.doActivate()}createSnapshot(n){const t=this.canvasModel.canvas,e=this.canvasModel.ctx;if(e){e.clearRect(0,0,t.width,t.height);const s=t.width/window.devicePixelRatio,a=t.height/window.devicePixelRatio;return e.drawImage(this.elements.backgroundCanvas,0,0,s,a),e.drawImage(this.elements.mainCanvas,0,0,s,a),e.drawImage(this.elements.staticDrawingCanvas,0,0,s,a),e.drawImage(this.elements.dataSeriesCanvas,0,0,s,a),e.drawImage(this.elements.dynamicDrawingCanvas,0,0,s,a),e.drawImage(this.elements.crossToolCanvas,0,0,s,a),n&&n(e),new Promise((o,r)=>this.elements.snapshotCanvas.toBlob(i=>i?o(i):r("Blob is null")))}else return console.error("Snapshot isn't supported"),Promise.reject()}}
