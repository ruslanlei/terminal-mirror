/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../chart.config';
import { ChartModel } from '../chart/chart.model';
import { CanvasModel } from '../../model/canvas.model';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { Drawer } from '../../drawers/drawing-manager';
import { DateTimeFormatterFactory } from '../../model/date-time.formatter';
export declare class NavigationMapDrawer implements Drawer {
    private config;
    private chartModel;
    private canvasModel;
    private canvasBoundsContainer;
    private formatterFactory;
    private visualCandlesProvider;
    constructor(config: FullChartConfig, chartModel: ChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, formatterFactory: DateTimeFormatterFactory, visualCandlesProvider: () => Array<[number, number]>);
    /**
     * Draws the navigation map on the canvas if it is visible in the configuration.
     * It first gets the bounds of all the necessary elements on the canvas.
     * Then it fills the background of the navigation map with the configured color.
     * Draws a line at the top of the navigation map with the configured color.
     * Draws the left and right arrow buttons if their width is not zero.
     * Draws the chart with the configured colors and fills it with a gradient if the gradient colors are configured.
     * Draws the slider with the left and right knots and the slider window.
     * Draws the time labels.
     * @returns {void}
     */
    draw(): void;
    /**
     * Moves the left knot and the slider to the right of the left arrow button if the left knot is to the left of the button.
     * @param {Bounds} knotL - The bounds of the left knot.
     * @param {Bounds} knotR - The bounds of the right knot.
     * @param {Bounds} btnL - The bounds of the left arrow button.
     * @param {Bounds} slider - The bounds of the slider.
     */
    private blockDrawSliderOnLeftArrow;
    /**
     * Draws a slider on a canvas context with given bounds for knots, button and slider.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {Bounds} knotL - The bounds for the left knot.
     * @param {Bounds} knotR - The bounds for the right knot.
     * @param {Bounds} btnL - The bounds for the left button.
     * @param {Bounds} slider - The bounds for the slider.
     * @returns {void}
     */
    private drawSlider;
    /**
     * Draws a left arrow button on a canvas context with the provided bounds and configuration
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on
     * @param {Bounds} bounds - The bounds of the button to be drawn
     * @param {FullChartConfig} config - The configuration object containing the colors to be used for the button and arrow
     * @returns {void}
     */
    private drawLeftArrowButton;
    /**
     * Draws a right arrow button on a canvas context with the provided bounds and configuration
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on
     * @param {Bounds} bounds - The bounds of the button to be drawn
     * @param {FullChartConfig} config - The configuration object containing the colors to be used for the button and arrow
     * @returns {void}
     */
    private drawRightArrowButton;
    /**
     * Draws a knot button on a canvas context with the given bounds and configuration.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {Bounds} bounds - The bounds of the knot button.
     * @param {FullChartConfig} config - The configuration for the chart.
     * @param {boolean} isLeft - Whether the knot button is on the left side of the chart.
     * @returns {void}
     */
    private drawKnotButton;
    /**
     * Draws time labels on the navigation map canvas.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context for the canvas.
     * @returns {void}
     */
    private drawTimeLabels;
    /**
     * Draws a time label on a canvas context.
     * @private
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {Bounds} bounds - The bounds of the label.
     * @param {number} timestamp - The timestamp to display.
     * @param {NMapTimeLabelProperties} config - The configuration for the label.
     * @returns {void}
     */
    private drawTimeLabel;
    /**
     * Returns an array of string containing the canvas ID.
     * @returns {Array<string>} An array of string containing the canvas ID.
     */
    getCanvasIds(): Array<string>;
}
