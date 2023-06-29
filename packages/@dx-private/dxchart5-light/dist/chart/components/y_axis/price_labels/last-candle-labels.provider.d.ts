/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../../chart.config';
import { DataSeriesType } from '../../../model/data-series.config';
import { ChartModel, LastCandleLabelHandler } from '../../chart/chart.model';
import { LabelGroup, YAxisLabelsProvider } from './y-axis-labels.model';
import { LabelColorResolver } from '../y-axis.component';
export declare class LastCandleLabelsProvider implements YAxisLabelsProvider {
    private chartModel;
    private config;
    private lastCandleLabelsByChartType;
    private resolveLabelColorFn;
    constructor(chartModel: ChartModel, config: FullChartConfig, lastCandleLabelsByChartType: Partial<Record<DataSeriesType, LastCandleLabelHandler>>, resolveLabelColorFn: (chartType: DataSeriesType) => LabelColorResolver);
    /**
     * Returns an array of LabelGroup objects that contain the labels for the yAxis of the chart.
     * @returns {LabelGroup[]} An array of LabelGroup objects that contain the labels for the yAxis of the chart.
     */
    getUnorderedLabels(): LabelGroup[];
    /**
     * Returns the visual label for the Y axis of a candle series.
     * @param {CandleSeriesModel} series - The candle series model.
     * @returns {Omit<VisualYAxisLabel, 'bgColor'> | null} - The visual label for the Y axis or null if there is no data.
     */
    private getYAxisVisualLabel;
    /**
     * Returns the configuration object for drawing the label of the Y-axis.
     * @param {CandleSeriesModel} series - The series model for which the label configuration is to be returned.
     * @param {boolean} primary - A boolean value indicating whether the label is primary or not.
     * @returns {YAxisLabelDrawConfig} - The configuration object for drawing the label of the Y-axis.
     */
    private getLabelDrawConfig;
}
