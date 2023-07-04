/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/**
 * Calculates the height of a symbol for a given font using a CanvasRenderingContext2D.
 * @param {string} font - The font to calculate the symbol height for.
 * @param {CanvasRenderingContext2D} ctx - The CanvasRenderingContext2D to use for the calculation.
 * @returns {number} - The height of the symbol.
 */
export declare function calculateSymbolHeight(font: string, ctx: CanvasRenderingContext2D): number;
/**
 * Calculates the width of a given text using the provided font and canvas rendering context.
 * @param {string} text - The text to calculate the width of.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to use for measuring the text width.
 * @param {string} font - The font to use for measuring the text width.
 * @returns {number} - The width of the text in pixels.
 */
export declare function calculateTextWidth(text: string, ctx: CanvasRenderingContext2D, font: string): number;
