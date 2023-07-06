/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentType } from 'react';
import { ControlProps } from '../Control/Control';
import { DateFormatType, DateInputState, DateInputValue } from './DateInput.model';
import { CKSteppableInputProps } from '../SteppableInput/SteppableInput.component';
export type TCalendarProps = ControlProps<Date | null> & {
    onMouseDown?: React.EventHandler<React.MouseEvent<Element>>;
    min?: Date;
    max?: Date;
};
type DateValueProps = ControlProps<DateInputValue>;
export type DateInputOwnProps = CKSteppableInputProps & DateValueProps & {
    min?: Date;
    max?: Date;
    calendarIcon?: React.ReactElement;
    onClear?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    target?: Element;
};
export interface DateDefaultProps {
    SteppableInput?: ComponentType<CKSteppableInputProps>;
    dateFormatType?: DateFormatType;
    innerRef?: (instance: HTMLDivElement | null) => void;
}
export type DateInputProps = DateInputOwnProps & DateDefaultProps;
export declare class DateInputKit extends React.Component<DateInputProps, DateInputState> {
    readonly state: DateInputState;
    private secondInput;
    private calendarButtonRef;
    render(): JSX.Element;
    private renderDay;
    private renderMonth;
    private onValueChange;
    private onIncrement;
    private onDecrement;
    private onClear;
    private onDayMouseDown;
    private onMonthMouseDown;
    private onYearMouseDown;
    private onKeyDown;
    onSteppableInputClick: (e: React.MouseEvent<HTMLElement>) => void;
    private onBlur;
    private onFocus;
    private onMouseEnter;
    private onMouseLeave;
    private getDefaultActiveSection;
    private selectNextSection;
    private selectPreviousSection;
    private handleDigitKeyDown;
}
export {};
