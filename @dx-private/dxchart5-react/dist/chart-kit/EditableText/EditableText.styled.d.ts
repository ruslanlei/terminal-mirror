/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface EditableTextStyledProps {
    maxWidth?: string;
    disabled?: boolean;
    keyboardMode?: boolean;
}
export declare const EditableTextFieldStyled: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const EditableTextStyled: import("styled-components").StyledComponent<"div", any, EditableTextStyledProps, never>;
