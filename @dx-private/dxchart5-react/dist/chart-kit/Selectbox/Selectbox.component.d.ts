/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentType, ReactElement, ReactNode, ReactText } from 'react';
import { CKMenuProps } from '../Menu/Menu.component';
import { CKSelectboxAnchorProps } from './SelectboxAnchor.component';
import { CKMenuItemProps } from '../Menu/MenuItem.component';
import { CKPopoverProps } from '../Popover/Popover.component';
export type SelectboxValue = ReactText | ReactText[] | undefined;
export type SelectboxChildren = ReactElement<CKMenuItemProps>[] | ReactElement<CKMenuItemProps>;
export interface CKSelectboxProps {
    readonly multipleFormatter?: (value: ReactText[]) => ReactNode;
    readonly isDisabled?: boolean;
    readonly placeholder?: string;
    readonly value: SelectboxValue;
    readonly onValueChange: (value: SelectboxValue) => void;
    readonly isOpened?: boolean;
    readonly onToggle?: (value: boolean) => void;
    readonly onTabPress?: (e: KeyboardEvent) => void;
    readonly children?: SelectboxChildren;
    readonly className?: string;
    readonly closeOnClickAway?: boolean;
    readonly Anchor?: ComponentType<CKSelectboxAnchorProps>;
    readonly Menu?: ComponentType<CKMenuProps>;
    readonly Popover?: ComponentType<CKPopoverProps>;
    readonly Header?: React.ReactElement<any>;
    readonly Footer?: React.ReactElement<any>;
    readonly caretIcon?: React.ReactElement<any> | React.ReactText;
    readonly isCaretIconChanged?: boolean;
    readonly prefixIcon?: ReactNode;
    readonly hasMenu?: boolean;
    readonly testIdAnchor?: string;
    readonly testIdPopover?: string;
    readonly tabIndex?: number;
    readonly anchorAriaLabel?: string;
    readonly menuAriaLabel?: string;
    readonly ariaDescription?: string;
    readonly keyboardMode?: boolean;
    readonly shouldWrap?: boolean;
    readonly hasIconWrapper?: boolean;
    readonly parentEventTarget?: HTMLElement;
    readonly contentRef?: React.RefObject<HTMLDivElement>;
    readonly focusSelector?: string;
}
export declare const Selectbox: React.NamedExoticComponent<CKSelectboxProps>;
