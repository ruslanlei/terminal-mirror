/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{CanvasElement as v,CHART_UUID as G}from"../../../canvas/canvas-bounds-container";import{drawLine as M,drawRoundedRect as V,avoidAntialiasing as q}from"../../../utils/canvas/canvas-drawing-functions.utils";import{calculateSymbolHeight as R,calculateTextWidth as W}from"../../../utils/canvas/canvas-font-measure-tool.utils";import{floor as z}from"../../../utils/math.utils";import{drawBadgeLabel as J,drawPlainLabel as K,drawRectLabel as O}from"../y-axis-labels.drawer";import{getFontFromConfig as I}from"../y-axis.model";export const DEFAULT_LABEL_APPEARANCE_TYPE="badge";const N=4;export const priceLabelDrawersMap={badge:J,rectangle:O,plain:K};export function drawLabel(t,e,o,y,n,p){var d,c,a,s,l;const i=o.y,m=o.labelText,w=(d=o.mode)!==null&&d!==void 0?d:"label",B=(c=o.labelType)!==null&&c!==void 0?c:DEFAULT_LABEL_APPEARANCE_TYPE,_=o.description,T=(a=o.textFont)!==null&&a!==void 0?a:I(n),f=o.bgColor,S=(s=o.lineColor)!==null&&s!==void 0?s:f,h=W(_!=null?_:"",t,T)+8,D=z(o.y),g=R(T,t),x=i-g/2,A=i+g/2-x;t.save(),t.fillStyle=f,t.strokeStyle=S;const r=y.getBounds(v.PANE_UUID(G)),X=priceLabelDrawersMap[B],C=n.labels.descriptions,j=Q(e,D,A),E=()=>C&&Z(t,e,o,n.align,n,p);let Y,F;const P=2;n.align==="right"?(Y=r.x,F=C?r.x+r.width-h:r.x+r.width+P):(Y=C?r.x+h:r.x-P,F=r.x+r.width);const k=(l=o.lineY)!==null&&l!==void 0?l:o.y,U=()=>j&&q(t,()=>M(t,Y,k,F,k,1)),H=()=>X(t,e,m,i,o,n,p,n.align);switch(w){case"line":U(),E();break;case"line-label":U(),E(),H();break;case"label":E(),H();break;case"none":break}t.restore()}const Q=(t,e,o)=>e>t.y+o/2&&e<t.y+t.height-o/2;function Z(t,e,o,y="right",n,p){var d,c,a,s;const l=o.description;if(!l||l.length===0)return;const i=o.y,m=I(n),w=W(l,t,m),B=R(m,t),_=(d=o.paddingTop)!==null&&d!==void 0?d:N,T=(c=o.paddingBottom)!==null&&c!==void 0?c:N,f=i-B/2-_,h=i+B/2+T-f;if(i<e.y+h/2||i>e.y+e.height-h/2)return;t.save(),t.fillStyle=(a=p==null?void 0:p.labelDescriptionFillColor)!==null&&a!==void 0?a:"rgba(20, 20, 19, 0.8)",t.strokeStyle="rgba(20, 20, 19, 0.8)";const D=w+5,g=4,x=w+g*2,b=y==="right"?e.x-x:e.x+e.width;V(t,b,f,D,h,0,!0),t.fillStyle=(s=o.descColor)!==null&&s!==void 0?s:o.bgColor,t.font=m;const A=y==="right"?e.x-w-g*2:e.x+e.width+g*2;t.fillText(l,A,i+B/2-1),t.restore()}
