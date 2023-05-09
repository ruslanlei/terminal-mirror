/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartBaseElement } from '../../chart-base-element';
import EventBus from '../../event-bus';
import { LabelAlign } from './x-axis-draw.functions';
export interface XAxisLabel {
    text: string;
    x: number;
    color: string;
    alignType?: LabelAlign;
    subGroupId?: number;
}
/***
 * If you want to define a new Labels Provider for X Axis, you must extend this interface.
 */
export interface XAxisLabelsProvider {
    readonly getUnorderedLabels: () => XAxisLabel[];
}
/**
 * Custom labels on X axis.
 */
export declare class XAxisLabelsModel extends ChartBaseElement {
    eventBus: EventBus;
    readonly labelProviders: XAxisLabelsProvider[];
    labels: XAxisLabel[];
    constructor(eventBus: EventBus, labelProviders: XAxisLabelsProvider[]);
    /**
     * Initializes the model by recalculating the labels.
     */
    private initModel;
    /**
     * Recalculates the labels by clearing the existing labels and adding new labels from the label providers.
     * @returns {void}
     */
    recalculateLabels(): void;
}
