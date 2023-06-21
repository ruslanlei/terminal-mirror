/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ChartBaseModel } from '../components/chart/chart-base.model';
import { ChartInstrument } from '../components/chart/chart.component';
import { CandleWidthCalculator, VisualCandleCalculator } from '../components/chart/chart.model';
import { PaneComponent } from '../components/pane/pane.component';
import EventBus from '../events/event-bus';
import { CandleSeriesColors, CandleSeriesModel } from './candle-series.model';
import { Candle } from './candle.model';
import { DataSeriesType } from './data-series.config';
import { ScaleModel } from './scale.model';
import VisualCandle from './visual-candle';
/**
 * This model represents main chart data series and is highly tied to chartBaseModel, @see ChartBaseModel
 */
export declare class MainCandleSeriesModel extends CandleSeriesModel {
    private readonly baseModel;
    constructor(baseModel: ChartBaseModel<'candle'>, paneComponent: PaneComponent, id: number, eventBus: EventBus, scaleModel: ScaleModel, instrument: ChartInstrument, candlesTransformersByChartType: Partial<Record<DataSeriesType, VisualCandleCalculator>>, candleWidthByChartType: Partial<Record<DataSeriesType, CandleWidthCalculator>>, colors: CandleSeriesColors);
    set visualPoints(candles: VisualCandle[] | VisualCandle[][]);
    get visualPoints(): VisualCandle[];
    set dataPoints(candles: Candle[] | Candle[][]);
    get dataPoints(): Candle[];
    recalculateMeanCandleWidth(visualCandles: VisualCandle[]): void;
}
