/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subject } from 'rxjs';
import { Bounds } from '../../../common/common-types';
import { ChartBaseElement } from '../../chart-base-element';
import { ViewportMovementAnimation } from '../../animation/types/viewport-movement-animation';
export type Unit = number;
export type Price = number;
export type Pixel = number;
export type Zoom = number;
export declare const calculateZoom: (viewportUnits: Unit, viewportPixels: Pixel) => Zoom;
export declare const unitToPixels: (units: Unit, zoom: Zoom) => Pixel;
export declare const pixelsToUnits: (px: Pixel, zoom: Zoom) => Unit;
export type Index = Unit;
export type Timestamp = Unit;
export type Percent = Unit;
export type LogValue = Unit;
export type YUnit = Price | Percent | LogValue;
export declare const unitToPercent: (value: Unit, baseLine: Unit) => Percent;
export declare const percentToUnit: (percent: Percent, baseLine: Unit) => Unit;
export declare const calcLogValue: (value: Price) => LogValue;
export declare const logValueToUnit: (logValue: LogValue) => number;
/**
 * This interface describes chart entity which transforms some units to pixel values.
 * We need to separate this interface and viewport-model.
 * Viewport model describes piece of chart viewport:
 * - main chart pane
 * - underlay study pane
 *
 * But sometimes in viewport we have units which are not the price (price is default unit for y-axis).
 * In this case we need special logic to convert price to viewport units and this logic might vary for different chart entities.
 * A good example is chart candle series:
 * let's assume we use percents for as y-axis units, then each candle series will use their own logic to get percent unit from the price.
 * Thus, we need to segregate interface of ViewportModel and Viewable interface.
 * You can think of ViewportModel as a screen and Viewable as a figure which should be drawn on the screen.
 */
export interface Viewable {
    toX(unit: Unit): Pixel;
    toY(unit: Unit): Pixel;
    xPixels(unit: Unit): Pixel;
    yPixels(unit: Unit): Pixel;
}
/**
 * Represents state of ViewportModel.
 * When the model is calculated step-by-step, this state acts like an intermediate result.
 * Only when all calculations are complete - we {@link ViewportModel#apply} result.
 */
export interface ViewportModelState {
    xStart: Unit;
    xEnd: Unit;
    yStart: Unit;
    yEnd: Unit;
    zoomX: Zoom;
    zoomY: Zoom;
    inverseY: boolean;
}
/**
 * Abstract viewport model.
 * Viewport has 4 coordinates: xStart, xEnd, yStart and yEnd - all stored in {@link Unit}.
 * Main methods:
 * - {@link toX} - converts xUnits to xPixels
 * - {@link toY} - converts yUnits to yPixels
 * - {@link fromX} - converts xPixels to xUnits
 * - {@link fromY} - converts yPixels to yUnits
 *
 * To convert unit-pixels and vice versa uses {@link getBounds} method.
 * zoomX and zoomY are proportions between units and pixels.
 */
