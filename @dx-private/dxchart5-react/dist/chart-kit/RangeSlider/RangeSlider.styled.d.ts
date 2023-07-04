/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
interface RangeSliderWrapperProps {
    readonly showLabels: boolean;
    readonly labels: {
        readonly first: string;
        readonly last: string;
    };
    readonly keyboardModeEnabled: boolean;
}
export declare const RangeSliderWrapper: import("styled-components").StyledComponent<"div", any, RangeSliderWrapperProps, never>;
interface RangeSliderStyledProps {
    readonly disabledLeftWidth?: number;
    readonly disabledRightWidth?: number;
    readonly disabledSectionsColor?: string;
}
export declare const RangeSliderStyled: import("styled-components").StyledComponent<"input", any, RangeSliderStyledProps, never>;
export declare const RangeSliderBreakpoints: import("styled-components").StyledComponent<"div", any, {}, never>;
interface RangeSliderBreakpointProps {
    readonly sectionWidth: number;
}
export declare const RangeSliderBreakpoint: import("styled-components").StyledComponent<"div", any, RangeSliderBreakpointProps, never>;
interface RangeSliderBreakpointDisabledProps {
    readonly disabledBreakpointColor?: string;
}
export declare const RangeSliderBreakpointDisabled: import("styled-components").StyledComponent<"div", any, RangeSliderBreakpointProps & RangeSliderBreakpointDisabledProps, never>;
export {};
