/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface ColorPickerPopoverColor {
    color?: string;
    isBorder?: boolean;
}
export declare const ColorPickerPopoverAddColor: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../../Button/default/Button.component").CKButtonProps>, any, {}, never>;
interface ColorPickerAgreeIconWrapperStyledProps {
    readonly iconColor: string;
}
export declare const ColorPickerAgreeIconWrapperStyled: import("styled-components").StyledComponent<import("react").FC<import("../../IconWrapper/IconWrapper.component").IconWrapperProps>, any, ColorPickerAgreeIconWrapperStyledProps, never>;
export declare const ColorPickerAgreeButtonPalleteStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
