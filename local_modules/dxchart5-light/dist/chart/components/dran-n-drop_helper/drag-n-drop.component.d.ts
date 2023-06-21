/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { HitBoundsTest } from '../../canvas/canvas-bounds-container';
import { ChartBaseElement } from '../../model/chart-base-element';
import { CanvasInputListenerComponent, Point } from '../../inputlisteners/canvas-input-listener.component';
import { ChartPanComponent } from '../pan/chart-pan.component';
export interface DragInfo {
    delta: number;
    draggedPixels: number;
}
export interface DragComponentOptions {
    disableChartPanning: boolean;
}
export interface DragNDropComponentCallbacks {
    onDragStart?: (point: Point) => void;
    onDragTick: (dragInfo: DragInfo) => void;
    onDragEnd?: (draggedPixels: number) => void;
}
export declare const defaultDragComponentOptions: DragComponentOptions;
export declare class DragNDropComponent extends ChartBaseElement {
    protected hitTest: HitBoundsTest;
    protected dragCallbacks: DragNDropComponentCallbacks;
    protected canvasInputListener: CanvasInputListenerComponent;
    protected chartPanComponent: ChartPanComponent;
    private dragComponentOptions;
    dragging: boolean;
    draggedPixels: number;
    constructor(hitTest: HitBoundsTest, dragCallbacks: DragNDropComponentCallbacks, canvasInputListener: CanvasInputListenerComponent, chartPanComponent: ChartPanComponent, dragComponentOptions: DragComponentOptions);
    /**
     * Calls the parent class's doActivate method and performs any additional activation logic.
     * This method is protected and can only be accessed by the class itself and its subclasses.
     */
    protected doActivate(): void;
    /**
     * This method overrides the doDeactivate method of the parent class and calls it using the super keyword.
     * It is a protected method that can only be accessed within the class and its subclasses.
     * This method is responsible for deactivating the current object.
     */
    protected doDeactivate(): void;
    protected onDragStart: (point: Point) => void;
    protected onDragTick: (yDelta: number) => void;
    protected onDragEnd: () => void;
}
