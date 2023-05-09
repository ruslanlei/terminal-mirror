/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds } from '../../../common/common-types';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CustomIcon, FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../drawers/canvas.model';
import { Drawer } from '../../drawers/drawing-manager';
import { DateTimeFormatter } from '../../time.formatter';
import { ChartModel } from '../chart/chart.model';
import { Event, EventsModel, EventType, EventWithId } from './events.model';
export declare class EventsDrawer implements Drawer {
    private backgroundCanvas;
    private canvasModel;
    private chartModel;
    private config;
    private canvasBoundsContainer;
    private model;
    private formatterProvider;
    private customIcons;
    constructor(backgroundCanvas: CanvasModel, canvasModel: CanvasModel, chartModel: ChartModel, config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer, model: EventsModel, formatterProvider: () => DateTimeFormatter);
    /**
     * Creates a custom icon for a given event type.
     * @param {EventType} type - The type of the event.
     * @param {CustomIcon} [icon] - The custom icon object containing the normal and hover images.
     * @returns {void}
     */
    createCustomIcon(type: EventType, icon?: CustomIcon): void;
    /**
     * Creates an icon image from a string containing SVG data.
     * @param {string} iconString - The string containing SVG data.
     * @returns {Object} An object containing an Image object and the height of the SVG element.
     */
    createIconImage(iconString: string): {
        img: HTMLImageElement;
        svgHeight: number;
    };
    /**
     * Draws events on the chart canvas if they are visible according to the configuration.
     * The events are filtered by type and then iterated over to draw them on the chart.
     * If a custom icon is available in the cache, it is used to draw the event, otherwise a default event is drawn.
     * If the event is currently being hovered over, a vertical line is drawn and a label is added to the x-axis.
     * @returns {void}
     */
    draw(): void;
    /**
     * Draws a custom SVG event on a canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {number} x - The x coordinate of the event.
     * @param {Bounds} bounds - The bounds of the event.
     * @param {EventWithId} event - The event to draw.
     * @returns {void}
     */
    drawCustomSvgEvent(ctx: CanvasRenderingContext2D, x: number, bounds: Bounds, event: EventWithId): void;
    /**
     * Draws a default event on a canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @param {number} x - The x coordinate of the event.
     * @param {Bounds} bounds - The bounds of the event.
     * @param {EventWithId} event - The event to draw.
     * @param {string} color - The color of the event.
     * @returns {void}
     */
    drawDefaultEvent(ctx: CanvasRenderingContext2D, x: number, bounds: Bounds, event: EventWithId, color: string): void;
    /**
     * This function is responsible for drawing a label on the canvas at a given x coordinate. The label contains a formatted timestamp of a given event. The function takes two parameters: x, which is the x coordinate where the label will be drawn, and event, which is an object containing information about the event, including its timestamp and type.
     * The function first gets the canvas context and the bounds of the x-axis. It then retrieves the font family, font height, and top padding from the configuration object. The y coordinate of the label is calculated based on the font height, top padding, and the y coordinate of the x-axis bounds. The font is set using the retrieved font family and font height.
     * The timestamp of the event is formatted using a formatter provider function. The width of the label is calculated using the canvas context's measureText() method. The function then calls another function, redrawBackgroundArea(), to hide the regular x-axis label that may overlap with the event label.
     * Finally, the function sets the fill style of the canvas context to the color associated with the event type in the configuration object. The label text is then drawn on the canvas context at the calculated x and y coordinates.
     */
    drawLabel(x: number, event: EventWithId): void;
    /**
     * Returns an array of canvas IDs.
     *
     * @returns {Array<string>} An array containing the ID of the canvas model.
     */
    getCanvasIds(): Array<string>;
}
/**
 * Returns the size of an event based on its style
 * @param {Event} event - The event to get the size of
 * @returns {number} - The size of the event
 
*/
export declare function getEventSize(event: Event): number;
