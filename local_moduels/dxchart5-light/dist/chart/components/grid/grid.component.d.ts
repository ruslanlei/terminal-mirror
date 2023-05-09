/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { NumericAxisLabel } from '../../../common/numeric-axis-labels.generator';
import { BoundsProvider } from '../../../common/common-types';
import { FullChartConfig } from '../../chart.config';
import { ChartBaseElement } from '../../chart-base-element';
import { CanvasModel } from '../../drawers/canvas.model';
import { CompositeDrawer } from '../../drawers/composite.drawer';
import { DrawingManager } from '../../drawers/drawing-manager';
import { Unit, ViewportModel } from '../../model/scaling/viewport.model';
export declare class GridComponent extends ChartBaseElement {
    private drawerName;
    private drawingManager;
    private readonly drawer;
    constructor(canvasModel: CanvasModel, viewportModel: ViewportModel, config: FullChartConfig, drawerName: string, drawingManager: DrawingManager | CompositeDrawer, xBoundsProvider: BoundsProvider, yBoundsProvider: BoundsProvider, xLabelsProvider: () => NumericAxisLabel[], yLabelsProvider: () => NumericAxisLabel[], getBaseLine?: () => Unit, drawPredicate?: () => boolean);
    /**
     * This method is used to deactivate the drawer and remove it from the drawing manager.
     * @protected
     * @function
     * @name doDeactivate
     * @returns {void}
     */
    protected doDeactivate(): void;
    /**
     * This method is used to activate the drawer. It calls the parent class's doActivate method and adds the drawer to the drawing manager.
     * @protected
     * @function
     * @returns {void}
     */
    protected doActivate(): void;
}
