/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { RefObject } from 'react';
import { DropdownMenuItemProps } from './DropdownMenuItem.component';
export interface DropdownMenuItemPopoverProps {
    parentRef: RefObject<HTMLLIElement>;
    className?: string;
    isOpened: boolean;
    onClose: () => void;
}
export interface DropdownMenuItemWithPopoverProps extends DropdownMenuItemProps {
    readonly popover: (anchorRef: RefObject<HTMLLIElement>) => JSX.Element;
    readonly opened?: boolean;
    readonly onKeyDown?: (event: React.KeyboardEvent) => void;
}
export declare const DropdownMenuItemWithPopover: React.MemoExoticComponent<React.ForwardRefExoticComponent<DropdownMenuItemWithPopoverProps & React.RefAttributes<HTMLLIElement>>>;
