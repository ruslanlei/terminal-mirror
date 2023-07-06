/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
export interface DateInputValue {
    day: Option<number>;
    month: Option<number>;
    year: Option<number>;
}
export declare const isDatesDifferent: (x: DateInputValue, y: DateInputValue) => boolean;
export declare const buildDate: (day: number) => (month: number) => (year: number) => Date;
export declare const buildDateOption: (day: Option<number>) => (month: Option<number>) => (year: Option<number>) => Option<Date>;
export type DateFormatType = 'DMY' | 'MDY';
export interface DateInputState {
    activeSection?: ActiveSection;
    isOpened?: boolean;
}
export declare enum ActiveSection {
    Day = 0,
    Month = 1,
    Year = 2
}
export declare const toObjectDate: (date: Date) => DateInputValue;
export declare function format(date: Option<number>, section: ActiveSection): string;
export declare function decrementMonth(month: number): number;
export declare function decrementMonthOption(month: Option<number>): Option<number>;
export declare function incrementMonth(month: number): number;
export declare function incrementMonthOption(month: Option<number>): Option<number>;
export declare const inc: (value: number) => number;
export declare function checkParentsUpTo(node?: Element | null, checkNode?: Element, upToNode?: Element): boolean;
