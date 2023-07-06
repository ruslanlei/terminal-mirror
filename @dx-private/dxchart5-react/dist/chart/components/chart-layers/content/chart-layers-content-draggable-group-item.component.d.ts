/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DraggableLocation } from 'react-beautiful-dnd';
import { LayerItem, LayerItemsGroup } from '../../../model/chart-layers.model';
interface ChartLayersContentDraggableGroupItemProps {
    readonly items: LayerItem[];
    readonly item: LayerItemsGroup;
    readonly toggleVisibility: (id: string, visible: boolean) => void;
    readonly toggleLocked: (id: string, lock: boolean) => void;
    readonly onChangeName: (id: string, name: string) => void;
    readonly isSelected: boolean;
    readonly onClickHandle: (selectedItems: string[] | ((selectedItems: string[]) => string[])) => void;
    readonly currentDestinationElement: DraggableLocation | null;
    readonly portal: HTMLElement;
    readonly dragStyles: React.CSSProperties | null;
}
export declare const ChartLayersContentDraggableGroupItem: React.NamedExoticComponent<ChartLayersContentDraggableGroupItemProps>;
export {};
