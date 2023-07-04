/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const GroupOrderFakeOrder: import("styled-components").StyledComponent<"div", any, import("./components/order.styled").OrderContainerInnerStyledProps, never>;
export declare const GroupOrderFakeOrder2nd: import("styled-components").StyledComponent<"div", any, import("./components/order.styled").OrderContainerInnerStyledProps, never>;
export interface GroupOrderContainerProps {
    readonly initialY: number;
    readonly opened: boolean;
}
export declare const GroupOrderContainer: import("styled-components").StyledComponent<"div", any, GroupOrderContainerProps, never>;
export interface GroupOrderGroupContainerProps {
    readonly maxWidthInGroup: number;
}
export declare const GroupOrderGroupContainer: import("styled-components").StyledComponent<"div", any, GroupOrderGroupContainerProps, never>;
export declare const DraggableInner: import("styled-components").StyledComponent<"div", any, {}, never>;
