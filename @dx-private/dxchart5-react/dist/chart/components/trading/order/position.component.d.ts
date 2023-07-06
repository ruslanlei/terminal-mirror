/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Position as PositionModel, VisualOrderProps } from '../../../model/order.model';
export interface PositionProps extends Readonly<PositionModel>, Readonly<VisualOrderProps> {
    readonly onDeselect?: (id: string) => void;
    readonly onClose?: (id: string) => void;
    readonly rightOffset: number;
    readonly halfOrderHeight: number;
    readonly isLineVisible?: boolean;
}
export interface PositionPropsAlt extends Omit<PositionProps, 'y'> {
}
export declare const Position: React.MemoExoticComponent<React.ForwardRefExoticComponent<PositionProps & React.RefAttributes<HTMLDivElement>>>;
export declare const PositionAlt: React.NamedExoticComponent<PositionPropsAlt>;
