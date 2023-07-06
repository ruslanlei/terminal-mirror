/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Order, VisualOrderProps } from '../../../model/order.model';
export interface ProtectionOrderProps extends Readonly<Order>, Readonly<VisualOrderProps> {
    readonly className?: string;
    readonly onSelect?: (id: string) => void;
    readonly onDblClick?: (id: string) => void;
    readonly onClick?: (id: string) => void;
    readonly onDeselect?: (id: string) => void;
    readonly onClose?: (id: string) => void;
    readonly onDragStart?: (id: string) => void;
    readonly showPriceAsLabels?: boolean;
    readonly dmRef?: React.RefObject<HTMLDivElement>;
    readonly rightOffset: number;
    readonly isLineVisible?: boolean;
}
export interface ProtectionOrderAltProps extends Omit<ProtectionOrderProps, 'y'> {
}
export declare const ProtectionOrder: React.MemoExoticComponent<React.ForwardRefExoticComponent<ProtectionOrderProps & React.RefAttributes<HTMLDivElement>>>;
export declare const ProtectionOrderAlt: React.NamedExoticComponent<ProtectionOrderAltProps>;
