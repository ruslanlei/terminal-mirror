/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export class Animation{constructor(i,t){this.onTickFunction=t,this.animationTimeLeft=0,this.animationInProgress=!1,this.animationTime=i.duration,this.animationTimeLeft=i.timeLeft===void 0?i.duration:i.timeLeft,this.animationInProgress=!0}tick(){this.animationTimeLeft<=0?this.animationInProgress=!1:this.animationTimeLeft--,this.onTickFunction&&this.onTickFunction()}getProgress(){return 1-this.animationTimeLeft/this.animationTime}finishAnimation(){this.animationInProgress=!1,this.animationTimeLeft=0}}
