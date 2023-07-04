/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { LinkedOrderType, Order, VisualOrderProps } from '../../../model/order.model';
export interface RegularOrderProps extends Readonly<Order>, Readonly<VisualOrderProps> {
    readonly className?: string;
    readonly onSelect?: (id: string) => void;
    readonly onDblClick?: (id: string) => void;
    readonly onClick?: (id: string) => void;
    readonly onDeselect?: (id: string) => void;
    readonly onClose?: (id: string) => void;
    readonly onDragStart?: (id: string) => void;
    readonly createLinkedOrder?: (type: LinkedOrderType, originalId: string) => void;
    readonly takeProfitStopLossEnabled?: boolean;
    readonly showPriceAsLabels?: boolean;
    readonly dmRef?: React.RefObject<HTMLDivElement>;
    readonly rightOffset: number;
    readonly isLineVisible: boolean;
}
export interface RegularOrderAltProps extends Omit<RegularOrderProps, 'createLinkedOrder'> {
    readonly marketPrice: number;
}
export declare const RegularOrder: React.MemoExoticComponent<React.ForwardRefExoticComponent<RegularOrderProps & React.RefAttributes<HTMLDivElement>>>;
export declare const RegularOrderAlt: React.NamedExoticComponent<RegularOrderAltProps>;
