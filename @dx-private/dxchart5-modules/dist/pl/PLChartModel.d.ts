/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { PartialChartConfig } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import EventBus from '@dx-private/dxchart5-light/dist/chart/events/event-bus';
import { CanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/canvas.model';
import { PlModel } from './plChart';
import { Subject } from 'rxjs';
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { Pixel, Unit, ViewportModel } from '@dx-private/dxchart5-light/dist/chart/model/scaling/viewport.model';
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
export interface PlLine {
    id: string;
    name: string;
    type: string;
    points: Array<ChartPoint>;
}
export declare class PLChartModel extends ViewportModel {
    private config;
    private eventBus;
    private canvasModel;
    private canvasBoundsContainer;
    data: Array<PlLine>;
    start: number;
    end: number;
    highLow: [number, number];
    pricePrecision: number;
    plPrecision: number;
    plFormatter: (pl: number) => string;
    markPrice: number;
    maxXConstraint: number;
    priceFormatter: (price: number) => string;
    scaleChanged: Subject<Scale>;
    constructor(config: PartialChartConfig, eventBus: EventBus, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer);
    updateModel(model: PlModel): void;
    setXRange(start: number, end: number): void;
    private updateYRange;
    toX(xValue: Unit): Pixel;
    toY(yValue: Unit): Pixel;
    fromX(pixels: Pixel): Unit;
    fromY(pixels: Pixel): Unit;
    get xStart(): Unit;
    get xEnd(): Unit;
    get yStart(): Unit;
    get yEnd(): Unit;
    formatPrice(price: Unit): string;
    formatPl(pl: unknown): string;
    getRange(): number;
    getBounds(): Bounds;
}
export interface ChartPoint {
    xValue: number;
    yValue: number;
}
export interface Scale {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
}
