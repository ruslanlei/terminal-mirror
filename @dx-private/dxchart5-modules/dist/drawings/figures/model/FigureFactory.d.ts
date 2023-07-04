/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure } from './Figure';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { PropertiesByType } from './PropertiesByType';
import { DrawingType } from '../../model/DrawingTypes';
export declare function factoryFigure<T extends DrawingType>(type: DrawingType, keyPointsLength: number, properties: PropertiesByType[T], formatterProvider?: () => DateTimeFormatter): AbstractFigure<unknown>;
