/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
interface ChartMovePaneContainerStyledProps {
    readonly x: number;
    readonly y: number;
    readonly isHovered: boolean;
}
export declare const ChartMovePaneContainerStyled: import("styled-components").StyledComponent<"div", any, ChartMovePaneContainerStyledProps, never>;
export declare const ChartMovePaneButtonStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
export {};
