/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Pixel, Price, Timestamp } from '@dx-private/dxchart5-light/dist/chart/model/scaling/viewport.model';
import { ViewPoint } from './ViewPoint';
export declare class DateValuePoint {
    timestamp: Timestamp;
    value: Price;
    constructor(timestamp: Timestamp, value: Price);
}
export declare class IndexValuePoint {
    index: number;
    value: Price;
    hidden: boolean;
    constructor(index: number, value: Price, hidden: boolean);
}
interface MagnetObject {
    y: number;
    value: number;
}
type Magnet = boolean | MagnetObject;
export declare class PointEvent {
    magnet: Magnet;
    keyPoint: DateValuePoint;
    cachedPoint: IndexValuePoint;
    viewPoint: ViewPoint;
    constructor(x: Pixel, y: Pixel, idx: number, value: Price, timestamp: number, magnet?: Magnet);
    stickyPoint(): PointEvent | undefined;
}
export {};
