/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import EventBus from '../events/event-bus';
import { ChartResizeHandler } from '../inputhandlers/chart-resize.handler';
export declare const HIT_TEST_PREFIX = "HIT_TEST_";
declare const drawerTypes: readonly ["MAIN_BACKGROUND", "MAIN_CLEAR", "HIT_TEST_CLEAR", "YAXIS_CLEAR", "SERIES_CLEAR", "OVER_SERIES_CLEAR", "HIT_TEST_DRAWINGS", "GRID", "VOLUMES", "UNDERLAY_VOLUMES_AREA", "X_AXIS", "Y_AXIS", "HIGH_LOW", "DRAWINGS", "DATA_SERIES", "N_MAP_CHART", "PL_CHART", "WATERMARK", "EMPTY_CHART", "OFFLINE_CHART", "LABELS", "EVENTS", "HIT_TEST_EVENTS", "ZERO_LINE", "PL_ZERO_LINE_BACKGROUND", "CROSS_TOOL"];
export type DrawerType = typeof drawerTypes[number];
/**
 * Manages the drawing process.
 * Can re-order drawers to make one be on top of the other.
 */
export declare class DrawingManager {
    private chartResizeHandler;
    private drawingOrder;
    private drawersMap;
    private readonly drawHitTestCanvas;
    private canvasIdsList;
    private animFrameId;
    constructor(eventBus: EventBus, chartResizeHandler: ChartResizeHandler);
    /**
     * Updates canvases' sizes and executes redraw without animation frame.
     * This is required for multi-chart canvas update synchronization.
     * If all canvases update in separate animation frames - we see visual lag. Instead we should do all updates and then redraw.
     * @doc-tags tricky,canvas,resize
     */
    redrawCanvasesImmediate(): void;
    drawLastBar(): void;
    forceDraw(canvasIds?: Array<string>): void;
    /**
     * Indicates whether it is possible to draw chart or not.
     * @returns {boolean} true if chart is drawable
     */
    isDrawable(): boolean;
    drawHitTestOnly(): void;
    addDrawer(drawer: Drawer, name?: string): void;
    addDrawerAfter(drawer: Drawer, newDrawerName: string, drawerToPutAfterName: string): void;
    addDrawerBefore(drawer: Drawer, newDrawerName: string, drawerToPutBeforeName: string): boolean;
    getDrawerByName(name: string): Drawer;
    getNameByDrawer(drawer: Drawer): string | undefined;
    removeDrawerByName(name: string): void;
    removeDrawer(drawer: Drawer): void;
    reorderDrawers(newOrder: string[]): void;
}
export interface Drawer {
    draw(): void;
    /**
     * Used for optimization when we have to update only the last candle
     * Doesn't work for line chart types
     * TODO rework, method should not be a part of abstract drawer, maybe Candle drawer or something like this
     * @doc-tags tricky
     */
    drawLastBar?: () => void;
    getCanvasIds(): Array<string>;
}
export declare class DynamicDrawerType {
    static paneResizer(id: string): string;
}
export {};
