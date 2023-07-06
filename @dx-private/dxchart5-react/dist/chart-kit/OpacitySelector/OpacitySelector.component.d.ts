/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface OpacitySelectorProps {
    readonly color?: string;
    readonly value: number;
    readonly onChange: (value: number) => void;
    readonly isDisabled?: boolean;
    readonly className?: string;
}
export declare const OpacitySelector: React.NamedExoticComponent<OpacitySelectorProps>;
