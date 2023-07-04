/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { YAxisAlign } from '@dx-private/dxchart5-light/dist/chart/chart.config';
interface OrderEntryContainerProps {
    readonly align: YAxisAlign;
    readonly padding: number;
}
export declare const OrderEntryContainerStyled: import("styled-components").StyledComponent<"div", any, OrderEntryContainerProps, never>;
export declare const OrderEntryBtnContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
interface OrderEntryAnimatedContainerProps {
    align: YAxisAlign;
    padding: number;
}
export declare const OrderEntryAnimatedContainer: import("styled-components").StyledComponent<"div", any, OrderEntryAnimatedContainerProps, never>;
export {};
