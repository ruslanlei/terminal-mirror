/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DateInputValue } from '../chart-kit/DateInput/DateInput.model';
import { TimeInputValue } from '../chart-kit/TimeInput/TimeInput.model';
export declare function fromDateToDateInputValue(date: Date): DateInputValue;
export declare function fromDateToTimeInputValue(date: Date): TimeInputValue;
export declare function fromTimeInputValueToDate(sourceDate: Date, time: TimeInputValue): Date;
export declare function fromDateInputValueToDate(sourceDate: Date, inputDate: DateInputValue): Date;
export declare function getPricePrecisionFormatter(precision: number): (value: number) => string;
