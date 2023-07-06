/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { CKButtonIconProps } from '../Button/ButtonIcon.component';
interface CKHoldToActionIconProps {
    readonly iconSVGComponent: React.ComponentType;
    readonly iconWrapper: React.ComponentType<CKButtonIconProps>;
    readonly ariaLabel?: string;
    readonly tabIndex?: number;
    readonly ariaHidden?: boolean;
}
export interface HoldToActionHandlers {
    readonly onMouseDown: (e: React.MouseEvent) => void;
    readonly onMouseUp: (e: React.MouseEvent) => void;
    readonly onMouseLeave: (e: React.MouseEvent) => void;
    readonly onTouchStart: (e: React.TouchEvent) => void;
    readonly onTouchEnd: (e: React.TouchEvent) => void;
}
export declare const HoldToActionIcon: React.FC<HoldToActionHandlers & CKHoldToActionIconProps>;
export {};
