/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface SectionProps {
    readonly isActive: boolean;
}
export declare const SectionStyled: import("styled-components").StyledComponent<"span", any, SectionProps, never>;
export declare const SeparatorStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const DateInputContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DateSteppableInputStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<import("../SteppableInput/SteppableInput.component").CKSteppableInputProps>, "children" | "error" | "key" | "className" | "tabIndex" | "onFocus" | "onBlur" | "onKeyDown" | "onClick" | "onMouseEnter" | "onMouseLeave" | "isDisabled" | "onClear" | "isIncrementButtonDisabled" | "isDecrementButtonDisabled" | "onIncrement" | "onDecrement" | "incrementIcon" | "decrementIcon" | "clearIcon" | "Input" | "ButtonIcon" | "ClearButtonIcon" | "forceFocusBtn"> & import("react").RefAttributes<HTMLDivElement>>>, any, {}, never>;
export declare const DateInputContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DateInputStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DateInputButtonIcon: import("styled-components").StyledComponent<import("react").FC<import("../Button/ButtonIcon.component").CKButtonIconProps>, any, {}, never>;
