/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
import { DrawingSettingsGroupStyledProps } from './drawing-settings-group.styled';
export interface DrawingSettingsGroupProps extends DrawingSettingsGroupStyledProps {
    readonly children?: ReactNode;
    readonly className?: string;
    readonly label?: string;
    readonly disableMargin?: boolean;
}
export declare const DrawingSettingsGroup: React.NamedExoticComponent<DrawingSettingsGroupProps>;
