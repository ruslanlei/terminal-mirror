/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable, Subject } from 'rxjs';
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { BarType, CursorType } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { ChartInstrument } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.component';
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { ChartPanComponent } from '@dx-private/dxchart5-light/dist/chart/components/pan/chart-pan.component';
import { PaneComponent } from '@dx-private/dxchart5-light/dist/chart/components/pane/pane.component';
import EventBus from '@dx-private/dxchart5-light/dist/chart/events/event-bus';
import { CanvasInputListenerComponent, Point } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import { HitTestCanvasModel, HitTestSubscriber } from '@dx-private/dxchart5-light/dist/chart/model/hit-test-canvas.model';
import { Pixel, Price } from '@dx-private/dxchart5-light/dist/chart/model/scaling/viewport.model';
import VisualCandle from '@dx-private/dxchart5-light/dist/chart/model/visual-candle';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import Canvases from '../canvases';
import { ChartWithDrawings, Drawing, DrawingCursors, FullChartConfigDrawings } from '../DrawingsConfig';
import { DrawingsEventListeners } from '../components/DrawingsEventListeners';
import { DrawingType } from './DrawingTypes';
import { AbstractFigure } from '../figures/model/Figure';
import { DrawingConfig, DrawingModel, NewDrawingConfig } from './DrawingModel';
import { DrawingViewModel } from './DrawingViewModel';
import { DateValuePoint, IndexValuePoint, PointEvent } from './PointEvent';
import { Vector } from './Vector';
import { CursorHandler } from '@dx-private/dxchart5-light/dist/chart/canvas/cursor.handler';
declare global {
    export interface Window {
        drawings: unknown;
    }
}
export type ContextState = 'HIGHLIGHTING' | 'ADDING' | 'MOVING' | 'EMPTY';
export type HoverType = 'FIGURE' | 'POINT' | 'TEXT';
export interface DragDrawingInfo {
    type: HoverType;
    viewModel: DrawingViewModel;
    viewPoint: Vector;
    initial: IndexValuePoint;
    initialValues: IndexValuePoint[];
    isBorderMatch: boolean;
    dragPointIndex?: number;
}
export type NullableDrawingModel = DrawingModel<DrawingType> | null;
/**
 * Model for all drawings.
 * Subscribes to various drawing events and emits them as well.
 * Controls drawings active state. Generates ID for new drawings.
 * Creates and switches the canvas contexts when drawing.
 */
