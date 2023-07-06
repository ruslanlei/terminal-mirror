/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface AccordionItemsContainerProps {
    readonly maxHeight?: number;
}
export interface AccordionContainerStyledProps {
    isSelected?: boolean;
    isHidden?: boolean;
    skipAnimation?: boolean;
    isFocused?: boolean;
}
export declare const ArrowStyled: import("styled-components").StyledComponent<import("react").FC<import("../IconWrapper/IconWrapper.component").IconWrapperProps>, any, ArrowProps, never>;
export declare const AccordionContainerStyled: import("styled-components").StyledComponent<"div", any, AccordionContainerStyledProps, never>;
export declare const AccordionWrapperContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ArrowProps {
    readonly isCollapsed: boolean;
}
export {};
