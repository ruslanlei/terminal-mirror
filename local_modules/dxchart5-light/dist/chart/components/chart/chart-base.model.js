/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{autoDetectPeriod as s}from"../../utils/auto-period-detector.utils";import{searchCandleIndex as e}from"../../utils/candles.utils";import{fakeVisualCandle as n,fakeVisualPoint as o}from"./fake-candles";export class ChartBaseModel{constructor(t){this.type=t,this.mainDataPoints=[],this.mainVisualPoints=[],this.meanDataWidth=1,this.period=1}dataFromTimestamp(t,i=!0){const a=e(t,i,this.mainDataPoints,this.period);return this.dataFromIdx(a.index)}recalculatePeriod(){const t=s(this.mainDataPoints);t&&(this.period=t)}dataFromIdx(t){const i=this.mainVisualPoints[t];return i||(this.type==="candle"?n(this.mainDataPoints,this.mainVisualPoints,this.meanDataWidth,t,this.period):o(this.mainDataPoints,this.mainVisualPoints,this.meanDataWidth,t,this.period))}}
