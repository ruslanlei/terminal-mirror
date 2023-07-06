/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DateRangeValue } from '../Calendar.model';
export interface MonthsProps {
    readonly date: Date;
    readonly months: string[];
    readonly singleMode: boolean;
    readonly selectedDate: DateRangeValue;
    readonly isDayDisabled: (day: Date, forMonth: number) => boolean;
    readonly onDayChange: (day: Date) => void;
}
export declare const Months: React.NamedExoticComponent<MonthsProps>;
