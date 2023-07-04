/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Option } from 'fp-ts/Option';
import { Instrument } from '../../model/instrument.model';
import { DrawingsDictionary } from '../../../config/localization/drawings';
import { DrawingType } from '../../model/drawing.model';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { IconsConfig } from '../../../config/icons/icons-config';
import { ToolbarPosition } from '../../view-models/drawing.view-model';
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
export interface DrawingSettingsToolbarProps {
    readonly drawing: Option<DrawingModel<DrawingType>>;
    readonly magnetMode: boolean;
    readonly setMagnetMode: (enabled: boolean, undoable: boolean) => void;
    readonly instrument: Option<Instrument>;
    readonly onDrawingChange: (model: DrawingModel<DrawingType>) => void;
    readonly toggleDrawingLocked: (drawing: DrawingModel<DrawingType>, locked: boolean) => void;
    readonly onRemove: (drawing: DrawingModel<DrawingType>) => void;
    readonly palette: string[];
    readonly isPopupOpened: boolean;
    readonly togglePopup: (isOpened: boolean) => void;
    readonly requestRestoreDefaults: () => void;
    readonly drawingsDict: DrawingsDictionary;
    readonly className?: string;
    readonly iconsConfig: IconsConfig;
    readonly onDrag: (position: ToolbarPosition) => void;
    readonly updateToolbarWidth: (width: number) => void;
    readonly position: ToolbarPosition;
    readonly bounds: Bounds;
    readonly toolbarWidth: number;
}
export declare const DrawingSettingsToolbar: React.MemoExoticComponent<(props: DrawingSettingsToolbarProps) => JSX.Element>;
export interface DrawingsSettingsToolbarShortcutsProps {
    drawingModel: DrawingModel<any>;
    onValueChange: (model: DrawingModel<DrawingType>) => void;
    palette: string[];
    drawingsDict: DrawingsDictionary;
}
