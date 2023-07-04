/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ControlProps } from '../Control/Control';
import React from 'react';
import { MouseEvent } from 'react';
import { FunctionN } from 'fp-ts/function';
import { drawingsDictionary } from '../../config/localization/drawings';
import { DateRangeValue, RangeSide } from './Calendar.model';
export interface CalendarProps extends ControlProps<DateRangeValue> {
    readonly min?: Date;
    readonly max?: Date;
    readonly onMouseDown?: (event: MouseEvent) => void;
    readonly rangeSide?: RangeSide;
    readonly singleMode?: boolean;
    readonly container?: HTMLElement;
    readonly disabledDates?: Date[];
    readonly onChangeSelectedDate?: FunctionN<DateRangeValue[], void>;
    readonly calendarDict: typeof drawingsDictionary.calendar;
}
export declare const Calendar: React.NamedExoticComponent<CalendarProps>;
