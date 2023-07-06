/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { CKMenuItemProps } from '../../../chart-kit/Menu/MenuItem.component';
import { PopoverPosition } from '../../../chart-kit/Popover/Popover.model';
interface YAxisPopoverMenuItemStyledProps extends CKMenuItemProps {
    disabled?: boolean;
}
interface YAxisPopoverMenuItemContentStyledProps {
    disabled?: boolean;
}
interface YAxisPopoverLabelsAndLinesAnchorProps {
    position: PopoverPosition;
}
export declare const YAxisPopoverMenuStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Menu/Menu.component").CKMenuProps>, any, {}, never>;
export declare const YAxisPopoverMenuItemStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<CKMenuItemProps & import("react").RefAttributes<HTMLLIElement>>>, any, YAxisPopoverMenuItemStyledProps, never>;
export declare const YAxisPopoverMenuItemContentStyled: import("styled-components").StyledComponent<"div", any, YAxisPopoverMenuItemContentStyledProps, never>;
export declare const YAxisPopoverMenuItemContentTextStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const YAxisPopoverMenuItemContentTextSubStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const YAxisPopoverMenuItemLabelsAndLinesStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<CKMenuItemProps & import("react").RefAttributes<HTMLLIElement>>>, any, YAxisPopoverMenuItemStyledProps, never>;
export declare const YAxisPopoverMenuItemContentIconStyled: import("styled-components").StyledComponent<"div", any, YAxisPopoverMenuItemContentStyledProps, never>;
export declare const YAxisPopoverLabelsAndLinesAnchor: import("styled-components").StyledComponent<"div", any, YAxisPopoverLabelsAndLinesAnchorProps, never>;
export declare const YAxisPopoverMoveScaleLabelItem: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
