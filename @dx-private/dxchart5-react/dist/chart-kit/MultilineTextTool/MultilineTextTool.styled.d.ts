/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface MultilineTextToolContainerStyledProps {
    background: string;
}
export declare const MultilineTextToolContainerStyled: import("styled-components").StyledComponent<"div", any, MultilineTextToolContainerStyledProps, never>;
interface MultilineTextToolTextareaStyledProps {
    readonly fontSize: number;
    readonly color: string;
    readonly lineheight: number;
    readonly width: number;
    readonly height: number;
}
export declare const MultilineTextToolTextareaStyled: import("styled-components").StyledComponent<"textarea", any, MultilineTextToolTextareaStyledProps, never>;
export {};
