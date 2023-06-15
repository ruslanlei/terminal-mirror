/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartBaseElement } from '../../chart-base-element';
import { BarType, FullChartConfig } from '../../chart.config';
import { CanvasModel } from '../../drawers/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import { ScaleModel } from '../../model/scale.model';
import { Pixel, Unit } from '../../model/scaling/viewport.model';
import { ChartComponent } from '../chart/chart.component';
import { PaneManager } from '../pane/pane-manager.component';
import { VolumeColorResolver } from './volumes.component';
import { VolumesModel } from './volumes.model';
export declare class SeparateVolumesComponent extends ChartBaseElement {
    private canvasModel;
    private chartComponent;
    private drawingManager;
    private config;
    private volumesModel;
    private readonly volumesColorByChartTypeMap;
    private paneManager;
    static UUID: string;
    scaleModel: ScaleModel | undefined;
    constructor(canvasModel: CanvasModel, chartComponent: ChartComponent, drawingManager: DrawingManager, config: FullChartConfig, volumesModel: VolumesModel, volumesColorByChartTypeMap: Partial<Record<BarType, VolumeColorResolver>>, paneManager: PaneManager);
    protected doActivate(): void;
    /**
     * Activates the separate volumes feature.
     * If the pane component for separate volumes does not exist, it creates a new pane with the specified UUID and options.
     * It then sets the high-low provider for the volumes scale model and does an auto scale.
     * A new VolumesDrawer is created and added to the drawing manager with the specified parameters.
     */
    activateSeparateVolumes(): void;
    /**
     * Deactivates the separate volumes feature by removing the separate volumes pane, deleting the scale model, and removing the underlay volumes area drawer.
     */
    deactiveSeparateVolumes(): void;
    /**
     * Converts a pixel value from the Y-axis of the scale model to the corresponding data value.
     * @param {Pixel} y - The pixel value to convert.
     * @returns {Unit} - The corresponding data value.
     */
    fromY(y: Pixel): Unit;
}
