/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export type CanvasTextAlignment = 'right' | 'left';
export interface CanvasTextProperties {
    textStyle?: {
        italic?: boolean;
        bold?: boolean;
        underline?: boolean;
    };
    textSize?: string;
    textFontFamily?: string;
    textFill?: string;
    textAlign?: CanvasTextAlignment;
    rtl?: boolean;
}
/**
 * Sets the font, fill style and text alignment of a canvas context based on the provided properties.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to modify.
 * @param {CanvasTextProperties} properties - An object containing the properties to apply to the canvas context.
 * @param {string} properties.textStyle - The style of the text. Can be 'italic', 'bold' or both.
 * @param {number} properties.textSize - The size of the text in pixels.
 * @param {string} properties.textFontFamily - The font family of the text.
 * @param {string} properties.textFill - The fill style of the text.
 * @param {boolean} properties.rtl - Whether the text should be aligned to the right or to the left.
 */
export declare function prepareTextForFill(ctx: CanvasRenderingContext2D, properties: CanvasTextProperties): void;
/**
 * Calculates the line height of a text based on the font size of the provided CanvasRenderingContext2D.
 * @param {CanvasRenderingContext2D} ctx - The CanvasRenderingContext2D object used to draw the text.
 * @returns {number} The calculated line height of the text.
 */
export declare function getTextLineHeight(ctx: CanvasRenderingContext2D): number;
/**
 * Calculates text bounds [textWidth, textHeight, lineHeight]
 * @param ctx
 * @param lines
 * @param properties
 */
export declare function getTextBounds(ctx: CanvasRenderingContext2D, lines: string[], properties: CanvasTextProperties): [number, number, number];
/**
 * Splits multiline text to array of lines
 * @param text
 */
export declare function getTextLines(text: string): string[];
/**
 * Draws multiple lines of text on a canvas context at a given position.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {string[]} lines - An array of strings representing the lines of text to draw.
 * @param {number} x - The x-coordinate of the starting position of the text.
 * @param {number} y - The y-coordinate of the starting position of the text.
 * @param {CanvasTextProperties} properties - An object containing properties for the text, such as font size, style, and alignment.
 * @returns {void}
 
*/
export declare function drawText(ctx: CanvasRenderingContext2D, lines: string[], x: number, y: number, properties: CanvasTextProperties): void;
/**
 * Draws an underline below the given text on a canvas context.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {string} text - The text to underline.
 * @param {number} x - The x-coordinate of the starting point of the text.
 * @param {number} y - The y-coordinate of the starting point of the text.
 * @param {string} color - The color of the underline.
 * @param {string} textSize - The size of the text in pixels.
 */
export declare function underlineText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color: string, textSize: string): void;
/**
 * Returns a string with the font size in pixels.
 *
 * @param {number} fontSize - The font size in points.
 * @returns {string} The font size in pixels as a string.
 */
export declare function getFontSizeInPx(fontSize: number): string;
