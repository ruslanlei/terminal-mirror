/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DrawingFormType } from '../../drawing-popup/drawing-popup.component';
import { PlainDrawingType } from '../../../model/drawing.model';
import { LineStyle } from '../../../../chart-kit/LineStylePicker/LineStylePicker.component';
interface CommonDrawingShortcutsProperties extends DrawingFormType<PlainDrawingType> {
    readonly className?: string;
    readonly onColorChange: (color: string) => void;
    readonly onLinePickerChange: (line: LineStyle) => void;
}
export declare const CommonDrawingSettingsShortcuts: React.MemoExoticComponent<(props: CommonDrawingShortcutsProperties) => JSX.Element>;
export {};
