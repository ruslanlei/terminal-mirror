/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { ChartBaseElement } from '@dx-private/dxchart5-light/dist/chart/model/chart-base-element';
import { CanvasInputListenerComponent } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import DrawingsModel from '../model/DrawingsModel';
export declare class DrawingsEventListeners extends ChartBaseElement {
    private drawingsModel;
    private canvasInputListener;
    private canvasBoundsContainer;
    constructor(drawingsModel: DrawingsModel, canvasInputListener: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer);
    protected doActivate(): void;
    resolvePoint(): import("../model/PointEvent").PointEvent | undefined;
    private keyDownHandler;
    enableUserControls(): void;
    disableUserControls(): void;
}
