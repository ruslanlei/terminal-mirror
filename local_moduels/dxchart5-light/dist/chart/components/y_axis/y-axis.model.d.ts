/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { ChartConfigComponentsYAxis, FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../drawers/canvas.model';
import EventBus from '../../event-bus';
import { ChartBaseElement } from '../../chart-base-element';
import { ScaleModel } from '../../model/scale.model';
import { ChartModel } from '../chart/chart.model';
import { NumericYAxisLabelsGenerator } from './numeric-y-axis-labels.generator';
import { YAxisLabelsModel } from './price_labels/y-axis-labels.model';
import { YAxisBaseLabelsModel } from './y-axis-base-labels.model';
import { PaneComponent } from '../pane/pane.component';
import { PaneManager } from '../pane/pane-manager.component';
export interface YAxisWidthContributor {
    getLargestLabel: () => string;
}
export declare class YAxisModel extends ChartBaseElement {
    private config;
    private canvasBoundsContainer;
    private canvasModel;
    private chartModel;
    yAxisLabelsGenerator: NumericYAxisLabelsGenerator;
    yAxisBaseLabelsModel: YAxisBaseLabelsModel;
    yAxisLabelsModel: YAxisLabelsModel;
    yAxisWidthContributors: YAxisWidthContributor[];
    constructor(paneManager: PaneManager, paneComponent: PaneComponent, eventBus: EventBus, config: FullChartConfig, canvasBoundsContainer: CanvasBoundsContainer, canvasModel: CanvasModel, chartModel: ChartModel, scaleModel: ScaleModel);
    /**
     * This method is used to activate the chart and auto-adjust the width of the Y axis depending on data.
     * It subscribes to the candlesSetSubject and invalidates the labelsCache of yAxisLabelsGenerator, updates the labels of yAxisLabelsModel and yAxisBaseLabelsModel, and fires the draw event of canvasModel.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Calculates the width of a given text using the font from the yAxis component of the chart configuration
     * @param {string} text - The text to calculate the width of
     * @returns {number} - The width of the text in pixels
     */
    private getTextWidth;
    /**
     * Registers a YAxisWidthContributor to the chart.
     *
     * @param {YAxisWidthContributor} contributor - The YAxisWidthContributor to be registered.
     * @returns {void}
     */
    registerYAxisWidthContributor(contributor: YAxisWidthContributor): void;
    /**
     * Updates width of Y axis.
     * Considers max text of YAxis labels.
     */
    updateYAxisWidth(): void;
}
export declare const getFontFromConfig: (config: ChartConfigComponentsYAxis) => string;
