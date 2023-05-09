/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subject } from 'rxjs';
import { Bounds } from '../../common/common-types';
import { FullChartConfig } from '../chart.config';
import { CanvasModel } from '../drawers/canvas.model';
import EventBus from '../event-bus';
import { ChartResizeHandler } from '../inputhandlers/chart-resize.handler';
import { Point } from '../inputlisteners/canvas-input-listener.component';
import { CandleSeriesModel } from '../model/candle-series.model';
import { Pixel } from '../model/scaling/viewport.model';
import { DateTimeFormatterFactory } from '../time.formatter';
import { AtLeastOne } from '../utils/types.utils';
export declare const CHART_UUID = "CHART";
export declare class CanvasElement {
    static CANVAS: string;
    static N_MAP: string;
    static X_AXIS: string;
    static N_MAP_KNOT_L: string;
    static N_MAP_KNOT_R: string;
    static N_MAP_BTN_L: string;
    static N_MAP_BTN_R: string;
    static N_MAP_SLIDER_WINDOW: string;
    static N_MAP_CHART: string;
    static N_MAP_LABEL_R: string;
    static N_MAP_LABEL_L: string;
    static PANE_UUID: (uuid: string) => string;
    static PANE_UUID_Y_AXIS: (uuid: string) => string;
    static PANE_UUID_RESIZER: (uuid: string) => string;
    static ALL_PANES: string;
    static ALL_Y_AXIS: string;
    static CHART_WITH_Y_AXIS: string;
    static EVENTS: string;
    /**
     * @deprecated - use CanvasElement.PANE_UUID(CHART_UUID) instead
     */
    static CHART: string;
    /**
     * @deprecated - use CanvasElement.PANE_UUID_Y_AXIS(CHART_UUID) instead
     */
    static Y_AXIS: string;
}
export declare const DEFAULT_BOUNDS: Bounds;
/**
 * This component listens EVENT_DRAW and recalculates bounds of canvas chart elements.
 * {@link getBounds} method will always give actual placement of element you want.
 *
 * NOTE: this class was designed exclusively for {@link getBounds} method
 * 	     please think twice when adding additional logic here (does it affect element bounds? or it's smth else)
 */
