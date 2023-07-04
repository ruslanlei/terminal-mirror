/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { RefObject } from 'react';
import { IconsPoolNames, IconsPool } from '../../../config/icons-pool';
export interface IconsDrawingPopoverProps {
    readonly className?: string;
    readonly icons: IconsPool;
    readonly parentRef: RefObject<HTMLElement>;
    readonly isOpened: boolean;
    readonly onRequestClose?: () => void;
    readonly onSelectIcon: (icon: IconsPoolNames) => void;
    readonly onMouseLeave?: (e: React.MouseEvent) => void;
}
export declare const IconsDrawingPopover: React.MemoExoticComponent<React.ForwardRefExoticComponent<IconsDrawingPopoverProps & React.RefAttributes<HTMLDivElement>>>;
