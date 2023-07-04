/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { ChartBaseElement } from '../../model/chart-base-element';
import { BarType, FullChartColors, FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../model/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import { PriceMovement } from '../../model/candle-series.model';
import { ScaleModel } from '../../model/scale.model';
import { ChartComponent } from '../chart/chart.component';
import { PaneManager } from '../pane/pane-manager.component';
import { SeparateVolumesComponent } from './separate-volumes.component';
export type VolumeColorResolver = (priceMovement: PriceMovement, colors: FullChartColors) => string;
export declare class VolumesComponent extends ChartBaseElement {
    private canvasModel;
    private canvasBoundsContainer;
    private config;
    separateVolumes: SeparateVolumesComponent;
    private volumesColorByChartTypeMap;
    constructor(canvasModel: CanvasModel, chartComponent: ChartComponent, scaleModel: ScaleModel, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager, config: FullChartConfig, paneManager: PaneManager);
    /**
     * Registers default volume color resolvers for candle, line and bar charts
     * @private
     */
    private registerDefaultVolumeColorResolvers;
    /**
     * Sets whether the volumes should be shown separately or not.
     *
     * @param {boolean} separate - A boolean value indicating whether the volumes should be shown separately or not.
     * @returns {void}
     */
    setShowVolumesSeparatly(separate: boolean): void;
    /**
     * This method deactivates the current component by calling the superclass doDeactivate method and setting the visibility of the component to false.
     * @returns {void}
     */
    protected doDeactivate(): void;
    /**
     * You can use this method to determine volumes' color for specified chart type.
     * @param chartType
     * @param resolver
     */
    registerVolumeColorResolver(chartType: BarType, resolver: VolumeColorResolver): void;
    /**
     * Sets the visibility of the volumes component and updates the canvas accordingly.
     * @param {boolean} visible - Whether the volumes component should be visible or not. Default is true.
     * @returns {void}
     */
    setVisible(visible?: boolean): void;
}
