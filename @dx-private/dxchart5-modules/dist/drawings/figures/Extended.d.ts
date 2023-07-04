/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure } from './model/Figure';
import { LineProperties } from '../DrawingsConfig';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
export interface ExtendedProperties {
    line: LineProperties;
}
export declare class Extended extends AbstractFigure<ExtendedProperties> {
    points: number;
    readonly type = "extended";
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: ExtendedProperties): void;
}
