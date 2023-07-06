/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface ChartSettingsTabGeneralItemProps {
    keyboardModeEnabled?: boolean;
}
export interface ChartSettingsTabDividerProps {
    visible: boolean;
}
export declare const ChartSettingsTabGeneralItemStyled: import("styled-components").StyledComponent<"div", any, ChartSettingsTabGeneralItemProps, never>;
export declare const ChartSettingsTabGeneralItemLineStyled: import("styled-components").StyledComponent<"div", any, ChartSettingsTabGeneralItemProps, never>;
export declare const ChartSettingsTabAdaptivePopoverStyled: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../../../chart-kit/Popover/Popover.component").CKPopoverProps>>, any, {}, never>;
export declare const ChartSettingsTabCrosshairAnchorStyled: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../../../../chart-kit/Selectbox/SelectboxAnchor.component").CKSelectboxAnchorProps>, any, {}, never>;
export declare const ChartSettingsTabCrosshairDropdownMenuItemStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../../chart-kit/Menu/dropdown-menu/DropdownMenuItem.component").DropdownMenuItemProps>, any, {}, never>;
export declare const ChartSettingsTabCrosshairDropdownMenuStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../../chart-kit/Menu/Menu.component").CKMenuProps>, any, {}, never>;
export declare const ChartSettingsTabMenuSelectboxStyled: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../../../../chart-kit/Selectbox/Selectbox.component").CKSelectboxProps>, any, {}, never>;
export declare const ChartSettingsTabCrosshairContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChartSettingsTabPriceTypeContainerStyled: import("styled-components").StyledComponent<"div", any, ChartSettingsTabGeneralItemProps, never>;
export declare const ChartSettingsTabDivider: import("styled-components").StyledComponent<"hr", any, ChartSettingsTabDividerProps, never>;
export declare const ChartSettingsResetButton: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../../../../chart-kit/Button/default/Button.component").CKButtonProps>, any, {}, never>;
export declare const ChartSettingsTabForm: import("styled-components").StyledComponent<"form", any, {}, never>;
