/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { CrosshairType } from './crosshair-type.model';
export interface ToolbarCrosshairTypeProps {
    readonly className?: string;
    readonly selectedType: CrosshairType;
    readonly onTypeSelect: (type: CrosshairType) => void;
}
export declare const CrosshairTypeDropdown: React.FC<ToolbarCrosshairTypeProps>;
