/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { RefAttributes } from 'react';
import { ComponentType, ReactElement } from 'react';
import { CKInputProps } from '../Input/Input.component';
import { CKButtonIconProps } from '../Button/ButtonIcon.component';
export type CKPickedInputProps = Pick<CKInputProps, 'error' | 'onBlur' | 'onFocus' | 'onKeyDown' | 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'isDisabled'>;
export type CKSteppableInputProps = CKPickedInputProps & RefAttributes<HTMLDivElement> & {
    readonly isIncrementButtonDisabled?: boolean;
    readonly isDecrementButtonDisabled?: boolean;
    readonly tabIndex?: number;
    readonly onIncrement?: () => void;
    readonly onDecrement?: () => void;
    readonly onClear?: () => void;
    readonly incrementIcon?: ReactElement;
    readonly decrementIcon?: ReactElement;
    readonly clearIcon?: ReactElement;
    readonly Input?: ComponentType<CKInputProps>;
    readonly ButtonIcon?: ComponentType<CKButtonIconProps>;
    readonly ClearButtonIcon?: ComponentType<CKButtonIconProps>;
    readonly className?: string;
    readonly children?: React.ReactNode;
    readonly forceFocusBtn?: boolean;
};
export declare const SteppableInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<CKSteppableInputProps>, "children" | "error" | "key" | "className" | "tabIndex" | "onFocus" | "onBlur" | "onKeyDown" | "onClick" | "onMouseEnter" | "onMouseLeave" | "isDisabled" | "onClear" | "isIncrementButtonDisabled" | "isDecrementButtonDisabled" | "onIncrement" | "onDecrement" | "incrementIcon" | "decrementIcon" | "clearIcon" | "Input" | "ButtonIcon" | "ClearButtonIcon" | "forceFocusBtn"> & React.RefAttributes<HTMLDivElement>>>;
