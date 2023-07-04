/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
interface PeriodsDictionary {
    tick: string;
    range: string;
    second: string;
    minute: string;
    hour: string;
    day: string;
    week: string;
    month: string;
    year: string;
    volume: string;
    pluralPostfix?: (count: number) => string;
}
export declare const aggregationPeriodDictionary: {
    periods: PeriodsDictionary;
    custom: string;
    customInputPlaceHolder: string;
    a11y_aggregationPeriodDescription: string;
    a11y_deleteAggregationPeriod: string;
    validation_nonexistentCustomPeriod: string;
};
export type AggregationPeriodDictionary = typeof aggregationPeriodDictionary;
export {};