export declare abstract class ViewportModel extends ChartBaseElement implements Viewable {
    currentAnimation?: ViewportMovementAnimation;
    private _xStart;
    private _xEnd;
    private _yStart;
    private _yEnd;
    private _zoomX;
    private _zoomY;
    private _inverseY;
    /**
     * An abstract method that returns the bounds of a chart, volumes, studies, etc.
     * @returns {Bounds} The bounds of the specified element.
     */
    abstract getBounds(): Bounds;
    changed: Subject<void>;
    xChanged: import("rxjs").Observable<{
        start: number;
        end: number;
    }>;
    yChanged: import("rxjs").Observable<{
        start: number;
        end: number;
    }>;
    /**
     * Converts a unit value to pixels based on the current zoom level and xStart value.
     * @param {Unit} unit - The unit value to be converted to pixels.
     * @returns {Pixel} - The converted pixel value.
     */
    toX(unit: Unit): Pixel;
    /**
     * Converts a unit value to pixels based on the current zoom level in the x-axis.
     * @param {Unit} unit - The unit value to be converted to pixels.
     * @returns {Pixel} - The converted value in pixels.
     */
    xPixels(unit: Unit): Pixel;
    /**
     * Converts a given unit value to pixel value in the Y-axis.
     * @param {Unit} unit - The unit value to be converted to pixel value.
     * @returns {Pixel} - The pixel value of the given unit value in the Y-axis.
     */
    toY(unit: Unit): Pixel;
    /**
     * Converts a unit value to pixels based on the current zoom level in the Y axis.
     * @param {Unit} unit - The unit value to be converted to pixels.
     * @returns {Pixel} - The converted value in pixels.
     */
    yPixels(unit: Unit): Pixel;
    /**
     * Converts a pixel value to a unit value based on the current zoom level and xStart value.
     * @param {Pixel} px - The pixel value to convert to unit value.
     * @returns {Unit} - The converted unit value.
     */
    fromX(px: Pixel): Unit;
    /**
     * Converts a pixel value to a unit value along the y-axis.
     * @param {Pixel} px - The pixel value to be converted.
     * @returns {void}
     */
    fromY(px: Pixel): Unit;
    /**
     * Recalculates the zoom factor for the x-axis based on the start and end values of the x-axis.
     * @function
     * @name recalculateZoomX
     * @memberof ClassName
     * @instance
     * @returns {void}
     */
    recalculateZoomX(): void;
    /**
     * Recalculates the zoomY property of the object.
     * The zoomY property is calculated using the yStart and yEnd properties of the object.
     * @function
     * @name recalculateZoomY
     * @memberof Object
     * @instance
     * @returns {void}
     */
    recalculateZoomY(): void;
    /**
     * Calculates the zoom factor for the x-axis based on the start and end units.
     * @param {Unit} start - The start unit.
     * @param {Unit} end - The end unit.
     * @returns {Zoom} The zoom factor for the x-axis.
     */
    calculateZoomX(start: Unit, end: Unit): Zoom;
    /**
     * Calculates the zoom factor for the Y axis based on the start and end units.
     * @param {Unit} start - The start unit.
     * @param {Unit} end - The end unit.
     * @returns {Zoom} The zoom factor for the Y axis.
     */
    calculateZoomY(start: Unit, end: Unit): Zoom;
    /**
     * Should be called when x/y start/end changes.
     */
    recalculateZoom(fireChanged?: boolean): void;
    /**
     * Moves the viewport to exactly xStart..xEnd place.
     * (you need to fire DRAW event after this)
     * @param xStart - viewport start in units
     * @param xEnd - viewport end in units
     * @param fireChanged - fire changed event
     */
    setXScale(xStart: Unit, xEnd: Unit, fireChanged?: boolean): void;
    /**
     * Moves the viewport to exactly yStart..yEnd place.
     * (you need to fire DRAW event after this)
     * @param yStart - viewport start in units
     * @param yEnd - viewport end in units
     * @param fireChanged - fire changed event
     */
    setYScale(yStart: Unit, yEnd: Unit, fireChanged?: boolean): void;
    /**
     * Exports current state of VM.
     */
    export(): ViewportModelState;
    /**
     * Applies the state to current VM.
     * @param state
     */
    apply(state: ViewportModelState): void;
    /**
     * Emits a notification that the object has changed.
     * @function
     * @name fireChanged
     * @memberof ClassName
     * @instance
     * @returns {void}
     */
    fireChanged(): void;
    get xStart(): Unit;
    set xStart(value: Unit);
    get xEnd(): Unit;
    set xEnd(value: Unit);
    get yStart(): Unit;
    set yStart(value: Unit);
    get yEnd(): Unit;
    set yEnd(value: Unit);
    get zoomX(): Zoom;
    set zoomX(value: Zoom);
    get zoomY(): Zoom;
    set zoomY(value: Zoom);
    get inverseY(): boolean;
    set inverseY(value: boolean);
    /**
     * Checks if the viewport is valid.
     *
     * @returns {boolean} - Returns true if the viewport is valid, false otherwise.
     */
    isViewportValid(): boolean;
}
export declare const compareStates: (a: ViewportModelState, b: ViewportModelState) => boolean;
