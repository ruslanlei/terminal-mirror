/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DatePriceRange } from './DatePriceRange';
import { DrawingType } from '../model/DrawingTypes';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
export declare class PriceRange extends DatePriceRange {
    readonly type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
}
