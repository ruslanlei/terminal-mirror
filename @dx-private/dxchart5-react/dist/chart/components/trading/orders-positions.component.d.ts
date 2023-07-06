/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { OrderRefHolder, OrdersAndPositionsContainerRefHolder, PositionRefHolder, TradingGroupRefHolder } from '../../dom-mutation-models/orders-and-positions.dom-mutation-model';
import { ChartReactSettings } from '../../model/chart.model';
import { LinkedOrderType, VisualOrder } from '../../model/order.model';
import { OnPBounds } from '../../view-models/trading/trading.view-model';
export interface OrderAndPositionsProps {
    readonly marketPrice: number;
    readonly yToPrice: (y: number) => number;
    readonly removeOrder: (id: string) => void;
    readonly selectOrder: (id: string) => void;
    readonly deselectOrder: () => void;
    readonly removePosition: (id: string) => void;
    readonly onOrderDragStart: () => void;
    readonly onOrderDrag: (id: string, y: number) => void;
    readonly onDragStartFromGroup: (id: string) => void;
    readonly updateOrderPosition: (id: string, y: number) => void;
    readonly createLinkedOrder: (type: LinkedOrderType, originalId: string) => void;
    readonly onGroupItemSelect: (id: string) => void;
    readonly onOrderDblClick: (id: string) => void;
    readonly onOrderClick: (id: string) => void;
    readonly resizer: {
        readonly visible: boolean;
        readonly maxOrderWidth: number;
        readonly initialRightOffset: number;
        readonly canvasHeight: number;
    };
    onResizerDrag: (deltaX: number) => void;
    onResizerHover: () => void;
    readonly orderHeight: number;
    readonly currency: string;
    readonly takeProfitStopLossEnabled: boolean;
    readonly showPriceAsLabels: boolean;
    readonly chartWidth: number;
    readonly yAxisWidth: number;
    readonly ordersBounds: OnPBounds;
    readonly domMutationProps: OrdersAndPositionsDMProps;
    readonly rightOffset: number;
    readonly tradingItemsWidths: Record<string, number>;
    readonly isDragging: boolean;
    readonly tradingSettings: ChartReactSettings['trading'];
    readonly editableOrders: VisualOrder[];
}
export interface OrdersAndPositionsDMProps {
    readonly ordersAndPositionsContainerRefHolder: OrdersAndPositionsContainerRefHolder;
    readonly orderRefHolders: OrderRefHolder[];
    readonly positionRefHolders: PositionRefHolder[];
    readonly groupRefHolders: TradingGroupRefHolder[];
}
export declare const OrderAndPositions: React.NamedExoticComponent<OrderAndPositionsProps>;
