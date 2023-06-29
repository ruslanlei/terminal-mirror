/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { BarType, FullChartConfig } from '../chart.config';
import EventBus from '../events/event-bus';
import { PickedDOMRect } from '../inputhandlers/chart-resize.handler';
import { DrawingManager } from '../drawers/drawing-manager';
/**
 * The minimum supported canvas size in chart-core (in pixels).
 * Any size of <canvas> element below these dimensions will not be rendered (is NOT INTENDED to be rendered).
 * @doc-tags chart-core,canvas
 */
export declare const MIN_SUPPORTED_CANVAS_SIZE: {
    width: number;
    height: number;
};
export declare class CanvasModel {
    private eventBus;
    canvas: HTMLCanvasElement;
    drawingManager: DrawingManager;
    private resizer?;
    private readonly context;
    parent: HTMLElement;
    width: number;
    height: number;
    prevHeight: number;
    prevWidth: number;
    private readonly _canvasId;
    type: CanvasBarType;
    constructor(eventBus: EventBus, canvas: HTMLCanvasElement, drawingManager: DrawingManager, canvasModels: CanvasModel[], resizer?: HTMLElement | undefined, options?: CanvasRenderingContext2DSettings);
    /**
     * About rendering for non-integer dpi
     * https://stackoverflow.com/questions/17553557/draw-crisp-lines-on-html5-canvas-with-browser-zoom
     * @param bcr
     */
    updateDPR(bcr: PickedDOMRect | ClientRect): void;
    get canvasId(): string;
    get ctx(): CanvasRenderingContext2D;
    /**
     * Clears the canvas by using the clearRect method of the canvas context.
     * @function
     * @name clear
     * @memberof Canvas
     * @returns {void}
     */
    clear(): void;
    /**
     * Checks if the type is linked.
     *
     * @returns {boolean} Returns true if the type is linked, false otherwise.
     */
    isLinked(): boolean;
    /**
     * Triggers the 'fireDraw' event on the event bus with the canvas ID as the parameter.
     */
    fireDraw(): void;
    /**
     * Updates the width and height of the canvas element based on the client width and height of the canvas element and the height of the chart resizer element.
     * @param {HTMLCanvasElement} canvas - The canvas element to update.
     * @param {ClientRect | DOMRect} [bcr=this.getChartResizerElement().getBoundingClientRect()] - The bounding client rectangle of the chart resizer element.
     * @returns {void}
     */
    private updateCanvasWidthHeight;
    /**
     * Returns the chart resizer element. If the resizer is not defined, it returns the parent element.
     *
     * @returns {HTMLElement} The chart resizer element.
     */
    getChartResizerElement(): HTMLElement;
    /**
     * Checks if the canvas is ready to be used by verifying if its width and height are greater than the minimum supported canvas size.
     *
     * @returns {boolean} - Returns true if the canvas is ready to be used, false otherwise.
     */
    isReady(): boolean;
}
export interface CanvasBarType {
    name: string;
    linked?: boolean;
}
/**
 * Creates a new canvas model for the main chart canvas.
 *
 * @param {EventBus} eventBus - The event bus used to communicate between components.
 * @param {HTMLCanvasElement} canvas - The canvas element to create the model for.
 * @param {HTMLElement} resizer - The element used to resize the canvas.
 * @param {BarType} barType - The type of bar to use for the chart.
 * @param {FullChartConfig} config - The configuration object for the chart.
 * @param {DrawingManager} drawingManager - The drawing manager used to draw on the canvas.
 * @param {CanvasModel[]} canvasModels - An array of canvas models to add the new model to.
 *
 * @returns {CanvasModel} The newly created canvas model.
 
export function createMainCanvasModel(
    eventBus,
    canvas,
    resizer,
    barType,
    config,
    drawingManager,
    canvasModels,
) {
    const canvasModel = createCanvasModel(eventBus, canvas, config, drawingManager, canvasModels, resizer);
    // @ts-ignore
    canvasModel.type = TYPES[barType] ?? CANDLE_TYPE;
    return canvasModel;
}*/
export declare function createMainCanvasModel(eventBus: EventBus, canvas: HTMLCanvasElement, resizer: HTMLElement, barType: BarType, config: FullChartConfig, drawingManager: DrawingManager, canvasModels: CanvasModel[]): CanvasModel;
/**
 * Creates a new CanvasModel instance.
 *
 * @param {EventBus} eventBus - The event bus to use.
 * @param {HTMLCanvasElement} canvas - The canvas element to use.
 * @param {FullChartConfig} config - The configuration object for the chart.
 * @param {DrawingManager} drawingManager - The drawing manager to use.
 * @param {CanvasModel[]} canvasModels - An array of existing canvas models.
 * @param {HTMLElement} [resizer] - The element to use for resizing the canvas.
 *
 * @returns {CanvasModel} A new instance of the CanvasModel class.
 */
export declare function createCanvasModel(eventBus: EventBus, canvas: HTMLCanvasElement, config: FullChartConfig, drawingManager: DrawingManager, canvasModels: CanvasModel[], resizer?: HTMLElement): CanvasModel;
/**
 * Initializes a canvas with a given configuration.
 * @param {CanvasModel} canvasModel - The canvas model to be initialized.
 * @param {FullChartConfig} config - The configuration object for the canvas.
 * @returns {void}
 
*/
export declare function initCanvasWithConfig(canvasModel: CanvasModel, config: FullChartConfig): void;
