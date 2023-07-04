/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
interface ChartLayersCommonItemStyledProps {
    isSelected: boolean;
    isHidden: boolean;
}
export declare const ChartLayersCommonItemStyled: import("styled-components").StyledComponent<"div", any, ChartLayersCommonItemStyledProps, never>;
export declare const ChartLayersCommonItemContentStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ChartLayersCommonItemButtonStyledProps {
    active: boolean;
}
export declare const ChartLayersCommonItemControlsStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChartLayersCommonItemButtonStyled: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../../../chart-kit/Menu/action-button/MenuItemActionButton.component").MenuItemActionButtonProps>, any, ChartLayersCommonItemButtonStyledProps, never>;
export {};
