/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Observable } from 'rxjs/internal/Observable';
import { ChartBaseElement } from '../../chart-base-element';
import { ChartModel } from '../chart/chart.model';
export type HighlightTextPlacement = 'left-left' | 'left-right' | 'right-left' | 'right-right';
export declare const HIGHLIGHTS_TYPES: readonly ["AFTER_MARKET", "PRE_MARKET", "NO_TRADING", "REGULAR"];
export type HighlightType = typeof HIGHLIGHTS_TYPES[number];
export type VisualHighlights = Partial<Record<HighlightType, Highlight[]>>;
export interface Highlight {
    type: HighlightType;
    from: number;
    to: number;
    border?: HighlightBorder;
    label?: {
        text?: string;
        placement?: HighlightTextPlacement;
    };
}
export interface HighlightBorder {
    right?: boolean;
    left?: boolean;
}
export declare class HighlightsModel extends ChartBaseElement {
    private chartModel;
    private highlights;
    private visualHighlights;
    private highlightsUpdatedSubject;
    constructor(chartModel: ChartModel);
    /**
     * Activates the chart by subscribing to the xChanged event of the scaleModel.
     * If there are highlights, it recalculates the visual highlights.
     */
    activate(): void;
    /**
     * Returns an array of Highlight objects.
     * @returns {Highlight[]} - An array of Highlight objects.
     */
    getHighlights(): Highlight[];
    /**
     * Returns the visual highlights object.
     *
     * @returns {VisualHighlights} The visual highlights object.
     */
    getVisualHighlights(): VisualHighlights;
    /**
     * Recalculates the visual highlights based on the current chart model and highlights.
     * @private
     * @returns {void}
     */
    private recalculateVisualHighlights;
    /**
     * Sets the highlights of the component and updates the visual highlights accordingly.
     * @param {Highlight[]} highlights - An array of Highlight objects to be set as the new highlights.
     * @returns {void}
     */
    setHighlights(highlights: Highlight[]): void;
    /**
     * Returns an Observable that emits an array of Highlight objects whenever the highlightsUpdatedSubject emits a new value.
     * @returns {Observable<Highlight[]>} An Observable that emits an array of Highlight objects.
     */
    observeHighlightsUpdated(): Observable<Highlight[]>;
}
