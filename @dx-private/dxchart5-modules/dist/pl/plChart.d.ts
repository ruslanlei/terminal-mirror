/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { ValidatedChartElements } from '@dx-private/dxchart5-light/dist/chart/canvas/chart-elements';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
import { DrawingManager } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import EventBus from '@dx-private/dxchart5-light/dist/chart/events/event-bus';
import { CanvasInputListenerComponent } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import { TimeZoneModel } from '@dx-private/dxchart5-light/dist/chart/model/time-zone.model';
import { FullPLChartConfig, PLChartConfig } from './PLChartConfig';
import { PLChartModel } from './PLChartModel';
import { Unsubscriber } from '@dx-private/dxchart5-light/dist/chart/utils/function.utils';
interface PlLineValue {
    pl: number;
    price: number;
}
export interface PlModelLine {
    id: string;
    name: string;
    type: string;
    points: Array<PlLineValue>;
}
export interface PlModel {
    price: number;
    maxXConstraint: number;
    plPrecision: number;
    precision: number;
    plFormatter: (value: number) => string;
    lines: Array<PlModelLine>;
    priceFormatter: (price: number) => string;
}
/**
 * @doc-tags pl-chart
 */
export default class PlChart {
    bus: EventBus;
    config: FullPLChartConfig;
    components: Array<any>;
    canvasModel: CanvasModel;
    canvasBoundsContainer: CanvasBoundsContainer;
    drawingManager: DrawingManager;
    elements: ValidatedChartElements;
    parentElement: HTMLElement;
    plChartModel: PLChartModel;
    timeZoneModel: TimeZoneModel;
    canvasInputListener: CanvasInputListenerComponent;
    canvasModels: CanvasModel[];
    constructor(element: HTMLElement, localConfig?: PLChartConfig);
    /**
     * Sets new PL model. With all required points and data.
     * @param model - new model
     */
    setModel(model: PlModel): void;
    /**
     * Sets visual X bounds.
     * @param start - beginning price
     * @param end - end X price
     */
    setXRange(start: number, end: number): void;
    getXRange(): {
        start: number;
        end: number;
    };
    addScaleChangeListener(listener: (scale: unknown) => void): Unsubscriber;
    createCanvasModel(): CanvasModel;
    clearChart(): void;
    updateConfig(config: PLChartConfig): void;
    private getFullConfig;
}
export declare function createPlChartLayoutTemplate(): HTMLTemplateElement;
export {};
