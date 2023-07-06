/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface MenuItemWithPopoverStyledProps {
    opened?: boolean;
    popoverAlignment?: string;
    isActive?: boolean;
}
export declare const DropdownMenuItemWithPopoverStyled: import("styled-components").StyledComponent<"li", any, MenuItemWithPopoverStyledProps, never>;
