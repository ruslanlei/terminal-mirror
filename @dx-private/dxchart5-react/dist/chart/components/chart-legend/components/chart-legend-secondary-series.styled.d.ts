/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export declare const ChartLegendItemContainerExtendStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ChartLegendSecondarySeriesItemControlsStyledProps {
    keyboardModeEnabled: boolean;
}
export declare const ChartLegendSecondarySeriesItemControlsStyled: import("styled-components").StyledComponent<"div", any, ChartLegendSecondarySeriesItemControlsStyledProps, never>;
interface ChartLegendSecondarySeriesItemValueStyledProps {
    keyboardModeEnabled: boolean;
}
export declare const ChartLegendSecondarySeriesItemValueStyled: import("styled-components").StyledComponent<"div", any, import("./chart-legend-item.styled").ChartLegendItemValueProps & ChartLegendSecondarySeriesItemValueStyledProps, never>;
interface ChartLegendSecondarySeriesItemContainerStyledProps {
    isPopoverOpened: boolean;
}
export declare const ChartLegendSecondarySeriesItemContainerStyled: import("styled-components").StyledComponent<"div", any, ChartLegendSecondarySeriesItemContainerStyledProps, never>;
export declare const ChartLegendSettingsButtonStyled: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../../../../chart-kit/Button/default/Button.component").CKButtonProps>, any, {}, never>;
export declare const ChartLegendDeleteButtonStyled: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../../../../chart-kit/Button/default/Button.component").CKButtonProps>, any, {}, never>;
export {};
