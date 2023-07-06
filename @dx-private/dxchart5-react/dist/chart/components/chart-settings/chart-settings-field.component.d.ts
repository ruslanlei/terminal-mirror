/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
export interface ChartSettingsFieldProps {
    readonly children: React.ReactNode;
    readonly label: React.ReactNode;
    readonly hint?: React.ReactNode;
    readonly align?: 'left' | 'right';
    readonly isDisabled?: boolean;
    readonly isSubfield?: boolean;
    readonly isSecondary?: boolean;
    readonly className?: string;
    readonly id?: string;
    readonly preventCheck?: boolean;
    readonly testId?: string;
}
export declare const ChartSettingsField: React.NamedExoticComponent<ChartSettingsFieldProps>;
