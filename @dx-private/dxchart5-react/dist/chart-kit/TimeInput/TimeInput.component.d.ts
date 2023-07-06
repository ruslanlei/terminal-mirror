/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentType } from 'react';
import { TimeInputValue } from './TimeInput.model';
import { ControlProps } from '../Control/Control';
import { CKSteppableInputProps } from '../SteppableInput/SteppableInput.component';
interface TimeInputConfig {
    withSeconds?: boolean;
    withPeriodType?: boolean;
    isHideSeconds?: boolean;
}
export type TimeInputProps = TimeInputConfig & CKSteppableInputProps & ControlProps<TimeInputValue>;
export type TimeInputFullProps = TimeInputProps & {
    SteppableInput: ComponentType<CKSteppableInputProps>;
};
export declare const TimeInput: React.MemoExoticComponent<(props: TimeInputProps) => JSX.Element>;
export {};
