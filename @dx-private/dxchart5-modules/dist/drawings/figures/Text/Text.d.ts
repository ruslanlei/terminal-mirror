/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
import { ExtendedContext } from '../../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../../model/DrawingViewModel';
import { Vector } from '../../model/Vector';
import { AbstractFigure } from '../model/Figure';
import { DrawingType } from '../../model/DrawingTypes';
import { ChartWithDrawings } from '../../DrawingsConfig';
export type GradientDirections = 'right' | 'down' | 'left' | 'top';
export interface TextLabels {
    textFill: string;
    textBg: string;
    textBgGradient?: {
        startColor: string;
        stopColor: string;
        direction?: GradientDirections;
    };
    borderRadius?: number;
    borderSize?: number;
    bgBorder?: string;
    shadowBlur?: number;
    shadowColor?: string;
    textStyle: {
        bold?: boolean;
        underline?: boolean;
        italic?: boolean;
    };
    backgroundOffsetWidth: number;
    backgroundOffsetHeight: number;
    availableBackgroundColors: string[];
    rtl?: boolean;
    lineHeight?: string;
}
export interface TextLabelsExtended extends TextLabels {
    textFontFamily?: string;
    textSize: string;
}
export interface TextProperties {
    hitTestLineOffset: number;
    text: TextLabelsExtended;
    textValue: string;
    isTransparent?: boolean;
    showBorder?: boolean;
}
export declare class Text extends AbstractFigure<TextProperties> {
    points: number;
    symbolsInLength: number;
    type: DrawingType;
    textToolPoint: Vector;
    textBlockBounds: Omit<Bounds, 'pageX' | 'pageY'> | undefined;
    isEditing: boolean;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: TextProperties, chartInstance: ChartWithDrawings): void;
    getClone: () => null;
}
