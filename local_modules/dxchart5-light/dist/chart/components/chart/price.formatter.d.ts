/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { DataSeriesModel } from '../../model/data-series.model';
import { Unit } from '../../model/scaling/viewport.model';
import { PaneComponent, PaneFormatters } from '../pane/pane.component';
import { ChartInstrument } from './chart.component';
export declare const createRegularPriceFormatter: (pane: PaneComponent) => (value: unknown) => string;
export declare const createPercentFormatter: (pane: PaneComponent) => (value: Unit, dataSeries?: DataSeriesModel) => string;
export declare const formatBond: (instrument: ChartInstrument, value: number) => undefined | string;
export declare const createPaneFormatters: (pane: PaneComponent) => PaneFormatters;
