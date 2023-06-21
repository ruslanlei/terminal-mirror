/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { BehaviorSubject } from 'rxjs';
import { ChartBaseElement } from '../../model/chart-base-element';
import { ScaleModel } from '../../model/scale.model';
import { HighLowProvider } from '../../model/scaling/auto-scale.model';
import { ChartComponent } from '../chart/chart.component';
export declare class VolumesModel extends ChartBaseElement {
    private chartComponent;
    private scaleModel;
    volumeMax: BehaviorSubject<number>;
    highLowProvider: HighLowProvider;
    constructor(chartComponent: ChartComponent, scaleModel: ScaleModel);
    protected doActivate(): void;
    /**
     * Used for optimization when we have to update only the last candle
     * Doesn't work for line chart types
     * @doc-tags tricky
     */
    private recalculateLastVisualVolume;
    /**
     * Updates the maximum volume value of the chart.
     * @function
     * @name updateVolumeMax
     * @memberof ChartComponent
     * @returns {void}
     */
    updateVolumeMax(): void;
}
