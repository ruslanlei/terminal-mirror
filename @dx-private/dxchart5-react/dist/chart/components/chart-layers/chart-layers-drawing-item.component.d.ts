/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { CSSProperties, PropsWithChildren } from 'react';
import { DrawingLayerItem } from '../../model/chart-layers.model';
export interface ChartLayersDrawingItemProps {
    readonly drawing: DrawingLayerItem;
    readonly toggleVisibility: (id: string, visible: boolean) => void;
    readonly toggleLocked: (id: string, lock: boolean) => void;
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly onClickHandle: (selectedItems: string[] | ((selectedItems: string[]) => string[])) => void;
    readonly isSelected: boolean;
    readonly onChangeName: (id: string, name: string) => void;
}
export declare const ChartLayersDrawingItem: React.MemoExoticComponent<(props: PropsWithChildren<ChartLayersDrawingItemProps>) => JSX.Element>;
