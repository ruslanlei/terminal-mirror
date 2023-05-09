/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
declare const weekWeekday: "week-weekday";
declare const timeFormatsConfirugable: readonly ["second", "minute", "hour", "day", "month", "year"];
declare const timeFormatsNoNConfirugable: readonly ["lessThanSecond"];
type TimeFormatWeekWeekdayType = typeof weekWeekday;
type TimeFormatConfirugableType = typeof timeFormatsConfirugable[number];
type TimeFormatNonConfirugableType = typeof timeFormatsNoNConfirugable[number];
export type TimeFormat = TimeFormatConfirugableType | TimeFormatNonConfirugableType | TimeFormatWeekWeekdayType;
type TimeFormatConfirugableWithDurationType = `${TimeFormatConfirugableType}_${number}` | `${TimeFormatConfirugableType}_${number}!` | `${TimeFormatWeekWeekdayType}_${number | '$'}_${number}`;
export type TimeFormatWithDuration = TimeFormatConfirugableWithDurationType | TimeFormatNonConfirugableType;
export interface ParsedCTimeFormat {
    key: TimeFormatConfirugableType;
    value: number;
    exact: boolean;
}
export interface ParsedWeekFormat {
    key: TimeFormatWeekWeekdayType;
    week: number | '$';
    weekday: number;
}
export interface ParsedNCTimeFormat {
    key: TimeFormatNonConfirugableType;
}
export type ParsedTimeFormat = ParsedCTimeFormat | ParsedWeekFormat | ParsedNCTimeFormat;
export type SpecialSymbol = '!' | '$';
export declare const timeFormatConfirugableGuard: (key: string) => key is "minute" | "hour" | "day" | "month" | "year" | "second";
export declare const weekWeekdayGuard: (key: string) => key is "week-weekday";
export declare const timeFormatNoNConfirugableGuard: (key: string) => key is "lessThanSecond";
export {};
