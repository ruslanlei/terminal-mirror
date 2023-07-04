/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DrawingGroup, DrawingType } from '../../model/drawing.model';
import { IconsPool, IconsPoolNames } from '../../../config/icons-pool';
import { ButtonsState, SidebarFooterButtonType } from './chart-sidebar.model';
export interface DrawingSidebarProps {
    readonly drawingGroups: DrawingGroup[];
    readonly onSidebarToggle: (isExpanded: boolean) => void;
    readonly onButtonClick: (type: SidebarFooterButtonType) => void;
    readonly onDrawingClick: (type: DrawingType) => void;
    readonly buttonsState: ButtonsState;
    readonly isSidebarExpanded: boolean;
    readonly onFavorite: (name: DrawingType) => void;
    readonly onUnFavorite: (name: DrawingType) => void;
    readonly favoriteDrawings: Array<DrawingType>;
    readonly activeDrawingType: DrawingType | string;
    readonly icons: IconsPool;
    readonly startNewIconDrawing: (iconType: IconsPoolNames) => void;
}
export declare const DrawingsSidebar: React.MemoExoticComponent<(props: DrawingSidebarProps) => JSX.Element>;
