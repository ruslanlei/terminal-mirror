/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{NumericAxisLabelsGenerator as s}from"../../../common/numeric-axis-labels.generator";export class NumericXAxisLabelsGenerator extends s{constructor(e,a=r=>`${r}`){super(null,()=>[e.yStart,e.yEnd],()=>e.getBounds().width,a,!1,()=>"regular",()=>0,void 0)}get labels(){return this.labelsCache.calculateOrGet()}recalculateLabels(){this.generateNumericLabels()}generateLabels(){this.labelsCache.invalidate(),this.generateNumericLabels()}}
