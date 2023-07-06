/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { CSSProperties } from 'react';
import { DraggableLocation } from 'react-beautiful-dnd';
import { DrawingLayerItem, LayerItem } from '../../../model/chart-layers.model';
interface ChartLayersContentDraggableDrawingItemProps {
    readonly items: LayerItem[];
    readonly item: DrawingLayerItem;
    readonly toggleVisibility: (id: string, visible: boolean) => void;
    readonly toggleLocked: (id: string, lock: boolean) => void;
    readonly onChangeName: (id: string, name: string) => void;
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly onClickHandle: (selectedItems: string[] | ((selectedItems: string[]) => string[])) => void;
    readonly isSelected: boolean;
    readonly currentDestinationElement: DraggableLocation | null;
    readonly portal: HTMLElement;
    readonly dragStyles: React.CSSProperties | null;
}
export declare const ChartLayersContentDraggableDrawingItem: React.NamedExoticComponent<ChartLayersContentDraggableDrawingItemProps>;
export {};
