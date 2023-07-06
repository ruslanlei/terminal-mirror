/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, DateValuePoint } from './model/Figure';
import { Vector } from '../model/Vector';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { LineProperties } from '../DrawingsConfig';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { DrawingModel } from '../model/DrawingModel';
import { IndexValuePoint, PointEvent } from '../model/PointEvent';
import DrawingsModel from '../model/DrawingsModel';
import { DrawingType } from '../model/DrawingTypes';
interface TrendDrawingModel extends Pick<DrawingModel<'trend'>, 'type' | 'keyPoints' | 'fixedPoints' | 'cachedPoints'> {
}
interface TrendFigureLineProperties extends LineProperties {
    opacity: number;
}
export interface VectorType {
    x: number;
    y: number;
}
export interface DateValueType extends VectorType, DateValuePoint {
}
export interface TrendProperties {
    drawingArea: TrendFigureLineProperties;
    drawingMode: 'both' | 'lines' | 'boxes';
    up: TrendFigureLineProperties;
    down: TrendFigureLineProperties;
    style: {
        fillBackground: boolean;
    };
}
export declare class Trend extends AbstractFigure<TrendProperties> implements TrendDrawingModel {
    points: number;
    type: "trend";
    fixedPoints: number;
    cachedPoints: IndexValuePoint[];
    keyPoints: DateValuePoint[];
    constructor(keyPointsLength: number);
    pointConstraint: (point: PointEvent, model: DrawingViewModel, bootstrap: ChartBootstrap) => boolean;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: TrendProperties, chartBootstrap: ChartBootstrap): void;
    constraint: (points: Vector[], changedIndex: number, chartBootstrap: ChartBootstrap) => Vector[];
    beforeCommit: (drawingViewModel: DrawingViewModel, drawings: DrawingsModel) => boolean;
    isDisallowed: (model: DrawingModel<DrawingType>, pointEvent: PointEvent) => boolean;
}
export {};
