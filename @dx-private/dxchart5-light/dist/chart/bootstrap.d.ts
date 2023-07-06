/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasAnimation } from './animation/canvas-animation';
import { CanvasBoundsContainer } from './canvas/canvas-bounds-container';
import { ValidatedChartElements } from './canvas/chart-elements';
import { CursorHandler } from './canvas/cursor.handler';
import { ChartEntity } from './model/chart-base-element';
import { BarType, ChartColors, ChartConfigComponentsOffsets, FullChartConfig, GridComponentConfig, PartialChartConfig } from './chart.config';
import ChartContainer from './chart-container';
import { ChartComponent } from './components/chart/chart.component';
import { ChartModel } from './components/chart/chart.model';
import { CrossToolComponent } from './components/cross_tool/cross-tool.component';
import { CrossToolType } from './components/cross_tool/cross-tool.model';
import { EventsComponent } from './components/events/events.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { Highlight } from './components/highlights/highlights.model';
import { NavigationMapComponent } from './components/navigation_map/navigation-map.component';
import { ChartPanComponent } from './components/pan/chart-pan.component';
import { PaneManager } from './components/pane/pane-manager.component';
import { PaneFormatters } from './components/pane/pane.component';
import { SnapshotComponent } from './components/snapshot/snapshot.component';
import { VolumesComponent } from './components/volumes/volumes.component';
import { WaterMarkComponent } from './components/watermark/water-mark.component';
import { XAxisComponent } from './components/x_axis/x-axis.component';
import { YAxisComponent } from './components/y_axis/y-axis.component';
import { CanvasModel } from './model/canvas.model';
import { DrawingManager } from './drawers/drawing-manager';
import EventBus from './events/event-bus';
import { ChartResizeHandler } from './inputhandlers/chart-resize.handler';
import { CrossEventProducerComponent } from './inputhandlers/cross-event-producer.component';
import { HoverProducerComponent } from './inputhandlers/hover-producer.component';
import { CanvasInputListenerComponent, Point } from './inputlisteners/canvas-input-listener.component';
import { HitTestCanvasModel } from './model/hit-test-canvas.model';
import { ScaleModel } from './model/scale.model';
import { TimeZoneModel } from './model/time-zone.model';
import { ChartEvents } from './events/chart-events';
import { DeepPartial } from './utils/object.utils';
export type FitType = 'studies' | 'orders' | 'positions';
export default class ChartBootstrap implements ChartContainer {
    id: string;
    bus: EventBus;
    config: FullChartConfig;
    parentElement: HTMLElement;
    elements: ValidatedChartElements;
    components: Array<any>;
    events: ChartEvents;
    chartComponents: Array<ChartEntity>;
    xAxisComponent: XAxisComponent;
    yAxisComponent: YAxisComponent;
    watermarkComponent: WaterMarkComponent;
    snapshotComponent: SnapshotComponent;
    navigationMapComponent: NavigationMapComponent;
    userInputListenerComponents: Array<ChartEntity>;
    drawingManager: DrawingManager;
    crossEventProducer: CrossEventProducerComponent;
    cursorHandler: CursorHandler;
    clearer: () => void;
    scaleModel: ScaleModel;
    timeZoneModel: TimeZoneModel;
    chartModel: ChartModel;
    backgroundCanvasModel: CanvasModel;
    mainCanvasModel: CanvasModel;
    dataSeriesCanvasModel: CanvasModel;
    overSeriesCanvasModel: CanvasModel;
    hitTestCanvasModel: HitTestCanvasModel;
    canvasBoundsContainer: CanvasBoundsContainer;
    canvasInputListener: CanvasInputListenerComponent;
    volumesComponent: VolumesComponent;
    highlightsComponent: HighlightsComponent;
    chartComponent: ChartComponent;
    eventsComponent: EventsComponent;
    crossToolComponent: CrossToolComponent;
    chartPanComponent: ChartPanComponent;
    paneManager: PaneManager;
    hoverProducer: HoverProducerComponent;
    canvasModels: CanvasModel[];
    chartResizeHandler: ChartResizeHandler;
    canvasAnimation: CanvasAnimation;
    constructor(element: HTMLElement, userConfig?: PartialChartConfig);
    /**
     * Creates a configuration object for overriding UTC time in a chart.
     * @param {ChartModel} chartModel - The chart model object.
     * @returns {Object} - The configuration object containing a pattern and a test function.
     * The pattern is a string representing the date format to be used for the override.
     * The test function checks if the pattern contains hours/minutes/seconds and if the current chart period is more than 1 day.
     * If both conditions are met, the function returns true, indicating that the override should be applied.
     * Note: The chartModel dependency should be removed and the period should be put in a global config somewhere.
     */
    createUTCTimeOverrideConfig(chartModel: ChartModel): {
        pattern: string;
        test: (pattern: string) => boolean;
    };
    /**
     * Merges a local configuration object with a global configuration object recursively.
     * @template L - Type of the local configuration object.
     * @param {L} local - The local configuration object to be merged.
     * @param {Record<string, any>} global - The global configuration object to be merged.
     * @returns {L} - The merged local configuration object.
     */
    static mergeConfig<L extends Record<string, any>>(local: L, global: Record<string, any>): L;
    /**
     * Returns the FullChartConfig object.
     *
     * @returns {FullChartConfig} The FullChartConfig object.
     */
    getConfig(): FullChartConfig;
    /**
     * Sets the right-to-left (RTL) configuration of the component.
     *
     * @param {boolean} rtl - A boolean value indicating whether the component should be displayed in RTL mode.
     * @returns {void}
     */
    setRtl(rtl: boolean): void;
    setChartType(type: BarType): void;
    /**
     * Disables user controls by deactivating all userInputListenerComponents and disabling hitTestCanvasModel.
     * @returns {void}
     */
    disableUserControls(): void;
    /**
     * Enables user controls for the hit test canvas model and all the user input listener components.
     * @returns {void}
     */
    enableUserControls(): void;
    /**
     * Sets the configuration for the grid component of the chart.
     * @param {GridComponentConfig} config - The configuration object for the grid component.
     * @returns {void}
     */
    setGridConfig(config: GridComponentConfig): void;
    /**
     * Sets the visibility of the grid component.
     * @param {boolean} visible - A boolean value indicating whether the grid should be visible or not.
     * @returns {void}
     */
    setGridVisible(visible: boolean): void;
    /**
     * Sets the visibility of the vertical grid lines in the grid component.
     * @param {boolean} showVertical - A boolean value indicating whether to show or hide the vertical grid lines.
     * @returns {void}
     */
    setGridVertical(showVertical: boolean): void;
    /**
     * Sets the visibility of the horizontal grid lines in the chart.
     * @param {boolean} showHorizontal - A boolean value indicating whether to show or hide the horizontal grid lines.
     * @returns {void}
     */
    setGridHorizontal(showHorizontal: boolean): void;
    /**
     * Deactivates the chart by clearing the canvas listeners and disabling user controls.
     * This method is a hack and should not be used unless an activation/deactivation cycle is implemented.
     * It is implemented to prevent memory leaks in the chart when components are deactivated.
     * @returns {void}
     * @todo This method should be revised soon.
     */
    deactivate(): void;
    /**
     * This method triggers the 'draw' event on the 'bus' object.
     * @returns {void}
     */
    redraw(): void;
    /**
     * Returns the offsets of the chart components from the chart configuration object.
     *
     * @returns {ChartConfigComponentsOffsets} The offsets of the chart components.
     */
    getOffsets(): ChartConfigComponentsOffsets;
    /**
     * Sets the visibility of the volumes separately and updates the yAxis width.
     * @param {boolean} separate - A boolean value indicating whether to show the volumes separately or not. Default value is false.
     */
    showSeparateVolumes(separate?: boolean): void;
    /**
     * Sets the auto scale property of the scale model.
     * @param {boolean} auto - A boolean value indicating whether the auto scale is enabled or not. Default value is true.
     */
    setAutoScale(auto?: boolean): void;
    /**
     * Sets the visibility of the borders of the candles in the chart.
     * @param {boolean} show - A boolean value indicating whether to show or hide the borders of the candles. Default value is true.
     * @returns {void}
     */
    setShowCandleBorders(show?: boolean): void;
    /**
     * Returns related Y-axis coordinate by provided value
     * @param price
     */
    valueToY(price: number): number;
    /**
     * Sets the visibility of the high-low component.
     * @param {boolean} visible - Whether the high-low component should be visible or not. Default is true.
     * @returns {void}
     */
    setHighLowVisible(visible?: boolean): void;
    /**
     * Sets the visibility of the cross tool component.
     * @param {string} type - The type of cross tool to be displayed. Default value is 'cross-and-labels'.
     * @returns {void}
     */
    setCrossToolVisible(type?: CrossToolType): void;
    /**
     * @deprecated use {@link highlightsComponent.setHighlightsVisible} instead
     */
    setHighlightsVisible(visible?: boolean): void;
    /**
     * @deprecated use {@link highlightsComponent.setHighlights} instead
     */
    setHighlightsData(data: Highlight[]): void;
    /**
     * Sets the colors of the chart.
     *
     * @param {DeepPartial<ChartColors>} colors - An object containing the colors to be set.
     * @returns {void}
     */
    setColors(colors: DeepPartial<ChartColors>): void;
    /**
     * Adds a mouse move event listener to a canvas element.
     * @param {string} canvasElement - The ID of the canvas element to add the listener to.
     * @param {function} handler - The function to be called when the mouse moves over the canvas element.
     * @returns {function} - A function that removes the event listener when called.
     */
    addMouseMoveOnChartElementHandler(canvasElement: string, handler: (point: Point) => void): () => void;
    /**
     * Adds a mouse enter event handler to a chart element.
     *
     * @param {string} canvasElement - The ID of the canvas element to attach the event handler to.
     * @param {(mouseEnter: boolean) => void} handler - The function to be called when the mouse enters or leaves the element.
     * @param {boolean} [skipWhileDragging=false] - Whether to skip the event while the user is dragging the chart.
     * @returns {Function} - A function that can be called to unsubscribe from the event.
     */
    addMouseEnterOnChartElementHandler(canvasElement: string, handler: (mouseEnter: boolean) => void, skipWhileDragging?: boolean): () => void;
    /**
     * Adds a click event listener to a chart element on the canvas.
     * @param {string} canvasElement - The element on the canvas to add the click event listener to.
     * @param {function} handler - The function to be called when the element is clicked. It takes a Point object as a parameter.
     * @returns {function} - A function that can be called to unsubscribe the click event listener.
     */
    addClickOnChartElementHandler(canvasElement: string, handler: (point: Point) => void): () => void;
    /**
     * Adds a drag event listener to the specified canvas element.
     * @param {string} canvasElement - The ID of the canvas element to add the listener to.
     * @param {(xPosition: number) => void} handler - The function to be called when a drag event occurs. It takes the x position of the drag event as a parameter.
     * @returns {() => void} - A function that can be called to unsubscribe from the drag event listener.
     */
    addDragEventsListener(canvasElement: string, handler: (xPosition: number) => void): () => void;
    /**
     * Contains tear-down logic for chart
     * Use when you want to unmount the chart from the host app
     */
    destroy(): void;
    /**
     * Registers a chart component and includes it in the the chart lifecycle
     * @param initComponent - a function for component init
     * @param onComponentInit - will be called after component init
     */
    registerComponent<C extends ChartEntity>(initComponent: (chartInstance: ChartBootstrap) => C, onComponentInit?: (component: C) => void): void;
    /**
     * Registers number formatters for pane
     * @param uuid - pane's id
     * @param formatters - object, that contains 3 fileds: 'regular', 'percent', 'logarithmic'.
     * Each filed must have it's own formatter.
     * If 'percent' and 'logarithmic' formatters did not provided, 'regular' will be applied.
     */
    registerPaneFormatters(uuid: string, formatters: PaneFormatters): void;
}
