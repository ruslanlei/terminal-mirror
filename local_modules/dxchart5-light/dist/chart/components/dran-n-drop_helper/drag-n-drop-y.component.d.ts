/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { HitBoundsTest } from '../../canvas/canvas-bounds-container';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { ChartPanComponent } from '../pan/chart-pan.component';
import { DragComponentOptions, DragNDropComponent, DragNDropComponentCallbacks } from './drag-n-drop.component';
export declare class DragNDropYComponent extends DragNDropComponent {
    constructor(hitTest: HitBoundsTest, dragCallbacks: DragNDropComponentCallbacks, canvasInputListener: CanvasInputListenerComponent, chartPanComponent: ChartPanComponent, dragComponentOptions?: DragComponentOptions);
    /**
     * This method activates the component and adds subscriptions to the canvasInputListener.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * This method overrides the doDeactivate method of the parent class and calls the parent method before executing its own code.
     * It is a protected method, which means it can only be accessed within the class and its subclasses.
     */
    protected doDeactivate(): void;
}
