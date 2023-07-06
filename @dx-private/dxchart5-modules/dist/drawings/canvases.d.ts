/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ExtendedContext, ExtendedHitTestContext } from './components/extended_context/ExtendedContext';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
import EventBus from '@dx-private/dxchart5-light/dist/chart/events/event-bus';
import { ChartWithDrawings } from './DrawingsConfig';
export default class Canvases {
    dynamicCanvasModel: CanvasModel;
    staticCanvasModel: CanvasModel;
    hitTestCanvasModel: CanvasModel;
    dynamicContext: ExtendedContext;
    staticContext: ExtendedContext;
    hitTestContext: ExtendedHitTestContext;
    constructor(eventBus: EventBus, staticCanvas: HTMLCanvasElement, dynamicCanvas: HTMLCanvasElement, chartBootstrap: ChartWithDrawings);
}
