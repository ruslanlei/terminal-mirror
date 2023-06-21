/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ValidatedChartElements } from './chart-elements';
import { FullChartConfig } from '../chart.config';
/**
 * Creates a default layout template for a canvas chart.
 * @function
 * @returns {HTMLTemplateElement} - The default layout template for a canvas chart.
 */
export declare function createDefaultLayoutTemplate(config: FullChartConfig): HTMLTemplateElement;
/**
 * Extracts chart elements from a given container and returns them as a validated object.
 * @param {Element} container - The container element to search for chart elements.
 * @returns {ValidatedChartElements} - An object containing the chart elements as properties.
 * @throws {Error} - If some chart elements are missing.
 */
export declare function extractElements(container: Element): ValidatedChartElements;
