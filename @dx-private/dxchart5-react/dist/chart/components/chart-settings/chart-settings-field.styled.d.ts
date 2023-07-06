/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
interface ChartSettingsFieldContainerStyledProps {
    readonly disabled?: boolean;
    readonly subfield?: boolean;
    readonly align?: string;
}
interface ChartSettingsFieldLabelStyledProps {
    readonly align?: boolean;
    readonly hint?: boolean;
    readonly secondary?: boolean;
    readonly isDisabled?: boolean;
}
interface ChartSettingsFieldControlStyledProps {
    readonly controlsCount: number;
}
export declare const ChartSettingsFieldContainerStyled: import("styled-components").StyledComponent<"label", any, ChartSettingsFieldContainerStyledProps, never>;
export declare const ChartSettingsFieldLabelStyled: import("styled-components").StyledComponent<"span", any, ChartSettingsFieldLabelStyledProps, never>;
export declare const ChartSettingsFieldControlStyled: import("styled-components").StyledComponent<"span", any, ChartSettingsFieldControlStyledProps, never>;
export declare const ChartSettingsFieldHintStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
