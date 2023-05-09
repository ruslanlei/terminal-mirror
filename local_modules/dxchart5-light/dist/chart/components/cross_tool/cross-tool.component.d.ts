/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { FullChartConfig } from '../../chart.config';
import { ChartBaseElement } from '../../chart-base-element';
import EventBus from '../../event-bus';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { CanvasModel } from '../../drawers/canvas.model';
import { DrawingManager } from '../../drawers/drawing-manager';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { TimeZoneModel } from '../../model/time-zone.model';
import { ChartModel } from '../chart/chart.model';
import { PaneManager } from '../pane/pane-manager.component';
import { CrossToolTypeDrawer } from './cross-tool.drawer';
import { CrossToolModel, CrossToolType } from './cross-tool.model';
export type MagnetTarget = 'O' | 'H' | 'L' | 'C' | 'OHLC' | 'none';
/**
 * Default bundled chart cross tool.
 */
export declare class CrossToolComponent extends ChartBaseElement {
    private eventBus;
    private config;
    private chartModel;
    private crossToolCanvasModel;
    private canvasBoundsContainer;
    private drawingManager;
    private paneManager;
    readonly model: CrossToolModel;
    private readonly crossToolTypeDrawers;
    constructor(eventBus: EventBus, config: FullChartConfig, chartModel: ChartModel, crossToolCanvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, canvasInputListener: CanvasInputListenerComponent, drawingManager: DrawingManager, formatterFactory: (format: string) => (timestamp: number | Date) => string, timeZoneModel: TimeZoneModel, paneManager: PaneManager);
    /**
     * Registers default drawer types for the chart.
     * @private
     * @function
     * @name registerDefaultDrawerTypes
     *
     * @returns {void}
     */
    private registerDefaultDrawerTypes;
    /**
     * Sets the cross tool visibility.
     * @param visible
     */
    setVisible(visible: boolean): void;
    /**
     * Sets the crosstool type.
     * - cross-and-labels - both the crosshair and X/Y labels
     * - only-labels - only the X/Y label
     * - none
     * @param type
     */
    setType(type: CrossToolType): void;
    /**
     * Sets magnet target for cross tool.
     * Supported only for 'cross-and-labels' type.
     * Default magnet target is none.
     * @param target
     */
    setMagnetTarget(target: MagnetTarget): void;
    /**
     * Adds a new drawer type for cross tool, so you can add your own implementation of cross tool
     * (or override existing)
     * @param drawerName - an unique drawer type name
     * @param drawerImpl - CrossToolTypeDrawer object
     */
    registerCrossToolTypeDrawer(drawerName: CrossToolType, drawerImpl: CrossToolTypeDrawer): void;
}
