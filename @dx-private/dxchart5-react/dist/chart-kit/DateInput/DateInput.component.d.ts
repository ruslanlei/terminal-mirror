/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { ControlProps } from '../Control/Control';
import { drawingsDictionary } from '../../config/localization/drawings';
import { DateFormatType, DateInputValue } from './DateInput.model';
export interface DateInputProps extends ControlProps<DateInputValue> {
    readonly min: Date;
    readonly max: Date;
    readonly calendarDict: typeof drawingsDictionary.calendar;
    readonly parentEventTarget?: HTMLElement;
    readonly dateFormatType?: DateFormatType;
}
export declare const DateInput: FC<DateInputProps>;
