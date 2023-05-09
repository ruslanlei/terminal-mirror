/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subject } from 'rxjs';
import { Bounds } from '../../common/common-types';
import { ChartConfigComponentsOffsets, ChartScale, FullChartConfig } from '../chart.config';
import { CanvasAnimation } from '../animation/canvas-animation';
import { AutoScaleViewportSubModel } from './scaling/auto-scale.model';
import { ZoomXToZoomYRatio } from './scaling/lock-ratio.model';
import { Price, Unit, ViewportModel, ViewportModelState, Zoom } from './scaling/viewport.model';
export interface HighLowWithIndex {
    high: Price;
    low: Price;
    highIdx: number;
    lowIdx: number;
}
export interface ScaleHistoryItem {
    xStart: Unit;
    xEnd: Unit;
    yStart: Unit;
    yEnd: Unit;
}
export declare const getDefaultHighLowWithIndex: () => HighLowWithIndex;
export type ViewportPercent = number;
type Constraints = (initialState: ViewportModelState, state: ViewportModelState) => ViewportModelState;
/**
 * The ScaleModel class represents the state of a chart's scale, including the current viewport, zoom level, and auto-scaling settings.
 * It extends the ViewportModel class, which provides the underlying implementation for handling viewports and zoom levels.
 * Controls current visible CHART viewport.
 * Has additional logic:
 * - auto-scale
 * - locked scale
 * - zooming functions
 * - history
 */
export declare class ScaleModel extends ViewportModel {
    config: FullChartConfig;
    getBounds: () => Bounds;
    private canvasAnimation;
    scaleInversedSubject: Subject<boolean>;
    history: ScaleHistoryItem[];
    autoScaleModel: AutoScaleViewportSubModel;
    zoomXYRatio: ZoomXToZoomYRatio;
    offsets: ChartConfigComponentsOffsets;
    xConstraints: Constraints[];
    readonly state: ChartScale;
    constructor(config: FullChartConfig, getBounds: () => Bounds, canvasAnimation: CanvasAnimation);
    /**
     * The method adds a new "constraint" to the existing list of x-axis constraints for charting.
     * The "constrait" is expected to be an object containing information about the constraints, such as the minimum and maximum values for the x-axis.
     * @param constraint
     */
    addXConstraint(constraint: Constraints): void;
    /**
     * The method updates the offsets for the scale model based on the provided "offsets" object.
     * Note that the method modifies the offsets and triggers an autoscale
     * @param offsets
     */
    updateOffsets(offsets: Partial<ChartConfigComponentsOffsets>): void;
    /**
     * @returns current offsets
     */
    getOffsets(): ChartConfigComponentsOffsets;
    /**
     * Zooms the X axis of the chart to a specified percentage of the viewport.
     * @param viewportPercent The percentage of the viewport width to zoom to.
     * @param zoomIn Whether to zoom in or out.
     * @param forceNoAnimation Whether to skip animation.
     * @param zoomSensitivity The sensitivity of the zoom.
     */
    zoomXToPercent(viewportPercent: ViewportPercent, zoomIn: boolean, forceNoAnimation?: boolean, zoomSensitivity?: number): void;
    /**
     * Zooms the X axis of the chart relativly to the end of the data range.
     * @param zoomIn - If true, the chart will be zoomed in. If false, the chart will be zoomed out.
     * @param zoomSensitivity - The sensitivity of the zoom. Default value is taken from the configuration object.
     */
    zoomXToEnd(zoomIn: boolean, zoomSensitivity?: number): void;
    private haltAnimationIfNeeded;
    private zoomXTo;
    /**
     * Moves the viewport to exactly xStart..xEnd place.
     * (you need to fire DRAW event after this)
     * @param xStart - viewport start in units
     * @param xEnd - viewport end in units
     * @param fireChanged
     * @param forceNoAutoScale - force NOT apply auto-scaling (for lazy loading)
     */
    setXScale(xStart: Unit, xEnd: Unit): void;
    /**
     * Moves both xStart and xEnd without changing the viewport width (zoom).
     * WILL CHANGE the Y axis if scale.auto=true.
     * @param xStart - starting point in units
     */
    moveXStart(xStart: Unit): void;
    private scalePostProcessor;
    /**
     * Moves both yStart and yEnd without changing the viewport height (zoom).
     * Will not move viewport if scale.auto=true
     * @param yStart - starting point in units
     */
    moveYStart(yStart: Unit): void;
    /**
     * Automatically scales the chart to fit the data range.
     * @param forceApply - If true, the chart will be forcefully auto-scaled even if animation is in progress.
     */
    doAutoScale(forceApply?: boolean): void;
    /**
     * Checks if viewport animation is currently in progress.
     * @returns returns true if viewport animation is in progress, false otherwise.
     */
    isViewportAnimationInProgress(): boolean | undefined;
    /**
     * Adds an item to the scale history.
     * @param item - The item to add to the history.
     */
    pushToHistory(item: ScaleHistoryItem): void;
    /**
     * Removes the most recent item from the scale history and returns it.
     * @returns - The most recent item from the history, or undefined if the history is empty.
     */
    popFromHistory(): ScaleHistoryItem | undefined;
    /**
     * Clears the scale history.
     */
    clearHistory(): void;
    /**
     * Checks if the X axis bounds are the default values.
     * @returns if false - it means there are candles and it's possible to do scaling and add drawings
     */
    isDefaultXBounds(): boolean;
    /**
     * Checks if the Y axis bounds are the default values.
     * @returns if false - it means there are candles and it's possible to do scaling and add drawings
     */
    isDefaultYBounds(): boolean;
    /**
     * Checks if the scale is ready to be used.
     * @returns - Returns true if the scale is ready, false otherwise.
     */
    isScaleReady(): boolean;
    /**
     * Enables or disables auto-scaling of the chart.
     * @param auto - If true, the chart will be automatically scaled. If false, auto-scaling will be disabled.
     */
    autoScale(auto?: boolean): void;
    /**
     * Sets whether the price-to-bar ratio should be locked or not.
     * @param value - If true, the price-to-bar ratio will be locked. If false, it will not be locked.
     */
    setLockPriceToBarRatio(value?: boolean): void;
    /**
     * Recalculates the zoom X/Y ratio based on the current zoom levels.
     */
    recalculateZoomXYRatio(): void;
}
/**
 * The SyncedByXScaleModel class extends the ScaleModel class and adds support for synchronization with other ScaleModel instance, so both instances maintain the same X-axis bounds.
 * This is useful for scenarios where multiple charts need to display the same X-axis data, but with different Y-axis scales.
 */
export declare class SyncedByXScaleModel extends ScaleModel {
    private delegate;
    config: FullChartConfig;
    getBounds: () => Bounds;
    constructor(delegate: ViewportModel, config: FullChartConfig, getBounds: () => Bounds, canvasAnimation: CanvasAnimation);
    protected doActivate(): void;
    get xStart(): Unit;
    set xStart(value: Unit);
    get xEnd(): Unit;
    set xEnd(value: Unit);
    get zoomX(): Zoom;
    set zoomX(value: Zoom);
    observeXChanged(): import("rxjs").Observable<{
        start: number;
        end: number;
    }>;
    fireChanged(): void;
}
export {};
