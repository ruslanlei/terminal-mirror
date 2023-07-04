/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, MouseEventHandler, RefAttributes, WheelEventHandler, TouchEventHandler } from 'react';
import { ControlProps } from '../Control/Control';
export interface CKInputProps extends Omit<ControlProps<string>, 'value'>, RefAttributes<HTMLElement> {
    min?: any;
    max?: any;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    autofocus?: boolean;
    tabIndex?: number;
    type?: string;
    placeholder?: string;
    pattern?: string;
    name?: string;
    id?: string;
    error?: React.ReactNode;
    className?: string;
    ref?: any;
    testId?: string;
    ariaLabel?: string;
    role?: string;
    ariaDescribedby?: string;
    externalLabel?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
    onClick?: MouseEventHandler<HTMLElement>;
    onMouseDown?: MouseEventHandler<HTMLElement>;
    onMouseUp?: MouseEventHandler<HTMLElement>;
    onMouseEnter?: MouseEventHandler<HTMLElement>;
    onMouseLeave?: MouseEventHandler<HTMLElement>;
    onTouchStart?: TouchEventHandler<HTMLElement>;
    onTouchMove?: TouchEventHandler<HTMLElement>;
    onTouchEnd?: TouchEventHandler<HTMLElement>;
    onTouchCancel?: TouchEventHandler<HTMLElement>;
    onKeyPress?: KeyboardEventHandler<HTMLElement | HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLElement | HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLElement | HTMLInputElement>;
    onWheel?: WheelEventHandler<HTMLElement>;
    value?: string;
    children?: React.ReactNode;
}
export declare const Input: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<CKInputProps>, "id" | "value" | "children" | "error" | "type" | "key" | "min" | "max" | "name" | "pattern" | "className" | "placeholder" | "tabIndex" | "role" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "onKeyPress" | "onKeyUp" | "onClick" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onTouchCancel" | "onTouchEnd" | "onTouchMove" | "onTouchStart" | "onWheel" | "testId" | "onValueChange" | "ariaLabel" | "isDisabled" | "isReadOnly" | "autofocus" | "ariaDescribedby" | "externalLabel"> & React.RefAttributes<HTMLDivElement>>>;
