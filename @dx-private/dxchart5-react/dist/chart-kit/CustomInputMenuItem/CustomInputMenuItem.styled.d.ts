/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
interface CustomInputMenuItemStyledProps {
    readonly keyboardModeEnabled: boolean;
}
export declare const CustomInputMenuItemStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("../Menu/MenuItem.component").CKMenuItemProps & import("react").RefAttributes<HTMLLIElement>>>, any, CustomInputMenuItemStyledProps, never>;
interface CustomInputMenuItemInputContainerStyledProps {
    error?: boolean;
}
export declare const CustomInputMenuItemInputContainerStyled: import("styled-components").StyledComponent<"div", any, CustomInputMenuItemInputContainerStyledProps, never>;
export declare const CustomInputMenuItemErrorStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const CustomInputMenuItemInactiveStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CustomInputConfirmButton: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../Menu/action-button/MenuItemActionButton.component").MenuItemActionButtonProps>, any, {}, never>;
export {};
