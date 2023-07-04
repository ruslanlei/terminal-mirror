/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DrawingType } from '../../../model/drawing.model';
export interface DrawingsSidebarDrawingProps {
    readonly type: DrawingType;
    readonly active?: boolean;
    readonly expanded: boolean;
    readonly favorite?: boolean;
    readonly showFavoritesOnHoverOnly?: boolean;
    readonly onSelect: (type: DrawingType) => void;
    readonly onAddToFavorites?: (type: DrawingType) => void;
    readonly onRemoveFromFavorites?: (type: DrawingType) => void;
    readonly onMouseEnter?: (e: React.MouseEvent) => void;
}
export declare const DrawingsSidebarDrawing: React.NamedExoticComponent<DrawingsSidebarDrawingProps>;
