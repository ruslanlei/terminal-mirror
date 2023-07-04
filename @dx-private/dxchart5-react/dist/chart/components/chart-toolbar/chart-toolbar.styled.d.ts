/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
interface ChartToolbarPopupsButtonsWrapperStyledProps {
    readonly width?: number | null;
}
interface ChartToolbarPopupsButtonsArrowStyledProps {
    readonly float: string;
}
export declare const ChartToolbarArea: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ChartToolbarLoadingIndicatorProps {
    readonly percentage: number;
}
export declare const ChartToolbarLoadingIndicatorStyled: import("styled-components").StyledComponent<"div", any, ChartToolbarLoadingIndicatorProps, never>;
export declare const ChartToolbarStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChartToolbarPopupsButtonsStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChartToolbarPopupsButtonsWrapperStyled: import("styled-components").StyledComponent<"div", any, ChartToolbarPopupsButtonsWrapperStyledProps, never>;
export declare const ChartToolbarPopupsButtonsTrackStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChartToolbarPopupsButtonsArrowStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, ChartToolbarPopupsButtonsArrowStyledProps, never>;
export declare const MultiChartSettingsButtonStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const InstrumentSelectorContainerWrapperStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
