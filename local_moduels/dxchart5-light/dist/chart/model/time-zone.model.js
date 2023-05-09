/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{ReplaySubject as n}from"rxjs";import{dateTimeFormatterFactory as f}from"../time.formatter";import{getTimezoneOffset as s}from"date-fns-tz";import{memoize as c}from"../../common/memoize";const r=c(s);export class TimeZoneModel{constructor(e){this.config=e,this.timeZoneChangedSubject=new n,this.currentTzOffset=0,this.dateTimeFormatterFactory=this.initFormatterFactory(this.config.dateFormatter)}setTimeZone(e){this.config.timezone=e,this.timeZoneChangedSubject.next(e),this.currentTzOffset=this.getOffset(e)}observeTimeZoneChanged(){return this.timeZoneChangedSubject.asObservable()}initFormatterFactory(e){let t;if(e&&typeof e=="function")t=e;else if(e&&e.createFormatterFunction&&typeof e.createFormatterFunction=="function"){const o=e.createFormatterFunction;t=i=>o(i).bind(e)}else t=f(this.config,this.tzOffset);return t}getFormatterFactory(){return this.dateTimeFormatterFactory}getOffset(e){return new Date().getTimezoneOffset()*60*1e3+r(e)}tzOffset(e){const t=-new Date().getTimezoneOffset()*60*1e3;let o;return e?o=r(e):o=t,i=>new Date(+i+o-t)}}
