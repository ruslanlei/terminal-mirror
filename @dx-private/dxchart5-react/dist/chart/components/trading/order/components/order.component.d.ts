/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
import { VisualOrderProps, OrderSide } from '../../../../model/order.model';
export interface OrderProps extends Readonly<VisualOrderProps> {
    readonly side: OrderSide;
    readonly className?: string;
    readonly children?: ReactNode;
    readonly absoluteChildren?: ReactNode;
    readonly onClick?: () => void;
    readonly onDblClick?: () => void;
    readonly onSelect?: () => void;
    readonly onClose?: () => void;
    readonly onDeselect?: () => void;
    readonly withDeselectBtn?: boolean;
}
export declare const Order: React.MemoExoticComponent<React.ForwardRefExoticComponent<OrderProps & React.RefAttributes<HTMLDivElement>>>;
