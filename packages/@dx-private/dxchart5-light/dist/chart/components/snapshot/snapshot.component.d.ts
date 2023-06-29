/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartBaseElement } from '../../model/chart-base-element';
import { CanvasModel } from '../../model/canvas.model';
import { ValidatedChartElements } from '../../canvas/chart-elements';
/**
 * Snapshot Component.
 * Allows to copy, download and share snapshot
 */
export declare class SnapshotComponent extends ChartBaseElement {
    private elements;
    private canvasModel;
    constructor(elements: ValidatedChartElements, canvasModel: CanvasModel);
    /**
     * Implements doActivate method.
     * @protected
     * @returns {void}
     */
    protected doActivate(): void;
    /**
     * Creates a snapshot of the canvas and returns it as a Promise of Blob object.
     * @param {function} userDrawCallback - Optional callback function that takes a CanvasRenderingContext2D object
     * as a parameter and allows the user to draw on the canvas before taking the snapshot.
     * @returns {Promise<Blob>} - A Promise that resolves with a Blob object representing the snapshot of the canvas.
     * @throws {Error} - If the snapshot isn't supported, an error is thrown.
     */
    createSnapshot(userDrawCallback?: (ctx: CanvasRenderingContext2D) => void): Promise<Blob>;
}
