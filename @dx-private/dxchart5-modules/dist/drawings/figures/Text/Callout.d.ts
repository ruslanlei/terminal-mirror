/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import DrawingsModel from '../../model/DrawingsModel';
import { ExtendedContext } from '../../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../../model/DrawingViewModel';
import { IndexValuePoint, PointEvent } from '../../model/PointEvent';
import { Vector } from '../../model/Vector';
import { BubbleFigureProperties } from './common';
import { AbstractFigure } from '../model/Figure';
import { ChartWithDrawings } from '../../DrawingsConfig';
import { ViewPoint } from '../../model/ViewPoint';
export interface CalloutProperties extends BubbleFigureProperties {
    textValue: string;
    showPrice?: boolean;
    showTime?: boolean;
    isTransparent?: boolean;
    showBorder?: boolean;
}
export declare class Callout extends AbstractFigure<CalloutProperties> {
    points: number;
    textToolPoint: Vector;
    isEditing: boolean;
    readonly type = "callout";
    constructor();
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: CalloutProperties, chartInstance: ChartWithDrawings): void;
    private getBubblePoints;
    customMoveFigureAction: (viewModel: DrawingViewModel, chartBootstrap: ChartWithDrawings, drawings: DrawingsModel, initial: IndexValuePoint, initialValues: IndexValuePoint[], point: PointEvent) => void;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    getClone: () => null;
}
