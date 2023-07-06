/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ControlProps } from '../Control/Control';
export interface CKRadioButtonProps extends ControlProps<boolean> {
    readonly id?: string;
    readonly isDisabled?: boolean;
    readonly ariaLabel?: string;
    readonly children?: React.ReactNode;
}
export declare const RadioButton: React.FC<CKRadioButtonProps>;
