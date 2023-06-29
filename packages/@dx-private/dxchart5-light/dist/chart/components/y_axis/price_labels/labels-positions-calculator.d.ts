/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export interface FormattedYCoordinate {
    bottom: number;
    top: number;
    labelWeight: number;
    actualIndex: number;
}
export interface PositionAndWeight {
    y: number;
    weight: number;
}
export interface BoundsForLabelsCalculator {
    top: number;
    bottom: number;
}
/**
 * Calculates the Y coordinates for the labels of a chart based on the provided points and label height.
 * @param {PositionAndWeight[]} points - An array of objects containing the position and weight of each point.
 * @param {number} labelHeight - The height of the label.
 * @returns {number[]} An array of Y coordinates for the labels.
 * @doc-tags tricky
 */
export declare function calcLabelsYCoordinates(points: PositionAndWeight[], labelHeight: number): number[];
