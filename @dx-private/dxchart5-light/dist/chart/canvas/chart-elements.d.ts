/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export interface ChartElements {
    canvasArea?: HTMLElement;
    snapshotCanvas?: HTMLCanvasElement;
    backgroundCanvas?: HTMLCanvasElement;
    mainCanvas?: HTMLCanvasElement;
    dataSeriesCanvas?: HTMLCanvasElement;
    overDataSeriesCanvas?: HTMLCanvasElement;
    staticDrawingCanvas?: HTMLCanvasElement;
    dynamicDrawingCanvas?: HTMLCanvasElement;
    yAxisLabelsCanvas?: HTMLCanvasElement;
    crossToolCanvas?: HTMLCanvasElement;
    hitTestCanvas?: HTMLCanvasElement;
    chartResizer?: HTMLElement;
    chartContainer?: HTMLElement;
}
export type ValidatedChartElements = Required<ChartElements>;
export declare const validateChartElements: (els: ChartElements) => els is Required<ChartElements>;