export default class DrawingsModel implements HitTestSubscriber<NullableDrawingModel> {
    readonly eventBus: EventBus;
    readonly staticCanvas: HTMLCanvasElement;
    readonly dynamicCanvas: HTMLCanvasElement;
    readonly hitTestCanvasModel: HitTestCanvasModel;
    readonly chartConfig: FullChartConfigDrawings;
    chartModel: ChartModel;
    private canvasBoundsContainer;
    readonly chartBootstrap: ChartWithDrawings;
    readonly drawingsFormatterProvider: () => DateTimeFormatter;
    readonly canvases: Canvases;
    private chartPanComponent;
    paneComponent: PaneComponent;
    private cursorHandler;
    magnet: number;
    visible: boolean;
    models: Record<ChartInstrument['symbol'], DrawingModel<DrawingType>[]>;
    viewModels: Record<string, DrawingViewModel>;
    eventListeners: DrawingsEventListeners;
    allIds: string[];
    unsubscribe: () => void;
    get instrumentCode(): string;
    get currentModels(): DrawingModel<"line" | "trend" | "rectangle" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">[];
    private _activeModel;
    private _hoveredModel;
    set activeModel(model: NullableDrawingModel);
    set hoveredModel(model: NullableDrawingModel);
    get hoveredModel(): NullableDrawingModel;
    get activeModel(): NullableDrawingModel;
    _activeMatch: DragDrawingInfo | undefined;
    private isDrawingMoved;
    contextState: ContextState;
    private candleMagnetPointsByChartTypeMap;
    readonly events: {
        drawingMoved: Subject<string>;
        drawingsUpdated: Observable<DrawingModel<"line" | "trend" | "rectangle" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">[]>;
        _drawingsUpdatedOld: Subject<void>;
    };
    constructor(eventBus: EventBus, staticCanvas: HTMLCanvasElement, dynamicCanvas: HTMLCanvasElement, hitTestCanvasModel: HitTestCanvasModel, chartConfig: FullChartConfigDrawings, chartModel: ChartModel, canvasBoundsContainer: CanvasBoundsContainer, canvasInputListener: CanvasInputListenerComponent, chartBootstrap: ChartWithDrawings, drawingsFormatterProvider: () => DateTimeFormatter, canvases: Canvases, chartPanComponent: ChartPanComponent, paneComponent: PaneComponent, cursorHandler: CursorHandler);
    private registerDefaultMagnetPointsResolvers;
    resolveDrawingCursorType(type: DrawingType): DrawingCursors;
    /**
     * We disable drawing events listeners if no drawing is selected or hovered
     * @doc-tags tricky, optimization
     */
    private manageDrawingEventListeners;
    /**
     * Gets id for new drawing.
     * Iterates over existing models so ID is unique (should be).
     */
    nextId(): string;
    initModels(activeModel?: NullableDrawingModel): void;
    startModel(config: DrawingConfig<DrawingType>): void;
    redraw(): void;
    fireModelDone(model: DrawingModel<DrawingType>): void;
    fireModelsRemoved(models: NullableDrawingModel | NullableDrawingModel[]): void;
    fireModelMoved(): void;
    fireModelModified(): void;
    fireModelUpdated(model: NullableDrawingModel): void;
    exportFigures(): Record<ChartInstrument['symbol'], Drawing<DrawingType>[]>;
    updateViewModel(model: NullableDrawingModel): void;
    cachePoints(model: NullableDrawingModel): void;
    /**
     * You can use this method to determine which magnet points should be used for specified chart type.
     * @param chartType
     * @param resolver
     */
    registerCandleMagnetPointsResolver(chartType: BarType, resolver: (vc: VisualCandle) => Price[]): void;
    /**
     * This function is used for drawing magnet mode to help attach drawing point to some part of the bar.
     * For example, if we have line bar type, then there is only one possible point to attach.
     * In case we have candle bar type there are 4 possible magnet points: open, close, high and low.
     */
    candleMagnetPointsByChartType(chartType: BarType, visualCandle: VisualCandle): Price[];
    adjustByCandle(y: number, visualCandle: VisualCandle): boolean | {
        value: number;
        y: number;
    };
    /**
     * Adjusts current value (price) to chartModel.instrument's price precision.
     */
    adjustToPriceIncrement(price: number): number;
    resolvePointEvent(x: Pixel, _y: Pixel, allowPointOutsidePane?: boolean): PointEvent;
    downAction(point: PointEvent, model?: NullableDrawingModel): false | undefined;
    wheelAction(increment: number): void;
    downMoveAction(point: PointEvent): void;
    setDrawingLocked(drawing: DrawingModel<DrawingType>, locked: boolean): void;
    setDrawingVisible(drawing: DrawingModel<DrawingType>, visible: boolean): void;
    removeExtraPointsFromModel(): void;
    commitModel(): void;
    private updateDraggingPointVisibility;
    highlightingDownAction(point: PointEvent, model: NullableDrawingModel): void;
    commitOrDraw(newPointFixed: boolean): void;
    applyFigurePoints(index: number, pointEvent: PointEvent, points: DateValuePoint[] | IndexValuePoint[], isKeyPoints: boolean): void;
    moveAction(point: PointEvent, model?: NullableDrawingModel): void;
    moveWholeFigure(point: PointEvent, model: DrawingModel<DrawingType>, match: DragDrawingInfo): void;
    moveDrawingPoint(point: PointEvent, model: DrawingModel<DrawingType>, match: DragDrawingInfo): void;
    moveDrawing(point: PointEvent): void;
    getFigure(): AbstractFigure<unknown> | undefined;
    getPoints(stickyPoint: PointEvent): Vector[];
    getNewPoints(stickyPoint: PointEvent): import("./ViewPoint").ViewPoint[];
    upAction(): void;
    dblClickAction(point: PointEvent, model?: NullableDrawingModel): void;
    keyDownAction(key: string): void;
    getIdRange(): [number, number];
    lookup(id: number): DrawingModel<DrawingType> | undefined;
    onHover(model: NullableDrawingModel, point: Point): void;
    onZoom(model: NullableDrawingModel, point: Point): void;
    resolveCursor(point: Point, model?: DrawingModel<DrawingType>): CursorType | undefined;
    onDblClick(model: NullableDrawingModel, point: Point): void;
    onMouseDown(model: NullableDrawingModel, point: Point): void;
    valueToView(point: IndexValuePoint): Vector;
    match(point: PointEvent, id: string): DragDrawingInfo | undefined;
    switchContext(newContextState: ContextState): void;
    removeAllModels(): void;
    removeModels: (models: NullableDrawingModel[]) => void;
    setActiveModel: (model: NullableDrawingModel, suppressEvents?: boolean) => void;
    sameModels(firstModel: NullableDrawingModel, secondModel: NullableDrawingModel): boolean;
    updateModel(model: DrawingModel<DrawingType>): void;
    cancelDrawing: () => void;
    removeDrawing(id: string): boolean;
    rebuildModelsIndexes(): void;
    handleDataUpdates(): void;
    updateViewModels(): void;
    addDrawing<T extends DrawingType>(drawingConfig: NewDrawingConfig<T>): DrawingConfig<T>;
    setDrawingsOrder(orderedModelIds: string[]): void;
}
