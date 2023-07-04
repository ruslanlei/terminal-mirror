/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps } from './model/Figure';
import { DrawingType } from '../model/DrawingTypes';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { DrawingModel } from '../model/DrawingModel';
import { Vector } from '../model/Vector';
export interface VerticalArrowProperties extends Pick<CommonFigureProps, 'line'> {
    hitTestLineOffset: number;
    headSideWidth: number;
    headSideHeight: number;
    height: number;
    borderWidth: number;
    color: string;
    borderColor?: string;
}
export declare function drawVerticalArrowWithBorder<T extends DrawingType>(model: DrawingModel<T>, ctx: ExtendedContext, points: Vector[], properties: VerticalArrowProperties, arrowUp: boolean): void;
export declare class VerticalArrowUp extends AbstractFigure<VerticalArrowProperties> {
    points: number;
    readonly type = "vertical_arrow_up";
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: VerticalArrowProperties): void;
}
export declare const drawVerticalArrowUp: (type: DrawingType, viewModel: DrawingViewModel, ctx: ExtendedContext, properties: VerticalArrowProperties) => void;
