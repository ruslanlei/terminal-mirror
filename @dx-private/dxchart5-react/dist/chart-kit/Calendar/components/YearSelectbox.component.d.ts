/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DateRangeValue, RangeSide } from '../Calendar.model';
import { SelectboxValue } from '../../Selectbox/Selectbox.component';
export interface YearSelectboxProps {
    readonly min: Date;
    readonly max: Date;
    readonly rangeSide: RangeSide;
    readonly singleMode: boolean;
    readonly selectedDate: DateRangeValue;
    readonly handleYearValueChange: (year: SelectboxValue) => void;
    readonly container?: Element;
    readonly date?: Date;
}
export declare const YearSelectbox: React.NamedExoticComponent<YearSelectboxProps>;
