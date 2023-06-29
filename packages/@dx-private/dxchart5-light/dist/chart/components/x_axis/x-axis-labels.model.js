/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ChartBaseElement as t}from"../../model/chart-base-element";import l from"../../events/events";export class XAxisLabelsModel extends t{constructor(e,s){super(),this.eventBus=e,this.labelProviders=s,this.labels=[],this.initModel(),this.addSubscription(this.eventBus.on(l.EVENT_DRAW,()=>this.recalculateLabels()))}initModel(){this.recalculateLabels()}recalculateLabels(){this.labels=[];for(const e of this.labelProviders)this.labels.push(...e.getUnorderedLabels())}}
