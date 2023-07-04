/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface DrawingsToolbarContainerStyledProps {
    isSelected: boolean;
}
export interface DrawingsToolbarIconWrapperStyledProps {
    preventIconFill?: boolean;
}
export declare const DrawingsToolbarContainerStyled: import("styled-components").StyledComponent<"div", any, DrawingsToolbarContainerStyledProps, never>;
export declare const DrawingsToolbarStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ToolbarTextStyled: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const ButtonIconStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
export declare const ButtonLockedIconStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
export declare const ButtonSettingsIconStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
export declare const ButtonDraggableStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
export declare const DrawingsToolbarIconWrapperStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/IconWrapper/IconWrapper.component").IconWrapperProps>, any, DrawingsToolbarIconWrapperStyledProps, never>;
