/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartBaseElement } from '@dx-private/dxchart5-light/dist/chart/model/chart-base-element';
import EventBus from '@dx-private/dxchart5-light/dist/chart/events/event-bus';
import { PLChartModel } from './PLChartModel';
/**
 * Maps EVENT_CROSS to EVENT_HOVER specific for PL chart.
 * Contains PL lines with id, name and PL value.
 */
export declare class PLHoverProducer extends ChartBaseElement {
    private plChartModel;
    constructor(eventBus: EventBus, plChartModel: PLChartModel);
    private findClosestPl;
}
export interface PLHover {
    x: number;
    y: number;
    xValue: number;
    yValue: number;
    lines: Array<PLHoverLine>;
}
interface PLHoverLine {
    id: unknown;
    name: unknown;
    pl: unknown;
}
export {};
