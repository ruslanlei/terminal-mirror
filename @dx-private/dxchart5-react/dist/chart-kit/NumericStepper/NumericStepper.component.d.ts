/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentType } from 'react';
import { CKSteppableInputProps } from '../SteppableInput/SteppableInput.component';
import { ControlProps } from '../Control/Control';
export interface CKNumericStepperProps extends CKSteppableInputProps, ControlProps<number> {
    readonly step?: number;
    readonly min?: number;
    readonly max?: number;
    readonly formatter?: (v: number) => string;
    readonly manualEdit?: boolean;
    readonly placeholder?: string;
    readonly SteppableInput?: ComponentType<CKSteppableInputProps>;
    readonly className?: string;
    readonly ariaLabel?: string;
}
export declare const NumericStepper: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<CKNumericStepperProps>, "value" | "children" | "error" | "key" | "min" | "max" | "className" | "placeholder" | "tabIndex" | "onFocus" | "onBlur" | "onKeyDown" | "onClick" | "onMouseEnter" | "onMouseLeave" | "step" | "onValueChange" | "ariaLabel" | "isDisabled" | "onClear" | "isIncrementButtonDisabled" | "isDecrementButtonDisabled" | "onIncrement" | "onDecrement" | "incrementIcon" | "decrementIcon" | "clearIcon" | "Input" | "ButtonIcon" | "ClearButtonIcon" | "forceFocusBtn" | "formatter" | "manualEdit" | "SteppableInput"> & React.RefAttributes<HTMLDivElement>>>;