export declare class CanvasBoundsContainer {
    private config;
    private eventBus;
    private canvasModel;
    private formatterFactory;
    private mainCandleSeries?;
    bounds: Record<string, Bounds>;
    canvasOnPageLocation: Bounds;
    panesOrder: Array<string>;
    panesOrderChangedSubject: Subject<string[]>;
    xAxisHeight: number | undefined;
    yAxisWidth: number;
    leftRatio: number;
    rightRatio: number;
    private boundsChangedSubject;
    barResizerChangedSubject: Subject<void>;
    private _graphsHeightRatio;
    get graphsHeightRatio(): Record<string, number>;
    graphsHeightRatioChangedSubject: Subject<Record<string, number>>;
    private boundsChangedSubscriptions;
    constructor(config: FullChartConfig, eventBus: EventBus, canvasModel: CanvasModel, formatterFactory: DateTimeFormatterFactory, chartResizeHandler: ChartResizeHandler);
    /**
     * Adds a pane to the list of panes and recalculates the height ratios of all panes.
     * @param {string} uuid - The unique identifier of the pane to be added.
     * @param {number} [order] - The order in which the pane should be added. If not provided, the pane will be added to the end of the list.
     */
    addPaneBounds(uuid: string, order?: number): void;
    /**
     * Overrides the height ratios of the chart with the provided height ratios.
     * @param {Record<string, number>} heightRatios - An object containing the height ratios to be set.
     * @returns {void}
     * @throws {Error} If the sum of the height ratios is not equal to 1.
     
    */
    overrideChartHeightRatios(heightRatios: Record<string, number>): void;
    /**
     * Moves a pane up in the panesOrder array.
     * @param {string} uuid - The unique identifier of the pane to be moved.
     * @returns {void}
     */
    movePaneUp(uuid: string): void;
    /**
     * Moves the pane down in the panesOrder array.
     * @param {string} uuid - The unique identifier of the pane to be moved.
     * @returns {void}
     */
    movePaneDown(uuid: string): void;
    /**
     * Reorders current panes according to newPanesOrder
     * if element in newPanesOrder doesn't exist in real panes order - it will ignored
     * Example:
     * 	panesOrder: ['1', '2', '3']
     * 	newPanesOrder: ['3', '1']
     * 	result: ['3', '2', '1']
     */
    reorderPanes(newPanesOrder: string[]): void;
    /**
     * Removes the bounds of a pane with the given uuid from the canvas element.
     * @param {string} uuid - The uuid of the pane to remove.
     * @returns {void}
     */
    removedPaneBounds(uuid: string): void;
    /**
     * Recalculates the bounds of the chart elements based on the current configuration and canvas size.
     * The function updates the bounds of the canvas, the main chart, the panes, the y-axis, and the chart with y-axis.
     * It also updates the navigation map element bounds, all bounds page coordinates, and notifies the bounds subscribers.
     * @function
     * @name recalculateBounds
     * @memberof ChartWidget
     * @returns {void}
     */
    recalculateBounds(): void;
    /**
     * Updates the canvasOnPageLocation property with the provided PickedDOMRect object.
     * @param {PickedDOMRect} bcr - The PickedDOMRect object containing the new values for x, y, width, and height.
     * @private
     */
    private updateCanvasOnPageLocation;
    /**
     * Updates the page coordinates of all bounds.
     * @private
     */
    private updateAllBoundsPageCoordinates;
    /**
     * Returns the bounds of the events component.
     * @private
     * @param {Bounds} chartPane - The bounds of the chart pane.
     * @returns {Bounds} - The bounds of the events component.
     */
    private getEventsBounds;
    /**
     * Returns the bounds of the navigation map element.
     * @param {Bounds} canvas - The bounds of the canvas element.
     * @returns {Bounds} - The bounds of the navigation map element.
     * @private
     */
    private getNavMapBounds;
    /**
     * Returns the bounds of the X axis based on the provided parameters.
     * @private
     * @param {Bounds} nMap - The bounds of the nMap.
     * @param {Bounds} canvas - The bounds of the canvas.
     * @returns {Bounds} - The bounds of the X axis.
     */
    private getXAxisBounds;
    /**
     * Calculates the height of the X axis based on the font size, font family and padding values.
     * If the height has already been calculated, it returns the cached value.
     * @returns {number} The height of the X axis.
     */
    getXAxisHeight(): number;
    /**
     * Sets the width of the Y axis.
     *
     * @param {number} yAxisWidth - The width of the Y axis.
     * @returns {void}
     */
    setYAxisWidth(yAxisWidth: number): void;
    /**
     *
     * Sets the height of the X axis.
     * @param {number} xAxisHeight - The height of the X axis.
     * @returns {void}
     */
    setXAxisHeight(xAxisHeight: number): void;
    /**
     * Sets the order of the panes.
     * @param {string[]} panesOrder - An array of strings representing the order of the panes.
     * @returns {void}
     */
    setPanesOrder(panesOrder: string[]): void;
    /**
     * Returns the width of the Y axis if it is visible, otherwise returns 0.
     * @returns {number} The width of the Y axis.
     */
    private getYAxisWidth;
    /**
     * Recalculates the height ratios of the panes by calling the calculateGraphsHeightRatios() and recalculateBounds() methods.
     */
    recalculatePanesHeightRatios(): void;
    /**
     * Calculates the height ratios of the graphs in the chart.
     * It first gets the height ratio of the main chart and then calculates the height ratios of the other graphs.
     * It then calculates the free space available for the other graphs and distributes it among them based on their previous height ratios.
     * If there are new graphs added, it calculates their height ratios based on the number of new graphs and the total number of graphs.
     * @private
     */
    private calculateGraphsHeightRatios;
    /**
     * Recalculates the bounds of the navigation map elements based on the current configuration and viewport.
     * If the navigation map is visible, it calculates the bounds of the following elements:
     * - Navigation map
     * - Time labels
     * - Left and right buttons
     * - Knots
     * - Slider
     * - Chart
     *
     * The bounds of each element are calculated based on the current viewport and configuration values.
     * If the time labels are visible, it calculates the width of the left and right time labels based on the first and last visible candle timestamps.
     * The width of the time labels is used to calculate the position and size of the left and right buttons, as well as the position of the knots.
     * The position and size of the knots are calculated based on the left and right ratios, which represent the position of the knots relative to the left and right buttons.
     * The position and size of the slider and chart are calculated based on the position and size of the knots and buttons.
     */
    recalculateNavigationMapElementBounds(): void;
    /**
     * Checks if the volumes are set to be visible and if they should be shown in a separate pane
     *
     * @returns {boolean} - Returns true if the volumes are set to be visible and if they should be shown in a separate pane, otherwise returns false
     */
    isVolumesInSeparatePane(): boolean;
    /**
     * Gets current canvas element bounds.
     * @param {string} el - CanvasElement.ELEMENT_NAME
     * @return {Bounds} bounds of element
     */
    getBounds(el: string): Bounds;
    /**
     * Returns the position of CANVAS on whole page.
     * Use it to calculate relative coordinates for mouse movement hit test - crosstool for example.
     */
    getCanvasOnPageLocation(): Point;
    /**
     * Gets current panes bounds.
     */
    getBoundsPanes(): Record<string, Bounds>;
    /**
     * Gets hit-test fn for canvas element.
     * @param {string} el - CanvasElement.ELEMENT_NAME
     * @param {boolean} reverse - reverses the hit test condition
     * @param {number} extensionX - extended hitBoundsTest in horizontal direction
     * @param {number} extensionY - extended hitBoundsTest in vertical direction
     * @param wholePage
     * @return {HitBoundsTest} hit-test fn
     */
    getBoundsHitTest(el: string, options?: AtLeastOne<HitBoundsTestOptions>): HitBoundsTest;
    /**
     * Returns a function that tests if a given point is inside a given bounds object.
     * @param {Bounds} bounds - The bounds object to test against.
     * @param {Object} options - An object containing options for the hit test.
     * @param {number} [options.extensionX=0] - The amount of extension in the x-axis.
     * @param {number} [options.extensionY=0] - The amount of extension in the y-axis.
     * @param {boolean} [options.wholePage=false] - Whether to test against the whole page or just the bounds object.
     * @returns {HitBoundsTest} - A function that takes in x and y coordinates and returns true if the point is inside the bounds object.
     */
    static hitTestOf(bounds: Bounds, options?: AtLeastOne<HitBoundsTestOptions>): HitBoundsTest;
    /**
     * This method indicates whether it's possible to render the chart, in particular if its width and height > 0.
     */
    isChartBoundsAvailable(): boolean;
    /**
     * Resizes a pane vertically.
     * @param {string} uuid - The unique identifier of the pane.
     * @param {number} y - The amount of pixels to resize the pane by.
     * @returns {void}
     */
    resizePaneVertically(uuid: string, y: number): void;
    /**
     * Resizes a pane vertically based on the provided index and delta in pixels.
     * @param {number} idx - The index of the pane to be resized.
     * @param {number} yDeltaPixels - The delta in pixels to resize the pane.
     * @returns {void}
     */
    private doResizePaneVertically;
    /**
     * Notifies all subscribers about bounds changes
     * @function
     * @name notifyBoundsSubscribers
     * @returns {void}
     */
    private notifyBoundsSubscribers;
    /**
     * Subscribe to element bounds changes.
     * Multiple subscriptions will share the same subject.
     * @param el - element name
     */
    observeBoundsChanged(el: string): import("rxjs").Observable<Bounds>;
    /**
     * Returns an observable that emits when the bounds of the object change.
     * @returns {Observable} An observable that emits when the bounds of the object change.
     */
    observeAnyBoundsChanged(): import("rxjs").Observable<void>;
    /**
     * Creates a copy of the provided bounds object.
     *
     * @private
     * @param {Bounds} bounds - The bounds object to be copied.
     * @returns {Bounds} - A new bounds object with the same properties as the original.
     */
    private copyOf;
    /**
     * Copies the values of the `from` object to the `to` object.
     * @param {Bounds} from - The object to copy the values from.
     * @param {Bounds} to - The object to copy the values to.
     * @private
     */
    private copyBounds;
    /**
     * Checks if two Bounds objects have the same x, y, width and height values.
     * @param {Bounds} b1 - The first Bounds object to compare.
     * @param {Bounds} b2 - The second Bounds object to compare.
     * @returns {boolean} - Returns true if both Bounds objects have the same x, y, width and height values, otherwise returns false.
     */
    private sameBounds;
    /**
     * Applies default bounds to the provided bounds object.
     * @param {Bounds} bounds - The bounds object to apply default bounds to.
     * @returns {void}
     * @private
     */
    private applyDefaultBounds;
    /**
     * Sets the main candle series for the CanvasBoundsContainer.
     * @param {CandleSeriesModel} candleSeries - The candle series to be set as the main candle series.
     * @returns {void}
     * @deprecated This method should be removed as candleSeries is not a part of CanvasBoundsContainer.
     */
    setMainCandleSeries(candleSeries: CandleSeriesModel): void;
}
export declare const isInBounds: (point: Point, bounds: Bounds) => boolean;
export declare const isInVerticalBounds: (y: number, bounds: Bounds) => boolean;
export declare const limitYToBounds: (y: Pixel, bounds: Bounds) => number;
export interface HitBoundsTest {
    (x: number, y: number): boolean;
}
export interface HitBoundsTestOptions {
    extensionX: number;
    extensionY: number;
    wholePage: boolean;
}
export type HitBoundsTestOptionsPartial = AtLeastOne<HitBoundsTestOptions>;
export declare const DEFAULT_HIT_TEST_OPTIONS: HitBoundsTestOptions;
export declare const areBoundsChanged: (prev: Bounds, next: Bounds) => boolean;
