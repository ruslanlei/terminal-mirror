/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
interface RightOffsetResizerContainerProps {
    right: number;
    isVisible: boolean;
}
export declare const RightOffsetResizerContainerStyled: import("styled-components").StyledComponent<"div", any, RightOffsetResizerContainerProps, never>;
export declare const RightOffsetResizerStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../chart-kit/Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
interface RightOffsetHighlightZoneProps {
    readonly width: number;
    readonly height: number;
}
export declare const RightOffsetHighlightZone: import("styled-components").StyledComponent<"div", any, RightOffsetHighlightZoneProps, never>;
export {};
