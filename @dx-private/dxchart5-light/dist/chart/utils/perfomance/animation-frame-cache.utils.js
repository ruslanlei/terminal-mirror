/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{animationFrameThrottled as e}from"./request-animation-frame-throttle.utils";import{uuid as i}from"../uuid.utils";export class AnimationFrameCache{constructor(a,t=()=>!0){this.dataProvider=a,this.dataUpdatedPredicate=t,this.calculatedInThisFrame=!1,this.animFrameId=`anim_cache_${i()}`}calculateOrGet(){var a;return this.calculatedInThisFrame||(this.cache=this.dataProvider(),this.dataUpdatedPredicate()&&(this.calculatedInThisFrame=!0),e(this.animFrameId,()=>{this.calculatedInThisFrame=!1})),(a=this.cache)!==null&&a!==void 0?a:this.dataProvider()}forceCalculateOrGet(){return this.invalidate(),this.calculateOrGet()}getLastCachedValue(){return this.cache}updateCacheValue(a){this.cache=a}invalidate(){this.cache=void 0,this.calculatedInThisFrame=!1}}
