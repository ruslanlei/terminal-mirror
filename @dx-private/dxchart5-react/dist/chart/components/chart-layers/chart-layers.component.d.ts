/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { LayerItem } from '../../model/chart-layers.model';
import { Localization } from '../../../config/localization/localization';
import { PopoverCoordinates } from '../../../chart-kit/Popover/Popover.model';
export interface ChartLayersProps {
    readonly updatePopoverCustomPosition?: (position: PopoverCoordinates) => void;
    readonly customPosition?: PopoverCoordinates;
    readonly layerItems: LayerItem[];
    readonly createGroup: (items: string[]) => void;
    readonly setItemVisible: (id: string, visible: boolean) => void;
    readonly setItemLocked: (id: string, lock: boolean) => void;
    readonly renameItem: (id: string, name: string) => void;
    readonly moveItemDnD: (fromIdx: number, toIdx: number) => void;
    readonly deleteItem: (id: string) => void;
    readonly isOpened: boolean;
    readonly setOpened: (value: boolean) => void;
    readonly localization: Localization;
}
export declare const ChartLayers: React.MemoExoticComponent<(props: ChartLayersProps) => JSX.Element>;
