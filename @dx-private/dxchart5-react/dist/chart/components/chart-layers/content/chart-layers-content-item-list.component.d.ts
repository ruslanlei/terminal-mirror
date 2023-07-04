/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { LayerItem } from '../../../model/chart-layers.model';
export interface ChartLayersItemListProps {
    readonly layerItems: LayerItem[];
    readonly toggleVisibility: (id: string, visible: boolean) => void;
    readonly toggleLocked: (id: string, lock: boolean) => void;
    readonly renameItem: (id: string, name: string) => void;
    readonly moveItemDnD: (fromIdx: number, toIdx: number) => void;
    readonly deleteItem: (id: string) => void;
    readonly selectedItems: string[];
    readonly onClickHandle: (selectedItems: string[] | ((selectedItems: string[]) => string[])) => void;
}
export declare const ChartLayersItemList: React.NamedExoticComponent<ChartLayersItemListProps>;
