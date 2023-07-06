/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure } from './model/Figure';
import { LineProperties } from '../DrawingsConfig';
import { Vector } from '../model/Vector';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { DrawingType } from '../model/DrawingTypes';
export interface TrendChannelProperties {
    hitTestLineOffset: number;
    line: LineProperties;
    style: {
        extendLeft: boolean;
        extendRight: boolean;
        fillBackground: boolean;
        radioButtonMode: boolean;
    };
}
export declare class TrendChannel extends AbstractFigure<TrendChannelProperties> {
    points: number;
    type: DrawingType;
    hidden?: {
        readonly height: number;
    };
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: TrendChannelProperties): void;
    updateHiddenProps: (points: Vector[]) => void;
    constraint: (points: Vector[], changedIndex: number) => Vector[];
    private updateHeightByPoints;
}
