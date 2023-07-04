/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LineStyledOptionProps } from '../../../../view-models/trading/trading-functions';
export declare const BuyOrderLabelStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const SellOrderLabelStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const SideStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
interface LineStyledProps extends LineStyledOptionProps {
    readonly x: string;
    readonly y: number;
    readonly width: number;
}
export declare const LineStyled: import("styled-components").StyledComponent<"hr", any, LineStyledProps, never>;
export declare const OrderLineStyled: import("styled-components").StyledComponent<"hr", any, LineStyledProps, never>;
export declare const PositionLineStyled: import("styled-components").StyledComponent<"hr", any, LineStyledProps, never>;
export {};
