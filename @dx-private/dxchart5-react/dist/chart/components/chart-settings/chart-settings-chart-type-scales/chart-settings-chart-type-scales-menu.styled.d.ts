/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { CKMenuItemProps } from '../../../../chart-kit/Menu/MenuItem.component';
interface ChartSettingsTabScalesMenuItemStyledProps extends CKMenuItemProps {
    readonly disabled?: boolean;
}
interface ChartSettingsTabScaleArrowStyledProps {
    readonly isOpened: boolean;
}
export interface ChartSettingsTabGeneralItemProps {
    keyboardModeEnabled?: boolean;
}
export declare const ChartSettingsTabScalesStyled: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../../../chart-kit/Popover/Popover.component").CKPopoverProps>>, any, {}, never>;
export declare const ChartSettingsTabScalesMainSectionStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChartSettingsTabScalesDivider: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChartSettingsScalesYAxisSideTitleStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChartSettingsScalesTabItemStyled: import("styled-components").StyledComponent<(<T extends string | number>(props: import("../../../../chart-kit/ButtonsRadioGroup/ButtonsRadioGroup.component").ButtonsRadioGroupProps<T>) => JSX.Element), any, {}, never>;
export declare const ChartSettingsTabScalesArrowStyled: import("styled-components").StyledComponent<"div", any, ChartSettingsTabScaleArrowStyledProps, never>;
export declare const ChartFormFieldsetGroupItemGeneral: import("styled-components").StyledComponent<"div", any, ChartSettingsTabGeneralItemProps, never>;
export declare const ChartSettingsTabScalesFieldsetGroupItem: import("styled-components").StyledComponent<"div", any, ChartSettingsTabGeneralItemProps, never>;
export declare const ChartSettingsTabScalesLinesAndlabelsItemStyled: import("styled-components").StyledComponent<"div", any, ChartSettingsTabGeneralItemProps, never>;
export declare const ChartSettingsTabScalesMenuItemStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<CKMenuItemProps & import("react").RefAttributes<HTMLLIElement>>>, any, ChartSettingsTabScalesMenuItemStyledProps, never>;
interface ChartSettingsTabScalesLabelsAndLinesAnchorProps {
    readonly bottomOffset: number;
}
export declare const ChartSettingsTabScalesLabelsAndLinesAnchor: import("styled-components").StyledComponent<"div", any, ChartSettingsTabScalesLabelsAndLinesAnchorProps, never>;
interface ChartSettingsFitFieldProps {
    readonly disabledStyles: boolean;
}
export declare const ChartSettingsFitField: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../chart-settings-field.component").ChartSettingsFieldProps>, any, ChartSettingsFitFieldProps, never>;
export {};
