/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { YAxisAlign } from '../chart.config';
/**
 * Draws a rounded rectangle on a canvas context
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on
 * @param {number} x - The x-coordinate of the top-left corner of the rectangle
 * @param {number} y - The y-coordinate of the top-left corner of the rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @param {number} [radius=4] - The radius of the corners of the rectangle
 * @param {boolean} [fill=true] - Whether or not to fill the rectangle
 * @param {boolean} [stroke=false] - Whether or not to stroke the rectangle
 */
export declare function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius?: number, fill?: boolean, stroke?: boolean): void;
/**
 * Draws a price label on a canvas context.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {number} x0 - The x-coordinate of the starting point of the label.
 * @param {number} y0 - The y-coordinate of the starting point of the label.
 * @param {number} x1 - The x-coordinate of the middle point of the label.
 * @param {number} y1 - The y-coordinate of the middle point of the label.
 * @param {number} x2 - The x-coordinate of the ending point of the label.
 * @param {number} y2 - The y-coordinate of the ending point of the label.
 * @param {number} _width - The width of the label.
 * @param {boolean} rounded - Whether the label should have rounded corners.
 * @param {string} align - The alignment of the label on the y-axis. Can be 'left' or 'right'.
 * @param {number} radius - The radius of the rounded corners of the label.
 * @param {boolean} fill - Whether the label should be filled with color.
 * @param {boolean} stroke - Whether the label should have a stroke.
 */
export declare function drawPriceLabel(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, _width: number, rounded: boolean, align: YAxisAlign, radius?: number, fill?: boolean, stroke?: boolean): void;
/**
 * Draws a line on a canvas context with the specified thickness.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {number} x0 - The x-coordinate of the starting point of the line.
 * @param {number} y0 - The y-coordinate of the starting point of the line.
 * @param {number} x1 - The x-coordinate of the ending point of the line.
 * @param {number} y1 - The y-coordinate of the ending point of the line.
 * @param {number} [thickness=1] - The thickness of the line. Default is 1.
 *
 * @returns {void}
 */
export declare function drawLine(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, thickness?: number): void;
/**
 * Try to avoid anti-aliasing
 */
export declare function avoidAntialiasing(ctx: CanvasRenderingContext2D, draw: () => void): void;
/**
 * Draws a filled rectangle on a canvas context.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {{x: number, y: number}} a - The first point of the rectangle.
 * @param {{x: number, y: number}} b - The second point of the rectangle.
 * @returns {void}
 
*/
export declare function fillRect(ctx: CanvasRenderingContext2D, a: {
    x: number;
    y: number;
}, b: {
    x: number;
    y: number;
}): void;
