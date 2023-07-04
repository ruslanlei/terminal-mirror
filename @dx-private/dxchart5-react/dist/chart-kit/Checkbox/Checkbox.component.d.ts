/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Ref } from 'react';
import { ControlProps } from '../Control/Control';
export interface CKCheckboxProps<T> extends Omit<ControlProps<boolean>, 'value'> {
    readonly id?: string;
    readonly isDisabled?: boolean;
    readonly ref?: Ref<HTMLButtonElement>;
    readonly ariaLabel?: string;
    readonly field?: T;
    readonly className?: string;
    readonly onValueChange: (value: boolean, field?: T) => void;
    readonly value?: boolean;
    readonly testId?: string;
}
declare function CheckboxRaw<T extends string | number>(props: CKCheckboxProps<T>): JSX.Element;
export declare const Checkbox: typeof CheckboxRaw;
export {};
