/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface OpacitySelectorStyledProps {
    startColor: string;
    endColor: string;
}
export interface SliderWrapperStyledProps {
    keyboardModeEnabled?: boolean;
}
export declare const SliderWrapperStyled: import("styled-components").StyledComponent<"div", any, SliderWrapperStyledProps, never>;
export declare const OpacitySelectorSliderStyled: import("styled-components").StyledComponent<"input", any, OpacitySelectorStyledProps, never>;
export declare const OpacitySelectorTransparentIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OpacitySelectorInputStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<import("../Input/Input.component").CKInputProps>, "id" | "value" | "children" | "error" | "type" | "key" | "min" | "max" | "name" | "pattern" | "className" | "placeholder" | "tabIndex" | "role" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "onKeyPress" | "onKeyUp" | "onClick" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onTouchCancel" | "onTouchEnd" | "onTouchMove" | "onTouchStart" | "onWheel" | "testId" | "onValueChange" | "ariaLabel" | "isDisabled" | "isReadOnly" | "autofocus" | "ariaDescribedby" | "externalLabel"> & import("react").RefAttributes<HTMLDivElement>>>, any, {}, never>;
export declare const OpacitySelectorInputUnitStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OpacitySelectorInputUnitWrapperStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
