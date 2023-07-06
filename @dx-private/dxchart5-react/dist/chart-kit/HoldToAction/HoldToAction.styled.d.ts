/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface CKAnimationWrapperProps {
    readonly longPressStarted: boolean;
    readonly delay: number;
}
export declare const HoldToActionText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const HoldToActionTextContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HoldToActionHideWrapper: import("styled-components").StyledComponent<"div", any, Omit<CKAnimationWrapperProps, "delay">, never>;
export declare const AnimationWrapper: import("styled-components").StyledComponent<"div", any, CKAnimationWrapperProps, never>;
export declare const HoldToActionContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
