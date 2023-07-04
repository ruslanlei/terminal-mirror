/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { LayerItem } from '../../../model/chart-layers.model';
interface ChartLayersDraggableItemProps {
    readonly item: LayerItem;
    readonly index: number;
    readonly portal: HTMLElement;
    readonly items: LayerItem[];
    readonly dragStyles: React.CSSProperties | null;
}
export declare const ChartLayersDraggableItem: React.NamedExoticComponent<React.PropsWithChildren<ChartLayersDraggableItemProps>>;
export {};
