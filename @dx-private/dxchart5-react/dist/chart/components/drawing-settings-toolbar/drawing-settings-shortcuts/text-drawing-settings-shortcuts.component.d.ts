/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DrawingFormType } from '../../drawing-popup/drawing-popup.component';
import { TextDrawingType } from '../../../model/drawing.model';
interface TextDrawingSettingsShortcutsProperties extends DrawingFormType<TextDrawingType> {
    readonly className?: string;
}
export declare const TextDrawingSettingsShortcuts: React.MemoExoticComponent<(props: TextDrawingSettingsShortcutsProperties) => JSX.Element>;
export {};
