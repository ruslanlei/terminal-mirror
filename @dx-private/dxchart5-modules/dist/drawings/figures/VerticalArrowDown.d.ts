/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { VerticalArrowProperties } from './VerticalArrowUp';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { AbstractFigure } from './model/Figure';
import { DrawingType } from '../model/DrawingTypes';
export declare class VerticalArrowDown extends AbstractFigure<VerticalArrowProperties> {
    points: number;
    readonly type: DrawingType;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: VerticalArrowProperties): void;
}
