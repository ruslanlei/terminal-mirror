/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { CanvasModel } from '../../model/canvas.model';
import { DataSeriesModel } from '../../model/data-series.model';
import { HitTestSubscriber } from '../../model/hit-test-canvas.model';
import { PaneComponent } from './pane.component';
export declare class PaneHitTestController implements HitTestSubscriber<DataSeriesModel> {
    private readonly paneComponents;
    private canvasModel;
    private dataSeriesIdCounter;
    constructor(paneComponents: Record<string, PaneComponent>, canvasModel: CanvasModel);
    getNewDataSeriesHitTestId: () => number;
    /**
     * Returns an array with two numbers representing the range of IDs for data series.
     * @returns {Array<number>} An array with two numbers representing the range of IDs for data series.
     */
    getIdRange(): [number, number];
    get allDataSeries(): DataSeriesModel[];
    /**
     * Looks up a data series by its ID.
     *
     * @param {number} id - The ID of the data series to look up.
     * @returns {DataSeriesModel | undefined} - The data series with the given ID, or undefined if it does not exist.
     */
    lookup(id: number): DataSeriesModel | undefined;
    /**
     * Changes the hovered property of all data series to true if their id matches the id of the provided model.
     * @param {DataSeriesModel | null} model - The model to compare the id with.
     * @returns {void}
     */
    onHover(model: DataSeriesModel | null): void;
}
