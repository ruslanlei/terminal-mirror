/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { FC } from 'react';
import { LineDash, LineWidth } from '../../chart/model/drawing.model';
import { CKLineStyleSquareAnchorProps } from './anchor/square/LineStyleSquareAnchor.component';
import { ControlProps } from '../Control/Control';
export interface LineStyle {
    lineWidth: LineWidth;
    lineDash: LineDash;
}
export interface CKLineStylePickerProps extends ControlProps<LineStyle> {
    readonly Anchor?: FC<CKLineStyleSquareAnchorProps>;
    readonly parentEventTarget?: HTMLElement;
    readonly isDisabled?: boolean;
}
export declare const LineStylePicker: React.NamedExoticComponent<CKLineStylePickerProps>;
