/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { NumericAxisLabel, NumericAxisLabelsGenerator } from '../labels_generator/numeric-axis-labels.generator';
import { CanvasBoundsContainer } from '../../canvas/canvas-bounds-container';
import { ChartBaseElement } from '../../model/chart-base-element';
import { ScaleModel } from '../../model/scale.model';
export declare class YAxisBaseLabelsModel extends ChartBaseElement {
    private scaleModel;
    private yAxisLabelsGenerator;
    private canvasBoundsContainer;
    private updateYAxisWidth;
    labels: Array<NumericAxisLabel>;
    private prevYAxisHeight;
    private animFrameId;
    constructor(scaleModel: ScaleModel, yAxisLabelsGenerator: NumericAxisLabelsGenerator, canvasBoundsContainer: CanvasBoundsContainer, updateYAxisWidth: () => void);
    /**
     * This method is used to activate the component. It calls the parent's doActivate method and subscribes to the merge of two observables:
     * - this.scaleModel.yChanged
     * - this.canvasBoundsContainer.observeBoundsChanged
     * The merge of these two observables is used to update the labels of the component when either the y-axis scale model changes or the canvas bounds change.
     * If the height of the canvas bounds changes by more than 1.5 times the previous height, the labels cache is invalidated and the previous y-axis height is updated.
     */
    protected doActivate(): void;
    /**
     * Updates the labels of the chart's y-axis by generating new numeric labels using the yAxisLabelsGenerator object.
     * Then, it calls the updateYAxisWidth method to update the width of the y-axis.
     */
    updateLabels(): void;
}
