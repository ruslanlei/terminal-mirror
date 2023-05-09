/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartColors, FullChartConfig } from '../../chart.config';
import { CandleSeriesColors } from '../../model/candle-series.model';
import { tobject } from '../../utils';
export declare class SecondaryChartColorsPool {
    private config;
    secondaryChartColorsPool: {
        [key: string]: FullChartColors;
    };
    usedChartColors: tobject;
    constructor(config: FullChartConfig);
    /**
     * Checks if the secondaryChartColorsPool object is empty by comparing the length of its keys with the length of the usedChartColors object keys.
     * @returns {boolean} - Returns true if the secondaryChartColorsPool and usedChartColors objects length matches.
     */
    isEmpty(): boolean;
    /**
     * Creates a color pool object based on the provided color array
     * @param {SecondaryChartTheme[]} colorArray - An array of SecondaryChartTheme objects
     * @returns {Object} - An object containing a key-value pair for each color in the colorArray
     * The key is a string in the format "colorX" where X is the index of the color in the array
     * The value is an object containing the FullChartColors for the color, with lineTheme and areaTheme properties
     */
    private createColorPool;
    /**
     * Takes a color from the secondaryChartColorsPool and assigns it to a symbol.
     * @param {string} symbol - The symbol to assign the color to.
     * @returns {string} The color assigned to the symbol.
     * If the pool is empty, an error message is logged and nothing is returned.
     */
    takeColorFromPool(symbol: string): FullChartColors | undefined;
    /**
     * Adds a color to the chart color pool.
     *
     * @param {string} symbol - The symbol of the color to be added.
     *
     * @returns {void}
     */
    addColorToPool(symbol: string): void;
    /**
     * Updates the color configuration for a given symbol in the chart.
     * @param {string} symbol - The symbol for which the color configuration needs to be updated.
     * @param {CandleSeriesColors} config - The new color configuration for the symbol.
     * @returns {void}
     */
    updateColorConfig(symbol: string, config: CandleSeriesColors): void;
}
