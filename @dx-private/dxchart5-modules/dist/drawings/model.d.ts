/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DateValuePoint, IndexValuePoint } from './model/PointEvent';
import { DrawingModel } from './model/DrawingModel';
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { DrawingType } from './model/DrawingTypes';
import { ViewPoint } from './model/ViewPoint';
export declare function cacheIndexes<T extends DrawingType>(point: DateValuePoint, drawingModel: DrawingModel<T>, chartModel: ChartModel): IndexValuePoint;
export declare function transformToView(chartModel: ChartModel, point: IndexValuePoint): ViewPoint;
