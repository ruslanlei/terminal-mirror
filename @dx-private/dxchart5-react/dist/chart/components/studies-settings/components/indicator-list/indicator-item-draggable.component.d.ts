/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
export type IndicatorItemType = 'available' | 'added';
interface IndicatorItemDraggableProps {
    readonly provided: DraggableProvided;
    readonly snapshot: DraggableStateSnapshot;
    readonly portal: HTMLElement;
    readonly children: React.ReactNode;
    readonly transform?: boolean;
    readonly draggable?: boolean;
    readonly onKeyDown?: (event: React.KeyboardEvent<HTMLLIElement>) => void;
    readonly focusIn?: () => any;
    readonly focusOut?: () => any;
    readonly ariaDescribedBy?: string;
    readonly testId?: string;
}
export declare const IndicatorItemDraggable: React.NamedExoticComponent<IndicatorItemDraggableProps>;
export {};
