/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { MultiChartLayoutType } from '../../model/multichart.model';
interface MultichartSettingsLayoutSelectorItemStyledProps {
    readonly layout: MultiChartLayoutType;
    readonly active?: boolean;
}
export declare const MultichartSettingsContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MultichartSettingsSectionStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MultichartSettingsHeaderStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MultichartSettingsHeaderRightStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MultichartSettingsLayoutSelectorStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MultichartSettingsOptionListStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MultichartSettingsOptionStyled: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const MultichartSettingsOptionCheckIconStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const MultichartSettingsOptionTextStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const MultichartSettingsLayoutSelectorItemStyled: import("styled-components").StyledComponent<"button", any, MultichartSettingsLayoutSelectorItemStyledProps, never>;
export {};
