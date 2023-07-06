/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface SimpleNumericStepperProps {
    readonly ariaLabel?: string;
    readonly value: number;
    readonly onValueChange: (number: number) => void;
    readonly units?: string;
    readonly max?: number;
    readonly min?: number;
    readonly sensitivity?: number;
    readonly orientation?: 'v' | 'h';
    readonly className?: string;
    readonly label?: string;
    readonly isDisabled?: boolean;
    readonly id?: string;
    readonly isChangingCallback?: (value: boolean) => void;
}
export declare const SimpleNumericStepper: React.MemoExoticComponent<(props: SimpleNumericStepperProps) => JSX.Element>;
