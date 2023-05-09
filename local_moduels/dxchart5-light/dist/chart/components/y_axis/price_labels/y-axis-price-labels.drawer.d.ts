/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Bounds } from '../../../../common/common-types';
import { CanvasBoundsContainer } from '../../../canvas/canvas-bounds-container';
import { ChartConfigComponentsYAxis, FullChartColors } from '../../../chart.config';
import { CanvasModel } from '../../../drawers/canvas.model';
import { Drawer } from '../../../drawers/drawing-manager';
import { LabelGroup, VisualYAxisLabel } from './y-axis-labels.model';
export declare class YAxisPriceLabelsDrawer implements Drawer {
    private labelsProvider;
    private yAxisLabelsCanvasModel;
    private yAxisState;
    private canvasBoundsContainer;
    private yAxisColors;
    private readonly customLabels;
    constructor(labelsProvider: () => LabelGroup[], yAxisLabelsCanvasModel: CanvasModel, yAxisState: ChartConfigComponentsYAxis, canvasBoundsContainer: CanvasBoundsContainer, yAxisColors: FullChartColors['yAxis'], customLabels: Record<string, VisualYAxisLabel>);
    draw(): void;
    drawHighlightedBackgroundBetweenLabels(bounds: Bounds): void;
    getCanvasIds(): Array<string>;
}
