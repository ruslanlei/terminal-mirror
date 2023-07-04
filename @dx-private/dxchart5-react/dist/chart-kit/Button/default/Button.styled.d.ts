/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface CKButtonStyledProps {
    readonly isFlat?: boolean;
    readonly isLoading?: boolean;
    readonly isPrimary?: boolean;
    readonly isExtra?: boolean;
}
export declare const ButtonStyled: import("styled-components").StyledComponent<"button", any, CKButtonStyledProps, never>;
export declare const ButtonCaretIcon: import("styled-components").StyledComponent<"i", any, {}, never>;
