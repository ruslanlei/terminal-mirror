/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ColorAlphaAnimation as r}from"./types/color-alpha-animation";import{ColorTransitionAnimation as s}from"./types/color-transition-animation";import{ViewportMovementAnimation as m}from"./types/viewport-movement-animation";const e=10;export const VIEWPORT_ANIMATION_ID="VIEWPORT_ANIMATION";export class CanvasAnimation{constructor(t){this.eventBus=t,this.animations={}}startViewportMovementAnimation(t,n,i=VIEWPORT_ANIMATION_ID,o){const a=new m(t,n,o);return this.animations[i]=a,this.ensureIntervalStarted(),a}startColorAlphaAnimation(t,n,i,o){const a=new r(Object.assign(Object.assign({},o),{duration:o&&o.duration||e}),n,i);return this.animations[t]=a,this.ensureIntervalStarted(),a}startColorTransitionAnimation(t,n,i=e,o){const a=new s({duration:i},n,o);return this.animations[t]=a,this.ensureIntervalStarted(),a}getAnimation(t){return this.animations[t]}getColorAlphaAnimation(t){return this.getAnimation(t)}getColorTransitionAnimation(t){return this.getAnimation(t)}forceStopAnimation(t){const n=this.animations[t];n&&(n.animationTimeLeft=-1,n.animationInProgress=!1)}ensureIntervalStarted(){this.animationIntervalId||(this.animationIntervalId=window.setInterval(()=>this.tick(),20))}tick(){let t=!0;for(const n of Object.keys(this.animations)){const i=this.animations[n];i.tick(),i.animationInProgress&&(t=!1)}t?this.stopInterval():this.eventBus.fireDraw()}stopInterval(){clearInterval(this.animationIntervalId),this.animationIntervalId=void 0}}
