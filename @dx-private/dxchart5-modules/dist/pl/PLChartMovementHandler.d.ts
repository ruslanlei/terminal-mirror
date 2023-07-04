/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasInputListenerComponent } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import { ChartBaseElement } from '@dx-private/dxchart5-light/dist/chart/model/chart-base-element';
import { PLChartModel } from './PLChartModel';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
/**
 * Handles PL chart movement events.
 */
export declare class PLChartMovementHandler extends ChartBaseElement {
    private canvasInputListener;
    private plChartModel;
    private canvasModel;
    constructor(canvasInputListener: CanvasInputListenerComponent, plChartModel: PLChartModel, canvasModel: CanvasModel);
    protected doActivate(): void;
    moveSection(delta: number): void;
    moveStep(delta: number): void;
    zoomOut(layerX: number): void;
    zoomIn(layerX: number): void;
    private zooming;
    get rightBound(): number;
    get range(): number;
}
