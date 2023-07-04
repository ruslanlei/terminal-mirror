/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface CKInputContainerStyledProps {
    readonly isFocused?: boolean;
    readonly isDisabled?: boolean;
    readonly isReadOnly?: boolean;
    readonly isHasError?: boolean;
    readonly keyboardModeEnabled: boolean;
}
export declare const InputStyled: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const InputContainerStyled: import("styled-components").StyledComponent<"div", any, CKInputContainerStyledProps, never>;
export declare const InputLabelStyled: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const InputErrorStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
