/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { DataSeriesModel } from '../../../model/data-series.model';
import { DataSeriesConfig } from '../../../model/data-series.config';
import { LabelGroup, YAxisLabelsProvider } from './y-axis-labels.model';
import { BoundsProvider } from '../../../model/bounds.model';
export declare class DataSeriesYAxisLabelsProvider implements YAxisLabelsProvider {
    private series;
    private config;
    private yAxisBoundsProvider;
    constructor(series: DataSeriesModel, config: DataSeriesConfig, yAxisBoundsProvider: BoundsProvider);
    /**
     * Returns an array of LabelGroup objects that contain VisualYAxisLabel objects.
     * The labels are unordered and are based on the last data series point or the last visual series point, depending on the configuration.
     * The labels are formatted using the series value formatter.
     * The label appearance type and draw configuration are also based on the configuration.
     * @returns {LabelGroup[]} An array of LabelGroup objects that contain VisualYAxisLabel objects.
     */
    getUnorderedLabels(): LabelGroup[];
    /**
     * Retrieves the `config` object from the `series` object and then retrieves the `paintConfig` object from the `config` object.
     * If `paintConfig` is null or undefined, it uses the `DEFAULT_DATA_SERIES_PAINT_CONFIG`. It then retrieves the `bgColor`
     * from the `paintConfig` object and calculates the `textColor` based on the `bgColor` using the `getLabelTextColorByBackgroundColor` function.
     * Finally, it returns an object with `textColor`, `bgColor`, `paddingBottom`, `paddingEnd`, and `paddingTop` properties.
     * @returns {YAxisLabelDrawConfig}
     */
    private getLabelDrawConfig;
}
