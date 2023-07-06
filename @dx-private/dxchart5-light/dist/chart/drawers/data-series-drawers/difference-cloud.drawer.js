/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{setLineWidth as C}from"../data-series.drawer";import{buildLinePath as y}from"./data-series-drawers.utils";import{firstOf as D,lastOf as b}from"../../utils/array.utils";import{toRGBA as m}from"../../utils/color.utils";export class DifferenceCloudDrawer{constructor(){}draw(o,r,e,a){e.config.visible&&(r.forEach((i,l)=>{var s;const n=e.getPaintConfig(l);C(o,n.lineWidth,e,a,n.hoveredLineWidth);const f=(s=a.singleColor)!==null&&s!==void 0?s:n.color;o.strokeStyle=f,this.drawLine(o,i,e.view)}),e.linkedDataSeriesModels.forEach((i,l)=>{if(isDifferenceTool(i.config.type)&&isDifferenceTool(e.config.type)&&i.config.visible){const s=[],n=e,f=n.getSeriesInViewport(n.scaleModel.xStart-1,n.scaleModel.xEnd+1),c=i.getSeriesInViewport(i.scaleModel.xStart-1,i.scaleModel.xEnd+1);f.forEach((h,t)=>{const u=Math.min(h.length,c[t].length);for(let g=0;g<u;g++){const p=[h[g].clone(),c[t][g].clone()];s.push({diffPoints:p})}const v=n.getPaintConfig(t).color,E=i.getPaintConfig(l).color;this.drawDifference(o,v,E,s,n,i,a)})}}))}drawLine(o,r,e){o.beginPath(),y(r,o,e),o.stroke()}drawDifference(o,r,e,a,i,l,s){const[n,f]=[[],[]];a.forEach(t=>{const[u,v]=t.diffPoints;n.push(u),f.push(v)});const c=d(n,i.view),h=d(f,l.view);this.fillCloud(o,e,c,h,s),this.fillCloud(o,r,h,c,s)}fillCloud(o,r,e,a,i){var l,s,n,f;o.save(),o.beginPath();const c=(s=(l=D(e))===null||l===void 0?void 0:l.x)!==null&&s!==void 0?s:0,h=(f=(n=b(e))===null||n===void 0?void 0:n.x)!==null&&f!==void 0?f:0;o.lineTo(c,0),e.forEach(t=>{o.lineTo(t.x,t.y)}),o.lineTo(h,0),o.closePath(),o.clip(),o.beginPath(),e.forEach((t,u)=>{u===0?o.moveTo(t.x,t.y):o.lineTo(t.x,t.y)}),a.slice().reverse().forEach(t=>{o.lineTo(t.x,t.y)}),o.closePath(),o.fillStyle=i.singleColor?i.singleColor:m(r||"#383838",.3),o.fill(),o.restore()}}const d=(P,o)=>P.map(r=>{const{centerUnit:e,close:a}=r,i=o.toX(e),l=o.toY(a);return{x:i,y:l}});export const isDifferenceTool=P=>P==="DIFFERENCE";