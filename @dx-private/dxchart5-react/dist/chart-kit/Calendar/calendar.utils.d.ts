/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const generateDates: (min: number, max: number) => number[];
export declare const checkDates: (left: Date, right: Date | undefined, predicate: (left: Date, right: Date) => boolean) => Date;
export declare const compareDates: (first: Date | undefined, second: Date | undefined, predicate: (first: Date, second: Date) => boolean) => boolean;
export declare const getIsBetween: (day: Date | undefined, left: Date | undefined, right: Date | undefined) => boolean;
export declare const _subYears: (date: Date | undefined, amount: number) => Date;
export declare const _addYears: (date: Date | undefined, amount: number) => Date;
