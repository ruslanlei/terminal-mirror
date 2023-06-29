/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable } from 'rxjs';
import { CanvasBoundsContainer } from '../../../canvas/canvas-bounds-container';
import { FullChartConfig, YAxisLabelMode } from '../../../chart.config';
import { ChartBaseElement } from '../../../model/chart-base-element';
import { CanvasModel } from '../../../model/canvas.model';
import EventBus from '../../../events/event-bus';
import { Unit } from '../../../model/scaling/viewport.model';
import { ChartModel } from '../../chart/chart.model';
import { YAxisLabelDrawConfig } from '../y-axis-labels.drawer';
import { Bounds } from '../../../model/bounds.model';
export type YAxisVisualLabelType = 'badge' | 'rectangle' | 'plain';
export interface VisualYAxisLabel extends YAxisLabelDrawConfig {
    y: Unit;
    labelText: string;
    mode?: YAxisLabelMode;
    labelType?: YAxisVisualLabelType;
    lineY?: number;
    labelWeight?: number;
    description?: string;
    subGroupId?: number;
}
export interface LabelGroup {
    labels: VisualYAxisLabel[];
    bounds?: Bounds;
}
export type ProviderGroups = Record<string, YAxisLabelsProvider[]>;
export declare const LabelsGroups: {
    readonly MAIN: "MAIN";
};
/**
 * Different labels on Y axis:
 * - last candle price
 * - bid/ask
 * - countdown
 * - prev.day price
 * - high low in viewport
 * - drawings
 * - studies
 * - ...
 * Anything but the base labels which are generated in other component {@link YAxisBaseLabelsModel}
 */
export declare class YAxisLabelsModel extends ChartBaseElement {
    eventBus: EventBus;
    private chartModel;
    private canvasBoundsContainer;
    private config;
    private canvasModel;
    private updateYAxisWidth;
    orderedLabels: LabelGroup[];
    /**
     * an easier way to manage custom y-axis labels, than y-axis labels providers, but doesn't support overlapping avoidance
     */
    readonly customLabels: Record<string, VisualYAxisLabel>;
    private labelsProviders;
    private labelsPositionRecalculatedSubject;
    private animFrameId;
    constructor(eventBus: EventBus, chartModel: ChartModel, canvasBoundsContainer: CanvasBoundsContainer, config: FullChartConfig, canvasModel: CanvasModel, updateYAxisWidth: () => void);
    /**
     * This method is used to activate the chart and subscribe to the observables that will trigger the update of the labels.
     * It calls the parent method doActivate() and adds a new Rx subscription to the merge of the following observables:
     * - chartModel.observeCandlesChanged()
     * - canvasBoundsContainer.observeBoundsChanged(CanvasElement.CHART)
     * - chartModel.nextCandleTimeStampSubject
     * - canvasBoundsContainer.barResizerChangedSubject
     * - chartModel.scaleModel.changed
     * When any of these observables emit a new value, the updateLabels() method is called.
     * @protected
     */
    protected doActivate(): void;
    /**
     * Initializes the model by calling the methods to initialize the label groups and recalculate the labels.
     * Then, it fires the draw event on the canvas model.
     * @private
     */
    private initModel;
    /**
     * Initializes the labels groups.
     * If there are labels providers, it creates a group for each one and adds the providers to their respective groups.
     * @returns {void}
     */
    private initLabelsGroups;
    /**
     * Updates YAxis ordered labels.
     * @param adjustYAxisWidth - provide "true", if you need to adjust width after new labels will be calculated.
     */
    updateLabels(adjustYAxisWidth?: boolean): void;
    /**
     * Recalculates the labels based on the current configuration and label providers.
     * It generates label groups and calculates their coordinates based on their weight and the label height.
     * The coordinates are generated in the order they were passed to the generator.
     * The ordered labels are then updated with the new coordinates and reversed.
     * @returns {void}
     */
    recalculateLabels(): void;
    /**
     * Creates a new group with the given name if it doesn't exist yet.
     * @param {string} groupName - The name of the group to be created.
     * @returns {void}
     */
    private createGroup;
    /**
     * Adds a YAxisLabelsProvider component to a group.
     *
     * @param {YAxisLabelsProvider} component - The component to add to the group.
     * @param {string} groupName - The name of the group to add the component to.
     * @param {string} id - The id of the component to add to the group.
     * @returns {void}
     */
    private addToGroup;
    /**
     * Updates the coordinates of the labels in a LabelGroup object based on an array of points.
     * @param {LabelGroup} labels - The LabelGroup object containing the labels to be updated.
     * @param {number[]} points - An array of points to be used to update the y-coordinate of each label.
     * @returns {LabelGroup} - A new LabelGroup object with updated label coordinates.
     */
    private updateLabelsCoordinates;
    /**
     * Returns an Observable that emits a void value whenever the labels position is recalculated.
     * The Observable is created from the labelsPositionRecalculatedSubject Subject.
     * @returns {Observable<void>} An Observable that emits a void value whenever the labels position is recalculated.
     */
    observeLabelsPositionsRecalculated(): Observable<void>;
    /**
     * Registers a Y axis labels provider for a given group name and ID.
     *
     * @param {string} groupName - The name of the group to which the provider belongs.
     * @param {YAxisLabelsProvider} provider - The provider to be registered.
     * @param {string} id - The ID of the provider to be registered.
     * @returns {void}
     */
    registerYAxisLabelsProvider(groupName: string, provider: YAxisLabelsProvider, id: string): void;
    /**
     * Unregisters a Y axis labels provider.
     *
     * @param {string} groupName - The name of the group to which the provider belongs.
     * @param {string} id - The ID of the provider to unregister.
     *
     * @returns {void}
     */
    unregisterYAxisLabelsProvider(groupName: string, id: string): void;
}
/**
 * YAxisLabelsProvider interface used to write price labels providers
 * for YAxisLabelsModel.
 * Under the hood, YAxisLabelsModel calls Provider.getUnorderedLabels method
 * on each provider, and generates Y coordinates for each label
 * according to non-overlapping condition
 * Then, with the info which was got from the Providers and Y coordinates
 * follows the draw cycle of labels
 */
export interface YAxisLabelsProvider {
    readonly getUnorderedLabels: () => LabelGroup[];
}
