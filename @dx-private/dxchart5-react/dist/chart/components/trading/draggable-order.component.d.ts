/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
import { OnPBounds } from '../../view-models/trading/trading.view-model';
export interface DraggableOrderProps {
    readonly id: string;
    readonly onDragStart: () => void;
    readonly onDrag: (id: string, y: number) => void;
    readonly onDragStop: (id: string, y: number) => void;
    readonly children: ReactNode;
    readonly halfOrderHeight: number;
    readonly disabled?: boolean;
    readonly bounds: OnPBounds;
    readonly dmRef: React.RefObject<HTMLDivElement>;
    readonly y: number;
    readonly rightOffset: number;
    readonly selected?: boolean;
}
export declare const DraggableOrder: React.NamedExoticComponent<DraggableOrderProps>;
