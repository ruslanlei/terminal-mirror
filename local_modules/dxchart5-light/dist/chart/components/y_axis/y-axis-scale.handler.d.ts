/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subject } from 'rxjs';
import { CanvasBoundsContainer, HitBoundsTest } from '../../canvas/canvas-bounds-container';
import { ChartConfigComponentsYAxis } from '../../chart.config';
import EventBus from '../../events/event-bus';
import { ChartBaseElement } from '../../model/chart-base-element';
import { CanvasInputListenerComponent } from '../../inputlisteners/canvas-input-listener.component';
import { Pixel, Unit, ViewportModel } from '../../model/scaling/viewport.model';
import { ChartPanComponent } from '../pan/chart-pan.component';
/**
 * Handles the mouse drag on Y axis - to zoom the viewport vertically.
 * @doc-tags scaling,zoom,viewport
 */
export declare class YAxisScaleHandler extends ChartBaseElement {
    private bus;
    private viewportModel;
    private canvasBoundsContainer;
    private autoScaleCallback;
    yAxisDragEndSubject: Subject<void>;
    lastYStart: Unit;
    lastYEnd: Unit;
    lastYHeight: Unit;
    lastYPxHeight: Pixel;
    constructor(bus: EventBus, config: ChartConfigComponentsYAxis, chartPanComponent: ChartPanComponent, viewportModel: ViewportModel, canvasInputListener: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer, hitTest: HitBoundsTest, autoScaleCallback: (auto: boolean) => void);
    private onYDragStart;
    private onYDragTick;
    private onYDragEnd;
}
