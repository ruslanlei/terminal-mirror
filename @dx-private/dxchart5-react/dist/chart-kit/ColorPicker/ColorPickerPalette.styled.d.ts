/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export declare const ColorPickerMenuStyled: import("styled-components").StyledComponent<import("react").FC<import("../Menu/Menu.component").CKMenuProps>, any, {}, never>;
export declare const ColorPickerMenuItemStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("../Menu/MenuItem.component").CKMenuItemProps & import("react").RefAttributes<HTMLLIElement>>>, any, {}, never>;
export interface ColorPickerButtonPaletteStyledProps {
    color: string;
    isActive?: boolean;
}
export declare const ColorPickerButtonPaletteStyled: import("styled-components").StyledComponent<"div", any, ColorPickerButtonPaletteStyledProps, never>;
export declare const ColorPickerPopoverMain: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ColorPickerWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ColorPickerDraggableItemWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
