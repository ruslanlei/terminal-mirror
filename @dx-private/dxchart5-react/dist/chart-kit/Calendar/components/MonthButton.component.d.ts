/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { DateRangeValue, RangeSide } from '../Calendar.model';
export interface MonthButtonProps {
    readonly min: Date;
    readonly max: Date;
    readonly rangeSide: RangeSide;
    readonly singleMode: boolean;
    readonly selectedDate: DateRangeValue;
    readonly i: number;
    readonly month: string;
    readonly date: Date;
    readonly onMonthSelect: (index: number) => void;
}
export declare const MonthButton: React.NamedExoticComponent<MonthButtonProps>;
export declare const buildDateRange: (from: Date) => (to: Date) => {
    from: Date;
    to: Date;
};
