/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{round as I}from"../../utils";import{drawPriceLabel as q,drawRoundedRect as z}from"../../utils/canvas-drawing-functions.utils";import{calculateSymbolHeight as O,calculateTextWidth as j}from"../../utils/canvas-font-measure-tool.utils";import{getLabelTextColorByBackgroundColor as J}from"../../utils/utils-index";import{getFontFromConfig as G}from"./y-axis.model";export const DEFAULT_PRICE_LABEL_PADDING=4;export function drawBadgeLabel(o,t,r,n,l,d,T){var e,g,p,v,h,s,m;const a=d.align,u=(e=l.textFont)!==null&&e!==void 0?e:G(d),f=l.bgColor,w=(g=l.textColor)!==null&&g!==void 0?g:J(f,T.labelTextColor,T.labelInvertedTextColor),F=(p=l.paddingTop)!==null&&p!==void 0?p:DEFAULT_PRICE_LABEL_PADDING,k=(v=l.paddingBottom)!==null&&v!==void 0?v:DEFAULT_PRICE_LABEL_PADDING,b=(h=l.paddingEnd)!==null&&h!==void 0?h:DEFAULT_PRICE_LABEL_PADDING,E=I(O(u,o)/2),B=n-E-F,c=n+E+k-B;if(n<t.y+c/2||n>t.y+t.height-c/2)return;o.save(),o.fillStyle=f,o.strokeStyle=f;const L=I(t.width/6),x=a==="right"?t.x:t.x+t.width,H=a==="right"?x+L:x-L,_=d.labelBoxMargin.end,R=_-b,W=t.width-L-R;q(o,H,B,x,B+I(c/2),H,B+c,W,(m=(s=d.typeConfig.badge)===null||s===void 0?void 0:s.rounded)!==null&&m!==void 0?m:!1,a),o.fillStyle=w,o.font=u;const C=a==="right"?t.x+t.width-j(r,o,u)-_:t.x+_;o.fillText(r,C,n+E-1),o.restore()}export function drawRectLabel(o,t,r,n,l,d,T,e){var g,p,v,h,s,m,a,u,f,w,F;const k=d.align,b=(g=l.textFont)!==null&&g!==void 0?g:G(d),E=(p=l.textColor)!==null&&p!==void 0?p:"#FF00FF",B=l.bgColor,i=(v=d.typeConfig.rectangle)===null||v===void 0?void 0:v.paddings,c=(s=(h=l.paddingTop)!==null&&h!==void 0?h:i==null?void 0:i.top)!==null&&s!==void 0?s:DEFAULT_PRICE_LABEL_PADDING,L=(a=(m=l.paddingBottom)!==null&&m!==void 0?m:i==null?void 0:i.bottom)!==null&&a!==void 0?a:DEFAULT_PRICE_LABEL_PADDING,x=(f=(u=l.paddingEnd)!==null&&u!==void 0?u:i==null?void 0:i.end)!==null&&f!==void 0?f:DEFAULT_PRICE_LABEL_PADDING,H=l.paddingStart,_=O(b,o),R=n-_/2-c,C=n+_/2+L-R,N=(w=l.rounded)!==null&&w!==void 0?w:(F=d.typeConfig.rectangle)===null||F===void 0?void 0:F.rounded;if(n<t.y+C/2||n>t.y+t.height-C/2)return;o.save(),o.fillStyle=e!=null?e:B,o.strokeStyle=e!=null?e:B;const P=d.labelBoxMargin.end;o.font=b;const M=j(r,o,b),y=P-x,D=H!==void 0?M+H+x:t.width-y,X=k==="right"?t.x+t.width-y-D:t.x+y,U=k==="right"?t.x+t.width-M-P:P;N?z(o,X,R,D,C,4,!0):o.fillRect(X,R,D,C),o.fillStyle=E,o.fillText(r,U,n+_/2-1),o.restore()}export function drawPlainLabel(o,t,r,n,l,d,T){drawRectLabel(o,t,r,n,l,d,T,"transparent")}export function getLabelYOffset(o,t,r=DEFAULT_PRICE_LABEL_PADDING){return O(o,t)/2+r}
