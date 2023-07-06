/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { OrderProps } from './components/order.component';
interface PositionStyledProps extends OrderProps {
    readonly positive: boolean;
}
export declare const PositionStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<OrderProps & import("react").RefAttributes<HTMLDivElement>>>, any, PositionStyledProps, never>;
interface PositionSectionProps {
    readonly positive: boolean;
}
export declare const PositionSectionDelimiter: import("styled-components").StyledComponent<"div", any, import("./components/order.styled").OrderDelimiterStyledProps & PositionSectionProps, never>;
export declare const PositionSectionAltStyled: import("styled-components").StyledComponent<"div", any, PositionSectionProps, never>;
export {};
