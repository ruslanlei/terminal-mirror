/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';
import { ValidatedChartElements } from '@dx-private/dxchart5-light/dist/chart/canvas/chart-elements';
import { CursorHandler } from '@dx-private/dxchart5-light/dist/chart/canvas/cursor.handler';
import { ChartBaseElement } from '@dx-private/dxchart5-light/dist/chart/model/chart-base-element';
import { BarType } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { ChartInstrument } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.component';
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { ChartPanComponent } from '@dx-private/dxchart5-light/dist/chart/components/pan/chart-pan.component';
import { PaneManager } from '@dx-private/dxchart5-light/dist/chart/components/pane/pane-manager.component';
import { XAxisComponent } from '@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis.component';
import { YAxisComponent } from '@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis.component';
import { DrawingManager } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import EventBus from '@dx-private/dxchart5-light/dist/chart/events/event-bus';
import { CanvasInputListenerComponent } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import { HitTestCanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/hit-test-canvas.model';
import { Price } from '@dx-private/dxchart5-light/dist/chart/model/scaling/viewport.model';
import VisualCandle from '@dx-private/dxchart5-light/dist/chart/model/visual-candle';
import { DateTimeFormatterFactory } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { Observable } from 'rxjs';
import { ChartWithDrawings, Drawing, FullChartConfigDrawings, SnapMode } from './DrawingsConfig';
import { DrawingConfig, DrawingModel, InitialDrawingConfig } from './model/DrawingModel';
import DrawingsModel, { NullableDrawingModel } from './model/DrawingsModel';
import { DrawingType } from './model/DrawingTypes';
/**
 * This component is responsible for any drawings user can draw on the chart.
 */
export declare class DrawingsComponent extends ChartBaseElement {
    private eventBus;
    private elements;
    private config;
    private chartModel;
    private chartBootstrap;
    private drawingManager;
    private hitTestCanvasModel;
    private formatterFactory;
    private yAxisComponent;
    /**
     * For internal use only!!!!
     */
    readonly drawingsModel: DrawingsModel;
    private readonly canvases;
    private drawingsFormatterProvider;
    private readonly drawingsDrawer;
    private readonly hitTestDrawingsDrawer;
    constructor(eventBus: EventBus, elements: ValidatedChartElements, config: FullChartConfigDrawings, chartModel: ChartModel, canvasBoundsContainer: CanvasBoundsContainer, canvasInputListener: CanvasInputListenerComponent, chartBootstrap: ChartWithDrawings, drawingManager: DrawingManager, hitTestCanvasModel: HitTestCanvasModel, formatterFactory: DateTimeFormatterFactory, xAxisComponent: XAxisComponent, yAxisComponent: YAxisComponent, chartPanComponent: ChartPanComponent, paneManager: PaneManager, cursorHandler: CursorHandler);
    protected doActivate(): void;
    private manageLabels;
    protected doDeactivate(): void;
    addDrawingDBLClickHandler(handler: (drawingModel: NullableDrawingModel) => void): void;
    addDrawingDoneHandler(handler: (drawingModel: NullableDrawingModel) => void): void;
    addDrawingSelectHandler(handler: (drawingModel: NullableDrawingModel) => void): void;
    toggleKeyDownListener(value: boolean): void;
    observeFigureModified<T extends DrawingType>(): Observable<DrawingModel<T>>;
    observeDrawingsUpdated(): Observable<DrawingModel<DrawingType>[]>;
    /**
     * Removes drawings for current instrument
     */
    removeInstrumentDrawings(): void;
    /**
     * Starts a new drawing on the chart
     */
    startDrawing<T extends DrawingType>(initialConfig: InitialDrawingConfig<T>): DrawingConfig<T>;
    updateDrawing(model: DrawingModel<DrawingType>): void;
    /**
     * If drawing mode is enabled, a new drawing will be started automatically
     * if a previous one was finished.
     */
    setDrawingMode(isDrawingModeEnabled: boolean): void;
    /**
     * You can use this method to determine which magnet points should be used for specified chart type.
     * @param chartType
     * @param resolver
     */
    registerCandleMagnetPointsResolver(chartType: BarType, resolver: (vc: VisualCandle) => Price[]): void;
    /**
     * You can programmatically put a point for a started drawing
     * @param x - x coordinate on the chart in pixels
     * @param y - y coordinate on the chart in pixels
     */
    putPointXY(x: number, y: number): void;
    /**
     * You can programmatically put a point for a started drawing
     * @param timestamp
     * @param price
     */
    putPointTimePrice(timestamp: number, price: number): void;
    /**
     * Cancels the current drawing which is started, but not finished yet.
     */
    cancelDrawing(): void;
    /**
     * Removes all drawings for selected instrument.
     */
    removeAllDrawings(): void;
    /**
     * Removes the drawing with the specified id for selected instrument.
     */
    removeDrawing(id: string): void;
    /**
     * Sets the drawings for each instrument.
     * @param drawings
     */
    setDrawings(drawings: Record<string, Drawing<DrawingType>[]>): void;
    /**
     * Used to change drawings order by Z axis.
     * If there is no existing drawing in array, it will be filtered and won't be ordered.
     * @param drawings - array of ordered model ids, last in array is on top of the previous.
     */
    setDrawingsOrder: (drawings: string[]) => void;
    /**
     * Gets the drawings per instrument in chart.
     * This format of drawing is available to store to layout, no internal models.
     */
    getDrawings(): Record<ChartInstrument['symbol'], Drawing<DrawingType>[]>;
    /**
     * Set snap mode for the drawings, which can be one of the following: 'increments', 'precisions', 'none'
     */
    setSnapMode(snapMode: SnapMode): void;
    /**
     * Enables or disables magnet for drawings.
     * When magnet mode is enabled and drawing is dragged it will stick to candle OHLC.
     * @param isMagnetModeEnabled - boolean
     * @param magnetStrength - distance between current point and the candle closest OHLC
     * from which point will stick to the closest closest OHLC
     */
    setMagnetMode(isMagnetModeEnabled: boolean, magnetStrength?: number): void;
    /**
     * Controls visibility of the drawings
     */
    setVisible(isVisible: boolean): void;
    /**
     * Controls visibility of a single drawing
     */
    setDrawingVisible(drawing: DrawingModel<DrawingType>, visible: boolean): void;
    /**
     * Locks the drawing, so it cannot be moved, or unlocks the drawing
     */
    setDrawingLocked(drawing: DrawingModel<DrawingType>, locked: boolean): void;
    /**
     * If visible, when you can see the drawings on the chart
     */
    isVisible(): boolean;
    /**
     * Moving actions on drawing can be observed through this method
     */
    observeDrawingMoved(): Observable<Drawing<DrawingType>['id']>;
    /**
     * Returns internal drawing models for selected instrument, don't use it or use very very carefully
     */
    _getDrawings(): Record<string, DrawingModel<"line" | "trend" | "rectangle" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">[]>;
}
