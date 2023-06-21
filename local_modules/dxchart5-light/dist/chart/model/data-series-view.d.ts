/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { PriceAxisType } from '../components/labels_generator/numeric-axis-labels.generator';
import { DataSeriesModel } from './data-series.model';
import { ScaleModel } from './scale.model';
import { Index, Pixel, Price, Unit, Viewable } from './scaling/viewport.model';
/**
 * A class representing a view for a data series chart.
 * It contains methods to convert between price values and pixel coordinates using the selected scale model,
 * as well as between price values and units based on the selected price type and axis type.
 */
export declare class DataSeriesView implements Viewable {
    private dataSeries;
    private scaleModel;
    private getAxisType;
    private getBaseLine;
    private percentAnimationHandler;
    constructor(dataSeries: DataSeriesModel, scaleModel: ScaleModel, getAxisType: () => PriceAxisType, getBaseLine: (idx?: Index) => Unit);
    /**
     * Convert the input value to its corresponding y-pixel coordinate based on the selected price type and scale model.
     * @param value - The value to be converted to y-pixel coordinate.
     * @returns - The converted value in y-pixel coordinate.
     */
    toY: (value: Price) => Pixel;
    /**
     * Convert the input value to the corresponding unit based on the current axis type.
     * @param value - The value to be converted to unit.
     * @param getBaseLine - A function that returns the baseline for percent.
     * @returns - The converted value in the corresponding unit.
     */
    toAxisUnits(value: Price, getBaseLine?: (idx?: number | undefined) => number): Unit;
    /**
     * Convert the input unit to its corresponding x-pixel coordinate based on the scale model.
     * @param unit - The unit to be converted to x-pixel coordinate.
     * @returns - The converted value in x-pixel coordinate.
     */
    toX: (unit: Unit) => Pixel;
    xPixels: (unit: Unit) => Pixel;
    /**
     * Pay attention! This method doesn't convert price to pixels, it converts only current axis UNITs!
     * @param unit
     */
    yPixels: (unit: Unit) => Pixel;
    /**
     * Converts "y" in pixels to price
     * @param y - source value in pixels
     */
    priceFromY(y: Pixel): Price;
    /**
     * Convert the input unit to its corresponding price value based on the selected axis type.
     * @param {number} unit - The unit to be converted to price value.
     * @returns {number} - The converted value in price.
     */
    fromAxisUnits(unit: Unit): Price;
}
