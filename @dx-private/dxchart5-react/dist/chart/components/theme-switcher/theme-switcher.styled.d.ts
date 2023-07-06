/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
interface ThemeSwitcherItemProps {
    readonly active: boolean;
}
export declare const ThemeSwitcherMenuStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ThemeSwitcherItemIconWrapperStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/IconWrapper/IconWrapper.component").IconWrapperProps>, any, {}, never>;
export declare const ThemeSwitcherItemTextStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const ThemeSwitcherItemStyled: import("styled-components").StyledComponent<"div", any, ThemeSwitcherItemProps, never>;
export {};
