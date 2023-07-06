/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DrawingType } from '../../model/drawing.model';
export interface DrawingsSidebarFavoriteDrawingsToolbarProps {
    readonly favoriteDrawings: Array<DrawingType>;
    readonly expanded: boolean;
    readonly onSelectDrawing: (type: DrawingType) => void;
    readonly checkIfDrawingActive: (type: DrawingType) => boolean;
    readonly onMouseEnter?: (e: React.MouseEvent) => void;
}
export declare const DrawingsSidebarFavoriteDrawingsToolbar: React.NamedExoticComponent<DrawingsSidebarFavoriteDrawingsToolbarProps>;
