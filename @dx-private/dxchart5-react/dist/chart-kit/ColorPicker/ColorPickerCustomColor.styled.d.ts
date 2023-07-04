/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface ColorPickerCustomColorTransparentProps {
    color: string;
}
export interface ColorPickerCustomColorWrapperStyledProps {
    isActive?: boolean;
}
export declare const ColorPickerCustomColorWrapperStyled: import("styled-components").StyledComponent<"div", any, ColorPickerCustomColorWrapperStyledProps, never>;
export declare const ColorPickerCustomColorFill: import("styled-components").StyledComponent<"div", any, ColorPickerCustomColorTransparentProps, never>;
export declare const ColorPickerCustomColorBox: import("styled-components").StyledComponent<"div", any, ColorPickerCustomColorTransparentProps, never>;
