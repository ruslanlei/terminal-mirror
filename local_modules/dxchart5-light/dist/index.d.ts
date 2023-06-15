/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import ChartBootstrap from './chart/bootstrap';
import { PartialChartConfig } from './chart/chart.config';
declare const createChart: (el: HTMLElement, config?: PartialChartConfig) => ChartBootstrap;
export { createChart, ChartBootstrap };
