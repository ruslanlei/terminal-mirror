/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
export interface TimeInputValue {
    hours: Option<number>;
    minutes: Option<number>;
    seconds: Option<number>;
    periodType: Option<PeriodType>;
}
export declare enum PeriodType {
    AM = "AM",
    PM = "PM"
}
export declare enum Section {
    Hours = 0,
    Minutes = 1,
    Seconds = 2,
    PeriodType = 3
}
export declare const MAX_VALID_MINS_AND_SEC = 59;
export declare const MAX_VALID_HOURS_FOR_24H_FORMAT = 23;
export declare const MAX_VALID_HOURS_FOR_12H_FORMAT = 12;
export declare const EMPTY_SECTION = "--";
export declare const isTimesDifferent: (x: TimeInputValue, y: TimeInputValue) => boolean;
export declare const formatNumericValue: (value: number) => string;
export declare const formatTimePeriod: (periodType: PeriodType) => string;
/**
 * Values can be zeros (start from 0). Max is included value.
 */
export declare function add(a: Option<number>, b: number, max: number): Option<number>;
export declare function isDefined<A>(value?: A): value is A;
export declare function findActiveSectionOnKeyLeft(activeState?: Section, isSecondsExist?: boolean): Section;
export declare function findActiveSectionOnKeyRight(activeSection?: Section, isSecondsExist?: boolean, isClockFormatExist?: boolean): Section;
export declare function togglePeriodType(periodType: Option<PeriodType>): Option<PeriodType>;
export declare const renderSection: (time: Option<string>) => string;
