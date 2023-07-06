/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { VisualOrder, VisualPosition } from '../../../model/order.model';
import { ChartReactSettings } from '../../../model/chart.model';
export interface GroupOrderProps {
    readonly tradingItems: (VisualOrder | VisualPosition)[];
    readonly onSelect?: (id: string) => void;
    readonly onDblClick?: (id: string) => void;
    readonly onClick?: (id: string) => void;
    readonly onGroupOpen?: () => void;
    readonly disabled?: boolean;
    readonly removeOrder: (id: string) => void;
    readonly removePosition: (id: string) => void;
    readonly onDragStart: (id: string) => void;
    readonly dmRef: React.RefObject<HTMLDivElement>;
    readonly initialY: number;
    readonly marketPrice: number;
    readonly showPriceAsLabels?: boolean;
    readonly rightOffset: number;
    readonly halfOrderHeight: number;
    readonly tradingItemsWidths: Record<string, number>;
    readonly isDragging: boolean;
    readonly tradingSettings: ChartReactSettings['trading'];
    readonly editableOrders: VisualOrder[];
}
export declare const GroupOrder: React.NamedExoticComponent<GroupOrderProps>;
