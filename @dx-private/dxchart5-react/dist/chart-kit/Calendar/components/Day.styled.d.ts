/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface DayWrapperProps {
    readonly disabled: boolean;
}
export declare const DayWrapperStyled: import("styled-components").StyledComponent<"div", any, DayWrapperProps, never>;
export interface DayButtonProps {
    readonly isCurrent?: boolean;
    readonly isSelected?: boolean;
    readonly isHidden?: boolean;
}
export declare const CalendarDayStyled: import("styled-components").StyledComponent<"div", any, DayButtonProps, never>;
export declare const CalendarDayButtonStyled: import("styled-components").StyledComponent<"div", any, DayButtonProps, never>;
