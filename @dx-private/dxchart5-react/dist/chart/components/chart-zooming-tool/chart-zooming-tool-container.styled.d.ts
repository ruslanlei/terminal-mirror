/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
interface ZoomingToolContainerProps {
    readonly isMobile: boolean;
    readonly marginBottom: number;
    readonly isVisible: boolean;
}
export declare const ZoomingToolContainerStyled: import("styled-components").StyledComponent<"div", any, ZoomingToolContainerProps, never>;
export declare const ZoomingToolZoomInStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
export declare const ZoomingToolZoomOutStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
export {};
